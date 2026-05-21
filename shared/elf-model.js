// Single source of truth for the website's in-browser LLM.
//
// transformers.js caches model files in the browser's Cache Storage, which is
// shared across ALL same-origin pages. So the first page to load the model
// downloads it once; every later page (and repeat visit) reads from cache with
// no network. Import this module from any page that needs the model and call
// getGenerator() — the download is shared, and within a page the instance is
// memoised.
import { pipeline, TextStreamer, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3';

env.allowLocalModels = false;

export { TextStreamer };
export const MODEL_ID = 'HuggingFaceTB/SmolLM2-360M-Instruct';

const CACHE_FLAG = 'elf.model.cached'; // set once the model is in Cache Storage

// Has the model been downloaded+cached on this origin before? If so, subsequent
// pages can auto-load it instantly from cache instead of waiting for a click.
export function isCached() {
  try { return localStorage.getItem(CACHE_FLAG) === '1'; } catch { return false; }
}

let _genPromise = null;

// Returns a memoised text-generation pipeline. First call (uncached) downloads
// ~once; later calls / pages resolve from Cache Storage.
export function getGenerator(progressCallback) {
  if (!_genPromise) {
    _genPromise = pipeline('text-generation', MODEL_ID, { dtype: 'q4', progress_callback: progressCallback })
      .then(g => { try { localStorage.setItem(CACHE_FLAG, '1'); } catch {} return g; })
      .catch(e => { _genPromise = null; throw e; });
  }
  return _genPromise;
}
