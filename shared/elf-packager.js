const MODEL_URL = 'https://huggingface.co/bartowski/SmolLM2-360M-Instruct-GGUF/resolve/main/SmolLM2-360M-Instruct-Q4_K_M.gguf';
const RUNTIME_FILES = [
  ['runtime/wllama.worker-CDenxa0H.js', '/open/webelves/assets/wllama.worker-CDenxa0H.js'],
  ['runtime/wllama-DTxmcCWH.wasm', '/open/webelves/assets/wllama-DTxmcCWH.wasm'],
  ['runtime/wllama-JeypyGAC.wasm', '/open/webelves/assets/wllama-JeypyGAC.wasm'],
];
const PYODIDE_BASE = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/';
const PYODIDE_FILES = [
  ['pyodide/pyodide.js', `${PYODIDE_BASE}pyodide.js`],
  ['pyodide/pyodide.asm.js', `${PYODIDE_BASE}pyodide.asm.js`],
  ['pyodide/pyodide.asm.wasm', `${PYODIDE_BASE}pyodide.asm.wasm`],
  ['pyodide/python_stdlib.zip', `${PYODIDE_BASE}python_stdlib.zip`],
  ['pyodide/pyodide-lock.json', `${PYODIDE_BASE}pyodide-lock.json`],
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

function codelvesOfflineViewer() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Codelves Offline ELF</title>
<style>
:root{--bg:#070808;--panel:#111315;--panel2:#161819;--edge:#252829;--ink:#f4f2ea;--soft:#b9b7ae;--faint:#77756e;--accent:#5fcfb8;--rose:#e87a8a;--warn:#f0c674}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.55}
header{position:sticky;top:0;z-index:2;background:rgba(7,8,8,.92);border-bottom:1px solid var(--edge);backdrop-filter:blur(12px)}
.bar{max-width:1240px;margin:0 auto;padding:13px 18px;display:flex;align-items:center;justify-content:space-between;gap:14px}.brand{font-weight:800;color:var(--accent)}.meta{font:12px ui-monospace,Consolas,monospace;color:var(--faint)}
main{max-width:1240px;margin:0 auto;padding:20px 18px 44px;display:grid;grid-template-columns:240px minmax(0,1fr) 340px;gap:14px}.panel,.sidebar{border:1px solid var(--edge);background:var(--panel);border-radius:8px;min-width:0}.sidebar{padding:10px;align-self:start;max-height:calc(100vh - 92px);overflow:auto;position:sticky;top:72px}
.kicker{font:700 10px ui-monospace,Consolas,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:8px}.file{display:block;width:100%;text-align:left;border:0;background:transparent;color:var(--soft);padding:7px 9px;border-radius:5px;font:12px ui-monospace,Consolas,monospace;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.file:hover,.file.active{background:var(--panel2);color:var(--ink)}
.panel{padding:14px}.toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}.title{font-weight:750}.pill{display:inline-flex;border:1px solid var(--edge);border-radius:999px;padding:3px 8px;margin:2px;color:var(--faint);font:11px ui-monospace,Consolas,monospace}
textarea,pre{font:12px/1.6 ui-monospace,Consolas,monospace}textarea{width:100%;min-height:360px;background:#070808;color:var(--ink);border:1px solid var(--edge);border-radius:6px;padding:12px;resize:vertical}pre{white-space:pre-wrap;overflow:auto;color:var(--soft);background:#070808;border:1px solid var(--edge);border-radius:6px;padding:12px;min-height:112px;max-height:340px}
button{background:var(--panel2);color:var(--ink);border:1px solid var(--edge);border-radius:5px;padding:8px 11px;font-weight:700;cursor:pointer}button.primary{background:var(--accent);color:#04140f;border-color:var(--accent)}button:disabled{opacity:.45;cursor:wait}.status{color:var(--faint);font:12px ui-monospace,Consolas,monospace;margin-top:8px}.ok{color:var(--accent)}.warn{color:var(--warn)}
.chat-log{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.msg{border:1px solid var(--edge);border-radius:6px;padding:9px;background:#0c0d0e}.msg b{display:block;color:var(--accent);font:10px ui-monospace,Consolas,monospace;text-transform:uppercase;letter-spacing:.14em;margin-bottom:4px}
@media(max-width:980px){main{grid-template-columns:1fr}.sidebar{position:relative;top:auto;max-height:220px}textarea{min-height:260px}}
</style>
</head>
<body>
<header><div class="bar"><div><span class="brand">codelves</span> <span class="meta">full offline .elf package</span></div><div class="meta" id="created"></div></div></header>
<main>
  <aside class="sidebar"><div class="kicker">Workspace</div><div id="fileList"></div><div id="tags" style="margin-top:12px"></div></aside>
  <section class="panel">
    <div class="toolbar"><div><div class="kicker">Python</div><div class="title" id="fileTitle">No file</div></div><button class="primary" id="runBtn" disabled>Run Python</button></div>
    <textarea id="editor" spellcheck="false"></textarea>
    <div class="status" id="pythonStatus">Loading bundled Pyodide...</div>
    <pre id="output"></pre>
  </section>
  <aside class="panel">
    <div class="toolbar"><div><div class="kicker">LLM</div><div class="title">Bundled SmolLM2</div></div><button id="loadModelBtn">Load model</button></div>
    <div class="status" id="modelStatus">Model is bundled at <code>model/smollm2.gguf</code>.</div>
    <div class="chat-log" id="chatLog"></div>
    <textarea id="question" style="min-height:82px">Explain the current file.</textarea>
    <button class="primary" id="askBtn" disabled>Ask bundled model</button>
    <pre id="answer"></pre>
    <details style="margin-top:14px"><summary class="meta">Manifest</summary><pre id="manifestView"></pre></details>
  </aside>
</main>
<script src="pyodide/pyodide.js"></script>
<script>
let worker,nextId=1,pending=new Map(),pyodide=null,active=null;
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
async function readJson(path){return fetch(path).then(r=>{if(!r.ok)throw new Error(path+' HTTP '+r.status);return r.json()})}
function appendOut(text){output.textContent += text + '\\n'; output.scrollTop = output.scrollHeight}
async function initPython(){
  try{
    pyodide = await loadPyodide({ indexURL: 'pyodide/' });
    pythonStatus.innerHTML = '<span class="ok">Python ready.</span> Bundled Pyodide core loaded offline.';
    runBtn.disabled = false;
  }catch(e){pythonStatus.innerHTML = '<span class="warn">Python failed:</span> '+esc(e.message)}
}
function startWorker(){
  worker=new Worker('runtime/wllama.worker-CDenxa0H.js',{type:'module'});
  worker.onmessage=e=>{const m=e.data,p=pending.get(m.id);if(m.type==='progress')modelStatus.textContent='Loading model... '+Math.round((m.pct||0)*100)+'%';if(!p)return;if(m.type==='ready'){pending.delete(m.id);p.resolve()}if(m.type==='token')p.onToken&&p.onToken(m.token);if(m.type==='done'){pending.delete(m.id);p.resolve(m.text)}if(m.type==='error'){pending.delete(m.id);p.reject(new Error(m.error||m.message||'model error'))}};
}
function initModel(){
  if(!worker)startWorker();
  const id=nextId++;
  return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject});worker.postMessage({type:'init',id,modelId:'offline-smollm2',spec:{chunks:['model/smollm2.gguf'],contextLength:2048}})});
}
function complete(messages,onToken){
  const id=nextId++;
  return new Promise((resolve,reject)=>{pending.set(id,{resolve,reject,onToken});worker.postMessage({type:'complete',id,messages,temperature:.35,maxTokens:420,stop:['<|im_end|>','<|im_start|>']})});
}
function renderFiles(files){
  fileList.innerHTML=files.map((f,i)=>'<button class="file '+(f===active?'active':'')+'" data-i="'+i+'">'+esc(f.path)+'</button>').join('');
  fileList.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{active=files[Number(btn.dataset.i)];renderFiles(files);renderActive()});
}
function renderActive(){fileTitle.textContent=active?active.path:'No file';editor.value=active?active.text:''}
async function main(){
  const manifest=await readJson('manifest.json'), contents=await readJson('contents.json'), chat=await readJson('chat/history.json').catch(()=>[]);
  created.textContent=new Date(manifest.created).toLocaleString();
  tags.innerHTML=[manifest.files.length+' files','Pyodide core','wllama','SmolLM2 Q4_K_M'].map(x=>'<span class="pill">'+esc(x)+'</span>').join('');
  manifestView.textContent=JSON.stringify(manifest,null,2);
  active=contents.find(f=>f.path.endsWith('.py'))||contents[0]||null;
  chatLog.innerHTML=(chat||[]).slice(-6).map(m=>'<div class="msg"><b>'+esc(m.role)+'</b>'+esc(m.content)+'</div>').join('');
  renderFiles(contents);renderActive();initPython();
  runBtn.onclick=async()=>{if(!pyodide)return;output.textContent='';try{pyodide.setStdout({batched:appendOut});pyodide.setStderr({batched:appendOut});await pyodide.runPythonAsync(editor.value)}catch(e){appendOut(String(e))}};
  loadModelBtn.onclick=async()=>{loadModelBtn.disabled=true;try{await initModel();modelStatus.innerHTML='<span class="ok">Bundled model loaded.</span>';askBtn.disabled=false}catch(e){modelStatus.innerHTML='<span class="warn">Model failed:</span> '+esc(e.message);loadModelBtn.disabled=false}};
  askBtn.onclick=async()=>{answer.textContent='';const q=question.value.trim();const context='Current file: '+(active?.path||'none')+'\\n'+editor.value.slice(0,8000);await complete([{role:'system',content:'You are Codelves running fully offline from a bundled .elf package. Be concise and use the provided workspace content.'},{role:'user',content:context+'\\n\\nQuestion: '+q}],t=>answer.textContent+=t)};
}
main().catch(e=>{document.body.innerHTML='<main><pre>Package failed: '+esc(e.message)+'</pre></main>'});
</script>
</body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeScriptJson(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function downloadBlob(filename, blob) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 3000);
}

function codelvesSingleHtml(data) {
  const payload = escapeScriptJson(data);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="elf-version" content="0.3">
<title>${escapeHtml(data.manifest.title)}</title>
<style>
:root{--bg:#070808;--panel:#111315;--panel2:#161819;--edge:#252829;--ink:#f4f2ea;--soft:#b9b7ae;--faint:#77756e;--accent:#5fcfb8;--rose:#e87a8a}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.55}
header{position:sticky;top:0;z-index:2;background:rgba(7,8,8,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--edge)}
.bar{max-width:1180px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px}.brand{font-weight:750;color:var(--accent)}.meta{font:12px ui-monospace,Consolas,monospace;color:var(--faint)}
main{max-width:1180px;margin:0 auto;padding:28px 20px 54px;display:grid;grid-template-columns:260px minmax(0,1fr);gap:20px}.sidebar,.panel{border:1px solid var(--edge);background:var(--panel);border-radius:8px}
.sidebar{position:sticky;top:74px;align-self:start;max-height:calc(100vh - 96px);overflow:auto;padding:10px}.file{display:block;width:100%;text-align:left;border:0;background:transparent;color:var(--soft);padding:8px 10px;border-radius:5px;font:12px ui-monospace,Consolas,monospace;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.file:hover,.file.active{background:var(--panel2);color:var(--ink)}
.panel{padding:20px;min-width:0}.kicker{font:700 11px ui-monospace,Consolas,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}h1{font-size:clamp(30px,5vw,56px);line-height:1.02;letter-spacing:-.05em;margin:10px 0 12px}.grad{background:linear-gradient(110deg,#fff,var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}.box{border:1px solid var(--edge);background:#0c0d0e;border-radius:7px;padding:14px}h2{margin:0 0 10px;font-size:18px}.muted{color:var(--soft)}pre,textarea{font:12px/1.65 ui-monospace,Consolas,monospace}pre{white-space:pre-wrap;overflow:auto;color:var(--soft);background:#070808;border:1px solid var(--edge);border-radius:6px;padding:14px;max-height:60vh}textarea{width:100%;min-height:78px;resize:vertical;background:#070808;color:var(--ink);border:1px solid var(--edge);border-radius:6px;padding:10px}
button.ask{background:var(--accent);color:#04140f;border:0;border-radius:5px;padding:9px 13px;font-weight:750;cursor:pointer;margin-top:8px}.answer{min-height:92px}.pill{display:inline-flex;border:1px solid var(--edge);border-radius:999px;padding:3px 8px;margin:2px;color:var(--faint);font:11px ui-monospace,Consolas,monospace}
@media(max-width:820px){main{grid-template-columns:1fr}.sidebar{position:relative;top:auto;max-height:220px}.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<header><div class="bar"><div><span class="brand">codelves</span> <span class="meta">portable .elf.html</span></div><div class="meta" id="created"></div></div></header>
<main>
  <aside class="sidebar"><div class="kicker">Files</div><div id="fileList"></div></aside>
  <section class="panel">
    <div class="kicker">webelves export</div>
    <h1>Codelves Workspace <span class="grad">portable artifact</span></h1>
    <p class="muted">This single HTML file contains your workspace files, chat transcript, and safe LLM settings. It opens directly from disk; no server is required.</p>
    <div id="tags"></div>
    <div class="grid">
      <div class="box"><h2>Selected file</h2><pre id="fileView"></pre></div>
      <div class="box"><h2>Ask the artifact</h2><textarea id="question">What does this workspace contain?</textarea><button class="ask" id="askBtn">Ask locally</button><pre class="answer" id="answer"></pre></div>
      <div class="box"><h2>Chat history</h2><pre id="chatView"></pre></div>
      <div class="box"><h2>Manifest</h2><pre id="manifestView"></pre></div>
    </div>
  </section>
</main>
<script type="application/json" id="elf-data">${payload}</script>
<script>
const data = JSON.parse(document.getElementById('elf-data').textContent);
const files = data.files || [];
let active = files[0] || null;
created.textContent = new Date(data.manifest.created).toLocaleString();
tags.innerHTML = [
  data.manifest.files.length + ' files',
  (data.chatHistory || []).length + ' chat messages',
  data.manifest.model.family,
  data.manifest.model.mode
].map(x => '<span class="pill">'+esc(x)+'</span>').join('');
manifestView.textContent = JSON.stringify(data.manifest, null, 2);
chatView.textContent = (data.chatHistory || []).map(m => '[' + m.role + '] ' + m.content).join('\\n\\n') || 'No chat history exported.';
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function renderFiles(){
  fileList.innerHTML = files.map((f,i)=>'<button class="file '+(f===active?'active':'')+'" data-i="'+i+'">'+esc(f.path)+'</button>').join('');
  fileList.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{active=files[Number(btn.dataset.i)];renderFiles();renderActive()});
}
function renderActive(){fileView.textContent = active ? active.text : 'No files exported.'}
function score(text, words){const low=text.toLowerCase();return words.reduce((s,w)=>s+(low.includes(w)?1:0),0)}
askBtn.onclick = () => {
  const q = question.value.trim();
  const words = q.toLowerCase().split(/\\W+/).filter(Boolean);
  const ranked = files.map(f => ({ f, score: score(f.path + '\\n' + f.text, words) })).sort((a,b)=>b.score-a.score).slice(0,3);
  if (!ranked.length) { answer.textContent = 'No files to search.'; return; }
  answer.textContent = 'Local artifact answer (search-only):\\n\\n' + ranked.map(({f}) => 'From '+f.path+':\\n'+f.text.slice(0,900)).join('\\n\\n---\\n\\n');
};
renderFiles();renderActive();
</script>
</body>
</html>`;
}

function notebookCorpus(seedText) {
  return seedText
    .split(/\n{2,}|\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map((text, i) => ({ id: `P${i + 1}`, source: 'NotebookELF export', text }));
}

export async function buildCodelvesHtml({ files, chatHistory = [], settings = {}, onProgress } = {}) {
  const manifest = {
    elf_version: '0.3',
    type: 'codelves-workspace-html',
    title: 'Codelves Workspace',
    created: new Date().toISOString(),
    files: files.map(f => ({ path: f.path, bytes: new Blob([f.text || '']).size })),
    chat: { messages: chatHistory.length },
    settings,
    model: {
      mode: 'settings-only',
      family: settings.localModel || 'HuggingFaceTB/SmolLM2-360M-Instruct',
      note: 'Single-file HTML exports open directly from disk. Model weights are not embedded in this file.',
    },
  };
  const html = codelvesSingleHtml({ manifest, files, chatHistory });
  onProgress?.(80, 'Built single-file HTML artifact.');
  downloadBlob('codelves-workspace.elf.html', new Blob([html], { type: 'text/html;charset=utf-8' }));
  onProgress?.(100, 'Downloaded codelves-workspace.elf.html');
}

export async function buildCodelvesElf({ files, chatHistory = [], settings = {}, includeModel = true, includeRuntime = true, onProgress } = {}) {
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
    python: {
      runtime: 'pyodide',
      version: '0.27.0',
      path: 'pyodide/',
      packages: ['python-stdlib'],
    },
  };
  const contents = files.map(f => ({ path: f.path, text: f.text || '' }));
  await zip.addText(`${root}/index.html`, codelvesOfflineViewer());
  await zip.addText(`${root}/manifest.json`, JSON.stringify(manifest, null, 2));
  await zip.addText(`${root}/contents.json`, JSON.stringify(contents, null, 2));
  await zip.addText(`${root}/chat/history.json`, JSON.stringify(chatHistory, null, 2));
  await zip.addText(`${root}/settings/llm.json`, JSON.stringify(settings, null, 2));
  for (const file of files) await zip.addText(`${root}/project/${file.path}`, file.text || '');
  const state = { base: 12, current: 0 };
  onProgress?.(state.base, 'Workspace files added.');
  if (includeRuntime) {
    for (const [path, url] of RUNTIME_FILES) await addUrl(zip, `${root}/${path}`, url, 3, state, onProgress);
    for (const [path, url] of PYODIDE_FILES) await addUrl(zip, `${root}/${path}`, url, 4, state, onProgress);
  }
  if (includeModel) await addUrl(zip, `${root}/model/smollm2.gguf`, MODEL_URL, 60, state, onProgress);
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
