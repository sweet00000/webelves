# `public/models/`

Drop a default GGUF here named `default.gguf` and the **Use default** button
in Build settings will pick it up at `/models/default.gguf`.

Suggested file (NOT committed — fetch separately):

- `SmolLM2-360M-Instruct-Q4_K_M.gguf`
  - <https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct-GGUF/resolve/main/smollm2-360m-instruct-q4_k_m.gguf>
  - ~210 MB

```
mv smollm2-360m-instruct-q4_k_m.gguf public/models/default.gguf
```

Vite's dev server serves anything under `/public` at root. Static deploys
(Vercel/Netlify) ship `/public` next to `index.html` automatically.

This file is .gitignored — large blobs don't belong in source control.
