// Simple HTTP server with correct COOP/COEP headers for SharedArrayBuffer (Pyodide + wllama)
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const ROOT = resolve(fileURLToPath(import.meta.url), '..');
const PORT = 3333;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.txt':  'text/plain',
  '.md':   'text/markdown',
  '.elf':  'text/html; charset=utf-8',
};

createServer(async (req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = join(ROOT, urlPath);

  // serve index.html for directories
  if (existsSync(filePath) && !extname(filePath)) {
    filePath = join(filePath, 'index.html');
  }

  try {
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    const ct = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': ct,
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  } catch {
    // SPA fallback: unknown paths under /open/notebook/ serve the app shell
    if (urlPath.startsWith('/open/notebook/')) {
      try {
        const spa = await readFile(join(ROOT, 'open/notebook/index.html'));
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'credentialless',
          'Cross-Origin-Resource-Policy': 'cross-origin',
          'Cache-Control': 'no-cache',
        });
        return res.end(spa);
      } catch {}
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 not found: ' + urlPath);
  }
}).listen(PORT, () => {
  console.log(`webelves dev server → http://localhost:${PORT}`);
  console.log(`  Marketing site    → http://localhost:${PORT}/`);
  console.log(`  NotebookELF       → http://localhost:${PORT}/open/notebook/`);
  console.log(`  Forge             → http://localhost:${PORT}/open/forge/`);
  console.log(`  Webelves          → http://localhost:${PORT}/open/webelves/`);
  console.log(`  Python IDE        → http://localhost:${PORT}/open/ide/`);
  console.log(`  Bayes demo        → http://localhost:${PORT}/demos/bayes.elf.html`);
  console.log(`  Kalman demo       → http://localhost:${PORT}/demos/kalman.elf.html`);
});
