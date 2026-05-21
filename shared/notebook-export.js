import { buildNotebookElf } from './elf-packager.js';

const DEFAULT_SEED = `Bayes theorem updates a prior belief with observed evidence to produce a posterior belief.

The likelihood ratio compares how probable evidence is under two competing hypotheses.

Conjugate priors are chosen because the posterior stays in the same family as the prior, making updates easier to inspect.`;

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) node.append(child);
  return node;
}

function buildUi() {
  if (document.getElementById('notebookElfExportBtn')) return;

  const btn = el('button', {
    id: 'notebookElfExportBtn',
    class: 'notebook-elf-export-btn',
    text: 'Export .elf',
    title: 'Build a portable NotebookELF package',
  });

  const overlay = el('div', { id: 'notebookElfExportOverlay', class: 'notebook-elf-export-overlay', hidden: '' });
  const modal = el('section', { class: 'notebook-elf-export-modal', role: 'dialog', 'aria-modal': 'true' });
  modal.innerHTML = `
    <div class="notebook-elf-export-head">
      <div>
        <div class="notebook-elf-export-kicker">NotebookELF local builder</div>
        <h2>Build portable notebook .elf</h2>
      </div>
      <button type="button" class="notebook-elf-export-close" aria-label="Close">×</button>
    </div>
    <label class="notebook-elf-export-field">
      <span>Title</span>
      <input id="notebookElfExportTitle" value="NotebookELF Export">
    </label>
    <label class="notebook-elf-export-field">
      <span>Notebook passages</span>
      <textarea id="notebookElfExportSeed"></textarea>
    </label>
    <label class="notebook-elf-export-check">
      <input type="checkbox" id="notebookElfExportModel">
      <span>Bundle SmolLM2 GGUF from Hugging Face for full offline use. This creates a large ZIP.</span>
    </label>
    <label class="notebook-elf-export-check">
      <input type="checkbox" id="notebookElfExportRuntime" checked>
      <span>Include wllama runtime files.</span>
    </label>
    <div class="notebook-elf-export-progress">
      <div id="notebookElfExportSummary">Ready.</div>
      <div class="notebook-elf-export-track"><i id="notebookElfExportBar"></i></div>
    </div>
    <div class="notebook-elf-export-actions">
      <button type="button" id="notebookElfExportBuild">Build .elf ZIP</button>
    </div>
  `;
  overlay.append(modal);
  document.body.append(btn, overlay);

  document.getElementById('notebookElfExportSeed').value = DEFAULT_SEED;
  btn.addEventListener('click', () => overlay.hidden = false);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) overlay.hidden = true;
  });
  modal.querySelector('.notebook-elf-export-close').addEventListener('click', () => overlay.hidden = true);
  document.getElementById('notebookElfExportBuild').addEventListener('click', build);
}

async function build() {
  const buildBtn = document.getElementById('notebookElfExportBuild');
  const summary = document.getElementById('notebookElfExportSummary');
  const bar = document.getElementById('notebookElfExportBar');
  buildBtn.disabled = true;
  try {
    await buildNotebookElf({
      title: document.getElementById('notebookElfExportTitle').value.trim() || 'NotebookELF Export',
      seedText: document.getElementById('notebookElfExportSeed').value,
      includeModel: document.getElementById('notebookElfExportModel').checked,
      includeRuntime: document.getElementById('notebookElfExportRuntime').checked,
      onProgress: (pct, msg) => {
        bar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
        summary.textContent = `${Math.round(pct)}% · ${msg}`;
      },
    });
  } catch (e) {
    summary.textContent = 'Export failed: ' + (e.message || String(e));
  } finally {
    buildBtn.disabled = false;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildUi);
} else {
  buildUi();
}
