const MODEL_URL = 'https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct-GGUF/resolve/main/smollm2-360m-instruct-q4_k_m.gguf';
const RUNTIME_FILES = [
  ['runtime/wllama.worker-CDenxa0H.js', '/open/webelves/assets/wllama.worker-CDenxa0H.js'],
  ['runtime/wllama-DTxmcCWH.wasm', '/open/webelves/assets/wllama-DTxmcCWH.wasm'],
  ['runtime/wllama-JeypyGAC.wasm', '/open/webelves/assets/wllama-JeypyGAC.wasm'],
];

const enc = text => new TextEncoder().encode(text);
const u16 = n => {
  const b = new Uint8Array(2);
  new DataView(b.buffer).setUint16(0, n, true);
  return b;
};
const u32 = n => {
  const b = new Uint8Array(4);
  new DataView(b.buffer).setUint32(0, n >>> 0, true);
  return b;
};

function dosTimeDate(d = new Date()) {
  return {
    time: (d.getHours() << 11) | (d.getMinutes() << 5) | Math.floor(d.getSeconds() / 2),
    date: ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate(),
  };
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c >>> 0;
  }
  return t;
})();

function crcUpdate(crc, chunk) {
  let c = crc ^ -1;
  for (let i = 0; i < chunk.length; i++) c = CRC_TABLE[(c ^ chunk[i]) & 255] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

class MemoryWriter {
  constructor(filename) {
    this.filename = filename;
    this.parts = [];
  }
  async write(x) {
    this.parts.push(x.slice ? x.slice() : x);
  }
  async close() {
    const blob = new Blob(this.parts, { type: 'application/zip' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = this.filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  }
}

class ZipStoreWriter {
  constructor(writer) {
    this.writer = writer;
    this.offset = 0;
    this.central = [];
  }
  async write(bytes) {
    await this.writer.write(bytes);
    this.offset += bytes.length;
  }
  async writeParts(parts) {
    for (const p of parts) await this.write(p);
  }
  async addStream(path, stream, onChunk = null) {
    const name = enc(path);
    const { time, date } = dosTimeDate();
    const start = this.offset;
    await this.writeParts([
      u32(0x04034b50), u16(20), u16(0x0808), u16(0), u16(time), u16(date),
      u32(0), u32(0), u32(0), u16(name.length), u16(0), name,
    ]);
    let crc = 0;
    let size = 0;
    const reader = stream.getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = value instanceof Uint8Array ? value : new Uint8Array(value);
      crc = crcUpdate(crc, chunk);
      size += chunk.length;
      await this.write(chunk);
      onChunk?.(chunk.length, size);
    }
    await this.writeParts([u32(0x08074b50), u32(crc), u32(size), u32(size)]);
    this.central.push({ path, name, crc, size, start, time, date });
  }
  async addText(path, text) {
    await this.addStream(path, new Blob([enc(text)]).stream());
  }
  async close() {
    const cdStart = this.offset;
    for (const f of this.central) {
      await this.writeParts([
        u32(0x02014b50), u16(20), u16(20), u16(0x0808), u16(0), u16(f.time), u16(f.date),
        u32(f.crc), u32(f.size), u32(f.size), u16(f.name.length), u16(0), u16(0),
        u16(0), u16(0), u32(0), u32(f.start), f.name,
      ]);
    }
    const cdSize = this.offset - cdStart;
    await this.writeParts([
      u32(0x06054b50), u16(0), u16(0), u16(this.central.length), u16(this.central.length),
      u32(cdSize), u32(cdStart), u16(0),
    ]);
    await this.writer.close();
  }
}

async function openWriter(filename) {
  if ('showSaveFilePicker' in window) {
    const handle = await showSaveFilePicker({
      suggestedName: filename,
      types: [{ description: 'ELF ZIP archive', accept: { 'application/zip': ['.zip'] } }],
    });
    return handle.createWritable();
  }
  return new MemoryWriter(filename);
}

async function addUrl(zip, path, url, weight, state, onProgress) {
  onProgress?.(state.base, `Fetching ${path.split('/').pop()}...`);
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  const total = Number(res.headers.get('content-length') || 0);
  await zip.addStream(path, res.body, (_, done) => {
    if (!total) return;
    state.current = (done / total) * weight;
    onProgress?.(state.base + state.current, `Downloading ${path.split('/').pop()} (${Math.round(done / 1024 / 1024)} MB)`);
  });
  state.base += weight;
  state.current = 0;
  onProgress?.(state.base, `Added ${path}`);
}

function modelSpec(includeModel) {
  return includeModel ? {
    type: 'gguf',
    runtime: 'wllama',
    path: 'model/smollm2.gguf',
    source_url: MODEL_URL,
    family: 'SmolLM2-360M-Instruct',
    quantization: 'Q4_K_M',
    chat_template: 'chatml',
    context_length: 2048,
    autoload: true,
  } : {
    type: 'remote-gguf',
    runtime: 'wllama',
    source_url: MODEL_URL,
    family: 'SmolLM2-360M-Instruct',
    autoload: true,
  };
}

function portableViewer(title, kind) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<style>
body{margin:0;background:#070808;color:#f4f2ea;font-family:system-ui,-apple-system,Segoe UI,sans-serif}
main{max-width:1020px;margin:0 auto;padding:44px 22px}.grad{background:linear-gradient(110deg,#fff,#5fcfb8);-webkit-background-clip:text;background-clip:text;color:transparent}
.panel{border:1px solid #252829;background:#111315;border-radius:8px;padding:20px;margin:16px 0}pre{white-space:pre-wrap;color:#b9b7ae;background:#070808;border:1px solid #252829;border-radius:6px;padding:14px;overflow:auto}
textarea{width:100%;min-height:90px;background:#070808;color:#f4f2ea;border:1px solid #252829;border-radius:6px;padding:12px}button{background:#5fcfb8;color:#00110d;border:0;border-radius:5px;padding:10px 14px;font-weight:700;cursor:pointer}.ok{color:#5fcfb8}.muted{color:#9a9890}
</style></head><body><main>
<p class="muted">webelves .elf package</p><h1>${escapeHtml(title)} <span class="grad">offline bundle</span></h1>
<div class="panel"><h2>Status</h2><p id="status">Checking package...</p></div>
<div class="panel"><h2>Ask the bundle</h2><textarea id="prompt">Summarize this ${kind} package.</textarea><p><button id="ask" disabled>Ask SmolLM2</button></p><pre id="answer"></pre></div>
<div class="panel"><h2>Manifest</h2><pre id="manifest"></pre></div>
<div class="panel"><h2>Contents</h2><pre id="contents"></pre></div>
<div class="panel"><h2>Run locally</h2><pre>python -m http.server 8080
# then open this folder in your browser from localhost</pre></div>
</main><script>
let worker,nextId=1,pending=new Map();
function startWorker(){worker=new Worker('runtime/wllama.worker-CDenxa0H.js',{type:'module'});worker.onmessage=e=>{const m=e.data,p=pending.get(m.id);if(m.type==='progress')status.textContent='Loading model... '+Math.round((m.pct||0)*100)+'%';if(!p)return;if(m.type==='ready'){pending.delete(m.id);p.resolve()}if(m.type==='token')p.onToken&&p.onToken(m.token);if(m.type==='done'){pending.delete(m.id);p.resolve(m.text)}if(m.type==='error'){pending.delete(m.id);p.reject(new Error(m.error||m.message||'model error'))}}}
function initModel(path){startWorker();const id=nextId++;return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});worker.postMessage({type:'init',id,modelId:'smollm2',spec:{chunks:[path],contextLength:2048}})})}
function complete(messages,onToken){const id=nextId++;return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject,onToken});worker.postMessage({type:'complete',id,messages,temperature:.35,maxTokens:360,stop:['<|im_end|>','<|im_start|>']})})}
async function main(){const manifest=await fetch('manifest.json').then(r=>r.json());document.getElementById('manifest').textContent=JSON.stringify(manifest,null,2);const files=await fetch('contents.json').then(r=>r.json());document.getElementById('contents').textContent=files.map(f=>'## '+f.path+'\\n'+(f.text||'')).join('\\n\\n');if(manifest.model.path){const r=await fetch(manifest.model.path);if(!r.ok)throw new Error('Bundled model not found');status.innerHTML='<span class="ok">Bundled model found.</span> Loading wllama...';await initModel(manifest.model.path);status.innerHTML='<span class="ok">Model loaded.</span>';ask.disabled=false;ask.onclick=async()=>{answer.textContent='';const q=prompt.value.trim();const context=contents.textContent.slice(0,12000);await complete([{role:'system',content:'Answer using only the bundled package contents. Be concise.'},{role:'user',content:'Package contents:\\n'+context+'\\n\\nQuestion: '+q}],t=>answer.textContent+=t)}}else status.textContent='Lite package: remote model configured.'}
main().catch(e=>status.textContent='Package check failed: '+e.message);
</script></body></html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function notebookCorpus(seedText) {
  return seedText
    .split(/\n{2,}|\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map((text, i) => ({ id: `P${i + 1}`, source: 'NotebookELF export', text }));
}

export async function buildCodelvesElf({ files, chatHistory = [], settings = {}, includeModel = false, includeRuntime = true, onProgress } = {}) {
  const root = 'codelves-workspace';
  const filename = 'codelves-workspace.elf.zip';
  const writer = await openWriter(filename);
  const zip = new ZipStoreWriter(writer);
  const manifest = {
    elf_version: '0.3',
    type: 'codelves-workspace',
    title: 'Codelves Workspace',
    created: new Date().toISOString(),
    files: files.map(f => ({ path: f.path, bytes: new Blob([f.text || '']).size })),
    chat: { path: 'chat/history.json', messages: chatHistory.length },
    settings: { path: 'settings/llm.json' },
    model: modelSpec(includeModel),
  };
  const contents = files.map(f => ({ path: f.path, text: f.text || '' }));
  await zip.addText(`${root}/index.html`, portableViewer('Codelves Workspace', 'Codelves'));
  await zip.addText(`${root}/manifest.json`, JSON.stringify(manifest, null, 2));
  await zip.addText(`${root}/contents.json`, JSON.stringify(contents, null, 2));
  await zip.addText(`${root}/chat/history.json`, JSON.stringify(chatHistory, null, 2));
  await zip.addText(`${root}/settings/llm.json`, JSON.stringify(settings, null, 2));
  for (const file of files) await zip.addText(`${root}/project/${file.path}`, file.text || '');
  const state = { base: 12, current: 0 };
  onProgress?.(state.base, 'Workspace files added.');
  if (includeRuntime) {
    for (const [path, url] of RUNTIME_FILES) await addUrl(zip, `${root}/${path}`, url, 8, state, onProgress);
  }
  if (includeModel) await addUrl(zip, `${root}/model/smollm2.gguf`, MODEL_URL, 64, state, onProgress);
  onProgress?.(96, 'Writing ZIP directory...');
  await zip.close();
  onProgress?.(100, `Downloaded ${filename}`);
}

export async function buildNotebookElf({ title = 'NotebookELF Export', seedText = '', includeModel = false, includeRuntime = true, onProgress } = {}) {
  const root = 'notebookelf-export';
  const filename = 'notebookelf-export.elf.zip';
  const corpus = notebookCorpus(seedText || 'NotebookELF export created from the local builder.');
  const files = [
    { path: 'notebook/corpus.json', text: JSON.stringify(corpus, null, 2) },
    { path: 'notebook/notes.md', text: '# Notebook notes\n\nGenerated by NotebookELF local export.' },
  ];
  const writer = await openWriter(filename);
  const zip = new ZipStoreWriter(writer);
  const manifest = {
    elf_version: '0.3',
    type: 'notebookelf',
    title,
    created: new Date().toISOString(),
    corpus: { path: 'notebook/corpus.json', passage_count: corpus.length },
    embedding: {
      runtime: 'transformers.js',
      model: 'sentence-transformers/all-MiniLM-L6-v2',
      role: 'retrieval-embedding',
      cache: 'browser-cache',
    },
    model: modelSpec(includeModel),
  };
  await zip.addText(`${root}/index.html`, portableViewer(title, 'NotebookELF'));
  await zip.addText(`${root}/manifest.json`, JSON.stringify(manifest, null, 2));
  await zip.addText(`${root}/contents.json`, JSON.stringify(files, null, 2));
  for (const file of files) await zip.addText(`${root}/${file.path}`, file.text);
  const state = { base: 12, current: 0 };
  onProgress?.(state.base, 'Notebook files added.');
  if (includeRuntime) {
    for (const [path, url] of RUNTIME_FILES) await addUrl(zip, `${root}/${path}`, url, 8, state, onProgress);
  }
  if (includeModel) await addUrl(zip, `${root}/model/smollm2.gguf`, MODEL_URL, 64, state, onProgress);
  onProgress?.(96, 'Writing ZIP directory...');
  await zip.close();
  onProgress?.(100, `Downloaded ${filename}`);
}
