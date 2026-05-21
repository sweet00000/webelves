const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BZyBrZFR.js","assets/index-7Fj_snYD.css"])))=>i.map(i=>d[i]);
var Pt=Object.defineProperty;var Ut=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>Ut(e,typeof t!="symbol"?t+"":t,n);import{u as jt,k as gt,m as qe,s as Ht,l as zt,n as Gt,p as J,q as Ke,r as qt,t as w,c as M,o as mt,i as u,g as P,v as Ue,w as We,f as $e,j as se,d as K,b as h,x as pt,y as ht,z as Je,A as Kt,B as Wt,C as Jt,D as Vt,e as ke,E as ie,S as C,h as V,G as ee,a as je,H as Q,I as W,J as Se,K as bt,L as q,M as xt,F as te,_ as Yt,N as Te,O as Xt,P as Qt,Q as Zt,R as en,T as ye,U as tn,V as nn,W as rn,X as Ve,Y as sn,Z as on,$ as an,a0 as ln}from"./index-BZyBrZFR.js";import{S as wt,M as ue,C as Ce}from"./ConfirmDialog-gtdZIDmt.js";var cn=w("<a>");function dn(e){e=qe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Ht(e,["href","state","class","activeClass","inactiveClass","end"]),n=zt(()=>e.href),r=Gt(n),s=gt(),i=J(()=>{const a=n();if(a===void 0)return[!1,!1];const o=Ke(a.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(Ke(s.pathname).toLowerCase());return[e.end?o===l:l.startsWith(o+"/")||l===o,o===l]});return(()=>{var a=cn();return qt(a,qe(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),a})()}function un(e){const t=jt(),n=gt(),{href:r,state:s}=e,i=typeof r=="function"?r({navigate:t,location:n}):r;return t(i,{replace:!0,state:s}),null}var fn=w('<div class="flex h-full w-full overflow-hidden"><div class=overflow-hidden></div><div class="group relative flex-shrink-0 bg-edge hover:bg-accent/40 transition-colors"></div><div class="flex-1 overflow-hidden">');const Ye="forge.layout.v1.";function Xe(e){const t=(()=>{if(!e.storageKey)return e.initialA;try{const d=localStorage.getItem(Ye+e.storageKey);if(d){const g=Number(d);if(Number.isFinite(g))return g}}catch{}return e.initialA})(),[n,r]=M(t);let s,i=!1;const a=d=>{if(e.storageKey)try{localStorage.setItem(Ye+e.storageKey,String(Math.round(d)))}catch{}},o=d=>{d.preventDefault(),i=!0,d.currentTarget.setPointerCapture(d.pointerId)},l=d=>{if(!i||!s)return;const g=s.getBoundingClientRect();let f;e.direction==="horizontal"?f=d.clientX-g.left:f=d.clientY-g.top;const x=e.minA??80,p=e.minB??80,b=e.direction==="horizontal"?g.width:g.height;f=Math.max(x,Math.min(b-p-6,f)),r(f)},m=d=>{i&&(i=!1,d.currentTarget.releasePointerCapture(d.pointerId),a(n()))};mt(()=>{if(!s)return;const d=new ResizeObserver(()=>{if(!s)return;const g=s.getBoundingClientRect(),f=e.direction==="horizontal"?g.width:g.height,x=e.minB??80;n()>f-x-6&&r(Math.max(e.minA??80,f-x-6))});d.observe(s),$e(()=>d.disconnect())});const c=()=>e.direction==="horizontal";return(()=>{var d=fn(),g=d.firstChild,f=g.nextSibling,x=f.nextSibling,p=s;return typeof p=="function"?se(p,d):s=d,u(g,()=>e.a),f.addEventListener("pointercancel",m),f.$$pointerup=m,f.$$pointermove=l,f.$$pointerdown=o,u(x,()=>e.b),P(b=>{var v=c()?"row":"column",y=c()?{width:`${n()}px`,"flex-shrink":0}:{height:`${n()}px`,"flex-shrink":0},$=c()?{width:"4px",cursor:"col-resize"}:{height:"4px",cursor:"row-resize"};return v!==b.e&&Ue(d,"flex-direction",b.e=v),b.t=We(g,y,b.t),b.a=We(f,$,b.a),b},{e:void 0,t:void 0,a:void 0}),d})()}K(["pointerdown","pointermove","pointerup"]);const vt=pt();function gn(e){return h(vt.Provider,{get value(){return e.store},get children(){return e.children}})}function Z(){const e=ht(vt);if(!e)throw new Error("useWorkspace must be used within WorkspaceProvider");return e}function ae(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function yt(e,t=6,n=4){return e?e.length<=t+n+1?e:`${e.slice(0,t)}…${e.slice(-n)}`:"—"}function Ee(e,t){var d,g;const n=Object.values(t),r=n.some(f=>f.role==="asset"),s=n.some(f=>f.role==="document"),i=n.some(f=>f.role==="segment-set"),a=n.some(f=>f.role==="embedding-set"),o=n.some(f=>f.role==="binding-runtime"),l=n.some(f=>f.role==="template"),m=!!((g=(d=e.fulfillments)==null?void 0:d["generate-text"])!=null&&g.length);let c=null;return r?s?i?a?o?l?m||(c="no generate-text fulfillment"):c="no chat template":c="no runtime selected":c="segments not embedded":c="document not segmented":c="no extracted document":c="no source files",{hasSource:r,hasDocument:s,hasSegments:i,hasEmbeddings:a,hasRuntime:o,hasTemplate:l,hasGenerationFulfillment:m,buildReady:c===null,blockingReason:c}}function Ae(e,t){return Object.values(e).find(n=>n.role===t)??null}function mn(e){return new Worker("/open/notebook/assets/package.worker-BNoEn71p.js",{type:"module",name:e==null?void 0:e.name})}const pn=`// .elf bootstrap. Lives inline in every Forge-built single-file artifact.
// Walks the inert <script type="application/elf-resource"> tags, base64-decodes
// each one, verifies SHA-256 against the data-sha256 attribute, then hands a
// Map<resourceId, Blob> to the binding-runtime resource's exported init().

(async () => {
  const log = (...args) => console.log('[elf]', ...args);
  const fail = (msg, err) => {
    document.body.innerHTML =
      '<pre style="padding:1rem;color:#b91c1c;font-family:ui-monospace,monospace;white-space:pre-wrap">' +
      \`.elf bootstrap failed: \${msg}\\n\\n\${err && err.stack ? err.stack : err || ''}\` +
      '</pre>';
    throw err || new Error(msg);
  };

  try {
    const manifestNode = document.querySelector('script[type="application/elf-manifest"]');
    if (!manifestNode) throw new Error('missing elf-manifest script');
    const manifest = JSON.parse(manifestNode.textContent);

    const nodes = Array.from(
      document.querySelectorAll('script[type="application/elf-resource"]'),
    );
    log(\`decoding \${nodes.length} resources\`);

    const resources = new Map();
    for (const node of nodes) {
      const id = node.getAttribute('data-id');
      const declaredSha = (node.getAttribute('data-sha256') || '').toLowerCase();
      const mediaType = node.getAttribute('data-media-type') || 'application/octet-stream';
      const encoding = node.getAttribute('data-encoding') || 'base64';
      const b64 = (node.textContent || '').replace(/\\s+/g, '');

      let bytes;
      if (encoding === 'base64') {
        const bin = atob(b64);
        bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      } else {
        throw new Error(\`unsupported encoding "\${encoding}" for \${id}\`);
      }

      // Verify SHA-256 in the browser; refuse to load tampered resources.
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      let actualSha = '';
      const dv = new Uint8Array(digest);
      for (let i = 0; i < dv.length; i++) {
        actualSha += dv[i].toString(16).padStart(2, '0');
      }
      if (declaredSha && actualSha !== declaredSha) {
        throw new Error(
          \`sha256 mismatch for \${id}: expected \${declaredSha}, got \${actualSha}\`,
        );
      }

      resources.set(id, new Blob([bytes], { type: mediaType }));
    }

    // Resolve the active binding-runtime via manifest.bindings[0].entry.runtime
    // — multiple binding-runtime resources may linger if the user switched
    // build profiles (e.g. ONNX → wllama-gguf), so picking by role alone
    // would silently load the wrong one.
    const activeBinding = (manifest.bindings || [])[0];
    const declaredRuntimeId = activeBinding?.entry?.runtime;
    let runtimeEntry = declaredRuntimeId
      ? manifest.resources.find((r) => r.id === declaredRuntimeId)
      : null;
    if (!runtimeEntry) {
      runtimeEntry = manifest.resources.find((r) => r.role === 'binding-runtime');
    }
    if (!runtimeEntry) throw new Error('no binding-runtime resource declared');
    log(\`runtime: \${runtimeEntry.id}\`);
    const runtimeBlob = resources.get(runtimeEntry.id);
    if (!runtimeBlob) throw new Error(\`binding-runtime resource missing bytes: \${runtimeEntry.id}\`);

    const moduleUrl = URL.createObjectURL(
      new Blob([await runtimeBlob.text()], { type: 'text/javascript' }),
    );
    const mod = await import(/* @vite-ignore */ moduleUrl);
    if (typeof mod.init !== 'function') {
      throw new Error('binding-runtime did not export init({manifest, resources})');
    }
    await mod.init({ manifest, resources, log });
  } catch (err) {
    fail(err && err.message ? err.message : String(err), err);
  }
})();
`;let pe=null,hn=1;const Ne=new Map;function bn(){return pe||(pe=new mn,pe.onmessage=e=>{const t=e.data,n=Ne.get(t.id);n&&(Ne.delete(t.id),t.ok?n.resolve(t.encoded):n.reject(new Error(t.error)))},pe)}async function xn(e){const t=bn(),n=hn++;return new Promise((r,s)=>{Ne.set(n,{resolve:r,reject:s}),t.postMessage({id:n,resources:e},e.map(i=>i.bytes))})}function wn(e){var r;const t=[];if(e.elf_version!=="0.2"&&t.push({path:"elf_version",message:`must be "0.2", got "${e.elf_version}"`}),e.id||t.push({path:"id",message:"required"}),e.title||t.push({path:"title",message:"required"}),e.created||t.push({path:"created",message:"required"}),Array.isArray(e.resources)||t.push({path:"resources",message:"must be array"}),e.interaction||t.push({path:"interaction",message:"required"}),e.interaction&&!e.interaction.kind&&t.push({path:"interaction.kind",message:"required"}),e.interaction&&!Array.isArray(e.interaction.operations)&&t.push({path:"interaction.operations",message:"must be array"}),e.fulfillments||t.push({path:"fulfillments",message:"required"}),e.fulfillments)for(const s of((r=e.interaction)==null?void 0:r.operations)??[]){const i=e.fulfillments[s];(!i||i.length===0)&&t.push({path:`fulfillments.${s}`,message:"no fulfillment for declared operation"})}const n=new Set((e.resources??[]).map(s=>s.id));for(const s of e.resources??[])for(const i of s.derived_from??[])n.has(i)||t.push({path:`resources.${s.id}.derived_from`,message:`references unknown resource "${i}"`});return t}class Qe extends Error{constructor(n){super(`build failed (${n.length} problem${n.length===1?"":"s"}):
`+n.map(r=>`  • ${r.path}: ${r.message}`).join(`
`));me(this,"problems");this.problems=n,this.name="BuildError"}}const vn="0000000000000000000000000000000000000000000000000000000000000000";async function yn(e){const t=performance.now(),n=JSON.parse(JSON.stringify(e.manifest()));n.signatures=[],n.provenance=n.provenance??{},n.provenance.builder="forge/0.1",n.provenance.built_at=new Date().toISOString();const r=wn(n);if(r.length)throw new Qe(r);const s=[],i=[];for(const y of n.resources){if(y.sha256===vn){const A=y.role==="model"&&(y.media_type==="application/x-gguf"||y.media_type==="application/x-gguf-embed");!!!(y.fetch_urls&&y.fetch_urls.length)&&!A&&i.push({path:`resources.${y.id}`,message:"has placeholder sha256 but no fetch_urls — cannot package"}),s.push({entry:y,bytes:null});continue}const $=await e.blobs.get(y.sha256);if(!$){if(y.fetch_urls&&y.fetch_urls.length>0){s.push({entry:y,bytes:null});continue}i.push({path:`resources.${y.id}`,message:"bytes missing from blob store and no fetch_urls fallback"});continue}const k=await $.arrayBuffer(),_=await Je(k);if(_!==y.sha256){i.push({path:`resources.${y.id}.sha256`,message:`bytes hash to ${_}, expected ${y.sha256}`});continue}if(k.byteLength!==y.size){i.push({path:`resources.${y.id}.size`,message:`bytes are ${k.byteLength} long, manifest says ${y.size}`});continue}s.push({entry:y,bytes:k})}if(i.length)throw new Qe(i);const a=Kt(n),o=await Je(a),l=n.resources.find(y=>y.role==="binding-ui"),m=s.find(y=>y.entry===l),c=m!=null&&m.bytes?new TextDecoder("utf-8").decode(new Uint8Array(m.bytes)):'<div id="elf-app"></div>',d=s.filter(y=>y.bytes!==null).map(y=>({id:y.entry.id,bytes:y.bytes})),g=await xn(d),f=new Map(g.map(y=>[y.id,y.base64])),x=(n.title||".elf artifact").replace(/[<>]/g,""),p=[];p.push(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="elf-version" content="0.2">
  <meta name="elf-fingerprint" content="sha256:${o}">
  <title>${x}</title>
`),p.push(`  <script type="application/elf-manifest">
`),p.push(JSON.stringify(n,null,2)),p.push(`
  <\/script>
`),p.push(`  <!--
    artifact identity: sha256:${o}
    canonical bytes: ${a.length} chars (RFC 8785)
  -->
`);for(const y of s){if(y.bytes===null)continue;const $=f.get(y.entry.id)??"";p.push(`  <script type="application/elf-resource" data-id="${y.entry.id}" data-encoding="base64" data-sha256="${y.entry.sha256}" data-media-type="${y.entry.media_type}">`),p.push($),p.push(`<\/script>
`)}p.push(`</head>
<body>
`),p.push(c),p.push(`
<script type="module">
`),p.push(pn),p.push(`
<\/script>
</body>
</html>
`);const b=new Blob(p,{type:"text/html"}),v=`build.${Date.now().toString(36)}.${o.slice(0,8)}`;return e.appendJournal({actor:"user",tool:"build_single",args:{fingerprint:o,byteSize:b.size},resultRefs:[],durationMs:Math.round(performance.now()-t),ok:!0}),{buildId:v,blob:b,fingerprint:o,byteSize:b.size,manifest:n}}function $n(e){return`notebooks/${e}/outputs`}function _n(e,t){return`${$n(e)}/${t}.elf.html`}async function $t(e){const t=await yn(e),n=_n(e.notebookId,t.buildId);await Wt(n,t.blob);const r={buildId:t.buildId,title:t.manifest.title,fingerprint:t.fingerprint,byteSize:t.byteSize,builtAt:new Date().toISOString(),path:n};return e.recordOutput(r),r}async function kn(e){return Jt(e.path)}async function Sn(e,t){await Vt(t.path),e.removeOutput(t.buildId)}var Cn=w('<span class="hidden sm:inline">NotebookELF'),En=w('<input class="text-sm bg-bg border border-edge rounded px-2 py-0.5 text-neutral-100 focus:outline-none focus:border-accent/60">'),In=w("<span class=text-neutral-200>sha256:"),Rn=w('<div class="absolute right-3 top-12 max-w-[60vw] bg-red-900/80 border border-red-500/40 text-red-100 text-[11px] px-3 py-2 rounded shadow-lg whitespace-pre-wrap font-mono z-10"><button class="ml-2 text-red-200 hover:text-white">×'),Tn=w('<div class="relative flex items-center justify-between px-3 py-2 border-b border-edge bg-panel"><div class="flex items-center gap-3 min-w-0"><span class=text-neutral-700>/</span><span class="text-2xl leading-none"></span></div><div class="flex items-center gap-2"><button class="text-neutral-400 hover:text-white p-1 rounded hover:bg-white/5"title=Settings>⚙️</button><button title="Click to copy artifact identity"><span class="text-neutral-400 normal-case font-sans tracking-wider text-[10px]">Identity</span><span class="text-neutral-500 group-hover:text-neutral-300"></span></button><button>'),An=w('<button class="text-sm font-semibold text-neutral-100 hover:text-accent truncate max-w-md text-left"title="Click to edit title">'),Mn=w("<span class=text-neutral-500>sha256:000000…0000");function Ln(e){const t=Z(),n=ke(),[r,s]=M(!1),[i,a]=M(!1),[o,l]=M(!1),[m,c]=M(null),[d,g]=M(!1),[f,x]=M(!1);let p,b;ie(()=>{const _=t.fingerprint();_&&_!==p&&(p=_,s(!0),setTimeout(()=>s(!1),700))});const v=J(()=>Ee(t.manifest(),t.resources())),y=async()=>{const _=t.fingerprint();if(_)try{await navigator.clipboard.writeText(`sha256:${_}`),a(!0),setTimeout(()=>a(!1),1200)}catch{}},$=async()=>{if(!o()){l(!0),c(null);try{await $t(t),await n.bumpUpdatedAt(t.notebookId);const _=t.fingerprint();await n.updateSummary(t.notebookId,{fingerprint:_,lastBuiltAt:new Date().toISOString()})}catch(_){c(_.message??String(_))}finally{l(!1)}}},k=async _=>{const A=_.trim()||"Untitled notebook";t.mutate(E=>{E.title=A}),await n.updateSummary(t.notebookId,{title:A,updatedAt:new Date().toISOString()}),g(!1)};return(()=>{var _=Tn(),A=_.firstChild,E=A.firstChild,O=E.nextSibling,T=A.nextSibling,D=T.firstChild,L=D.nextSibling,B=L.firstChild,z=B.nextSibling,S=L.nextSibling;return u(A,h(dn,{href:"/",class:"text-neutral-400 hover:text-white text-xs flex items-center gap-1",title:"Back to dashboard",get children(){return["← ",Cn()]}}),E),u(O,()=>{var R;return((R=e.summary)==null?void 0:R.icon)??t.meta().icon}),u(A,h(C,{get when(){return d()},get fallback(){return(()=>{var R=An();return R.$$click=()=>{g(!0),queueMicrotask(()=>b==null?void 0:b.focus())},u(R,()=>t.manifest().title||"Untitled notebook"),R})()},get children(){var R=En();R.$$keydown=I=>{I.key==="Enter"&&I.currentTarget.blur(),I.key==="Escape"&&g(!1)},R.addEventListener("blur",I=>k(I.currentTarget.value));var N=b;return typeof N=="function"?se(N,R):b=R,P(()=>R.value=t.manifest().title),R}}),null),D.$$click=()=>x(!0),L.$$click=y,u(L,h(C,{get when(){return t.fingerprint()},get fallback(){return Mn()},get children(){var R=In();return R.firstChild,u(R,()=>yt(t.fingerprint(),8,4),null),R}}),z),u(z,()=>i()?"✓":"⧉"),S.$$click=$,u(S,()=>o()?"Building…":"Build"),u(_,h(wt,{get open(){return f()},onOpenChange:x}),null),u(_,h(C,{get when(){return m()},get children(){var R=Rn(),N=R.firstChild;return u(R,m,N),N.$$click=()=>c(null),R}}),null),P(R=>{var N=`group flex items-center gap-2 px-2.5 py-1 rounded border border-edge font-mono text-[11px] hover:bg-white/5 transition-colors ${r()?"animate-pulse-fp":""}`,I=`px-3 py-1 text-xs rounded border ${v().buildReady&&!o()?"border-accent/50 bg-accent text-white hover:bg-accent/90":"border-edge bg-white/5 text-neutral-400 cursor-not-allowed"}`,j=!v().buildReady||o(),H=v().buildReady?"Build single-file .elf":v().blockingReason??"";return N!==R.e&&V(L,R.e=N),I!==R.t&&V(S,R.t=I),j!==R.a&&(S.disabled=R.a=j),H!==R.o&&ee(S,"title",R.o=H),R},{e:void 0,t:void 0,a:void 0,o:void 0}),_})()}K(["keydown","click"]);var Nn=w('<span class="text-neutral-500 normal-case tracking-normal text-[11px]">'),Bn=w('<div class="flex items-center justify-between px-3 py-2 border-b border-edge text-[11px] uppercase tracking-wider text-neutral-400 select-none"><div class="flex items-baseline gap-2"><span></span></div><div>');function Ie(e){return(()=>{var t=Bn(),n=t.firstChild,r=n.firstChild,s=n.nextSibling;return u(r,()=>e.title),u(n,h(C,{get when(){return e.subtitle},get children(){var i=Nn();return u(i,()=>e.subtitle),i}}),null),u(s,()=>e.right),t})()}function On(e){switch(e){case"pdf":return"📕";case"docx":return"📘";case"markdown":return"📝";case"csv":return"📊";case"json":return"🧾";case"website":case"html":return"🌐";case"audio":return"🎙️";case"image":return"🖼️";case"text":return"📄";default:return"📄"}}var Fn=w('<div class="text-[11px] text-neutral-500 truncate">'),Dn=w('<div class="absolute right-0 top-7 z-20 bg-panel border border-edge rounded shadow-lg text-xs w-32 overflow-hidden"><button class="block w-full text-left px-3 py-1.5 hover:bg-white/5 text-neutral-200">Rename</button><button class="block w-full text-left px-3 py-1.5 text-red-300 hover:bg-red-500/10">Remove'),Pn=w('<div><span class="text-lg shrink-0"></span><div class="flex-1 min-w-0"><div class="text-sm text-neutral-100 truncate"></div></div><div class=relative><button class="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-white px-1"title=More>⋯'),Ze=w("<span>"),Un=w('<svg class="animate-spin h-3.5 w-3.5"viewBox="0 0 24 24"fill=none><circle cx=12 cy=12 r=9 stroke=currentColor stroke-width=2.5 opacity=0.25></circle><path d="M21 12a9 9 0 0 1-9 9"stroke=currentColor stroke-width=2.5 stroke-linecap=round>');function jn(e){const[t,n]=M(!1);let r;const s=o=>{r&&!r.contains(o.target)&&n(!1)};mt(()=>document.addEventListener("mousedown",s)),$e(()=>document.removeEventListener("mousedown",s));const i=o=>{o.preventDefault(),n(!0)},a=()=>e.resource.processingStatus;return(()=>{var o=Pn(),l=o.firstChild,m=l.nextSibling,c=m.firstChild,d=m.nextSibling,g=d.firstChild;o.$$contextmenu=i,je(o,"click",e.onOpen,!0),u(l,()=>On(e.resource.mediaKind)),u(c,()=>e.resource.displayName??e.resource.id),u(m,h(C,{get when(){return e.resource.sourceUrl},get children(){var x=Fn();return u(x,()=>e.resource.sourceUrl),x}}),null),u(o,h(Hn,{get status(){return a()},get error(){return e.resource.processingError}}),d);var f=r;return typeof f=="function"?se(f,d):r=d,g.$$click=x=>{x.stopPropagation(),n(p=>!p)},u(d,h(C,{get when(){return t()},get children(){var x=Dn(),p=x.firstChild,b=p.nextSibling;return x.$$click=v=>v.stopPropagation(),p.$$click=()=>{n(!1),e.onRename()},b.$$click=()=>{n(!1),e.onDelete()},x}}),null),P(()=>V(o,`group relative flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors border ${e.active?"bg-accent/15 border-accent/40":"bg-panel border-edge hover:bg-white/[0.04] hover:border-white/20"}`)),o})()}function Hn(e){const t=()=>{switch(e.status){case"uploading":return"text-blue-400";case"processing":case"extracting":case"segmenting":case"embedding":return"text-blue-400";case"completed":return"text-emerald-400";case"failed":return"text-red-400";default:return"text-neutral-500"}},n=()=>["uploading","processing","extracting","segmenting","embedding"].includes(e.status??""),r=()=>{if(e.error)return e.error;switch(e.status){case"uploading":return"Uploading…";case"processing":return"Processing…";case"extracting":return"Extracting text…";case"segmenting":return"Splitting into chunks…";case"embedding":return"Computing embeddings…";case"completed":return"Indexed and ready to chat";case"failed":return"Pipeline failed";default:return e.status??""}},s=()=>{switch(e.status){case"completed":return"✓";case"failed":return"✕";default:return null}};return h(C,{get when(){return e.status},get children(){var i=Ze();return u(i,h(C,{get when(){return n()},get fallback(){return(()=>{var a=Ze();return u(a,s),a})()},get children(){return h(zn,{})}})),P(a=>{var o=`text-xs shrink-0 inline-flex items-center ${t()}`,l=r();return o!==a.e&&V(i,a.e=o),l!==a.t&&ee(i,"title",a.t=l),a},{e:void 0,t:void 0}),i}})}function zn(){return Un()}K(["click","contextmenu"]);let Gn=0;async function qn(e,t){const n=[];for(const r of t){const s=`res:source.${Date.now().toString(36)}.${Gn++}`,i={id:s,media_type:r.type||Kn(r.name),size:r.size,sha256:"",role:"asset",behavioral:!1,canonical_content:!1,blobKey:"",status:"pending",displayName:r.name,ingestedAt:new Date().toISOString(),processingStatus:"uploading",mediaKind:Be(r.type,r.name)};e.mutate((o,l)=>{l[s]=i});const a=performance.now();try{const o=await Q(r);await e.blobs.put(o,r),e.mutate((l,m)=>{const c=m[s];c&&(c.sha256=o,c.blobKey=o,c.status="ready",c.processingStatus="processing",l.resources.push(W(c)))}),e.appendJournal({actor:"user",tool:"ingest_files",args:{name:r.name,size:r.size},resultRefs:[s],durationMs:Math.round(performance.now()-a),ok:!0}),n.push(s)}catch(o){e.mutate((l,m)=>{const c=m[s];c&&(c.processingStatus="failed",c.processingError=o.message??String(o),c.status="error")}),e.appendJournal({actor:"user",tool:"ingest_files",args:{name:r.name,size:r.size},resultRefs:[s],durationMs:Math.round(performance.now()-a),ok:!1,error:o.message??String(o)})}}return{resourceIds:n}}function Kn(e){switch(e.toLowerCase().split(".").pop()){case"pdf":return"application/pdf";case"md":return"text/markdown";case"txt":return"text/plain";case"html":case"htm":return"text/html";case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";case"csv":return"text/csv";case"json":return"application/json";case"mp3":return"audio/mpeg";case"wav":return"audio/wav";case"m4a":return"audio/mp4";default:return"application/octet-stream"}}function Be(e,t){const n=(e||"").toLowerCase(),r=t.toLowerCase().split(".").pop()??"";return n.includes("pdf")||r==="pdf"?"pdf":n.includes("wordprocessingml")||r==="docx"?"docx":n==="text/markdown"||r==="md"?"markdown":n==="text/csv"||r==="csv"?"csv":n==="application/json"||r==="json"?"json":n.startsWith("audio/")||["mp3","wav","m4a"].includes(r)?"audio":n.startsWith("image/")?"image":n.includes("html")||["html","htm"].includes(r)?"html":n.startsWith("text/")?"text":"other"}function Wn(e){const t=[0];for(let n=0;n<e.length;n++)e.charCodeAt(n)===10&&t.push(n+1);return t}function et(e,t){let n=0,r=e.length-1;for(;n<r;){const s=n+r+1>>>1;e[s]<=t?n=s:r=s-1}return n+1}function _t(e,t,n){return Math.max(t,Math.min(n,e))}function Jn(e,t,n,r){const s=e.slice(t,r),i=[`

`,`
`,". ","! ","? "," "];for(const a of i){const o=s.lastIndexOf(a);if(o===-1)continue;const l=t+o+a.length;if(l-t>=n)return l}return _t(r,t+n,e.length)}function tt(e,t,n){let r=t,s=n;for(;r<s&&/\s/.test(e[r]);)r+=1;for(;s>r&&/\s/.test(e[s-1]);)s-=1;return{start:r,end:s}}function Vn(e,t,n={}){const r=String(e||"").replace(/\r\n/g,`
`);if(!r.trim())return[];const s=n.targetChars??1600,i=n.overlapChars??300,a=n.maxChars??s+200,o=n.minChars??Math.max(300,Math.floor(s*.45)),l=[];let m=0,c=0;const d=Wn(r);for(;m<r.length&&c<1e4;){c+=1;const g=Math.min(r.length,m+a),f=Math.min(r.length,m+s),x=Jn(r,m,o,Math.max(f,g)),p=tt(r,m,x);if(p.end<=p.start)break;const b=l.length+1;if(l.push({id:`seg-${String(b).padStart(4,"0")}`,document:t,text:r.slice(p.start,p.end),start:p.start,end:p.end,line_from:et(d,p.start),line_to:et(d,Math.max(p.start,p.end-1))}),p.end>=r.length)break;const v=_t(p.end-i,m+1,r.length);m=tt(r,v,r.length).start}return l}let Yn=0;async function kt(e,t,n={}){const r=performance.now(),s=e.resources()[t];if(!s)throw new Error(`document not found: ${t}`);if(s.role!=="document")throw new Error(`segmentRecursive expects role 'document', got '${s.role}'`);const i=await e.blobs.get(s.sha256);if(!i)throw new Error(`blob missing for ${t}`);const a=await i.text(),o=Vn(a,s.id,n);if(o.length===0)throw new Error("document produced 0 segments");const l=o.map(f=>JSON.stringify(f)).join(`
`)+`
`,m=new Blob([l],{type:"application/x-ndjson"}),c=await Q(m);await e.blobs.put(c,m);const d=`res:segments.${Date.now().toString(36)}.${Yn++}`,g={id:d,media_type:"application/x-ndjson",size:m.size,sha256:c,role:"segment-set",behavioral:!1,canonical_content:!0,derived_from:[s.id],blobKey:c,status:"ready",displayName:`${s.displayName??s.id} (${o.length} segments)`,ingestedAt:new Date().toISOString()};return e.mutate((f,x)=>{x[d]=g,f.resources.push(W(g)),f.knowledge||(f.knowledge={}),f.knowledge.segments={resource:d,format:"elf-segments-jsonl/v1"},f.knowledge.documents=f.knowledge.documents??[],f.knowledge.documents.includes(s.id)||f.knowledge.documents.push(s.id)}),e.appendJournal({actor:"user",tool:"segment_recursive",args:{source:s.id,target:n.targetChars??1600,overlap:n.overlapChars??300,count:o.length},resultRefs:[d],durationMs:Math.round(performance.now()-r),ok:!0}),{resourceId:d,segmentCount:o.length}}function Xn(e){return new Worker("/open/notebook/assets/embed.worker-D54H4KV9.js",{type:"module",name:e==null?void 0:e.name})}const de="Xenova/all-MiniLM-L6-v2",He="q8";let he=null,St=1;const ve=new Map;function Ct(){return he||(he=new Xn,he.onmessage=e=>{var r;const t=e.data,n=ve.get(t.id);n&&(t.type==="progress"?(r=n.onProgress)==null||r.call(n,t.done,t.total,t.stage):t.type==="done"?(ve.delete(t.id),n.resolve({dim:t.dim,count:t.count,embeddings:t.embeddings})):(ve.delete(t.id),n.reject(new Error(t.error))))},he)}let Qn=0;async function Zn(e,t={}){const n=t.modelId??de,r=t.dtype??He,s=Ct(),i=St++,a=await new Promise((o,l)=>{ve.set(i,{resolve:o,reject:l}),s.postMessage({type:"embed-query",id:i,modelId:n,dtype:r,query:e})});return new Float32Array(a.embeddings,0,a.dim)}async function Et(e,t,n={}){const r=performance.now(),s=e.resources()[t];if(!s)throw new Error(`segment-set not found: ${t}`);if(s.role!=="segment-set")throw new Error(`embed expects role 'segment-set', got '${s.role}'`);const i=await e.blobs.get(s.sha256);if(!i)throw new Error(`blob missing for ${t}`);const o=(await i.text()).split(`
`).filter(k=>k.trim().length>0).map(k=>JSON.parse(k)),l=n.modelId??de,m=n.dtype??He,c=n.batchSize??16,d=Ct(),g=St++,f=await new Promise((k,_)=>{ve.set(g,{resolve:k,reject:_,onProgress:n.onProgress}),d.postMessage({type:"embed",id:g,modelId:l,dtype:m,segments:o.map(A=>A.text),batchSize:c})}),x=new Blob([f.embeddings],{type:"application/octet-stream"}),p=await Q(x);await e.blobs.put(p,x);const b=`res:embed.${Date.now().toString(36)}.${Qn++}`,v=`res:model.embed.${l.replace(/[^a-z0-9]/gi,"_")}`,y={id:v,media_type:"application/x-onnx-pipeline",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${l}`],blobKey:"",status:"ready",displayName:`embed: ${l} (${m})`,ingestedAt:new Date().toISOString()},$={id:b,media_type:"application/octet-stream",size:x.size,sha256:p,role:"embedding-set",behavioral:!1,canonical_content:!1,derived_from:[s.id,v],blobKey:p,status:"ready",displayName:`embeddings (${f.count} × ${f.dim}, ${l.split("/").pop()})`,ingestedAt:new Date().toISOString()};return e.mutate((k,_)=>{_[v]||(_[v]=y,k.resources.push(W(y))),_[b]=$,k.resources.push(W($)),k.knowledge||(k.knowledge={}),k.knowledge.embeddings=[{resource:b,dimensions:f.dim,dtype:"float32"}];const A=k.fulfillments;A["retrieve-segments"]=[{id:"flat-cosine",kind:"embedded-index",embedding_set:b,metric:"cosine"}],k.interaction.operations.includes("retrieve-segments")||k.interaction.operations.push("retrieve-segments")}),e.appendJournal({actor:"user",tool:"embed",args:{source:s.id,model:l,dtype:m,count:f.count,dim:f.dim},resultRefs:[b,v],durationMs:Math.round(performance.now()-r),ok:!0}),{resourceId:b,modelHandleResourceId:v,dim:f.dim,count:f.count}}const Oe=new WeakMap;function be(e,t,n,r){e.mutate((s,i)=>{const a=i[t];a&&(a.processingStatus=n,r?a.processingError=r:delete a.processingError)})}function er(e,t){const n=e.resources()[t];if(!n)return null;for(const r of n.derived_from??[]){const s=e.resources()[r];if((s==null?void 0:s.role)==="asset")return r}return null}function tr(e,t){const n=Object.values(e.resources()),r=n.find(s=>s.role==="segment-set"&&(s.derived_from??[]).includes(t));return r?n.some(s=>s.role==="embedding-set"&&(s.derived_from??[]).includes(r.id)):!1}async function nr(e,t){const n=er(e,t);try{if(tr(e,t)){n&&be(e,n,"completed");return}n&&be(e,n,"segmenting");const r=await kt(e,t);n&&be(e,n,"embedding"),await Et(e,r.resourceId),n&&be(e,n,"completed")}catch(r){const s=r.message??String(r);n&&be(e,n,"failed",s),console.warn("auto-pipeline failed:",r)}}async function rr(e){const t=Oe.get(e);if(t&&!t.running){t.running=!0;try{for(;t.pending.length>0;){const n=t.pending.shift();await nr(e,n)}}finally{t.running=!1}}}function Re(e,t){let n=Oe.get(e);n||(n={running:!1,pending:[]},Oe.set(e,n)),!n.pending.includes(t)&&(n.pending.push(t),rr(e))}let nt=0;async function sr(e,t){const n=performance.now(),r=await Q(t);await e.blobs.put(r,t);const s=await t.text(),i=new Blob([s],{type:"text/plain;charset=utf-8"}),a=await Q(i);await e.blobs.put(a,i);const o=`res:source.${Date.now().toString(36)}.${nt++}`,l=`res:text.${Date.now().toString(36)}.${nt++}`,m={id:o,media_type:"text/csv",size:t.size,sha256:r,role:"asset",behavioral:!1,canonical_content:!1,blobKey:r,status:"ready",displayName:t.name,ingestedAt:new Date().toISOString(),processingStatus:"segmenting",mediaKind:"csv"},c={id:l,media_type:"text/plain",size:i.size,sha256:a,role:"document",behavioral:!1,canonical_content:!0,derived_from:[o],blobKey:a,status:"ready",displayName:`${t.name.replace(/\.csv$/i,"")}.csv.txt`,ingestedAt:new Date().toISOString()};return e.mutate((d,g)=>{g[o]=m,g[l]=c,d.resources.push(W(m)),d.resources.push(W(c))}),e.appendJournal({actor:"user",tool:"ingest_csv",args:{name:t.name,size:t.size},resultRefs:[o,l],durationMs:Math.round(performance.now()-n),ok:!0}),Se(e).catch(d=>console.warn("auto-generate skipped:",d)),Re(e,l),{sourceId:o,documentId:l}}function ir(e){return new Worker("/open/notebook/assets/extract.worker-JRfBg5NP.js",{type:"module",name:e==null?void 0:e.name})}let xe=null,or=1;const Fe=new Map;function ar(){return xe||(xe=new ir,xe.onmessage=e=>{const t=Fe.get(e.data.id);t&&(Fe.delete(e.data.id),t(e.data))},xe)}async function lr(e){const t=ar(),n=or++;return new Promise(r=>{Fe.set(n,r),t.postMessage({...e,id:n},[e.buffer])})}let cr=0;async function It(e,t){var g;const n=performance.now(),r=e.resources()[t];if(!r)throw new Error(`source resource not found: ${t}`);const s=await e.blobs.get(r.sha256);if(!s)throw new Error(`blob missing for ${t}`);const i=await s.arrayBuffer();let a;try{a=await lr({mediaType:r.media_type,fileName:r.displayName,buffer:i})}catch(f){throw rt(e,t,f.message??String(f)),f}if(!a.ok||a.text===void 0){const f=a.error??"extraction failed";throw rt(e,t,f),new Error(f)}const o=new Blob([a.text],{type:"text/plain;charset=utf-8"}),l=await Q(o);await e.blobs.put(l,o);const m=`res:text.${Date.now().toString(36)}.${cr++}`,c=((g=r.displayName)==null?void 0:g.replace(/\.[^.]+$/,""))??r.id,d={id:m,media_type:"text/plain",size:o.size,sha256:l,role:"document",behavioral:!1,canonical_content:!0,derived_from:[r.id],blobKey:l,status:"ready",displayName:`${c}.txt`,ingestedAt:new Date().toISOString()};return e.mutate((f,x)=>{x[m]=d,f.resources.push(W(d));const p=x[t];p&&(p.processingStatus="extracting")}),e.appendJournal({actor:"user",tool:"extract_text",args:{source:r.id,mediaType:r.media_type,pageCount:a.pageCount},resultRefs:[m],durationMs:Math.round(performance.now()-n),ok:!0}),Se(e).catch(f=>console.warn("auto-generate skipped:",f)),Re(e,m),{resourceId:m}}function rt(e,t,n){e.mutate((r,s)=>{const i=s[t];i&&(i.processingStatus="failed",i.processingError=n)})}const dr={pdf:!0,docx:!0,text:!0,markdown:!0,html:!0};async function Rt(e,t){const n=[],r=[];for(const o of t)Be(o.type,o.name)==="csv"?n.push(o):r.push(o);const s=[];for(const o of n){const l=await sr(e,o);s.push(l.sourceId)}const a=(await qn(e,r)).resourceIds;for(let o=0;o<r.length;o++){const l=a[o],m=r[o],c=Be(m.type,m.name);if(!dr[c]){e.mutate((d,g)=>{const f=g[l];f&&(f.processingStatus="completed")});continue}It(e,l).catch(d=>{console.warn("extractText failed:",d)})}return{resourceIds:[...s,...a]}}let st=0;async function ur(e,t){var d;const n=performance.now(),r=((d=t.title)==null?void 0:d.trim())||"Pasted Text",s=t.content,i=new Blob([s],{type:"text/plain;charset=utf-8"}),a=await Q(i);await e.blobs.put(a,i);const o=`res:source.${Date.now().toString(36)}.${st++}`,l=`res:text.${Date.now().toString(36)}.${st++}`,m={id:o,media_type:"text/plain",size:i.size,sha256:a,role:"asset",behavioral:!1,canonical_content:!1,blobKey:a,status:"ready",displayName:r,ingestedAt:new Date().toISOString(),processingStatus:"segmenting",mediaKind:"text"},c={id:l,media_type:"text/plain",size:i.size,sha256:a,role:"document",behavioral:!1,canonical_content:!0,derived_from:[o],blobKey:a,status:"ready",displayName:`${r}.txt`,ingestedAt:new Date().toISOString()};return e.mutate((g,f)=>{f[o]=m,f[l]=c,g.resources.push(W(m)),g.resources.push(W(c))}),e.appendJournal({actor:"user",tool:"ingest_text",args:{title:r,characterCount:s.length},resultRefs:[o,l],durationMs:Math.round(performance.now()-n),ok:!0}),Se(e).catch(g=>console.warn("auto-generate skipped:",g)),Re(e,l),{sourceId:o,documentId:l}}class re extends Error{constructor(n,r,s){super(r);me(this,"kind");me(this,"status");this.kind=n,this.status=s,this.name="UrlFetchError"}}async function fr(e,t="reader"){switch(t){case"direct":return gr(e);case"reader":return mr(e);case"corsproxy":return hr(e)}}async function gr(e){let t;try{t=await fetch(e,{method:"GET",mode:"cors",redirect:"follow",credentials:"omit"})}catch{throw new re("cors",`Could not fetch ${e} directly. The site likely blocks cross-origin requests — switch URL fetch mode to "reader" in Settings, or paste the page text instead.`)}if(!t.ok)throw new re("http",`${e} returned ${t.status} ${t.statusText}`,t.status);const n=t.headers.get("content-type")??"text/html",r=await t.arrayBuffer(),s=Tt(n)??"utf-8";if(n.includes("text/html")||n.includes("xhtml")){const i=new TextDecoder(s).decode(r),{text:a,title:o}=At(i,e);return{url:e,finalUrl:t.url||e,contentType:n,pageTitle:o,rawBytes:r,extractedText:a}}if(n.startsWith("text/")){const i=new TextDecoder(s).decode(r);return{url:e,finalUrl:t.url||e,contentType:n,pageTitle:e,rawBytes:r,extractedText:i}}throw new re("parse",`${e} returned ${n}; only HTML/text URLs are supported.`)}async function mr(e){const t=`https://r.jina.ai/${e}`;let n;try{n=await fetch(t,{method:"GET",headers:{Accept:"text/plain"},mode:"cors",credentials:"omit"})}catch{throw new re("network","Reader proxy could not be reached. Check your network connection or switch URL fetch mode in Settings.")}if(!n.ok)throw new re("http",`Reader proxy returned ${n.status} ${n.statusText} for ${e}`,n.status);const r=await n.text(),{title:s,body:i}=pr(r,e),a=new TextEncoder().encode(i).buffer;return{url:e,finalUrl:e,contentType:"text/markdown",pageTitle:s,rawBytes:a,extractedText:i}}function pr(e,t){const n=e.split(`
`);let r=t,s=0;for(let a=0;a<Math.min(n.length,8);a++){const o=n[a],l=/^Title:\s*(.+)$/i.exec(o);if(l&&(r=l[1].trim()),/^Markdown Content:?$/i.test(o)){s=a+1;break}}const i=n.slice(s).join(`
`).trim();return{title:r,body:i||e}}async function hr(e){const t=`https://corsproxy.io/?${encodeURIComponent(e)}`;let n;try{n=await fetch(t,{method:"GET",mode:"cors",credentials:"omit"})}catch{throw new re("network","CORS proxy could not be reached. Switch URL fetch mode in Settings.")}if(!n.ok)throw new re("http",`CORS proxy returned ${n.status} ${n.statusText}`,n.status);const r=n.headers.get("content-type")??"text/html",s=await n.arrayBuffer(),i=Tt(r)??"utf-8",a=new TextDecoder(i).decode(s),{text:o,title:l}=At(a,e);return{url:e,finalUrl:e,contentType:r,pageTitle:l,rawBytes:s,extractedText:o}}function Tt(e){const t=/charset=([^;]+)/i.exec(e);return t?t[1].trim():null}function At(e,t){var o,l,m,c;const r=new DOMParser().parseFromString(e,"text/html"),s=((l=(o=r.querySelector("title"))==null?void 0:o.textContent)==null?void 0:l.trim())||((c=(m=r.querySelector('meta[property="og:title"]'))==null?void 0:m.getAttribute("content"))==null?void 0:c.trim())||t;for(const d of["script","style","noscript","nav","header","footer","aside","iframe","form",'[role="navigation"]','[role="banner"]','[role="contentinfo"]'])r.querySelectorAll(d).forEach(g=>g.remove());const i=r.querySelector("article")||r.querySelector("main")||r.querySelector('[role="main"]')||r.body;return{text:((i==null?void 0:i.textContent)??"").split(`
`).map(d=>d.replace(/[ \t]+/g," ").trimEnd()).filter((d,g,f)=>d.trim()!==""||g>0&&f[g-1].trim()!=="").join(`
`).trim(),title:s}}let it=0;async function br(e,t){const n=performance.now(),r=t.trim(),s=`res:source.${Date.now().toString(36)}.${it++}`,i={id:s,media_type:"text/html",size:0,sha256:"",role:"asset",behavioral:!1,canonical_content:!1,blobKey:"",status:"pending",displayName:r,ingestedAt:new Date().toISOString(),processingStatus:"processing",sourceUrl:r,mediaKind:"website"};e.mutate((a,o)=>{o[s]=i});try{const a=await fr(r,bt().urlFetchMode),o=new Blob([a.rawBytes],{type:a.contentType}),l=await Q(o);await e.blobs.put(l,o);const m=new Blob([a.extractedText],{type:"text/plain;charset=utf-8"}),c=await Q(m);await e.blobs.put(c,m);const d=`res:text.${Date.now().toString(36)}.${it++}`,g={id:s,media_type:a.contentType,size:a.rawBytes.byteLength,sha256:l,role:"asset",behavioral:!1,canonical_content:!1,blobKey:l,status:"ready",displayName:a.pageTitle||r,ingestedAt:new Date().toISOString(),processingStatus:"segmenting",sourceUrl:r,mediaKind:"website"},f={id:d,media_type:"text/plain",size:m.size,sha256:c,role:"document",behavioral:!1,canonical_content:!0,derived_from:[s],blobKey:c,status:"ready",displayName:`${a.pageTitle||r}.txt`,ingestedAt:new Date().toISOString()};return e.mutate((x,p)=>{p[s]=g,p[d]=f,x.resources.push(W(g)),x.resources.push(W(f))}),e.appendJournal({actor:"user",tool:"ingest_url",args:{url:r,finalUrl:a.finalUrl,title:a.pageTitle},resultRefs:[s,d],durationMs:Math.round(performance.now()-n),ok:!0}),Se(e).catch(x=>console.warn("auto-generate skipped:",x)),Re(e,d),{sourceId:s,documentId:d}}catch(a){const o=a instanceof re?a.message:a.message??String(a);return e.mutate((l,m)=>{const c=m[s];c&&(c.processingStatus="failed",c.processingError=o,c.status="error")}),e.appendJournal({actor:"user",tool:"ingest_url",args:{url:r},resultRefs:[s],durationMs:Math.round(performance.now()-n),ok:!1,error:o}),{sourceId:s}}}var xr=w('<form class=space-y-4><div><label class="block text-xs text-neutral-400 mb-1">Title (optional)</label><input class="w-full bg-bg border border-edge rounded px-3 py-1.5 text-sm focus:outline-none focus:border-accent/60"placeholder="Enter a title for this text…"></div><div><div class="flex items-center justify-between mb-1"><label class="text-xs text-neutral-400">Content</label><button type=button class="text-[11px] text-accent hover:underline">Paste from clipboard</button></div><textarea class="w-full min-h-[260px] bg-bg border border-edge rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-accent/60 resize-y"placeholder="Paste or type your text here…"required></textarea><p class="text-[11px] text-neutral-500 mt-1"> characters</p></div><div class="flex justify-end gap-2 pt-2"><button type=button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Cancel</button><button type=submit>'),wr=w('<span class="flex items-center gap-2"><span>📋</span><span>Add Text Source');function vr(e){const[t,n]=M(""),[r,s]=M(""),[i,a]=M(!1),o=()=>{n(""),s(""),a(!1)},l=()=>{o(),e.onOpenChange(!1)},m=async d=>{d.preventDefault();const g=r().trim();if(g){a(!0);try{await e.onSubmit(t().trim()||"Pasted Text",g),l()}finally{a(!1)}}},c=async()=>{try{const d=await navigator.clipboard.readText();s(d)}catch{}};return h(ue,{get open(){return e.open},onClose:l,size:"max-w-2xl",get title(){return wr()},get children(){var d=xr(),g=d.firstChild,f=g.firstChild,x=f.nextSibling,p=g.nextSibling,b=p.firstChild,v=b.firstChild,y=v.nextSibling,$=b.nextSibling,k=$.nextSibling,_=k.firstChild,A=p.nextSibling,E=A.firstChild,O=E.nextSibling;return d.addEventListener("submit",m),x.$$input=T=>n(T.currentTarget.value),y.$$click=c,$.$$input=T=>s(T.currentTarget.value),u(k,()=>r().length,_),E.$$click=l,u(O,()=>i()?"Adding…":"Add Source"),P(T=>{var D=`px-3 py-1.5 text-xs rounded border ${!r().trim()||i()?"border-edge bg-white/5 text-neutral-500 cursor-not-allowed":"bg-accent border-accent/60 text-white hover:bg-accent/90"}`,L=!r().trim()||i();return D!==T.e&&V(O,T.e=D),L!==T.t&&(O.disabled=T.t=L),T},{e:void 0,t:void 0}),P(()=>x.value=t()),P(()=>$.value=r()),d}})}K(["input","click"]);var yr=w(`<div class=space-y-4><p class="text-xs text-neutral-400">One URL per line. Each becomes its own source. Pages that block cross-origin requests will fail — paste the page text instead.</p><textarea class="w-full min-h-[180px] bg-bg border border-edge rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-accent/60 resize-y"placeholder="https://example.com
https://another-site.com
https://third-website.org"></textarea><p class="text-[11px] text-neutral-500"> URL<!> detected</p><div class="flex justify-end gap-2 pt-2"><button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Cancel</button><button>`),$r=w('<span class="flex items-center gap-2"><span>🔗</span><span>Add Website URLs');function _r(e){const[t,n]=M(""),[r,s]=M(!1),i=J(()=>t().split(`
`).map(l=>l.trim()).filter(l=>l.length>0)),a=()=>{n(""),s(!1),e.onOpenChange(!1)},o=async()=>{const l=i();if(l.length!==0){s(!0);try{await e.onSubmit(l),a()}finally{s(!1)}}};return h(ue,{get open(){return e.open},onClose:a,size:"max-w-2xl",get title(){return $r()},get children(){var l=yr(),m=l.firstChild,c=m.nextSibling,d=c.nextSibling,g=d.firstChild,f=g.nextSibling;f.nextSibling;var x=d.nextSibling,p=x.firstChild,b=p.nextSibling;return c.$$input=v=>n(v.currentTarget.value),u(d,()=>i().length,g),u(d,()=>i().length===1?"":"s",f),p.$$click=a,b.$$click=o,u(b,(()=>{var v=q(()=>!!r());return()=>v()?"Adding…":`Add ${i().length} Website${i().length===1?"":"s"}`})()),P(v=>{var y=`px-3 py-1.5 text-xs rounded border ${i().length===0||r()?"border-edge bg-white/5 text-neutral-500 cursor-not-allowed":"bg-accent border-accent/60 text-white hover:bg-accent/90"}`,$=i().length===0||r();return y!==v.e&&V(b,v.e=y),$!==v.t&&(b.disabled=v.t=$),v},{e:void 0,t:void 0}),P(()=>c.value=t()),l}})}K(["input","click"]);var kr=w('<p class="text-[11px] text-neutral-500 text-center">Files keep processing in the background — close this dialog any time.'),Sr=w('<div class=space-y-5><div><h2 class="text-base font-medium text-neutral-100 mb-1">Add sources</h2><p class="text-xs text-neutral-400">Sources let NotebookELF base its responses on the information that matters most to you.</p><p class="text-[11px] text-neutral-500 mt-1">(PDFs, course readings, research notes, meeting transcripts, CSVs, web pages…)</p></div><div><div class="flex flex-col items-center gap-3"><div class="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-edge"><span class=text-xl>⤴</span></div><div><h3 class="font-medium text-neutral-100 mb-1 text-sm"></h3><p class="text-xs text-neutral-400">Drag & drop or <button class="text-accent hover:underline">choose file</button> to upload</p></div><p class="text-[11px] text-neutral-500">PDF · TXT · Markdown · DOCX · CSV · HTML</p><input type=file multiple class=hidden accept=.pdf,.txt,.md,.markdown,.docx,.csv,.html,.htm,.json></div></div><div class="grid grid-cols-2 gap-3"><button class="border border-edge rounded-lg p-4 flex flex-col items-center gap-1.5 hover:bg-white/[0.03] hover:border-white/30 transition-colors disabled:opacity-50"><span class=text-xl>🔗</span><span class="text-sm font-medium text-neutral-100">Link · Website</span><span class="text-[11px] text-neutral-500">Multiple URLs at once</span></button><button class="border border-edge rounded-lg p-4 flex flex-col items-center gap-1.5 hover:bg-white/[0.03] hover:border-white/30 transition-colors disabled:opacity-50"><span class=text-xl>📋</span><span class="text-sm font-medium text-neutral-100">Paste · Copied Text</span><span class="text-[11px] text-neutral-500">Add copied content'),Cr=w('<span class="flex items-center gap-2"><span>📓</span><span>NotebookELF');function Er(e){const t=Z(),[n,r]=M(!1),[s,i]=M(!1),[a,o]=M(!1),[l,m]=M(!1);let c;const d=()=>e.onOpenChange(!1),g=async v=>{if(v.length){i(!0);try{await Rt(t,v),d()}finally{i(!1)}}},f=async v=>{var k;const y=v.target;if(!((k=y.files)!=null&&k.length))return;const $=Array.from(y.files);y.value="",await g($)},x=async v=>{v.preventDefault(),r(!1);const y=v.dataTransfer;if(!y)return;const $=[];for(const k of Array.from(y.items??[]))if(k.kind==="file"){const _=k.getAsFile();_&&$.push(_)}if($.length===0&&y.files)for(const k of Array.from(y.files))$.push(k);await g($)},p=async(v,y)=>{i(!0);try{await ur(t,{title:v,content:y}),d()}finally{i(!1)}},b=async v=>{i(!0);try{await Promise.allSettled(v.map(y=>br(t,y))),d()}finally{i(!1)}};return[h(ue,{get open(){return e.open},onClose:d,size:"max-w-3xl",get title(){return Cr()},get children(){var v=Sr(),y=v.firstChild,$=y.nextSibling,k=$.firstChild,_=k.firstChild,A=_.nextSibling,E=A.firstChild,O=E.nextSibling,T=O.firstChild,D=T.nextSibling,L=A.nextSibling,B=L.nextSibling,z=$.nextSibling,S=z.firstChild,R=S.nextSibling;$.addEventListener("drop",x),$.addEventListener("dragleave",()=>r(!1)),$.addEventListener("dragover",I=>{I.preventDefault(),r(!0)}),u(E,()=>s()?"Processing…":"Upload sources"),D.$$click=()=>c==null?void 0:c.click(),B.addEventListener("change",f);var N=c;return typeof N=="function"?se(N,B):c=B,S.$$click=()=>m(!0),R.$$click=()=>o(!0),u(v,h(C,{get when(){return s()},get children(){return kr()}}),null),P(I=>{var j=`border-2 border-dashed rounded-lg p-10 text-center transition-colors ${n()?"border-accent bg-accent/10":"border-edge hover:border-white/30"} ${s()?"opacity-50 pointer-events-none":""}`,H=s(),G=s(),Y=s(),ne=s();return j!==I.e&&V($,I.e=j),H!==I.t&&(D.disabled=I.t=H),G!==I.a&&(B.disabled=I.a=G),Y!==I.o&&(S.disabled=I.o=Y),ne!==I.i&&(R.disabled=I.i=ne),I},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),v}}),h(vr,{get open(){return a()},onOpenChange:o,onSubmit:p}),h(_r,{get open(){return l()},onOpenChange:m,onSubmit:b})]}K(["click"]);var Ir=w('<a class="text-[11px] text-accent hover:underline truncate ml-2"target=_blank rel=noreferrer>'),Rr=w('<div class="px-3 py-3">'),Tr=w('<div class="absolute inset-0 z-10 bg-bg flex flex-col"><div class="flex items-center justify-between px-3 py-2 border-b border-edge bg-panel"><div class="flex items-center gap-2 min-w-0"><button class="text-neutral-400 hover:text-white text-xs"title="Back to sources">←</button><span class="text-sm font-medium text-neutral-100 truncate"></span></div></div><div class="flex-1 overflow-auto font-mono text-[12px] leading-5">'),Ar=w('<div class="p-6 text-neutral-500 text-xs">loading…'),Mr=w('<div class="p-6 text-neutral-500 text-xs">No extracted text yet. If extraction failed, try re-adding the source.'),Lr=w('<div><span class="text-neutral-600 select-none w-10 text-right shrink-0"></span><span class="text-neutral-200 whitespace-pre-wrap break-words flex-1">');function Nr(e){const t=Z();let n;const r=()=>Object.values(t.resources()).find(o=>o.role==="document"&&(o.derived_from??[]).includes(e.source.id))??null,[s]=xt(()=>{var a;return((a=r())==null?void 0:a.sha256)??null},async a=>{if(!a)return null;const o=await t.blobs.get(a);return o?o.text():null});ie(()=>{e.highlight});const i=()=>(s()??"").split(`
`);return(()=>{var a=Tr(),o=a.firstChild,l=o.firstChild,m=l.firstChild,c=m.nextSibling,d=o.nextSibling;return je(m,"click",e.onClose,!0),u(c,()=>e.source.displayName??e.source.id),u(o,h(C,{get when(){return e.source.sourceUrl},get children(){var g=Ir();return u(g,()=>e.source.sourceUrl),P(()=>ee(g,"href",e.source.sourceUrl)),g}}),null),u(d,h(C,{get when(){return q(()=>s()!==null)()&&s()!==void 0},get fallback(){return h(C,{get when(){return s.loading},get fallback(){return Mr()},get children(){return Ar()}})},get children(){var g=Rr();return u(g,h(te,{get each(){return i()},children:(f,x)=>{const p=x()+1,b=e.highlight&&p>=e.highlight.fromLine&&p<=e.highlight.toLine;return e.highlight&&e.highlight.fromLine,(()=>{var v=Lr(),y=v.firstChild,$=y.nextSibling;return V(v,`flex gap-3 px-2 py-0.5 rounded ${b?"bg-yellow-500/15":""}`),u(y,p),u($,f||" "),v})()}})),g}})),a})()}K(["click"]);var Br=w('<form class=space-y-4><input class="w-full bg-bg border border-edge rounded px-3 py-1.5 text-sm focus:outline-none focus:border-accent/60"autofocus><div class="flex justify-end gap-2"><button type=button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Cancel</button><button type=submit class="px-3 py-1.5 text-xs rounded bg-accent border border-accent/60 text-white hover:bg-accent/90">Save');function Or(e){const[t,n]=M(e.initialName);ie(()=>{e.open&&n(e.initialName)});const r=()=>e.onOpenChange(!1),s=i=>{i.preventDefault();const a=t().trim();a&&(e.onSubmit(a),r())};return h(ue,{get open(){return e.open},onClose:r,size:"max-w-md",title:"Rename source",get children(){var i=Br(),a=i.firstChild,o=a.nextSibling,l=o.firstChild;return i.addEventListener("submit",s),a.$$input=m=>n(m.currentTarget.value),l.$$click=r,P(()=>a.value=t()),i}})}K(["input","click"]);async function Fr(e,t){const n=performance.now();if(!e.resources()[t])return{removed:[],stale:[]};const s=new Map;for(const c of Object.values(e.resources()))for(const d of c.derived_from??[]){const g=s.get(d)??[];g.push(c.id),s.set(d,g)}const i=new Set([t]),a=new Set,o=[t];for(;o.length>0;){const c=o.shift();for(const d of s.get(c)??[]){if(i.has(d))continue;const g=e.resources()[d];if(!g)continue;(g.derived_from??[]).filter(p=>!i.has(p)).length===0?(i.add(d),o.push(d)):a.add(d)}}const l=new Set;for(const c of Object.values(e.resources()))i.has(c.id)||c.sha256&&l.add(c.sha256);const m=[];for(const c of i){const d=e.resources()[c];d!=null&&d.sha256&&!l.has(d.sha256)&&m.push(d.sha256)}e.mutate((c,d)=>{for(const g of i)delete d[g];for(const g of a){const f=d[g];f&&(f.status="stale")}c.resources=c.resources.filter(g=>!i.has(g.id));for(const g of Object.keys(c.fulfillments??{}))c.fulfillments[g]=(c.fulfillments[g]??[]).filter(f=>{for(const x of Object.values(f))if(typeof x=="string"&&i.has(x))return!1;return!0})});for(const c of m)try{const d=e.blobs.pathFor(c),{deleteFile:g}=await Yt(async()=>{const{deleteFile:f}=await import("./index-BZyBrZFR.js").then(x=>x.a5);return{deleteFile:f}},__vite__mapDeps([0,1]));await g(d)}catch{}return e.appendJournal({actor:"user",tool:"delete_resource",args:{rootId:t,removed:[...i],stale:[...a]},resultRefs:[...i],durationMs:Math.round(performance.now()-n),ok:!0}),{removed:[...i],stale:[...a]}}function Dr(e,t,n){const r=n.trim();r&&(e.mutate((s,i)=>{const a=i[t];a&&(a.displayName=r)}),e.appendJournal({actor:"user",tool:"rename_resource",args:{resourceId:t,nextName:r},resultRefs:[t],durationMs:0,ok:!0}))}const Pr=`// transformers.js + ONNX binding-runtime — Phase 6.
//
// Reads packaged segments (JSONL with line_from/line_to), embeddings
// (Float32Array, count×dim), chat template, and pulls embedding +
// generation models from the HF mirror.
//
// Output is parsed via [CITE N] markers — same path the host RAG loop uses
// for tiny local models. Robust across SmolLM2 / Qwen / LFM2.

const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.1.0/+esm';

function patchCachesIfBroken() {
  const fakeCache = {
    match: async () => undefined,
    put: async () => undefined,
    add: async () => undefined,
    addAll: async () => undefined,
    delete: async () => false,
    keys: async () => [],
  };
  const fakeCaches = {
    open: async () => fakeCache,
    match: async () => undefined,
    has: async () => false,
    delete: async () => false,
    keys: async () => [],
  };
  let exists = false;
  try { exists = typeof globalThis.caches !== 'undefined'; } catch { exists = false; }
  if (!exists) {
    try {
      Object.defineProperty(globalThis, 'caches', {
        value: fakeCaches, writable: true, configurable: true,
      });
    } catch { /* fall back to env.useBrowserCache=false */ }
  } else {
    try { globalThis.caches.open = async () => fakeCache; } catch { /* ignore */ }
  }
}

const find = (manifest, predicate) => manifest.resources.find(predicate);
const findFulfillment = (manifest, op) =>
  ((manifest.fulfillments && manifest.fulfillments[op]) || [])[0] || null;

async function blobToFloat32(blob) {
  const buf = await blob.arrayBuffer();
  return new Float32Array(buf);
}

function dot(a, b, dim) {
  let s = 0;
  for (let i = 0; i < dim; i++) s += a[i] * b[i];
  return s;
}

function topK(qVec, embeddings, count, dim, k) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const off = i * dim;
    const v = embeddings.subarray(off, off + dim);
    const score = dot(qVec, v, dim);
    if (out.length < k) {
      out.push({ idx: i, score });
      if (out.length === k) out.sort((a, b) => a.score - b.score);
    } else if (score > out[0].score) {
      out[0] = { idx: i, score };
      for (let j = 1; j < out.length; j++) {
        if (out[j].score < out[j - 1].score) {
          const t = out[j]; out[j] = out[j - 1]; out[j - 1] = t;
        } else break;
      }
    }
  }
  return out.sort((a, b) => b.score - a.score);
}

const MARKER_RE = /\\[(?:cite[:\\s]*|\\^)(\\d+)\\]/gi;

function parseMarkers(raw, hits, segments, sourceLookup) {
  const text = (raw || '').trim();
  const citations = [];
  const seen = new Map();
  const segmentsOut = [];
  let lastEnd = 0;
  MARKER_RE.lastIndex = 0;
  let m;
  while ((m = MARKER_RE.exec(text)) !== null) {
    const promptIndex = Number(m[1]);
    const before = text.slice(lastEnd, m.index).trim();
    lastEnd = m.index + m[0].length;
    const hit = hits[promptIndex];
    let citationId;
    if (hit) {
      citationId = seen.get(promptIndex);
      if (citationId === undefined) {
        const seg = segments[hit.idx];
        const sourceId = seg.document;
        const sourceTitle = sourceLookup(sourceId);
        citationId = citations.length + 1;
        citations.push({
          citation_id: citationId,
          source_id: sourceId,
          source_title: sourceTitle,
          chunk_index: promptIndex,
          chunk_lines_from: seg.line_from || 1,
          chunk_lines_to: seg.line_to || 1,
          excerpt: seg.text.slice(0, 160).replace(/\\s+/g, ' ').trim(),
        });
        seen.set(promptIndex, citationId);
      }
    }
    if (before) segmentsOut.push({ text: before, citation_id: citationId });
    else if (citationId !== undefined && segmentsOut.length > 0) {
      const prev = segmentsOut[segmentsOut.length - 1];
      if (prev.citation_id === undefined) prev.citation_id = citationId;
    }
  }
  const trailing = text.slice(lastEnd).trim();
  if (trailing) segmentsOut.push({ text: trailing });
  if (segmentsOut.length === 0 && text) segmentsOut.push({ text });
  return { segments: segmentsOut, citations };
}

const SYSTEM_INSTRUCTIONS = \`Answer the question using ONLY the chunks below. After each claim, cite the chunk you used with [CITE N] where N is the number from the chunk header. If the chunks don't answer it, say "I don't have enough information in the sources to answer that." Plain prose. No JSON, no code fences, no bullet lists. Keep it under 6 sentences.\`;

export async function init({ manifest, resources, log }) {
  patchCachesIfBroken();
  const ui = mountUi(manifest);
  const status = (s) => { log && log(s); ui.log(s); };

  status('loading runtime…');
  const { pipeline, env } = await import(/* @vite-ignore */ TRANSFORMERS_CDN);
  env.allowLocalModels = false;
  env.useBrowserCache = false;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.numThreads = 1;

  const segRes = find(manifest, (r) => r.role === 'segment-set');
  const embRes = find(manifest, (r) => r.role === 'embedding-set');
  const tplRes = find(manifest, (r) => r.role === 'template');
  const embedModelRes = find(manifest,
    (r) => r.role === 'model' && r.media_type === 'application/x-onnx-pipeline'
      && r.id.startsWith('res:model.embed.'));
  const genFulfill = findFulfillment(manifest, 'generate-text');
  const genModelId = genFulfill && genFulfill.model;
  const embedModelId = embedModelRes?.fetch_urls?.[0]?.replace('https://huggingface.co/', '')
    || 'Xenova/all-MiniLM-L6-v2';

  if (!segRes || !embRes || !tplRes || !genModelId) {
    throw new Error('manifest missing one of: segment-set, embedding-set, template, generate-text fulfillment.model');
  }

  // Streaming-from-disk guardrail: transformers.js fetches model files from
  // huggingface.co. file:// origins can't issue cross-origin requests.
  const onDisk =
    typeof location !== 'undefined' &&
    (location.protocol === 'file:' || location.origin === 'null');
  if (onDisk) {
    throw new Error(
      'This .elf needs to fetch model weights from huggingface.co, but you opened it from disk (file://). Browsers refuse cross-origin requests from file://. Host the .elf on a local server, or rebuild with the wllama runtime + bundle mode "self-contained".',
    );
  }

  status(\`loading embedding model (\${embedModelId})…\`);
  ui.setProgress(15);
  let extractor;
  try {
    extractor = await pipeline('feature-extraction', embedModelId, {
      device: 'wasm', dtype: 'q8',
    });
  } catch (err) {
    throw new Error(\`Could not load embedding model "\${embedModelId}". \${(err && err.message) || err}\`);
  }

  status(\`loading generation model (\${genModelId})…\`);
  ui.setProgress(45);
  const webgpuDtype = (genFulfill && genFulfill.dtype_webgpu) || 'q4';
  const wasmDtype = (genFulfill && genFulfill.dtype_wasm) || 'q4';
  let generator;
  try {
    generator = await pipeline('text-generation', genModelId, { device: 'wasm', dtype: wasmDtype });
    status(\`wasm/\${wasmDtype} ready\`);
  } catch (err) {
    status(\`wasm/\${wasmDtype} failed (\${err && err.message ? err.message : err}); trying webgpu/\${webgpuDtype}…\`);
    generator = await pipeline('text-generation', genModelId, { device: 'webgpu', dtype: webgpuDtype });
    status(\`webgpu/\${webgpuDtype} ready\`);
  }
  ui.setProgress(85);

  status('decoding segments + embeddings…');
  const segText = await resources.get(segRes.id).text();
  const segments = segText.split('\\n').filter((l) => l.trim()).map((l) => JSON.parse(l));
  const embedDim = manifest.knowledge.embeddings[0].dimensions;
  const embeddings = await blobToFloat32(resources.get(embRes.id));
  if (embeddings.length !== segments.length * embedDim) {
    throw new Error(\`embedding count mismatch: \${embeddings.length} != \${segments.length} × \${embedDim}\`);
  }

  const sourceLookup = (id) => {
    const r = manifest.resources.find((rr) => rr.id === id);
    return (r && (r.displayName || r.id)) || id;
  };

  ui.setProgress(100);
  status('ready.');
  ui.ready();

  let abortFlag = { aborted: false };
  ui.onStop(() => { abortFlag.aborted = true; });

  ui.onAsk(async (query) => {
    abortFlag = { aborted: false };
    ui.appendUser(query);
    ui.startAssistant();

    try {
      const qOut = await extractor(query, { pooling: 'mean', normalize: true });
      const qVec = qOut.data;
      if (abortFlag.aborted) throw new Error('cancelled');

      const k = (manifest.interaction['retrieve-segments'] || {}).top_k || 4;
      const hits = topK(qVec, embeddings, segments.length, embedDim, Math.min(k, segments.length));

      const chunkBlocks = hits.map((h, i) => {
        const s = segments[h.idx];
        const title = sourceLookup(s.document);
        const body = s.text.slice(0, 700);
        return \`[Chunk \${i} | source: \${title} | lines \${s.line_from || 1}-\${s.line_to || 1}]\\n\${body}\`;
      }).join('\\n\\n---\\n\\n');

      ui.showSourceCards(hits.map((h, i) => ({
        promptIndex: i,
        sourceId: segments[h.idx].document,
      })));

      const messages = [
        { role: 'system', content: \`\${SYSTEM_INSTRUCTIONS}\\n\\nChunks:\\n\\n\${chunkBlocks}\` },
        { role: 'user', content: query },
      ];
      await new Promise((r) => setTimeout(r, 30));
      if (abortFlag.aborted) throw new Error('cancelled');

      const output = await generator(messages, {
        max_new_tokens: (genFulfill && genFulfill.max_new_tokens) || 320,
        temperature: 0.4,
        top_p: 0.9,
        do_sample: true,
        return_full_text: false,
      });
      if (abortFlag.aborted) throw new Error('cancelled');

      const lastMsg = output[0]?.generated_text?.at?.(-1);
      const raw = (lastMsg && lastMsg.content) || String(output[0]?.generated_text ?? '');
      const structured = parseMarkers(raw, hits, segments, sourceLookup);
      ui.finishAssistant(structured);
    } catch (err) {
      const message = (err && err.message) ? err.message : String(err);
      ui.errorAssistant(message);
    }
  });

  ui.onCitationClick((citation) => {
    ui.openSourceViewer(citation.source_id, sourceLookup(citation.source_id),
      citation.chunk_lines_from, citation.chunk_lines_to);
  });

  ui.onSourceCardClick(async (sourceId) => {
    ui.openSourceViewer(sourceId, sourceLookup(sourceId));
  });

  ui.provideSourceText(async (sourceId) => {
    let docRes = manifest.resources.find((r) => r.id === sourceId);
    if (docRes?.role === 'asset') {
      const derived = manifest.resources.find(
        (r) => r.role === 'document' && (r.derived_from || []).includes(sourceId),
      );
      if (derived) docRes = derived;
    }
    if (!docRes) return '';
    const blob = resources.get(docRes.id);
    if (!blob) return '';
    return blob.text();
  });
}

// ─── UI ────────────────────────────────────────────────────────────────────

function mountUi(manifest) {
  const root = document.getElementById('elf-app') || document.body;
  const sources = (manifest.resources || []).filter((r) => r.role === 'asset');

  const sourcesHtml = sources.map((s) => \`
    <div class="elf-source-card" data-source-id="\${escapeAttr(s.id)}">
      <div class="elf-source-title">📄 \${escapeHtml(s.displayName || s.id)}</div>
    </div>
  \`).join('');

  root.innerHTML = \`
    <header class="elf-header">
      <div class="elf-title">
        <h1>\${escapeHtml(manifest.title || '.elf')}</h1>
        <div class="elf-fp" title="Artifact identity">\${escapeHtml(shortFp(manifest))}</div>
      </div>
      <div class="elf-badges">
        <span class="elf-badge">\${sources.length} source\${sources.length === 1 ? '' : 's'}</span>
        <span class="elf-badge">Built with NotebookELF</span>
      </div>
    </header>
    <div class="elf-shell">
      <aside class="elf-sources-pane">
        <div class="elf-sources-head">Sources</div>
        <div class="elf-sources-list" id="elf-sources-list">\${sourcesHtml}</div>
      </aside>
      <div class="elf-pane-rel" id="elf-pane">
        <main class="elf-chat" id="elf-chat">
          <div class="elf-loading" id="elf-loading">
            <div class="elf-progress"><div class="elf-progress-bar" id="elf-progress"></div></div>
            <div class="elf-log" id="elf-log">starting…</div>
          </div>
          <div class="elf-thread" id="elf-thread" style="display:none"></div>
          <div class="elf-foot" id="elf-foot" style="display:none">
            <form class="elf-form" id="elf-form">
              <textarea id="elf-input" placeholder="Ask a question…" rows="1" disabled></textarea>
              <button id="elf-ask" type="submit" disabled>Ask</button>
            </form>
            <p class="elf-disclaimer">Answers can be inaccurate — double-check responses against the sources.</p>
          </div>
        </main>
      </div>
    </div>
  \`;

  const $ = (sel) => root.querySelector(sel);
  const thread = $('#elf-thread');
  const foot = $('#elf-foot');
  const loading = $('#elf-loading');
  const progress = $('#elf-progress');
  const logEl = $('#elf-log');
  const input = $('#elf-input');
  const askBtn = $('#elf-ask');
  const form = $('#elf-form');
  const sourcesList = $('#elf-sources-list');
  const pane = $('#elf-pane');

  let askHandler = null;
  let stopHandler = null;
  let citationHandler = null;
  let sourceCardHandler = null;
  let sourceTextProvider = null;
  let pending = false;

  const setBusy = (busy) => {
    pending = busy;
    askBtn.textContent = busy ? 'Stop' : 'Ask';
    askBtn.classList.toggle('stop', busy);
    askBtn.disabled = false;
    input.disabled = busy;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (pending) {
      stopHandler && stopHandler();
      setBusy(false);
      return;
    }
    const q = input.value.trim();
    if (!q || !askHandler) return;
    input.value = '';
    setBusy(true);
    try { await askHandler(q); } finally { setBusy(false); }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });
  sourcesList.addEventListener('click', (e) => {
    const card = e.target.closest('.elf-source-card');
    if (!card) return;
    const id = card.getAttribute('data-source-id');
    if (sourceCardHandler) sourceCardHandler(id);
  });

  return {
    log: (msg) => { logEl.textContent = msg; },
    setProgress: (pct) => { progress.style.width = \`\${Math.max(0, Math.min(100, pct))}%\`; },
    ready: () => {
      loading.style.display = 'none';
      thread.style.display = 'flex';
      foot.style.display = 'block';
      input.disabled = false; askBtn.disabled = false;
      input.focus();
    },
    onAsk: (fn) => { askHandler = fn; },
    onStop: (fn) => { stopHandler = fn; },
    onCitationClick: (fn) => { citationHandler = fn; },
    onSourceCardClick: (fn) => { sourceCardHandler = fn; },
    provideSourceText: (fn) => { sourceTextProvider = fn; },
    appendUser: (text) => {
      const row = document.createElement('div');
      row.className = 'elf-row user';
      row.innerHTML = \`<div class="elf-bubble user"></div>\`;
      row.querySelector('.elf-bubble').textContent = text;
      thread.appendChild(row);
      thread.scrollTop = thread.scrollHeight;
    },
    startAssistant: () => {
      const row = document.createElement('div');
      row.className = 'elf-row assistant';
      row.dataset.pending = '1';
      row.innerHTML = \`<div class="elf-bubble assistant"><div class="elf-typing"><span></span><span></span><span></span></div></div>\`;
      thread.appendChild(row);
      thread.scrollTop = thread.scrollHeight;
    },
    finishAssistant: (structured) => {
      const rows = thread.querySelectorAll('.elf-row.assistant');
      const row = rows[rows.length - 1];
      if (!row) return;
      delete row.dataset.pending;
      const bubble = row.querySelector('.elf-bubble');
      bubble.innerHTML = '';
      for (const seg of structured.segments) {
        const p = document.createElement('p');
        p.style.margin = '0 0 6px 0';
        p.textContent = seg.text;
        if (seg.citation_id) {
          const cit = structured.citations.find((c) => c.citation_id === seg.citation_id);
          if (cit) {
            const chip = document.createElement('button');
            chip.className = 'elf-cite-chip';
            chip.textContent = \`[\${cit.citation_id}]\`;
            chip.title = \`\${cit.source_title} · L\${cit.chunk_lines_from}-\${cit.chunk_lines_to}\`;
            chip.addEventListener('click', (e) => {
              e.preventDefault();
              if (citationHandler) citationHandler(cit);
            });
            p.appendChild(chip);
          }
        }
        bubble.appendChild(p);
      }
      if (structured.citations.length > 0) {
        const cites = document.createElement('div');
        cites.className = 'elf-cites';
        cites.innerHTML = \`<div>\${structured.citations.length} citation\${structured.citations.length === 1 ? '' : 's'}</div>\`;
        for (const cit of structured.citations) {
          const r = document.createElement('button');
          r.className = 'elf-cite-row';
          r.innerHTML = \`<strong style="color:var(--elf-accent)">[\${cit.citation_id}]</strong> \${escapeHtml(cit.source_title)} · L\${cit.chunk_lines_from}-\${cit.chunk_lines_to}<br><span style="color:var(--elf-muted)">\${escapeHtml(cit.excerpt)}</span>\`;
          r.addEventListener('click', () => citationHandler && citationHandler(cit));
          cites.appendChild(r);
        }
        bubble.appendChild(cites);
      }
      thread.scrollTop = thread.scrollHeight;
    },
    errorAssistant: (msg) => {
      const rows = thread.querySelectorAll('.elf-row.assistant');
      const row = rows[rows.length - 1];
      if (!row) return;
      delete row.dataset.pending;
      const bubble = row.querySelector('.elf-bubble');
      bubble.classList.add('error');
      bubble.textContent = msg;
    },
    showSourceCards: (cards) => {
      sourcesList.querySelectorAll('.elf-source-card').forEach((el) => el.classList.remove('is-active'));
      const seen = new Set();
      for (const c of cards) {
        if (seen.has(c.sourceId)) continue;
        seen.add(c.sourceId);
        const card = sourcesList.querySelector(\`.elf-source-card[data-source-id="\${cssAttr(c.sourceId)}"]\`);
        if (card) card.classList.add('is-active');
      }
    },
    openSourceViewer: async (sourceId, title, fromLine, toLine) => {
      pane.querySelectorAll('.elf-viewer').forEach((el) => el.remove());
      const text = sourceTextProvider ? await sourceTextProvider(sourceId) : '';
      const lines = text.split('\\n');
      const viewer = document.createElement('div');
      viewer.className = 'elf-viewer';
      viewer.innerHTML = \`
        <div class="elf-viewer-head">
          <button class="elf-viewer-back">← \${escapeHtml(title || sourceId)}</button>
          <div class="elf-fp">\${escapeHtml(sourceId)}</div>
        </div>
        <div class="elf-viewer-body" id="elf-viewer-body"></div>
      \`;
      pane.appendChild(viewer);
      const body = viewer.querySelector('#elf-viewer-body');
      const frag = document.createDocumentFragment();
      let firstHi = null;
      for (let i = 0; i < lines.length; i++) {
        const lineNo = i + 1;
        const isHi = fromLine && toLine && lineNo >= fromLine && lineNo <= toLine;
        const div = document.createElement('div');
        div.className = \`elf-line\${isHi ? ' is-hi' : ''}\`;
        div.innerHTML = \`<span class="elf-line-no">\${lineNo}</span><span class="elf-line-text"></span>\`;
        div.querySelector('.elf-line-text').textContent = lines[i] || ' ';
        frag.appendChild(div);
        if (isHi && !firstHi) firstHi = div;
      }
      body.appendChild(frag);
      if (firstHi) firstHi.scrollIntoView({ block: 'center' });
      viewer.querySelector('.elf-viewer-back').addEventListener('click', () => viewer.remove());
    },
  };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeAttr(s) { return escapeHtml(s); }
function cssAttr(s) { return String(s).replace(/"/g, '\\\\"'); }
function shortFp(manifest) {
  const meta = document.querySelector('meta[name="elf-fingerprint"]');
  const fp = (meta && meta.getAttribute('content')) || (manifest.id || '');
  return fp.length > 20 ? fp.slice(0, 20) + '…' : fp;
}
`,Ur=`// wllama + GGUF binding-runtime — Phase 6.
//
// Embedding still flows through transformers.js (same as ONNX runtime).
// Generation uses @wllama/wllama which loads from a Blob — perfect for the
// self-contained mode where the GGUF is base64-baked into the .elf.
//
// Resource discovery:
//   1. role=='model' && media_type=='application/x-gguf' AND bytes in
//      \`resources\` map → use those (self-contained build).
//   2. role=='model' && media_type=='application/x-gguf' && fetch_urls →
//      stream from HF (streaming build; needs internet + permissive CORS).

const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.1.0/+esm';
const WLLAMA_CDN = 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.5/esm/index.js';
const WLLAMA_WASM_BASE = 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.5/esm/';

function patchCachesIfBroken() {
  const fakeCache = { match: async () => undefined, put: async () => undefined,
    add: async () => undefined, addAll: async () => undefined,
    delete: async () => false, keys: async () => [] };
  const fakeCaches = { open: async () => fakeCache, match: async () => undefined,
    has: async () => false, delete: async () => false, keys: async () => [] };
  let exists = false;
  try { exists = typeof globalThis.caches !== 'undefined'; } catch { exists = false; }
  if (!exists) {
    try {
      Object.defineProperty(globalThis, 'caches', { value: fakeCaches, writable: true, configurable: true });
    } catch { /* env.useBrowserCache=false fallback */ }
  } else {
    try { globalThis.caches.open = async () => fakeCache; } catch { /* ignore */ }
  }
}

const find = (manifest, predicate) => manifest.resources.find(predicate);
const findFulfillment = (manifest, op) =>
  ((manifest.fulfillments && manifest.fulfillments[op]) || [])[0] || null;

async function blobToFloat32(blob) {
  const buf = await blob.arrayBuffer();
  return new Float32Array(buf);
}

function dot(a, b, dim) {
  let s = 0;
  for (let i = 0; i < dim; i++) s += a[i] * b[i];
  return s;
}

function topK(qVec, embeddings, count, dim, k) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const off = i * dim;
    const v = embeddings.subarray(off, off + dim);
    const score = dot(qVec, v, dim);
    if (out.length < k) {
      out.push({ idx: i, score });
      if (out.length === k) out.sort((a, b) => a.score - b.score);
    } else if (score > out[0].score) {
      out[0] = { idx: i, score };
      for (let j = 1; j < out.length; j++) {
        if (out[j].score < out[j - 1].score) {
          const t = out[j]; out[j] = out[j - 1]; out[j - 1] = t;
        } else break;
      }
    }
  }
  return out.sort((a, b) => b.score - a.score);
}

const MARKER_RE = /\\[(?:cite[:\\s]*|\\^)(\\d+)\\]/gi;

function parseMarkers(raw, hits, segments, sourceLookup) {
  const text = (raw || '').trim();
  const citations = [];
  const seen = new Map();
  const segmentsOut = [];
  let lastEnd = 0;
  MARKER_RE.lastIndex = 0;
  let m;
  while ((m = MARKER_RE.exec(text)) !== null) {
    const promptIndex = Number(m[1]);
    const before = text.slice(lastEnd, m.index).trim();
    lastEnd = m.index + m[0].length;
    const hit = hits[promptIndex];
    let citationId;
    if (hit) {
      citationId = seen.get(promptIndex);
      if (citationId === undefined) {
        const seg = segments[hit.idx];
        citationId = citations.length + 1;
        citations.push({
          citation_id: citationId,
          source_id: seg.document,
          source_title: sourceLookup(seg.document),
          chunk_index: promptIndex,
          chunk_lines_from: seg.line_from || 1,
          chunk_lines_to: seg.line_to || 1,
          excerpt: seg.text.slice(0, 160).replace(/\\s+/g, ' ').trim(),
        });
        seen.set(promptIndex, citationId);
      }
    }
    if (before) segmentsOut.push({ text: before, citation_id: citationId });
    else if (citationId !== undefined && segmentsOut.length > 0) {
      const prev = segmentsOut[segmentsOut.length - 1];
      if (prev.citation_id === undefined) prev.citation_id = citationId;
    }
  }
  const trailing = text.slice(lastEnd).trim();
  if (trailing) segmentsOut.push({ text: trailing });
  if (segmentsOut.length === 0 && text) segmentsOut.push({ text });
  return { segments: segmentsOut, citations };
}

const SYSTEM_INSTRUCTIONS = \`Answer the question using ONLY the chunks below. After each claim, cite the chunk you used with [CITE N] where N is the number from the chunk header. If the chunks don't answer it, say "I don't have enough information in the sources to answer that." Plain prose. No JSON, no code fences. Keep it under 6 sentences.\`;

function applyChatTemplate(template, messages) {
  const parts = [];
  for (const m of messages) {
    const prefix = m.role === 'system' ? template.system_prefix
                : m.role === 'user' ? template.user_prefix
                : template.assistant_prefix;
    parts.push(\`\${prefix}\${m.content}\${template.eot}\`);
  }
  parts.push(template.assistant_prefix);
  return parts.join('');
}

// IndexedDB cache: stores BYO-picked GGUFs by manifest id so repeat opens
// skip the picker. Failures here are non-fatal; we just re-prompt.
const IDB_DB = 'notebookelf-gguf-cache';
const IDB_STORE = 'gguf';

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(key) {
  try {
    const db = await idbOpen();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch { return null; }
}

async function idbPut(key, blob) {
  try {
    const db = await idbOpen();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(blob, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch { /* non-fatal */ }
}

async function pickGgufFromUser(ui, manifestId, kind = 'chat') {
  return new Promise((resolve, reject) => {
    ui.askForFile({
      title: kind === 'embed' ? 'Pick an embedding GGUF' : 'Pick a chat GGUF',
      hint: kind === 'embed'
        ? 'This .elf was built in BYO mode and needs an embedding GGUF.'
        : 'This .elf was built in BYO mode. Pick a GGUF chat model from disk. It will be cached in your browser; you only do this once.',
      onPick: async (file) => {
        if (!file) {
          reject(new Error('No file picked.'));
          return;
        }
        const head = new Uint8Array(await file.slice(0, 4).arrayBuffer());
        const ok = head[0] === 0x47 && head[1] === 0x47 && head[2] === 0x55 && head[3] === 0x46;
        if (!ok) {
          reject(new Error(\`\${file.name} is not a GGUF (missing magic header).\`));
          return;
        }
        await idbPut(\`\${manifestId}:\${kind}\`, file);
        resolve(file);
      },
      onCancel: () => reject(new Error('User cancelled picker.')),
    });
  });
}

async function getGgufBlob(manifest, resources, log, ui, kind = 'chat') {
  const targetMedia = kind === 'embed' ? 'application/x-gguf-embed' : 'application/x-gguf';
  const ggufRes = find(manifest, (r) => r.role === 'model' && r.media_type === targetMedia);
  const fulfillment = findFulfillment(manifest, 'generate-text');
  const profile = (fulfillment && fulfillment.profile) || 'self-contained-gguf';
  const isByo = profile === 'byo-gguf';

  if (ggufRes) {
    const baked = resources.get(ggufRes.id);
    if (baked) {
      log && log(\`gguf: using bundled bytes (\${(baked.size / 1e6).toFixed(1)} MB)\`);
      return baked;
    }
  }

  // BYO path: try IndexedDB cache first, then ask the user.
  if (isByo) {
    const cached = await idbGet(\`\${manifest.id}:\${kind}\`);
    if (cached) {
      log && log(\`gguf: using cached BYO model (\${(cached.size / 1e6).toFixed(1)} MB)\`);
      return cached;
    }
    log && log('gguf: prompting user for BYO file…');
    return await pickGgufFromUser(ui, manifest.id, kind);
  }

  // Streaming-mode fallback when bytes weren't baked.
  const onDisk =
    typeof location !== 'undefined' &&
    (location.protocol === 'file:' || location.origin === 'null');
  if (ggufRes && ggufRes.fetch_urls && ggufRes.fetch_urls.length) {
    if (onDisk) {
      throw new Error(
        'This .elf was built in streaming mode and was opened from disk (file://). Browsers refuse cross-origin requests from file://. Rebuild with bundle mode "self-contained" — or host the .elf on a server.',
      );
    }
    const url = ggufRes.fetch_urls[0];
    log && log(\`gguf: fetching \${url}…\`);
    let res;
    try {
      res = await fetch(url, { mode: 'cors' });
    } catch {
      throw new Error(
        \`Could not fetch GGUF from \${url}. The site likely blocks cross-origin or you're offline. Rebuild with bundle mode "self-contained" to embed the model.\`,
      );
    }
    if (!res.ok) throw new Error(\`gguf fetch failed: \${res.status} \${res.statusText}\`);
    return await res.blob();
  }

  if (kind === 'embed') return null; // optional — embed has a transformers.js fallback
  throw new Error('GGUF model has no bytes and no fetch_urls. Rebuild with bundle mode "self-contained" or "BYO".');
}

export async function init({ manifest, resources, log }) {
  patchCachesIfBroken();
  const ui = mountUi(manifest);
  const status = (s) => { log && log(s); ui.log(s); };

  status('loading runtimes…');
  ui.setProgress(5);

  const segRes = find(manifest, (r) => r.role === 'segment-set');
  const embRes = find(manifest, (r) => r.role === 'embedding-set');
  const tplRes = find(manifest, (r) => r.role === 'template');
  const embedModelRes = find(manifest,
    (r) => r.role === 'model' && r.media_type === 'application/x-onnx-pipeline'
      && r.id.startsWith('res:model.embed.'));
  const genFulfill = findFulfillment(manifest, 'generate-text');
  if (!segRes || !embRes || !tplRes || !genFulfill) {
    throw new Error('manifest missing one of: segment-set, embedding-set, template, generate-text fulfillment');
  }
  const embedModelId = embedModelRes?.fetch_urls?.[0]?.replace('https://huggingface.co/', '')
    || 'Xenova/all-MiniLM-L6-v2';

  // Try the wllama-embed path first when the manifest declares one. Avoids
  // pulling transformers.js entirely in fully-self-contained .elf builds.
  const isolated = typeof self !== 'undefined' && self.crossOriginIsolated === true;
  const hwc = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
  let cacheReady = false;
  try {
    cacheReady = !!(await globalThis.caches?.open?.('elf-tx-cache'));
  } catch { cacheReady = false; }

  status('loading wllama…');
  ui.setProgress(15);
  const wllamaMod = await import(/* @vite-ignore */ WLLAMA_CDN);
  const Wllama = wllamaMod.Wllama || wllamaMod.default;

  // Embedding path: prefer wllama-embed GGUF if the manifest carries one;
  // otherwise stream transformers.js MiniLM.
  const embedGgufRes = find(
    manifest,
    (r) => r.role === 'model' && r.media_type === 'application/x-gguf-embed',
  );
  let embedFn; // (text:string) => Promise<Float32Array>

  if (embedGgufRes) {
    status('loading embedding GGUF…');
    ui.setProgress(25);
    const embedBlob = await getGgufBlob(manifest, resources, log, ui, 'embed');
    if (embedBlob) {
      const wllamaEmbed = new Wllama({
        'single-thread/wllama.wasm': WLLAMA_WASM_BASE + 'single-thread/wllama.wasm',
        'multi-thread/wllama.wasm': WLLAMA_WASM_BASE + 'multi-thread/wllama.wasm',
      });
      await wllamaEmbed.loadModel([new File([embedBlob], 'embed.gguf')], {
        n_ctx: 512,
        n_threads: isolated ? Math.min(hwc, 4) : 1,
        embeddings: true,
      });
      embedFn = async (text) => {
        const out = await wllamaEmbed.createEmbedding(text);
        const vec = new Float32Array(out);
        // Cosine search expects L2-normalized vectors; wllama returns raw.
        let n = 0;
        for (let i = 0; i < vec.length; i++) n += vec[i] * vec[i];
        n = Math.sqrt(n) || 1;
        for (let i = 0; i < vec.length; i++) vec[i] /= n;
        return vec;
      };
      status('embedding GGUF ready');
    }
  }

  if (!embedFn) {
    status(\`loading embedding model (\${embedModelId})…\`);
    ui.setProgress(20);
    const { pipeline, env } = await import(/* @vite-ignore */ TRANSFORMERS_CDN);
    env.allowLocalModels = false;
    env.useBrowserCache = cacheReady;
    if (env.backends?.onnx?.wasm) {
      env.backends.onnx.wasm.numThreads = isolated ? Math.min(hwc, 8) : 1;
      env.backends.onnx.wasm.simd = true;
    }
    const extractor = await pipeline('feature-extraction', embedModelId, {
      device: 'wasm', dtype: 'q8',
    });
    embedFn = async (text) => {
      const out = await extractor(text, { pooling: 'mean', normalize: true });
      return out.data;
    };
  }

  ui.setProgress(45);
  const wllama = new Wllama({
    'single-thread/wllama.wasm': WLLAMA_WASM_BASE + 'single-thread/wllama.wasm',
    'multi-thread/wllama.wasm': WLLAMA_WASM_BASE + 'multi-thread/wllama.wasm',
  });

  status('loading GGUF chat model…');
  ui.setProgress(55);
  const ggufBlob = await getGgufBlob(manifest, resources, log, ui, 'chat');
  // wllama wants thread count up front. Cap at 4 — beyond that GGUF
  // llama.cpp gets diminishing returns + JS message latency starts to bite.
  const wllamaThreads = isolated ? Math.min(hwc, 4) : 1;
  await wllama.loadModel([new File([ggufBlob], 'model.gguf')], {
    n_ctx: 2048,
    n_threads: wllamaThreads,
  });
  status(\`wllama loaded · \${wllamaThreads} thread\${wllamaThreads === 1 ? '' : 's'}\${cacheReady ? ' · embed cached' : ''}\`);
  ui.setProgress(85);

  status('decoding segments + embeddings…');
  const segText = await resources.get(segRes.id).text();
  const segments = segText.split('\\n').filter((l) => l.trim()).map((l) => JSON.parse(l));
  const embedDim = manifest.knowledge.embeddings[0].dimensions;
  const embeddings = await blobToFloat32(resources.get(embRes.id));
  if (embeddings.length !== segments.length * embedDim) {
    throw new Error(\`embedding count mismatch: \${embeddings.length} != \${segments.length} × \${embedDim}\`);
  }

  const template = JSON.parse(await resources.get(tplRes.id).text());

  const sourceLookup = (id) => {
    const r = manifest.resources.find((rr) => rr.id === id);
    return (r && (r.displayName || r.id)) || id;
  };

  ui.setProgress(100);
  status('ready.');
  ui.ready();

  let abortFlag = { aborted: false };
  ui.onStop(() => { abortFlag.aborted = true; });

  ui.onAsk(async (query) => {
    abortFlag = { aborted: false };
    ui.appendUser(query);
    ui.startAssistant();

    try {
      const qVec = await embedFn(query);
      if (abortFlag.aborted) throw new Error('cancelled');

      const k = (manifest.interaction['retrieve-segments'] || {}).top_k || 4;
      const hits = topK(qVec, embeddings, segments.length, embedDim, Math.min(k, segments.length));

      const chunkBlocks = hits.map((h, i) => {
        const s = segments[h.idx];
        const title = sourceLookup(s.document);
        const body = s.text.slice(0, 700);
        return \`[Chunk \${i} | source: \${title} | lines \${s.line_from || 1}-\${s.line_to || 1}]\\n\${body}\`;
      }).join('\\n\\n---\\n\\n');

      ui.showSourceCards(hits.map((h, i) => ({
        promptIndex: i,
        sourceId: segments[h.idx].document,
      })));

      const messages = [
        { role: 'system', content: \`\${SYSTEM_INSTRUCTIONS}\\n\\nChunks:\\n\\n\${chunkBlocks}\` },
        { role: 'user', content: query },
      ];
      const prompt = applyChatTemplate(template, messages);

      const out = await wllama.createCompletion(prompt, {
        nPredict: (genFulfill && genFulfill.max_new_tokens) || 320,
        sampling: {
          temp: 0.4,
          top_p: 0.9,
          top_k: 40,
        },
        // Stop on the template's EOT token if it's a clean string.
        stopPrompts: [template.eot, '<|im_end|>', '<|eot_id|>'].filter(Boolean),
      });
      if (abortFlag.aborted) throw new Error('cancelled');

      const structured = parseMarkers(out, hits, segments, sourceLookup);
      ui.finishAssistant(structured);
    } catch (err) {
      const message = (err && err.message) ? err.message : String(err);
      ui.errorAssistant(message);
    }
  });

  ui.onCitationClick((citation) => {
    ui.openSourceViewer(citation.source_id, sourceLookup(citation.source_id),
      citation.chunk_lines_from, citation.chunk_lines_to);
  });
  ui.onSourceCardClick(async (sourceId) => {
    ui.openSourceViewer(sourceId, sourceLookup(sourceId));
  });
  ui.provideSourceText(async (sourceId) => {
    let docRes = manifest.resources.find((r) => r.id === sourceId);
    if (docRes?.role === 'asset') {
      const derived = manifest.resources.find(
        (r) => r.role === 'document' && (r.derived_from || []).includes(sourceId),
      );
      if (derived) docRes = derived;
    }
    if (!docRes) return '';
    const blob = resources.get(docRes.id);
    if (!blob) return '';
    return blob.text();
  });
}

// ─── UI ──── (same shell as transformers runtime; copy minus duplication) ──

function mountUi(manifest) {
  const root = document.getElementById('elf-app') || document.body;
  const sources = (manifest.resources || []).filter((r) => r.role === 'asset');
  const sourcesHtml = sources.map((s) => \`
    <div class="elf-source-card" data-source-id="\${escapeAttr(s.id)}">
      <div class="elf-source-title">📄 \${escapeHtml(s.displayName || s.id)}</div>
    </div>
  \`).join('');

  root.innerHTML = \`
    <header class="elf-header">
      <div class="elf-title">
        <h1>\${escapeHtml(manifest.title || '.elf')}</h1>
        <div class="elf-fp" title="Artifact identity">\${escapeHtml(shortFp(manifest))}</div>
      </div>
      <div class="elf-badges">
        <span class="elf-badge">\${sources.length} source\${sources.length === 1 ? '' : 's'}</span>
        <span class="elf-badge">wllama · GGUF</span>
        <span class="elf-badge">Built with NotebookELF</span>
      </div>
    </header>
    <div class="elf-shell">
      <aside class="elf-sources-pane">
        <div class="elf-sources-head">Sources</div>
        <div class="elf-sources-list" id="elf-sources-list">\${sourcesHtml}</div>
      </aside>
      <div class="elf-pane-rel" id="elf-pane">
        <main class="elf-chat" id="elf-chat">
          <div class="elf-loading" id="elf-loading">
            <div class="elf-progress"><div class="elf-progress-bar" id="elf-progress"></div></div>
            <div class="elf-log" id="elf-log">starting…</div>
          </div>
          <div class="elf-thread" id="elf-thread" style="display:none"></div>
          <div class="elf-foot" id="elf-foot" style="display:none">
            <form class="elf-form" id="elf-form">
              <textarea id="elf-input" placeholder="Ask a question…" rows="1" disabled></textarea>
              <button id="elf-ask" type="submit" disabled>Ask</button>
            </form>
            <p class="elf-disclaimer">Answers can be inaccurate — double-check responses against the sources.</p>
          </div>
        </main>
      </div>
    </div>
  \`;

  const $ = (sel) => root.querySelector(sel);
  const thread = $('#elf-thread');
  const foot = $('#elf-foot');
  const loading = $('#elf-loading');
  const progress = $('#elf-progress');
  const logEl = $('#elf-log');
  const input = $('#elf-input');
  const askBtn = $('#elf-ask');
  const form = $('#elf-form');
  const sourcesList = $('#elf-sources-list');
  const pane = $('#elf-pane');

  let askHandler = null, stopHandler = null, citationHandler = null,
    sourceCardHandler = null, sourceTextProvider = null, pending = false;

  const setBusy = (busy) => {
    pending = busy;
    askBtn.textContent = busy ? 'Stop' : 'Ask';
    askBtn.classList.toggle('stop', busy);
    askBtn.disabled = false;
    input.disabled = busy;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (pending) { stopHandler && stopHandler(); setBusy(false); return; }
    const q = input.value.trim();
    if (!q || !askHandler) return;
    input.value = '';
    setBusy(true);
    try { await askHandler(q); } finally { setBusy(false); }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
  });
  sourcesList.addEventListener('click', (e) => {
    const card = e.target.closest('.elf-source-card');
    if (!card) return;
    const id = card.getAttribute('data-source-id');
    if (sourceCardHandler) sourceCardHandler(id);
  });

  return {
    log: (msg) => { logEl.textContent = msg; },
    setProgress: (pct) => { progress.style.width = \`\${Math.max(0, Math.min(100, pct))}%\`; },
    askForFile: ({ title, hint, onPick, onCancel }) => {
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);';
      overlay.innerHTML = \`
        <div style="background:var(--elf-panel);border:1px solid var(--elf-edge);border-radius:10px;max-width:480px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,0.4);">
          <div style="font-size:32px;margin-bottom:8px;">📦</div>
          <h2 style="margin:0 0 6px 0;font-size:16px;color:var(--elf-text);">\${escapeHtml(title)}</h2>
          <p style="margin:0 0 16px 0;font-size:13px;color:var(--elf-muted);">\${escapeHtml(hint)}</p>
          <div style="display:flex;gap:8px;justify-content:flex-end;">
            <button data-act="cancel" style="padding:8px 14px;border:1px solid var(--elf-edge);background:transparent;color:var(--elf-text);border-radius:6px;cursor:pointer;">Cancel</button>
            <button data-act="pick" style="padding:8px 14px;border:1px solid var(--elf-edge);background:var(--elf-accent);color:white;border-radius:6px;cursor:pointer;font-weight:600;">Pick GGUF…</button>
          </div>
          <input type="file" accept=".gguf,application/x-gguf,application/octet-stream" style="display:none;" />
        </div>
      \`;
      document.body.appendChild(overlay);
      const fileInput = overlay.querySelector('input[type=file]');
      const pickBtn = overlay.querySelector('button[data-act=pick]');
      const cancelBtn = overlay.querySelector('button[data-act=cancel]');
      pickBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', async () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;
        overlay.remove();
        await onPick(file);
      });
      cancelBtn.addEventListener('click', () => {
        overlay.remove();
        onCancel && onCancel();
      });
    },
    ready: () => {
      loading.style.display = 'none';
      thread.style.display = 'flex';
      foot.style.display = 'block';
      input.disabled = false; askBtn.disabled = false;
      input.focus();
    },
    onAsk: (fn) => { askHandler = fn; },
    onStop: (fn) => { stopHandler = fn; },
    onCitationClick: (fn) => { citationHandler = fn; },
    onSourceCardClick: (fn) => { sourceCardHandler = fn; },
    provideSourceText: (fn) => { sourceTextProvider = fn; },
    appendUser: (text) => {
      const row = document.createElement('div');
      row.className = 'elf-row user';
      row.innerHTML = \`<div class="elf-bubble user"></div>\`;
      row.querySelector('.elf-bubble').textContent = text;
      thread.appendChild(row);
      thread.scrollTop = thread.scrollHeight;
    },
    startAssistant: () => {
      const row = document.createElement('div');
      row.className = 'elf-row assistant';
      row.innerHTML = \`<div class="elf-bubble assistant"><div class="elf-typing"><span></span><span></span><span></span></div></div>\`;
      thread.appendChild(row);
      thread.scrollTop = thread.scrollHeight;
    },
    finishAssistant: (structured) => {
      const rows = thread.querySelectorAll('.elf-row.assistant');
      const row = rows[rows.length - 1];
      if (!row) return;
      const bubble = row.querySelector('.elf-bubble');
      bubble.innerHTML = '';
      for (const seg of structured.segments) {
        const p = document.createElement('p');
        p.style.margin = '0 0 6px 0';
        p.textContent = seg.text;
        if (seg.citation_id) {
          const cit = structured.citations.find((c) => c.citation_id === seg.citation_id);
          if (cit) {
            const chip = document.createElement('button');
            chip.className = 'elf-cite-chip';
            chip.textContent = \`[\${cit.citation_id}]\`;
            chip.title = \`\${cit.source_title} · L\${cit.chunk_lines_from}-\${cit.chunk_lines_to}\`;
            chip.addEventListener('click', (e) => {
              e.preventDefault();
              if (citationHandler) citationHandler(cit);
            });
            p.appendChild(chip);
          }
        }
        bubble.appendChild(p);
      }
      if (structured.citations.length > 0) {
        const cites = document.createElement('div');
        cites.className = 'elf-cites';
        cites.innerHTML = \`<div>\${structured.citations.length} citation\${structured.citations.length === 1 ? '' : 's'}</div>\`;
        for (const cit of structured.citations) {
          const r = document.createElement('button');
          r.className = 'elf-cite-row';
          r.innerHTML = \`<strong style="color:var(--elf-accent)">[\${cit.citation_id}]</strong> \${escapeHtml(cit.source_title)} · L\${cit.chunk_lines_from}-\${cit.chunk_lines_to}<br><span style="color:var(--elf-muted)">\${escapeHtml(cit.excerpt)}</span>\`;
          r.addEventListener('click', () => citationHandler && citationHandler(cit));
          cites.appendChild(r);
        }
        bubble.appendChild(cites);
      }
      thread.scrollTop = thread.scrollHeight;
    },
    errorAssistant: (msg) => {
      const rows = thread.querySelectorAll('.elf-row.assistant');
      const row = rows[rows.length - 1];
      if (!row) return;
      const bubble = row.querySelector('.elf-bubble');
      bubble.classList.add('error');
      bubble.textContent = msg;
    },
    showSourceCards: (cards) => {
      sourcesList.querySelectorAll('.elf-source-card').forEach((el) => el.classList.remove('is-active'));
      const seen = new Set();
      for (const c of cards) {
        if (seen.has(c.sourceId)) continue;
        seen.add(c.sourceId);
        const card = sourcesList.querySelector(\`.elf-source-card[data-source-id="\${cssAttr(c.sourceId)}"]\`);
        if (card) card.classList.add('is-active');
      }
    },
    openSourceViewer: async (sourceId, title, fromLine, toLine) => {
      pane.querySelectorAll('.elf-viewer').forEach((el) => el.remove());
      const text = sourceTextProvider ? await sourceTextProvider(sourceId) : '';
      const lines = text.split('\\n');
      const viewer = document.createElement('div');
      viewer.className = 'elf-viewer';
      viewer.innerHTML = \`
        <div class="elf-viewer-head">
          <button class="elf-viewer-back">← \${escapeHtml(title || sourceId)}</button>
          <div class="elf-fp">\${escapeHtml(sourceId)}</div>
        </div>
        <div class="elf-viewer-body" id="elf-viewer-body"></div>
      \`;
      pane.appendChild(viewer);
      const body = viewer.querySelector('#elf-viewer-body');
      const frag = document.createDocumentFragment();
      let firstHi = null;
      for (let i = 0; i < lines.length; i++) {
        const lineNo = i + 1;
        const isHi = fromLine && toLine && lineNo >= fromLine && lineNo <= toLine;
        const div = document.createElement('div');
        div.className = \`elf-line\${isHi ? ' is-hi' : ''}\`;
        div.innerHTML = \`<span class="elf-line-no">\${lineNo}</span><span class="elf-line-text"></span>\`;
        div.querySelector('.elf-line-text').textContent = lines[i] || ' ';
        frag.appendChild(div);
        if (isHi && !firstHi) firstHi = div;
      }
      body.appendChild(frag);
      if (firstHi) firstHi.scrollIntoView({ block: 'center' });
      viewer.querySelector('.elf-viewer-back').addEventListener('click', () => viewer.remove());
    },
  };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeAttr(s) { return escapeHtml(s); }
function cssAttr(s) { return String(s).replace(/"/g, '\\\\"'); }
function shortFp(manifest) {
  const meta = document.querySelector('meta[name="elf-fingerprint"]');
  const fp = (meta && meta.getAttribute('content')) || (manifest.id || '');
  return fp.length > 20 ? fp.slice(0, 20) + '…' : fp;
}
`,jr=`<div id="elf-app"></div>
<style>
  :root {
    --elf-bg: #0b0d10;
    --elf-panel: #111418;
    --elf-edge: rgba(255,255,255,0.08);
    --elf-text: #e6e8eb;
    --elf-muted: #9aa0a6;
    --elf-accent: #7c9cff;
    --elf-accent-soft: rgba(124,156,255,0.15);
    --elf-user: #1f2937;
    --elf-asst: #0f1923;
    --elf-warn: #f59e0b;
    --elf-error: #ef4444;
    --elf-good: #10b981;
  }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0; height: 100%;
    background: var(--elf-bg); color: var(--elf-text);
    font: 14px/1.5 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  ::selection { background: var(--elf-accent-soft); }
  *::-webkit-scrollbar { width: 10px; height: 10px; }
  *::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 6px; }
  *::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.16); }

  #elf-app { display: flex; flex-direction: column; height: 100%; }
  .elf-header {
    padding: 12px 18px;
    border-bottom: 1px solid var(--elf-edge);
    background: var(--elf-panel);
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px; flex-shrink: 0;
  }
  .elf-title { display: flex; align-items: baseline; gap: 10px; min-width: 0; }
  .elf-title h1 { font-size: 15px; font-weight: 600; margin: 0; }
  .elf-fp { font-family: ui-monospace, monospace; font-size: 11px; color: var(--elf-muted); }
  .elf-badges { display: flex; gap: 6px; align-items: center; }
  .elf-badge { font-size: 10px; padding: 2px 6px; border: 1px solid var(--elf-edge); border-radius: 4px; color: var(--elf-muted); }

  .elf-shell { flex: 1; min-height: 0; display: grid; grid-template-columns: 320px 1fr; }
  .elf-sources-pane {
    border-right: 1px solid var(--elf-edge); background: var(--elf-panel);
    overflow: hidden; display: flex; flex-direction: column;
  }
  .elf-sources-head {
    padding: 10px 14px; border-bottom: 1px solid var(--elf-edge);
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--elf-muted);
  }
  .elf-sources-list { flex: 1; overflow-y: auto; padding: 8px; }
  .elf-source-card {
    padding: 8px 10px; margin-bottom: 6px; border-radius: 6px;
    border: 1px solid var(--elf-edge); cursor: pointer; background: var(--elf-bg);
  }
  .elf-source-card:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.2); }
  .elf-source-card.is-active { background: var(--elf-accent-soft); border-color: rgba(124,156,255,0.5); }
  .elf-source-title { font-size: 13px; color: var(--elf-text); display: flex; gap: 6px; align-items: center; }

  .elf-viewer {
    position: absolute; inset: 0; background: var(--elf-bg); z-index: 5;
    display: flex; flex-direction: column;
  }
  .elf-viewer-head {
    padding: 10px 14px; border-bottom: 1px solid var(--elf-edge);
    background: var(--elf-panel); display: flex; align-items: center; justify-content: space-between; gap: 10px;
  }
  .elf-viewer-back { background: none; border: none; color: var(--elf-muted); cursor: pointer; font-size: 13px; }
  .elf-viewer-back:hover { color: var(--elf-text); }
  .elf-viewer-body { flex: 1; overflow: auto; font-family: ui-monospace, monospace; font-size: 12px; padding: 12px; }
  .elf-line { display: flex; gap: 12px; padding: 0 8px; border-radius: 4px; }
  .elf-line.is-hi { background: rgba(245,158,11,0.18); }
  .elf-line-no { color: rgba(255,255,255,0.25); user-select: none; min-width: 36px; text-align: right; }
  .elf-line-text { white-space: pre-wrap; word-break: break-word; flex: 1; color: rgba(230,232,235,0.9); }

  .elf-pane-rel { position: relative; flex: 1; min-height: 0; }
  .elf-chat { display: flex; flex-direction: column; height: 100%; }
  .elf-thread { flex: 1; overflow-y: auto; padding: 18px; display: flex; flex-direction: column; gap: 12px; }
  .elf-row { display: flex; }
  .elf-row.user { justify-content: flex-end; }
  .elf-row.assistant { justify-content: flex-start; }
  .elf-bubble {
    max-width: 82%; padding: 10px 14px; border-radius: 16px; line-height: 1.55;
  }
  .elf-bubble.user { background: var(--elf-accent); color: white; border-bottom-right-radius: 4px; white-space: pre-wrap; }
  .elf-bubble.assistant { background: var(--elf-panel); border: 1px solid var(--elf-edge); border-bottom-left-radius: 4px; }
  .elf-bubble.error { background: rgba(239,68,68,0.18); border: 1px solid rgba(239,68,68,0.4); color: #fecaca; }

  .elf-cite-chip {
    display: inline-flex; align-items: baseline; align-self: baseline;
    margin: 0 2px; padding: 0 4px; border-radius: 4px;
    background: var(--elf-accent-soft); color: var(--elf-accent);
    border: 1px solid rgba(124,156,255,0.4); font: 600 10px ui-monospace, monospace;
    cursor: pointer;
  }
  .elf-cite-chip:hover { background: rgba(124,156,255,0.3); }

  .elf-cites {
    margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--elf-edge);
    font-size: 11px; color: var(--elf-muted);
  }
  .elf-cite-row {
    display: block; width: 100%; text-align: left;
    background: rgba(255,255,255,0.02); border: 1px solid var(--elf-edge); border-radius: 4px;
    padding: 5px 8px; margin-top: 3px; cursor: pointer; color: var(--elf-text);
  }
  .elf-cite-row:hover { background: rgba(255,255,255,0.06); }

  .elf-foot {
    border-top: 1px solid var(--elf-edge); padding: 12px 16px; background: var(--elf-panel);
    flex-shrink: 0;
  }
  .elf-quick { display: flex; gap: 6px; overflow-x: auto; margin-bottom: 8px; }
  .elf-quick button {
    flex-shrink: 0; max-width: 280px; padding: 6px 10px;
    background: var(--elf-bg); border: 1px solid var(--elf-edge); border-radius: 8px;
    color: var(--elf-text); font: inherit; font-size: 12px; cursor: pointer;
    text-align: left; line-height: 1.3;
  }
  .elf-quick button:hover { border-color: rgba(124,156,255,0.5); }

  .elf-form { display: flex; gap: 8px; align-items: flex-end; }
  .elf-form textarea {
    flex: 1; resize: none; padding: 10px 12px; min-height: 44px; max-height: 120px;
    background: var(--elf-bg); color: var(--elf-text);
    border: 1px solid var(--elf-edge); border-radius: 8px; font: inherit;
  }
  .elf-form textarea:focus { outline: none; border-color: rgba(124,156,255,0.5); }
  .elf-form button {
    padding: 10px 16px; border: 1px solid var(--elf-edge); border-radius: 8px;
    background: var(--elf-accent); color: white; font-weight: 600; cursor: pointer; min-width: 76px;
  }
  .elf-form button.stop { background: rgba(239,68,68,0.85); }
  .elf-form button:disabled { opacity: 0.5; cursor: not-allowed; }
  .elf-disclaimer {
    margin-top: 6px; text-align: center; font-size: 10px; color: var(--elf-muted);
  }

  .elf-loading {
    flex: 1; display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 12px; color: var(--elf-muted);
  }
  .elf-progress {
    width: 280px; height: 4px; background: var(--elf-edge); border-radius: 2px; overflow: hidden;
  }
  .elf-progress-bar { height: 100%; background: var(--elf-accent); width: 0; transition: width 0.2s; }
  .elf-log { font-family: ui-monospace, monospace; font-size: 11px; max-width: 60ch; text-align: center; }

  .elf-typing { display: inline-flex; gap: 3px; padding: 4px 0; }
  .elf-typing span {
    display: block; width: 6px; height: 6px; border-radius: 50%;
    background: var(--elf-muted); animation: elf-bounce 1.4s infinite ease-in-out both;
  }
  .elf-typing span:nth-child(2) { animation-delay: -0.32s; }
  .elf-typing span:nth-child(3) { animation-delay: -0.16s; }
  @keyframes elf-bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }

  .elf-empty { text-align: center; padding: 48px 20px; color: var(--elf-muted); }
  .elf-empty-icon { font-size: 44px; margin-bottom: 8px; }
  .elf-empty-title { font-size: 16px; color: var(--elf-text); margin: 0 0 4px; }
  .elf-empty-body { font-size: 13px; max-width: 420px; margin: 0 auto; }

  @media (max-width: 720px) {
    .elf-shell { grid-template-columns: 1fr; }
    .elf-sources-pane { display: none; }
  }
</style>
`,Hr={"transformers-onnx":{name:"forge.transformers-onnx",runtimeSource:Pr},"wllama-gguf":{name:"forge.wllama-gguf",runtimeSource:Ur}};async function ot(e,t,n,r){const s=new Blob([n],{type:r}),i=await Q(s);await e.blobs.put(i,s);const a={...t,media_type:r,size:s.size,sha256:i,blobKey:i,status:"ready",ingestedAt:new Date().toISOString()};return e.mutate((o,l)=>{const m=o.resources.findIndex(c=>c.id===a.id);m>=0?o.resources[m]=W(a):o.resources.push(W(a)),l[a.id]=a}),a}async function Mt(e,t){const n=performance.now(),r=Hr[t.kind];if(!r)throw new Error(`unknown runtime kind: ${t.kind}`);const s=`res:runtime.${t.kind}`,i=await ot(e,{id:s,role:"binding-runtime",behavioral:!0,canonical_content:!1,displayName:`${r.name} runtime`,media_type:"",size:0,sha256:""},r.runtimeSource,"application/javascript"),o=await ot(e,{id:"res:binding-ui.chat",role:"binding-ui",behavioral:!1,canonical_content:!1,displayName:"chat UI shell",media_type:"",size:0,sha256:""},jr,"text/html");let l;if(t.kind==="transformers-onnx"){l=`res:model.gen.${t.modelRef.replace(/[^a-z0-9]/gi,"_")}`;const m={id:l,media_type:"application/x-onnx-pipeline",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${t.modelRef}`],blobKey:"",status:"ready",displayName:`gen: ${t.modelRef}`,ingestedAt:new Date().toISOString()};e.mutate((c,d)=>{d[l]||(d[l]=m,c.resources.push(W(m)))})}else if(t.modelResourceId){if(!e.resources()[t.modelResourceId])throw new Error(`gguf resource not found: ${t.modelResourceId}`);e.mutate((c,d)=>{const g=d[t.modelResourceId];g&&(g.role="model",g.media_type="application/x-gguf",g.behavioral=!0)}),l=t.modelResourceId}else{l=`res:model.gen.gguf.${t.modelRef.replace(/[^a-z0-9]/gi,"_")}`;const m={id:l,media_type:"application/x-gguf",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${t.modelRef}`],blobKey:"",status:"ready",displayName:`gen: ${t.modelRef} (GGUF)`,ingestedAt:new Date().toISOString()};e.mutate((c,d)=>{d[l]||(d[l]=m,c.resources.push(W(m)))})}return e.mutate(m=>{m.bindings=m.bindings??[];const c=m.bindings.findIndex(x=>x.name.startsWith("forge.")),d={name:r.name,version:"1.0.0",requirements:t.kind==="transformers-onnx"?["transformers-js@>=3.0"]:["wllama@>=2.0"],entry:{ui:o.id,runtime:i.id}};c>=0?m.bindings[c]=d:m.bindings.push(d),m.fulfillments["generate-text"]=[{id:`gen.${t.kind}`,kind:"embedded-model",runtime:t.kind,model_resource:l,model:t.modelRef,max_new_tokens:t.maxNewTokens??256,...t.kind==="transformers-onnx"?{dtype_webgpu:t.dtypeWebgpu??"q4",dtype_wasm:t.dtypeWasm??"fp16"}:{}}],m.permissions=m.permissions??{};const g=m.permissions.network??{mode:"allow-listed",origins:[]};g.mode=g.mode==="none"?"allow-listed":g.mode,g.origins=g.origins??[];const f=["https://huggingface.co","https://cdn.jsdelivr.net"];for(const x of f)g.origins.includes(x)||g.origins.push(x);m.permissions.network=g}),e.appendJournal({actor:"user",tool:"select_generation_runtime",args:{kind:t.kind,modelRef:t.modelRef},resultRefs:[i.id,o.id,l],durationMs:Math.round(performance.now()-n),ok:!0}),{runtimeResourceId:i.id,bindingUiResourceId:o.id,modelResourceId:l}}const Lt={format:"elf-template/v1",kind:"chatml",system_prefix:`<|im_start|>system
`,user_prefix:`<|im_start|>user
`,assistant_prefix:`<|im_start|>assistant
`,eot:`<|im_end|>
`};async function Nt(e,t=Lt){const n=performance.now(),r=JSON.stringify(t,null,2),s=new Blob([r],{type:"application/json"}),i=await Q(s);await e.blobs.put(i,s);const a="res:template.chat",o={id:a,media_type:"application/json",size:s.size,sha256:i,role:"template",behavioral:!1,canonical_content:!0,blobKey:i,status:"ready",displayName:`chat template (${t.kind})`,ingestedAt:new Date().toISOString()};return e.mutate((l,m)=>{const c=l.resources.findIndex(d=>d.id===a);c>=0?l.resources[c]=W(o):l.resources.push(W(o)),m[a]=o}),e.appendJournal({actor:"user",tool:"write_chat_template",args:{kind:t.kind},resultRefs:[a],durationMs:Math.round(performance.now()-n),ok:!0}),{resourceId:a}}function zr(e,t){const n=performance.now();e.mutate(r=>{if(t.kind&&(r.interaction.kind=t.kind),t.system_prompt!==void 0&&(r.interaction.system_prompt=t.system_prompt),t.topK!==void 0||t.similarity!==void 0){const s=r.interaction["retrieve-segments"]??{};t.topK!==void 0&&(s.top_k=t.topK),t.similarity!==void 0&&(s.similarity=t.similarity),r.interaction["retrieve-segments"]=s}}),e.appendJournal({actor:"user",tool:"declare_interaction",args:t,resultRefs:[],durationMs:Math.round(performance.now()-n),ok:!0})}var Gr=w('<div class="mt-3 text-[11px] text-accent">'),qr=w('<div class="mt-3 text-[11px] text-red-400 whitespace-pre-wrap">'),Kr=w('<div class="h-full overflow-auto p-3 text-sm"><div class="text-[11px] uppercase tracking-wider text-neutral-500 mb-2">Pipeline</div><div class=space-y-2>'),Wr=w('<div class="text-[11px] text-neutral-500 truncate">'),Jr=w('<div class="flex items-center gap-3"><span aria-hidden=true></span><div class="flex-1 min-w-0"><div class="text-[13px] text-neutral-200">'),Vr=w('<button class="text-[11px] px-2 py-0.5 rounded border border-edge bg-white/5 hover:bg-white/10 disabled:opacity-50">');const at="HuggingFaceTB/SmolLM2-360M-Instruct";function Yr(){const e=Z(),[t,n]=M(null),[r,s]=M(null),[i,a]=M(null),o=()=>Ee(e.manifest(),e.resources()),l=async(x,p)=>{n(x),s(null),a(null);try{await p()}catch(b){s(b.message??String(b))}finally{n(null)}},m=()=>l("extract",async()=>{const x=Ae(e.resources(),"asset");if(!x)throw new Error("no source file");await It(e,x.id)}),c=()=>l("segment",async()=>{const x=Ae(e.resources(),"document");if(!x)throw new Error("no document resource");await kt(e,x.id,{targetChars:1600,overlapChars:300})}),d=()=>l("embed",async()=>{const x=Ae(e.resources(),"segment-set");if(!x)throw new Error("no segment-set");await Et(e,x.id,{modelId:de,onProgress:(p,b,v)=>{a(`${v} — ${p} / ${b}`)}})}),g=x=>l("runtime",async()=>{await Mt(e,{kind:x,modelRef:x==="transformers-onnx"?at:"unsloth/SmolLM2-360M-Instruct-GGUF"})}),f=()=>l("template",async()=>{await Nt(e,Lt)});return(()=>{var x=Kr(),p=x.firstChild,b=p.nextSibling;return u(b,h(oe,{label:"1. Source",get done(){return o().hasSource},get hint(){return o().hasSource?"asset uploaded":"drop a file in Sources above"}}),null),u(b,h(oe,{label:"2. Extract text",get done(){return o().hasDocument},get action(){return q(()=>!!(o().hasSource&&!o().hasDocument))()?{label:"Extract",onClick:m,busy:t()==="extract"}:void 0}}),null),u(b,h(oe,{label:"3. Segment",get done(){return o().hasSegments},get action(){return q(()=>!!(o().hasDocument&&!o().hasSegments))()?{label:"Segment",onClick:c,busy:t()==="segment"}:void 0}}),null),u(b,h(oe,{label:"4. Embed",get done(){return o().hasEmbeddings},get hint(){return o().hasEmbeddings?`model: ${de}`:void 0},get action(){return q(()=>!!(o().hasSegments&&!o().hasEmbeddings))()?{label:"Embed",onClick:d,busy:t()==="embed"}:void 0}}),null),u(b,h(oe,{label:"5. Runtime",get done(){return o().hasRuntime},get hint(){return o().hasRuntime?`gen: ${at}`:void 0},get action(){return q(()=>!!(o().hasEmbeddings&&!o().hasRuntime))()?{label:"transformers.js + LFM2",onClick:()=>g("transformers-onnx"),busy:t()==="runtime"}:void 0}}),null),u(b,h(oe,{label:"6. Chat template",get done(){return o().hasTemplate},get hint(){return o().hasTemplate?"chatml":void 0},get action(){return q(()=>!!(o().hasRuntime&&!o().hasTemplate))()?{label:"Generate (chatml)",onClick:f,busy:t()==="template"}:void 0}}),null),u(b,h(oe,{label:"7. Build readiness",get done(){return o().buildReady},get hint(){return q(()=>!!o().buildReady)()?"ready — click Build in toolbar":o().blockingReason??""}}),null),u(x,h(C,{get when(){return i()},get children(){var v=Gr();return u(v,i),v}}),null),u(x,h(C,{get when(){return r()},get children(){var v=qr();return u(v,r),v}}),null),x})()}function oe(e){return(()=>{var t=Jr(),n=t.firstChild,r=n.nextSibling,s=r.firstChild;return u(s,()=>e.label),u(r,h(C,{get when(){return e.hint},get children(){var i=Wr();return u(i,()=>e.hint),i}}),null),u(t,h(C,{get when(){return e.action},children:i=>{const a=i();return(()=>{var o=Vr();return je(o,"click",a.onClick,!0),u(o,(()=>{var l=q(()=>!!a.busy);return()=>l()?"…":a.label})()),P(()=>o.disabled=a.busy),o})()}}),null),P(()=>V(n,`inline-block w-3.5 h-3.5 rounded-sm border ${e.done?"bg-accent border-accent":"bg-transparent border-edge"}`)),t})()}K(["click"]);var Xr=w('<span class="ml-2 text-amber-300">● unsaved'),Qr=w('<span class="text-red-400 text-[11px]">invalid JSON'),Zr=w('<div class="flex flex-col h-full"><div class="flex items-center justify-between px-3 py-2 border-b border-edge text-[11px] text-neutral-400"><span>Manifest</span><div class="flex items-center gap-2"><button class="px-2 py-0.5 text-[11px] rounded bg-white/5 hover:bg-white/10 border border-edge disabled:opacity-50">apply (⌘S)</button></div></div><textarea>');function es(){const e=Z(),[t,n]=M(JSON.stringify(e.manifest(),null,2)),[r,s]=M(null),[i,a]=M(!1);ie(()=>{const c=JSON.stringify(e.manifest(),null,2);!i()&&t()!==c&&(n(c),s(null))});const o=()=>{try{const c=JSON.parse(t());if(typeof c!="object"||c===null||Array.isArray(c))throw new Error("Manifest must be a JSON object");e.setManifest(c),s(null),a(!1)}catch(c){s(c.message)}},l=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="s"&&(c.preventDefault(),o())},m=c=>{const d=c.currentTarget;n(d.value),a(!0),s(null)};return $e(()=>{}),(()=>{var c=Zr(),d=c.firstChild,g=d.firstChild;g.firstChild;var f=g.nextSibling,x=f.firstChild,p=d.nextSibling;return u(g,h(C,{get when(){return i()},get children(){return Xr()}}),null),u(f,h(C,{get when(){return r()},get children(){var b=Qr();return P(()=>ee(b,"title",r()??"")),b}}),x),x.$$click=o,p.$$keydown=l,p.addEventListener("blur",o),p.$$input=m,ee(p,"spellcheck",!1),P(b=>{var v=!i(),y=`flex-1 w-full bg-transparent font-mono text-xs p-3 outline-none resize-none ${r()?"border-2 border-red-500/60":""}`,$=r()??"";return v!==b.e&&(x.disabled=b.e=v),y!==b.t&&V(p,b.t=y),$!==b.a&&ee(p,"title",b.a=$),b},{e:void 0,t:void 0,a:void 0}),P(()=>p.value=t()),c})()}K(["click","input","keydown"]);var ts=w('<ul class="divide-y divide-edge">'),ns=w('<div class="h-full flex flex-col bg-panel"><div class="flex-1 overflow-auto">'),rs=w("<span class=text-neutral-600> builds"),ss=w('<div class="px-3 py-6 text-xs text-neutral-500">No builds yet. Click <span class=text-accent>Build</span> in the chat-column toolbar once your pipeline is complete.'),is=w('<li><div class="flex items-center justify-between gap-2"><div class="min-w-0 flex-1"><div class="truncate text-sm"></div><div class="font-mono text-[11px] text-neutral-500 truncate">sha256:</div></div><span class="text-[11px] text-neutral-400 tabular-nums shrink-0"></span></div><div class="mt-1 flex items-center justify-between text-[11px] text-neutral-500"><span></span><div class="flex gap-2"><button class="text-accent hover:underline">download</button><button class="text-red-400 hover:underline">delete');function os(){const e=Z(),t=s=>e.setSelectedBuildId(s),n=async s=>{const i=e.outputs().find(m=>m.buildId===s);if(!i)return;const a=await kn(i);if(!a)return;const o=URL.createObjectURL(a),l=document.createElement("a");l.href=o,l.download=`${i.title.replace(/\s+/g,"_")}.${i.fingerprint.slice(0,8)}.elf.html`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(o)},r=async s=>{const i=e.outputs().find(a=>a.buildId===s);i&&confirm(`Delete build ${i.buildId}?`)&&await Sn(e,i)};return(()=>{var s=ns(),i=s.firstChild;return u(s,h(Ie,{title:"Outputs",get right(){return(()=>{var a=rs(),o=a.firstChild;return u(a,()=>e.outputs().length,o),a})()}}),i),u(i,h(C,{get when(){return e.outputs().length>0},get fallback(){return ss()},get children(){var a=ts();return u(a,h(te,{get each(){return e.outputs()},children:o=>(()=>{var l=is(),m=l.firstChild,c=m.firstChild,d=c.firstChild,g=d.nextSibling;g.firstChild;var f=c.nextSibling,x=m.nextSibling,p=x.firstChild,b=p.nextSibling,v=b.firstChild,y=v.nextSibling;return l.$$click=()=>t(o.buildId),u(d,()=>o.title),u(g,()=>yt(o.fingerprint,8,4),null),u(f,()=>ae(o.byteSize)),u(p,()=>new Date(o.builtAt).toLocaleString()),v.$$click=$=>{$.stopPropagation(),n(o.buildId)},y.$$click=$=>{$.stopPropagation(),r(o.buildId)},P(()=>V(l,`px-3 py-2 cursor-pointer ${e.selectedBuildId()===o.buildId?"bg-accent/15":"hover:bg-white/[0.03]"}`)),l})()})),a}})),s})()}K(["click"]);const Bt=pt();function as(e){const[t,n]=M(null),r={activeView:t,showCitation(s){n({sourceId:s.source_id,highlight:{fromLine:s.chunk_lines_from,toLine:s.chunk_lines_to}})},showSource(s){n({sourceId:s})},close(){n(null)}};return h(Bt.Provider,{value:r,get children(){return e.children}})}function ze(){const e=ht(Bt);if(!e)throw new Error("useNotebookContext must be used within NotebookContextProvider");return e}var ls=w("<ul class=space-y-1.5>"),cs=w('<div class="pointer-events-none absolute inset-0 border-2 border-dashed border-accent/60 bg-accent/10 flex items-center justify-center z-30"><span class="text-accent text-sm">Drop to ingest'),ds=w('<div class="relative h-full flex flex-col bg-panel"><div class="px-3 py-2 border-b border-edge"><button class="w-full text-sm rounded border border-edge bg-white/[0.04] hover:bg-white/[0.08] py-1.5 text-neutral-100">+ Add</button></div><div class="flex-1 overflow-auto p-2"></div><details class="border-t border-edge text-xs"><summary class="px-3 py-2 cursor-pointer text-neutral-400 hover:text-white select-none">Advanced · pipeline & builds</summary><div class="border-t border-edge max-h-[40vh] overflow-auto"><div class="border-b border-edge"></div><div class="border-b border-edge h-48"></div><div class=h-64>'),us=w('<span class="text-neutral-600 text-[11px]">'),fs=w('<div class="px-3 py-10 text-center"><div class="text-3xl mb-2">📄</div><p class="text-sm text-neutral-300 mb-1">Saved sources will appear here</p><p class="text-[11px] text-neutral-500">Click <span class=text-accent>+ Add</span> to add PDFs, text, websites, or CSVs.'),gs=w("<li>");function ms(){const e=Z(),t=ze(),[n,r]=M(!1),[s,i]=M(!1),[a,o]=M(null),[l,m]=M(null),c=J(()=>Object.values(e.resources()).filter(p=>p.role==="asset").sort((p,b)=>p.ingestedAt<b.ingestedAt?1:-1)),d=()=>{var p;return((p=t.activeView())==null?void 0:p.sourceId)??null},g=()=>{const p=d();return p?e.resources()[p]??null:null},f=()=>{const p=l();return p?e.resources()[p]??null:null},x=async p=>{p.preventDefault(),i(!1);const b=p.dataTransfer;if(!b)return;const v=[];for(const y of Array.from(b.items??[]))if(y.kind==="file"){const $=y.getAsFile();$&&v.push($)}if(v.length===0&&b.files)for(const y of Array.from(b.files))v.push(y);v.length&&await Rt(e,v)};return(()=>{var p=ds(),b=p.firstChild,v=b.firstChild,y=b.nextSibling,$=y.nextSibling,k=$.firstChild,_=k.nextSibling,A=_.firstChild,E=A.nextSibling,O=E.nextSibling;return p.addEventListener("drop",x),p.addEventListener("dragleave",()=>i(!1)),p.addEventListener("dragover",T=>{T.preventDefault(),i(!0)}),u(p,h(Ie,{title:"Sources",get right(){return(()=>{var T=us();return u(T,()=>c().length),T})()}}),b),v.$$click=()=>r(!0),u(y,h(C,{get when(){return c().length>0},get fallback(){return fs()},get children(){var T=ls();return u(T,h(te,{get each(){return c()},children:D=>(()=>{var L=gs();return u(L,h(jn,{resource:D,get active(){return d()===D.id},onOpen:()=>t.showSource(D.id),onRename:()=>m(D.id),onDelete:()=>o(D.id)})),L})()})),T}})),u(A,h(Yr,{})),u(E,h(os,{})),u(O,h(es,{})),u(p,h(C,{get when(){return s()},get children(){return cs()}}),null),u(p,h(C,{get when(){return g()},children:T=>h(Nr,{get source(){return T()},get highlight(){const D=t.activeView();if(D!=null&&D.highlight)return D.highlight},onClose:()=>t.close()})}),null),u(p,h(Er,{get open(){return n()},onOpenChange:r}),null),u(p,h(Ce,{get open(){return!!a()},get title(){var T;return`Remove "${((T=e.resources()[a()??""])==null?void 0:T.displayName)??"source"}"?`},get body(){return"Removes the source plus its extracted text. Embeddings derived from it will be marked stale."},destructive:!0,confirmLabel:"Remove",onConfirm:async()=>{const T=a();o(null),T&&(d()===T&&t.close(),await Fr(e,T))},onCancel:()=>o(null)}),null),u(p,h(C,{get when(){return f()},children:T=>h(Or,{get open(){return!!l()},get initialName(){return T().displayName??T().id},onOpenChange:D=>!D&&m(null),onSubmit:D=>{Dr(e,T().id,D),m(null)}})}),null),p})()}K(["click"]);var ps=w('<div class="flex gap-2 overflow-x-auto pb-1">'),hs=w('<button class="shrink-0 max-w-xs text-left px-3 py-2 rounded-lg border border-edge bg-panel hover:bg-white/[0.04] hover:border-accent/40 transition-colors"><span class="text-xs text-neutral-200 line-clamp-2">');function bs(e){return(()=>{var t=ps();return u(t,h(te,{get each(){return e.questions},children:n=>(()=>{var r=hs(),s=r.firstChild;return r.$$click=()=>e.onPick(n),u(s,n),r})()})),t})()}K(["click"]);function xs(e,t,n,r,s){if(e.length!==r)throw new Error(`query has dim ${e.length}, embeddings have dim ${r}`);if(t.length!==n*r)throw new Error(`embeddings length ${t.length} ≠ count*dim ${n*r}`);const i=[];for(let a=0;a<n;a++){const o=a*r;let l=0;for(let m=0;m<r;m++)l+=e[m]*t[o+m];if(i.length<s){i.push({chunkIndex:a,score:l}),i.length===s&&i.sort((m,c)=>m.score-c.score);continue}if(l>i[0].score){i[0]={chunkIndex:a,score:l};for(let m=1;m<i.length&&i[m].score<i[m-1].score;m++){const c=i[m];i[m]=i[m-1],i[m-1]=c}}}return i.sort((a,o)=>o.score-a.score)}const ws={type:"object",required:["output"],properties:{output:{type:"array",minItems:1,items:{type:"object",required:["text"],properties:{text:{type:"string"},citations:{type:"array",items:{type:"object",required:["chunk_index","chunk_source_id","chunk_lines_from","chunk_lines_to"],properties:{chunk_index:{type:"integer"},chunk_source_id:{type:"string"},chunk_lines_from:{type:"integer"},chunk_lines_to:{type:"integer"}}}}}}}}};function vs(e,t){const n=new Set;let r=e.resources()[t];for(;r&&!n.has(r.id);){if(n.add(r.id),r.role==="asset")return{id:r.id,title:r.displayName??r.id};const i=(r.derived_from??[]).map(a=>e.resources()[a]).filter(a=>!!a);if(i.length===0)break;r=i[0]}const s=e.resources()[t];return{id:t,title:(s==null?void 0:s.displayName)??t}}const lt=/\[(?:cite[:\s]*|\^)(\d+)\]/gi;function ys(e,t,n){const r=$s(e).trim(),s=[],i=new Map,a=[];let o=0;lt.lastIndex=0;let l;for(;(l=lt.exec(r))!==null;){const c=Number(l[1]),d=r.slice(o,l.index).trim();if(o=l.index+l[0].length,!d&&a.length===0)continue;const g=Number.isFinite(c)?t[c]:void 0;let f;if(g&&(f=i.get(c),f===void 0)){const x=vs(n,g.segment.document);f=s.length+1,s.push({citation_id:f,source_id:x.id,source_title:x.title,chunk_index:c,chunk_lines_from:g.segment.line_from??1,chunk_lines_to:g.segment.line_to??1,excerpt:g.segment.text.slice(0,160).replace(/\s+/g," ").trim()}),i.set(c,f)}if(d)a.push({text:d,citation_id:f});else if(f!==void 0&&a.length>0){const x=a[a.length-1];x.citation_id===void 0&&(x.citation_id=f)}}const m=r.slice(o).trim();return m&&a.push({text:m}),a.length===0?{segments:r?[{text:r}]:[],citations:[]}:{segments:a,citations:s}}function $s(e){const t=/```(?:[a-z]+)?\s*([\s\S]*?)```/i.exec(e);return t?t[1]:e}const _s=`Answer the question using ONLY the chunks below. After each claim you make, write [CITE N] where N is the number from the chunk header you used. Use the chunk numbers exactly as written. If the chunks do not contain the answer, say "I don't have enough information in the sources to answer that." with no citations.

Example shape (do not copy the content, just the shape):
Tennis is played on a rectangular court [CITE 0]. Players serve from behind the baseline [CITE 2].

Rules:
- One claim per sentence, one citation per claim.
- Only cite chunks you actually used.
- Plain prose. No JSON, no code fences, no numbered list.
- Keep the answer under 6 sentences.`;class we extends Error{constructor(n,r){super(r);me(this,"kind");this.kind=n,this.name="RagError"}}function ks(e,t){const n=new Set;let r=e.resources()[t];for(;r&&!n.has(r.id);){if(n.add(r.id),r.role==="asset")return{id:r.id,title:r.displayName??r.id};const i=(r.derived_from??[]).map(a=>e.resources()[a]).filter(a=>!!a);if(i.length===0)break;r=i[0]}const s=e.resources()[t];return{id:t,title:(s==null?void 0:s.displayName)??t}}async function Ss(e,t){var f,x;const r=(t.derived_from??[]).map(p=>e.resources()[p]).filter(p=>(p==null?void 0:p.role)==="segment-set")[0];if(!r)return null;const s=await e.blobs.get(r.sha256),i=await e.blobs.get(t.sha256);if(!s||!i)return null;const a=(await s.text()).split(`
`).filter(p=>p.trim().length>0).map(p=>JSON.parse(p)),o=await i.arrayBuffer(),l=new Float32Array(o),m=a.length,c=m>0?Math.floor(l.length/m):0;if(m===0||c===0)return null;const d=(t.derived_from??[]).map(p=>e.resources()[p]).find(p=>(p==null?void 0:p.role)==="model"),g=((x=(f=d==null?void 0:d.fetch_urls)==null?void 0:f[0])==null?void 0:x.replace(/^https?:\/\/huggingface\.co\//,""))||de;return{embedSet:t,segSet:r,segments:a,embeddings:l,count:m,dim:c,modelId:g}}async function Cs(e){var D;const{workspace:t,agent:n,userMessage:r,history:s}=e,i=bt().agentBackend!=="gemini",a=e.topK??(i?4:8),o=i?700:1600,l=i?3500:16e3,c=Object.values(t.resources()).filter(L=>L.role==="embedding-set");if(c.length===0)throw new we("no-embeddings","No embeddings yet. Wait for the source pipeline to finish — chat unlocks once at least one source has embeddings.");const d=[];let g=null;for(const L of c){const B=await Ss(t,L);B&&(d.push(B),g||(g=B.modelId))}if(d.length===0)throw new we("no-embeddings","Embedding-set bytes missing or empty.");const f=await Zn(r,{modelId:g??de,dtype:He}),x=[];for(const L of d){if(f.length!==L.dim){console.warn(`Skipping embedding-set ${L.embedSet.id}: query dim ${f.length} ≠ index dim ${L.dim}`);continue}const B=xs(f,L.embeddings,L.count,L.dim,Math.min(a,L.count));for(const z of B)x.push({indexEntry:L,chunkIndex:z.chunkIndex,score:z.score})}x.sort((L,B)=>B.score-L.score);const p=x.slice(0,a);if(p.length===0)throw new we("no-embeddings","No matching chunks found in any source.");const b=[],v=[];let y=0;for(const L of p){const B=L.indexEntry.segments[L.chunkIndex];if(!B)continue;const z=((D=t.resources()[B.document])==null?void 0:D.displayName)??B.document;let S=B.text;S.length>o&&(S=S.slice(0,o)+"…");const R=b.length,N=i?`[Chunk ${R} | source: ${z} | lines ${B.line_from??1}-${B.line_to??1}]
${S}`:`[Chunk ${R} | source_id: ${B.document} | source: ${z} | lines ${B.line_from??1}-${B.line_to??1}]
${S}`;if(y+N.length>l)break;b.push({promptIndex:R,segment:B}),v.push(N),y+=N.length}const $=v.join(`

---

`);if(i){const B=[{role:"system",content:`${_s}

Notebook: "${t.manifest().title||"this notebook"}"

Available chunks:

${$}`},...s.slice(-4).map(S=>({role:S.role,content:S.text})),{role:"user",content:r}];let z="";for await(const S of n.chat({messages:B,signal:e.signal,maxTokens:320,temperature:.4}))if(S.type==="text-delta")z+=S.delta;else if(S.type==="done"&&S.stopReason==="error")throw new we("agent",S.error??"agent error");return ys(z,b,t)}const _=[{role:"system",content:Es.replace("{{NOTEBOOK_TITLE}}",t.manifest().title||"this notebook").replace("{{CHUNKS}}",$)},...s.map(L=>({role:L.role,content:L.text})),{role:"user",content:r}],A=await n.structured({messages:_,schema:ws,signal:e.signal}),E=new Map,O=[];return{segments:(A.output??[]).map(L=>{const B=L.text??"",z=L.citations??[];if(z.length===0)return{text:B};const S=[];for(const R of z){const N=R.chunk_index,I=b[N];if(!I)continue;let j=E.get(N);if(j===void 0){const H=ks(t,I.segment.document);j=O.length+1,O.push({citation_id:j,source_id:H.id,source_title:H.title,chunk_index:N,chunk_lines_from:I.segment.line_from??1,chunk_lines_to:I.segment.line_to??1,excerpt:I.segment.text.slice(0,160).replace(/\s+/g," ").trim()}),E.set(N,j)}S.push(j)}return{text:B,citation_id:S[0]}}),citations:O}}const Es=`You are NotebookELF, an assistant grounded in the user's notebook "{{NOTEBOOK_TITLE}}".

Answer the user's question using ONLY the chunks below. Cite the chunks you used by emitting citations entries. If the chunks do not answer the question, say "I don't have enough information in the sources to answer that." with no citations.

Output strictly the JSON shape:
{
  "output": [
    { "text": "<a sentence or short paragraph>", "citations": [
        { "chunk_index": <int>, "chunk_source_id": "<source resource id>", "chunk_lines_from": <int>, "chunk_lines_to": <int> }
      ]
    }
  ]
}

Rules:
- Split your answer into 1–6 segments. Each segment carries citations for whatever chunks it leaned on.
- Only cite chunks that materially support the segment.
- chunk_index, chunk_source_id, and chunk_lines_from/to MUST come verbatim from a chunk's header.
- Do NOT invent citations and do NOT cite chunks you didn't use.
- No prose outside the JSON. No code fences.

Available chunks:

{{CHUNKS}}`;function Me(){return`m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}function Is(e){const t=()=>{var b;return(b=e.chats()[0])==null?void 0:b.id},[n,r]=M(null),[s,i]=M(!1),[a,o]=M(null);let l=null;const m=J(()=>{var b;return((b=e.chats()[0])==null?void 0:b.messages)??[]}),c=b=>{const v=t();v&&e.updateChat(v,y=>{y.messages.push(b)})},d=()=>{const b=[];for(const v of m())if(v.role==="user")b.push({role:"user",text:typeof v.content=="string"?v.content:""});else{const y=typeof v.content=="string"?v.content:v.content.segments.map($=>$.text).join("");b.push({role:"assistant",text:y})}return b},g=async(b,v)=>{const y=b.trim();if(!y||s())return;o(null),r(y);const $={id:Me(),role:"user",content:y,createdAt:new Date().toISOString()},k=d();c($),r(null),i(!0),l=new AbortController;try{const _=await Cs({userMessage:y,history:k,workspace:e,agent:v,signal:l.signal});c({id:Me(),role:"assistant",content:_,createdAt:new Date().toISOString()})}catch(_){const A=_ instanceof we?_.message:_.message??String(_);o(A),c({id:Me(),role:"assistant",content:"",createdAt:new Date().toISOString(),error:A})}finally{i(!1),l=null}};return{messages:m,pendingUser:n,loading:s,error:a,sendMessage:g,clearHistory:()=>{const b=t();b&&(e.updateChat(b,v=>{v.messages=[]}),o(null))},retryLast:async b=>{const v=m();if(s())return;let y=null;for(let k=v.length-1;k>=0;k--)if(v[k].role==="user"&&typeof v[k].content=="string"){y=v[k].content;break}if(!y)return;const $=t();$&&(e.updateChat($,k=>{for(;k.messages.length>0&&k.messages[k.messages.length-1].role==="assistant";)k.messages.pop()}),await g(y,b))},abort:()=>{l==null||l.abort(),l=null,i(!1)}}}var Rs=w('<button class="inline-flex items-center align-baseline mx-0.5 px-1.5 py-[1px] rounded bg-accent/15 border border-accent/40 text-accent text-[10px] font-mono hover:bg-accent/30">[<!>]');function Ts(e){return(()=>{var t=Rs(),n=t.firstChild,r=n.nextSibling;return r.nextSibling,t.$$click=s=>{s.stopPropagation(),e.onClick(e.citation)},u(t,()=>e.citation.citation_id,r),P(()=>ee(t,"title",`${e.citation.source_title} · lines ${e.citation.chunk_lines_from}-${e.citation.chunk_lines_to}`)),t})()}K(["click"]);var As=w('<div class="space-y-2 text-sm leading-relaxed text-neutral-100">'),Ms=w("<p class=whitespace-pre-wrap>"),ct=w("<span>"),Ls=w('<strong class="text-neutral-50 font-semibold">');function Ot(e){const t=()=>new Map(e.content.citations.map(n=>[n.citation_id,n]));return(()=>{var n=As();return u(n,h(te,{get each(){return e.content.segments},children:r=>{const s=r.citation_id?t().get(r.citation_id):null;return(()=>{var i=Ms();return u(i,()=>Ns(r.text),null),u(i,h(C,{when:s,children:a=>h(Ts,{get citation(){return a()},get onClick(){return e.onCitationClick}})}),null),i})()}})),n})()}function Ns(e){const t=[],n=/\*\*([^*]+)\*\*/g;let r=0,s;for(;(s=n.exec(e))!==null;)s.index>r&&t.push((()=>{var i=ct();return u(i,()=>e.slice(r,s.index)),i})()),t.push((()=>{var i=Ls();return u(i,()=>s[1]),i})()),r=s.index+s[0].length;return r<e.length&&t.push((()=>{var i=ct();return u(i,()=>e.slice(r)),i})()),t}function Bs(){return`note-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`}function Ft(e,t=60){const n=e.replace(/\s+/g," ").trim();return n.length<=t?n||"Untitled note":n.slice(0,t).trimEnd()+"…"}function Os(e,t=60){return Ft(e.segments.map(n=>n.text).join(" "),t)}function De(e,t){const n=new Date().toISOString(),r=(t.title??"").trim()||(typeof t.content=="string"?Ft(t.content):Os(t.content)),s={id:Bs(),title:r,content:t.content,source_type:t.source_type,createdAt:n,updatedAt:n};return e.upsertNote(s),e.appendJournal({actor:t.source_type==="ai_response"?"agent":"user",tool:"create_note",args:{title:r,kind:t.source_type},resultRefs:[s.id],durationMs:0,ok:!0}),s}function Fs(e,t){const n=e.notes().find(s=>s.id===t.id);if(!n)return;const r={...n,title:t.title!==void 0&&t.title.trim()||n.title,content:t.content!==void 0?t.content:n.content,updatedAt:new Date().toISOString()};e.upsertNote(r),e.appendJournal({actor:"user",tool:"update_note",args:{id:t.id},resultRefs:[t.id],durationMs:0,ok:!0})}function Ds(e,t){e.removeNote(t),e.appendJournal({actor:"user",tool:"delete_note",args:{id:t},resultRefs:[t],durationMs:0,ok:!0})}var Ps=w('<span class="text-red-400 truncate">⚠ '),Us=w('<div class="px-4 py-1.5 border-b border-edge bg-panel/60 text-[11px] flex items-center gap-2">'),js=w('<div class=space-y-4><div class="flex items-start gap-3"><div class=text-4xl></div><div class="flex-1 min-w-0"><h2 class="text-lg font-semibold text-neutral-100 mb-1"></h2><p class="text-sm text-neutral-400 whitespace-pre-wrap">'),Hs=w('<li class="flex justify-end"><div class="max-w-[80%] bg-accent text-white rounded-2xl rounded-br-sm px-3 py-2 text-sm whitespace-pre-wrap">'),zs=w('<li class=flex><div class="bg-panel border border-edge rounded-2xl rounded-bl-sm px-3 py-2 text-sm"><span class="inline-flex gap-1">'),Gs=w('<button class="px-3 py-2 rounded text-xs font-medium bg-red-600/80 text-white hover:bg-red-600"title="Stop generating">Stop'),qs=w('<div class="h-full flex flex-col bg-bg"><div class="flex-1 overflow-auto px-6 py-6"><div class="max-w-2xl mx-auto"><ul class="space-y-3 mt-2"></ul></div></div><div class="border-t border-edge p-3 bg-panel"><div class="max-w-2xl mx-auto space-y-2"><div class="flex gap-2 items-end"><textarea class="flex-1 bg-bg border border-edge rounded px-3 py-2 text-sm focus:outline-none focus:border-accent/60 resize-none disabled:opacity-50"rows=2></textarea></div><p class="text-[10px] text-neutral-600 text-center">NotebookELF can be inaccurate; double-check its responses.'),Ks=w('<button class="text-[11px] text-neutral-400 hover:text-white">Clear chat'),Ws=w('<div class="flex-1 h-1 bg-edge rounded overflow-hidden"><div class="h-full bg-accent transition-all">'),Js=w('<span class="text-neutral-400 truncate max-w-[60%]">'),Vs=w('<button class="px-3 py-1.5 rounded bg-accent text-white text-xs hover:bg-accent/90">Open Settings'),Ys=w('<div class="flex gap-2"><button class="px-3 py-1.5 rounded bg-accent text-white text-xs hover:bg-accent/90">Retry auto-generate</button><button class="px-3 py-1.5 rounded border border-edge text-xs hover:bg-white/5">Settings'),Xs=w("<button>Send"),Qs=w('<button class="text-[10px] text-neutral-500 hover:text-accent ml-1"title="Save this response to Studio notes">'),Zs=w("<li><div>"),ei=w('<div class="text-red-300 text-xs whitespace-pre-wrap">'),ti=w('<div class="text-neutral-300 whitespace-pre-wrap">'),ni=w('<details class="mt-2 group"><summary class="text-[11px] text-neutral-500 hover:text-neutral-300 cursor-pointer select-none"> citation</summary><ul class="mt-2 space-y-1">'),ri=w('<div class="text-neutral-500 mt-0.5 line-clamp-2">'),si=w('<li><button class="text-left w-full text-[11px] text-neutral-300 hover:text-white border border-edge rounded px-2 py-1 hover:bg-white/5"><span class="text-accent font-mono mr-1">[<!>]</span><span class=text-neutral-400> · L<!>-'),ii=w('<span class="block w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse">'),oi=w('<div class="text-center py-16"><div></div><h3 class="text-base font-medium text-neutral-100 mb-2"></h3><p class="text-sm text-neutral-400 max-w-md mx-auto mb-4">');function ai(){const e=Z(),t=ke(),n=ze(),r=Zt(),s=Is(e),[i,a]=M(""),[o,l]=M(!1),[m,c]=M(!1),[d,g]=M(null);ie(()=>{r();const S=Te();if(!S||!(S instanceof Xt)){g(null);return}const R=S.onProgress(N=>{g({progress:N.progress,stage:N.stage,status:N.status})});$e(R)});let f,x;const p=J(()=>Object.values(e.resources()).some(S=>S.role==="asset")),b=J(()=>Object.values(e.resources()).some(S=>S.role==="document"&&S.canonical_content)),v=J(()=>Ee(e.manifest(),e.resources())),y=()=>v().hasEmbeddings,$=()=>e.meta().detailsGenerationStatus==="generating",k=()=>e.meta().detailsGenerationStatus==="failed",_=()=>e.meta().detailsGenerated,A=J(()=>Qt(r())),E=()=>{f&&(f.scrollTop=f.scrollHeight)};ie(()=>{s.messages(),s.pendingUser(),s.loading(),queueMicrotask(E)});const O=async()=>{const S=i().trim();if(!S)return;const R=Te();if(!R){l(!0);return}a(""),await s.sendMessage(S,R)},T=S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),O())},D=S=>{n.showCitation(S)},L=async()=>{const S=Te();S&&await en(e,t,S)},B=()=>!p()||!b()||!y()||!A()||s.loading(),z=()=>p()?b()?y()?A()?s.loading()?"Thinking…":`Ask ${e.manifest().title||"this notebook"}…`:"Configure an agent in Settings to chat…":"Open Sources → Advanced → Pipeline to segment + embed your sources.":"Please wait while your sources are processed…":"Upload a source to get started…";return(()=>{var S=qs(),R=S.firstChild,N=R.firstChild,I=N.firstChild,j=R.nextSibling,H=j.firstChild,G=H.firstChild,Y=G.firstChild;u(S,h(Ie,{title:"Chat",get subtitle(){return _()?"grounded in your sources":"auto-details + chat"},get right(){return h(C,{get when(){return s.messages().length>0},get children(){var F=Ks();return F.$$click=()=>c(!0),F}})}}),R),u(S,h(C,{get when(){return q(()=>!!d())()&&d().status!=="ready"},get children(){var F=Us();return u(F,h(C,{get when(){return d().status==="error"},get fallback(){return[(()=>{var U=Ws(),X=U.firstChild;return P(ge=>Ue(X,"width",`${Math.max(2,d().progress)}%`)),U})(),(()=>{var U=Js();return u(U,()=>d().stage||"loading model…"),U})()]},get children(){var U=Ps();return U.firstChild,u(U,()=>d().stage,null),U}})),F}}),R);var ne=f;typeof ne=="function"?se(ne,R):f=R,u(N,h(C,{get when(){return!p()},get children(){return h(le,{icon:"📥",title:"Add a source to get started",body:"Drop a PDF, paste text, or link a URL on the left."})}}),I),u(N,h(C,{get when(){return q(()=>!!p())()&&!b()},get children(){return h(le,{icon:"⏳",title:"Processing your sources…",body:"Text extraction is running. Chat unlocks once at least one source has extracted text."})}}),I),u(N,h(C,{get when(){return q(()=>!!(p()&&b()))()&&!A()},get children(){return h(le,{icon:"🔑",title:"Pick an agent backend",body:"Local in-browser models work offline; Gemini API is faster but needs a key. Open Settings.",get cta(){return(()=>{var F=Vs();return F.$$click=()=>l(!0),F})()}})}}),I),u(N,h(C,{get when(){return q(()=>!!(p()&&b()&&A()))()&&$()},get children(){return h(le,{icon:"✨",title:"Generating notebook details…",body:"The agent is reading your sources to suggest a title, an icon, and example questions.",spinning:!0})}}),I),u(N,h(C,{get when(){return q(()=>!!(p()&&b()&&A()&&k()))()&&!_()},get children(){return h(le,{icon:"⚠️",title:"Auto-generate failed",body:"The model couldn't return clean output. Retry, or skip and start chatting.",get cta(){return(()=>{var F=Ys(),U=F.firstChild,X=U.nextSibling;return U.$$click=L,X.$$click=()=>l(!0),F})()}})}}),I),u(N,h(C,{get when(){return q(()=>!!(p()&&b()&&A()&&!y()))()&&!$()},get children(){return h(le,{icon:"🧮",title:"Index your sources to chat",body:"Open Sources → Advanced → Pipeline to run Segment + Embed. Then ask away."})}}),I),u(N,h(C,{get when(){return q(()=>!!_())()&&s.messages().length===0},get children(){var F=js(),U=F.firstChild,X=U.firstChild,ge=X.nextSibling,Ge=ge.firstChild,Dt=Ge.nextSibling;return u(X,()=>e.meta().icon),u(Ge,()=>e.manifest().title),u(Dt,()=>e.manifest().description),F}}),I),u(I,h(te,{get each(){return s.messages()},children:F=>h(li,{message:F,onCitationClick:D})}),null),u(I,h(C,{get when(){return s.pendingUser()},get children(){var F=Hs(),U=F.firstChild;return u(U,()=>s.pendingUser()),F}}),null),u(I,h(C,{get when(){return s.loading()},get children(){var F=zs(),U=F.firstChild,X=U.firstChild;return u(X,h(Le,{delay:0}),null),u(X,h(Le,{delay:150}),null),u(X,h(Le,{delay:300}),null),F}}),null),u(H,h(C,{get when(){return q(()=>e.meta().exampleQuestions.length>0&&s.messages().length===0&&!s.loading())()&&!B()},get children(){return h(bs,{get questions(){return e.meta().exampleQuestions},onPick:F=>{a(F),queueMicrotask(()=>x==null?void 0:x.focus())}})}}),G),Y.$$keydown=T,Y.$$input=F=>a(F.currentTarget.value);var fe=x;return typeof fe=="function"?se(fe,Y):x=Y,u(G,h(C,{get when(){return s.loading()},get fallback(){return(()=>{var F=Xs();return F.$$click=O,P(U=>{var X=`px-3 py-2 rounded text-xs font-medium ${B()||!i().trim()?"bg-white/5 border border-edge text-neutral-500 cursor-not-allowed":"bg-accent text-white hover:bg-accent/90"}`,ge=B()||!i().trim();return X!==U.e&&V(F,U.e=X),ge!==U.t&&(F.disabled=U.t=ge),U},{e:void 0,t:void 0}),F})()},get children(){var F=Gs();return F.$$click=()=>s.abort(),F}}),null),u(S,h(wt,{get open(){return o()},onOpenChange:l}),null),u(S,h(Ce,{get open(){return m()},title:"Clear this chat?",get body(){return"All messages in this conversation will be removed."},destructive:!0,confirmLabel:"Clear",onConfirm:()=>{s.clearHistory(),c(!1)},onCancel:()=>c(!1)}),null),P(F=>{var U=z(),X=B();return U!==F.e&&ee(Y,"placeholder",F.e=U),X!==F.t&&(Y.disabled=F.t=X),F},{e:void 0,t:void 0}),P(()=>Y.value=i()),S})()}function li(e){const t=Z(),n=()=>e.message.role==="user",[r,s]=M(!1),i=()=>{typeof e.message.content=="string"?De(t,{content:e.message.content,source_type:"ai_response"}):De(t,{content:e.message.content,source_type:"ai_response"}),s(!0),setTimeout(()=>s(!1),1500)};return(()=>{var a=Zs(),o=a.firstChild;return u(o,h(C,{get when(){return n()},get fallback(){return h(ci,{get message(){return e.message},get onCitationClick(){return e.onCitationClick}})},get children(){return e.message.content}})),u(a,h(C,{get when(){return q(()=>!n())()&&!e.message.error},get children(){var l=Qs();return l.$$click=i,u(l,()=>r()?"✓ Saved to note":"＋ Save to note"),l}}),null),P(l=>{var m=`flex flex-col ${n()?"items-end":"items-start"} gap-1`,c=`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${n()?"bg-accent text-white rounded-br-sm whitespace-pre-wrap":"bg-panel border border-edge rounded-bl-sm"}`;return m!==l.e&&V(a,l.e=m),c!==l.t&&V(o,l.t=c),l},{e:void 0,t:void 0}),a})()}function ci(e){const t=()=>!!e.message.error,n=()=>{const r=e.message.content;return!r||typeof r=="string"?null:r};return h(C,{get when(){return!t()},get fallback(){return(()=>{var r=ei();return u(r,()=>e.message.error),r})()},get children(){return h(C,{get when(){return n()},get fallback(){return(()=>{var r=ti();return u(r,()=>e.message.content??""),r})()},children:r=>[h(Ot,{get content(){return r()},get onCitationClick(){return e.onCitationClick}}),h(C,{get when(){return r().citations.length>0},get children(){var s=ni(),i=s.firstChild,a=i.firstChild,o=i.nextSibling;return u(i,()=>r().citations.length,a),u(i,()=>r().citations.length===1?"":"s",null),u(o,h(te,{get each(){return r().citations},children:l=>(()=>{var m=si(),c=m.firstChild,d=c.firstChild,g=d.firstChild,f=g.nextSibling;f.nextSibling;var x=d.nextSibling,p=x.firstChild,b=p.nextSibling;return b.nextSibling,c.$$click=()=>e.onCitationClick(l),u(d,()=>l.citation_id,f),u(x,()=>l.source_title,p),u(x,()=>l.chunk_lines_from,b),u(x,()=>l.chunk_lines_to,null),u(c,h(C,{get when(){return l.excerpt},get children(){var v=ri();return u(v,()=>l.excerpt),v}}),null),m})()})),s}})]})}})}function Le(e){return(()=>{var t=ii();return P(n=>Ue(t,"animation-delay",`${e.delay}ms`)),t})()}function le(e){return(()=>{var t=oi(),n=t.firstChild,r=n.nextSibling,s=r.nextSibling;return u(n,()=>e.icon),u(r,()=>e.title),u(s,()=>e.body),u(t,()=>e.cta,null),P(()=>V(n,`text-5xl mb-3 ${e.spinning?"animate-pulse":""}`)),t})()}K(["input","keydown","click"]);var di=w('<span class="flex items-center gap-2"><span></span><span>'),ui=w("<div>"),fi=w('<input class="w-full bg-bg border border-edge rounded px-3 py-1.5 text-sm focus:outline-none focus:border-accent/60"placeholder=Title>'),gi=w('<textarea class="w-full min-h-[260px] bg-bg border border-edge rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-accent/60 resize-y">'),mi=w('<div class="flex justify-end gap-2"><button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Cancel</button><button class="px-3 py-1.5 text-xs rounded bg-accent border border-accent/60 text-white hover:bg-accent/90">Save'),pi=w("<div class=space-y-4>"),hi=w('<h2 class="text-lg font-semibold text-neutral-100">'),bi=w('<button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Edit'),xi=w('<div class="flex justify-between items-center pt-3 border-t border-edge"><button class="text-[11px] text-red-400 hover:text-red-300">Delete note</button><div class="flex gap-2"><button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Close'),wi=w('<div class="text-sm text-neutral-200 whitespace-pre-wrap">');function vi(e){const[t,n]=M(!1),[r,s]=M(""),[i,a]=M("");ie(()=>{!e.open||!e.note||(s(e.note.title),a(typeof e.note.content=="string"?e.note.content:e.note.content.segments.map(c=>c.text).join(`

`)),n(e.note.source_type==="user"))});const o=()=>{n(!1),e.onOpenChange(!1)},l=()=>{e.onSave({title:r(),content:i()}),n(!1)},m=()=>{var c;return((c=e.note)==null?void 0:c.source_type)==="ai_response"};return h(ue,{get open(){return e.open},onClose:o,size:"max-w-2xl",get title(){return(()=>{var c=di(),d=c.firstChild,g=d.nextSibling;return u(d,()=>m()?"🤖":"✍️"),u(g,()=>m()?"AI response note":"Note"),c})()},get children(){return h(C,{get when(){return e.note},get fallback(){return ui()},children:c=>(()=>{var d=pi();return u(d,h(C,{get when(){return t()},get fallback(){return[(()=>{var g=hi();return u(g,()=>c().title),g})(),h(C,{get when(){return typeof c().content!="string"},get fallback(){return(()=>{var g=wi();return u(g,()=>c().content),g})()},get children(){return h(Ot,{get content(){return c().content},onCitationClick:g=>{o(),e.onCitationClick(g)}})}}),(()=>{var g=xi(),f=g.firstChild,x=f.nextSibling,p=x.firstChild;return f.$$click=()=>{e.onDelete(),o()},u(x,h(C,{get when(){return c().source_type==="user"},get children(){var b=bi();return b.$$click=()=>n(!0),b}}),p),p.$$click=o,g})()]},get children(){return[(()=>{var g=fi();return g.$$input=f=>s(f.currentTarget.value),P(()=>g.value=r()),g})(),(()=>{var g=gi();return g.$$input=f=>a(f.currentTarget.value),P(()=>g.value=i()),g})(),(()=>{var g=mi(),f=g.firstChild,x=f.nextSibling;return f.$$click=o,x.$$click=l,g})()]}})),d})()})}})}K(["input","click"]);function dt(e,t){const n=performance.now();e.mutate(r=>{r.permissions=t}),e.appendJournal({actor:"user",tool:"declare_permissions",args:t,resultRefs:[],durationMs:Math.round(performance.now()-n),ok:!0})}async function yi(e,t={}){var p;const n=e.buildConfig(),r=ye[n.profile],s=(b,v)=>{var y;(y=t.onProgress)==null||y.call(t,{step:b,message:v})},i=()=>Object.values(e.resources());if(i().some(b=>b.role==="template")||(s("template","Writing chat template…"),await Nt(e)),n.profile==="self-contained-gguf"&&!n.wllama.ggufResourceId)throw new Error('Self-contained build needs a GGUF. Open Build settings → "Pick GGUF…" or "Use default" first.');const o=$i(n.profile),l=()=>i().some(b=>b.role==="binding-runtime"),m=()=>{var b;return(b=e.manifest().fulfillments["generate-text"])==null?void 0:b[0]};(()=>{if(!l())return!0;const b=m();return b?b.runtime!==o||b.model!==ut(e)||Si(n.profile,b)!==n.profile:!0})()&&(s("runtime",`Packing ${r.short} runtime…`),await Mt(e,{kind:o,modelRef:ut(e),modelResourceId:o==="wllama-gguf"&&n.profile==="self-contained-gguf"&&n.wllama.ggufResourceId?n.wllama.ggufResourceId:void 0,maxNewTokens:384,dtypeWebgpu:n.onnx.dtype,dtypeWasm:n.onnx.dtype}),e.mutate((b,v)=>{const y=b.fulfillments["generate-text"];if(y&&y[0]&&(y[0].profile=n.profile),n.profile==="self-contained-gguf"&&n.wllama.ggufResourceId){const $=n.wllama.ggufResourceId,k=v[$];k&&delete k.fetch_urls;const _=b.resources.find(A=>A.id===$);_&&delete _.fetch_urls}if(n.profile==="byo-gguf"){const $="0".repeat(64);for(const k of b.resources){if(k.role!=="model"||k.media_type!=="application/x-gguf"&&k.media_type!=="application/x-gguf-embed")continue;delete k.fetch_urls,k.sha256=$,k.size=0;const _=v[k.id];_&&(delete _.fetch_urls,_.sha256=$,_.size=0,_.blobKey="")}}n.profile==="streaming-onnx"&&(b.resources=b.resources.filter($=>$.role!=="model"?!0:$.media_type==="application/x-gguf"||$.media_type==="application/x-gguf-embed"?(v[$.id]&&delete v[$.id],!1):!0))}),n.profile==="self-contained-gguf"&&n.wllama.ggufEmbedResourceId?_i(e,n.wllama.ggufEmbedResourceId):ki(e)),s("interaction","Declaring interaction…"),e.manifest().interaction.system_prompt||zr(e,{kind:"chat",system_prompt:"Answer the user using ONLY the chunks below. After each claim, cite the chunk you used with [CITE N] using the chunk number from its header.",topK:4}),s("permissions","Setting permissions…");const g=e.manifest(),f=(p=g.permissions)==null?void 0:p.network,x=r.isStreaming?["https://huggingface.co","https://cdn.jsdelivr.net"]:["https://cdn.jsdelivr.net"];if(!f||f.mode==="none")dt(e,{...g.permissions,network:{mode:"allow-listed",origins:Array.from(new Set([...(f==null?void 0:f.origins)??[],...x]))}});else{const b=Array.from(new Set([...f.origins??[],...x]));dt(e,{...g.permissions,network:{mode:f.mode,origins:b}})}s("done","Ready to build.")}function $i(e){return e==="streaming-onnx"?"transformers-onnx":"wllama-gguf"}function _i(e,t){e.resources()[t]&&e.mutate((r,s)=>{const i=s[t];i&&(i.role="model",i.media_type="application/x-gguf-embed",i.behavioral=!0)})}function ki(e){e.mutate((t,n)=>{t.resources=t.resources.filter(r=>r.role!=="model"||r.media_type!=="application/x-gguf-embed"||e.buildConfig().wllama.ggufEmbedResourceId===r.id?!0:(n[r.id]&&delete n[r.id],!1))})}function Si(e,t){return t.profile}function ut(e){const t=e.buildConfig();return t.profile==="streaming-onnx"?t.onnx.modelId:t.profile==="self-contained-gguf"||t.profile==="byo-gguf"?t.wllama.ggufLabel?t.wllama.ggufLabel.replace(/\.gguf$/i,""):"HuggingFaceTB/SmolLM2-360M-Instruct-GGUF":t.api.modelId}let Ci=0;async function Pe(e,t,n={}){var d,g;const r=performance.now();if(!/\.gguf$/i.test(t.name)&&t.type!=="application/x-gguf"){const f=new Uint8Array(await t.slice(0,4).arrayBuffer());if(f[0]!==71||f[1]!==71||f[2]!==85||f[3]!==70)throw new Error(`${t.name} is not a GGUF file (missing magic header).`)}(d=n.onProgress)==null||d.call(n,0,t.size);const s=await Q(t);(g=n.onProgress)==null||g.call(n,t.size,t.size),await e.blobs.put(s,t);const i=n.kind??"gen",a=i==="embed"?"res:model.embed.gguf":"res:model.gguf",o=i==="embed"?"application/x-gguf-embed":"application/x-gguf",l=`${a}.${Date.now().toString(36)}.${Ci++}`,m={id:l,media_type:o,size:t.size,sha256:s,role:"model",behavioral:!0,canonical_content:!1,blobKey:s,status:"ready",displayName:n.label??t.name,ingestedAt:new Date().toISOString()};e.mutate((f,x)=>{x[l]=m,f.resources.push(W(m))}),e.appendJournal({actor:"user",tool:"ingest_gguf",args:{name:t.name,size:t.size,sha256:s,kind:i},resultRefs:[l],durationMs:Math.round(performance.now()-r),ok:!0});const c=e.buildConfig();if(i==="embed")e.setBuildConfig({wllama:{...c.wllama,ggufEmbedResourceId:l,ggufEmbedLabel:n.label??t.name}});else{const f=c.profile==="byo-gguf"?"byo-gguf":"self-contained-gguf";e.setBuildConfig({profile:f,wllama:{...c.wllama,ggufResourceId:l,ggufLabel:n.label??t.name}})}return{resourceId:l,sha256:s,size:t.size}}async function _e(e,t,n="gen"){const r=n==="embed"?tn:nn;t==null||t(`Fetching ${r}…`);let s;try{s=await fetch(r,{method:"GET"})}catch{return null}if(!s.ok)return null;const i=await s.blob();if(i.size<1024)return null;const a=n==="embed"?"default-embed.gguf":"default.gguf",o=new File([i],a,{type:"application/x-gguf"});return Pe(e,o,{label:`${a} (repo default)`,kind:n})}var Ei=w("<div class=space-y-1.5>"),Ii=w('<input class="w-full bg-bg border border-edge rounded px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-accent/60"placeholder=HuggingFaceTB/SmolLM2-360M-Instruct>'),Ri=w('<div class="flex flex-wrap gap-1 mt-2">'),Ti=w('<div class=mt-2><label class="text-[11px] text-neutral-400 mr-2">Quant:</label><select class="bg-bg border border-edge rounded px-2 py-1 text-xs"><option value=q4>q4 (smallest)</option><option value=q8>q8 (default)</option><option value=fp16>fp16</option><option value=fp32>fp32 (largest)'),Ai=w('<div class="text-[11px] text-accent">'),Mi=w('<div class="text-[11px] text-red-400">'),Li=w('<div class="rounded border border-edge bg-bg p-3 space-y-2"><div class="flex items-start justify-between gap-2"><div class="min-w-0 flex-1"><div class="text-sm text-neutral-100 truncate"></div></div><div class="flex flex-col gap-1 shrink-0"><button type=button class="text-[11px] px-2 py-1 rounded border border-edge hover:bg-white/5"></button><button type=button class="text-[11px] px-2 py-1 rounded border border-edge hover:bg-white/5">Use default</button></div><input type=file accept=.gguf,application/x-gguf,application/octet-stream class=hidden></div><p class="text-[11px] text-neutral-500">File hashed and persisted in this notebook. Bytes baked into the built .elf — no network at consume time, works from file://.'),Ni=w('<button type=button class="text-[11px] px-2 py-1 rounded border border-edge text-red-300 hover:bg-red-500/10">Clear'),Bi=w('<div class="rounded border border-edge bg-bg p-3 space-y-2"><div class="flex items-start justify-between gap-2"><div class="min-w-0 flex-1"><div class="text-sm text-neutral-100 truncate"></div></div><div class="flex flex-col gap-1 shrink-0"><button type=button class="text-[11px] px-2 py-1 rounded border border-edge hover:bg-white/5"></button><button type=button class="text-[11px] px-2 py-1 rounded border border-edge hover:bg-white/5">Use default</button></div><input type=file accept=.gguf,application/x-gguf,application/octet-stream class=hidden></div><p class="text-[11px] text-amber-300/80">⚠ Switching the embedding model means the existing embeddings no longer line up. Re-embed your sources after changing this (Phase 6.7 wires automatic re-embed; today: delete + re-add a source to regenerate).'),Oi=w(`<p class="text-[11px] text-neutral-500">The .elf ships small (~couple of MB). On first chat the consumer is asked to choose a GGUF from disk. Picked file caches in their browser. Useful when you don't want to ship a 200&nbsp;MB+ model.`),Fi=w('<p class="text-[11px] text-amber-300/80 -mt-1">⚠ Streaming builds need a hosted page. They will not run if the consumer opens the .elf from disk (file://).'),Di=w('<input class="w-full bg-bg border border-edge rounded px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-accent/60">'),Pi=w('<div class="space-y-5 text-sm"><div class="flex justify-end gap-2 pt-3 border-t border-edge"><button class="px-3 py-1.5 text-xs rounded border border-edge hover:bg-white/5">Cancel</button><button class="px-3 py-1.5 text-xs rounded bg-accent border border-accent/60 text-white hover:bg-accent/90">Save'),Ui=w('<span class="flex items-center gap-2"><span>📦</span><span>Build settings'),ji=w('<button class="text-[11px] px-2 py-1 rounded border border-edge hover:bg-white/5 hover:border-accent/40">'),Hi=w('<div class="text-[11px] text-neutral-500 mt-0.5">Suggestion: <span class=font-mono></span> · ~<!>&nbsp;MB'),ft=w('<div class="text-[11px] text-neutral-500 mt-0.5"> · sha256:<!>…'),zi=w('<div class="text-[11px] text-neutral-500 mt-0.5">Falls back to streaming Xenova/all-MiniLM-L6-v2 via transformers.js when no embed GGUF is picked.'),Gi=w('<p class="text-[11px] text-neutral-500 mb-2">'),qi=w('<div><h4 class="text-[11px] uppercase tracking-wider text-neutral-400 mb-1"></h4><div>'),Ki=w('<span class="text-[10px] uppercase text-emerald-400 border border-emerald-500/40 px-1 rounded">recommended'),Wi=w('<label><div class="flex items-center gap-2"><input type=radio><span class="text-sm font-medium text-neutral-100"></span></div><div class="text-[11px] text-neutral-500 ml-6 whitespace-pre-wrap">');function Ji(e){const t=Z(),[n,r]=M(t.buildConfig()),[s,i]=M(null),[a,o]=M(null);let l;ie(()=>{e.open&&(r(JSON.parse(JSON.stringify(t.buildConfig()))),o(null),i(null))});const m=()=>e.onOpenChange(!1),c=()=>{t.setBuildConfig(n()),m()},d=J(()=>{const $=n().wllama.ggufResourceId;return $?t.resources()[$]??null:null}),g=J(()=>{const $=n().wllama.ggufEmbedResourceId;return $?t.resources()[$]??null:null}),f=async $=>{var A;const k=$.target,_=(A=k.files)==null?void 0:A[0];if(k.value="",!!_){o(null),i(`Hashing ${_.name}…`);try{const E=await Pe(t,_,{kind:"gen"});r({...n(),profile:n().profile==="byo-gguf"?"byo-gguf":"self-contained-gguf",wllama:{...n().wllama,ggufResourceId:E.resourceId,ggufLabel:_.name}}),i(`Picked ${_.name} · ${ae(E.size)}`)}catch(E){o(E.message??String(E)),i(null)}}};let x;const p=async $=>{var A;const k=$.target,_=(A=k.files)==null?void 0:A[0];if(k.value="",!!_){o(null),i(`Hashing ${_.name}…`);try{const E=await Pe(t,_,{kind:"embed"});r({...n(),wllama:{...n().wllama,ggufEmbedResourceId:E.resourceId,ggufEmbedLabel:_.name}}),i(`Picked embed ${_.name} · ${ae(E.size)}`)}catch(E){o(E.message??String(E)),i(null)}}},b=async()=>{o(null),i("Loading default GGUF…");try{const $=await _e(t,k=>i(k));if(!$){i(null),o("No default GGUF available. Drop one at public/models/default.gguf or use Pick GGUF…");return}r({...n(),profile:"self-contained-gguf",wllama:{...n().wllama,ggufResourceId:$.resourceId,ggufLabel:"default.gguf"}}),i(`Loaded default · ${ae($.size)}`)}catch($){o($.message??String($)),i(null)}},v=async()=>{o(null),i("Loading default embedding GGUF…");try{const $=await _e(t,k=>i(k),"embed");if(!$){i(null),o("No default embedding GGUF available. Drop one at public/models/default-embed.gguf or use Pick GGUF…");return}r({...n(),wllama:{...n().wllama,ggufEmbedResourceId:$.resourceId,ggufEmbedLabel:"default-embed.gguf"}}),i(`Loaded default embed · ${ae($.size)}`)}catch($){o($.message??String($)),i(null)}},y=()=>{r({...n(),wllama:{...n().wllama,ggufEmbedResourceId:"",ggufEmbedLabel:""}})};return h(ue,{get open(){return e.open},onClose:m,size:"max-w-2xl",get title(){return Ui()},get children(){var $=Pi(),k=$.firstChild,_=k.firstChild,A=_.nextSibling;return u($,h(ce,{title:"Profile",hint:"One choice covers bundle mode + runtime + which model the .elf uses.",get children(){var E=Ei();return u(E,h(te,{get each(){return Object.values(ye)},children:O=>h(Vi,{get meta(){return O.profile},get current(){return n().profile},onChange:T=>r({...n(),profile:T})})})),E}}),k),u($,h(C,{get when(){return n().profile==="streaming-onnx"},get children(){return h(ce,{title:"ONNX model (Hugging Face id)",get children(){return[(()=>{var E=Ii();return E.$$input=O=>r({...n(),onnx:{...n().onnx,modelId:O.currentTarget.value}}),P(()=>E.value=n().onnx.modelId),E})(),(()=>{var E=Ri();return u(E,h(te,{each:rn,children:O=>(()=>{var T=ji();return T.$$click=()=>r({...n(),onnx:{...n().onnx,modelId:O.id}}),u(T,()=>O.label),P(()=>ee(T,"title",O.note)),T})()})),E})(),(()=>{var E=Ti(),O=E.firstChild,T=O.nextSibling;return T.addEventListener("change",D=>r({...n(),onnx:{...n().onnx,dtype:D.currentTarget.value}})),P(()=>T.value=n().onnx.dtype),E})()]}})}}),k),u($,h(C,{get when(){return n().profile==="self-contained-gguf"},get children(){return[h(ce,{title:"GGUF model (baked into the .elf)",get children(){var E=Li(),O=E.firstChild,T=O.firstChild,D=T.firstChild,L=T.nextSibling,B=L.firstChild,z=B.nextSibling,S=L.nextSibling,R=O.nextSibling;u(D,()=>{var I;return((I=d())==null?void 0:I.displayName)??n().wllama.ggufLabel??"No GGUF picked"}),u(T,h(C,{get when(){return d()},get fallback(){return(()=>{var I=Hi(),j=I.firstChild,H=j.nextSibling,G=H.nextSibling,Y=G.nextSibling;return Y.nextSibling,u(H,()=>Ve.filename),u(I,()=>Ve.approxSizeMB,Y),I})()},children:I=>(()=>{var j=ft(),H=j.firstChild,G=H.nextSibling;return G.nextSibling,u(j,()=>ae(I().size),H),u(j,()=>I().sha256.slice(0,12),G),j})()}),null),B.$$click=()=>l==null?void 0:l.click(),u(B,()=>d()?"Replace…":"Pick GGUF…"),z.$$click=b,S.addEventListener("change",f);var N=l;return typeof N=="function"?se(N,S):l=S,u(E,h(C,{get when(){return s()},get children(){var I=Ai();return u(I,s),I}}),R),u(E,h(C,{get when(){return a()},get children(){var I=Mi();return u(I,a),I}}),R),E}}),h(ce,{title:"Embedding GGUF (optional)",get children(){var E=Bi(),O=E.firstChild,T=O.firstChild,D=T.firstChild,L=T.nextSibling,B=L.firstChild,z=B.nextSibling,S=L.nextSibling;u(D,()=>{var N;return((N=g())==null?void 0:N.displayName)??n().wllama.ggufEmbedLabel??"transformers.js MiniLM (default)"}),u(T,h(C,{get when(){return g()},get fallback(){return zi()},children:N=>(()=>{var I=ft(),j=I.firstChild,H=j.nextSibling;return H.nextSibling,u(I,()=>ae(N().size),j),u(I,()=>N().sha256.slice(0,12),H),I})()}),null),B.$$click=()=>x==null?void 0:x.click(),u(B,()=>g()?"Replace…":"Pick GGUF…"),z.$$click=v,u(L,h(C,{get when(){return g()},get children(){var N=Ni();return N.$$click=y,N}}),null),S.addEventListener("change",p);var R=x;return typeof R=="function"?se(R,S):x=S,E}})]}}),k),u($,h(C,{get when(){return n().profile==="byo-gguf"},get children(){return h(ce,{title:"BYO GGUF — consumer picks at runtime",get children(){return Oi()}})}}),k),u($,h(C,{get when(){return n().profile==="streaming-onnx"},get children(){return Fi()}}),k),u($,h(ce,{title:"Embedding model",hint:"Must match the corpus this notebook was indexed with.",get children(){var E=Di();return E.$$input=O=>r({...n(),embedModelId:O.currentTarget.value}),P(()=>E.value=n().embedModelId),E}}),k),_.$$click=m,A.$$click=c,$}})}function ce(e){return(()=>{var t=qi(),n=t.firstChild,r=n.nextSibling;return u(n,()=>e.title),u(t,h(C,{get when(){return e.hint},get children(){var s=Gi();return u(s,()=>e.hint),s}}),r),u(r,()=>e.children),t})()}function Vi(e){const t=ye[e.meta];return(()=>{var n=Wi(),r=n.firstChild,s=r.firstChild,i=s.nextSibling,a=r.nextSibling;return s.addEventListener("change",()=>e.onChange(e.meta)),u(i,()=>t.label),u(r,h(C,{get when(){return e.meta==="self-contained-gguf"},get children(){return Ki()}}),null),u(a,()=>t.hint),P(()=>V(n,`block p-3 rounded border cursor-pointer ${e.current===e.meta?"bg-accent/10 border-accent/60":"border-edge hover:bg-white/[0.03]"}`)),P(()=>s.checked=e.current===e.meta),n})()}K(["input","click"]);var Yi=w('<p class="text-[10px] text-neutral-500 mt-1.5">Need: at least one source w/ embeddings (auto-pipeline finishes after extraction).'),Xi=w('<p class="text-[10px] text-neutral-500 mt-1.5">Build will auto-add: chat template, generation runtime, permissions.'),Qi=w('<div class="mt-2 bg-red-900/40 border border-red-500/40 text-red-100 text-[11px] px-2 py-1.5 rounded whitespace-pre-wrap">'),Zi=w('<div class="rounded-lg border border-accent/40 bg-gradient-to-br from-accent/15 via-panel to-panel p-4"><div class="flex items-start justify-between gap-2"><div class="flex items-center gap-2 min-w-0"><span class=text-2xl>📦</span><h3 class="text-sm font-semibold text-neutral-100">Build ELF</h3></div><button class="text-neutral-400 hover:text-white p-1 rounded hover:bg-white/5"title="Build settings">⚙️</button></div><p class="text-[11px] text-neutral-400 mt-2">Pack this notebook into a single self-contained <code class=text-accent>.elf.html</code> file. Anyone can open it — chat with citations, no install.</p><div class="mt-3 rounded border border-edge bg-bg/40 px-2 py-1.5 text-[11px]"><div class="text-[10px] uppercase tracking-wider text-neutral-500">Profile</div><div class="text-neutral-200 truncate"></div><div class="text-neutral-500 line-clamp-2 mt-0.5"></div></div><div class="mt-3 text-[11px] text-neutral-500"> source<!> · <!> chunk</div><button>'),eo=w("<strong>Pick GGUF…");function to(){const e=Z(),t=ke(),[n,r]=M(!1),[s,i]=M(!1),[a,o]=M(null),[l,m]=M(!1),[c,d]=M(null),g=J(()=>Ee(e.manifest(),e.resources())),f=J(()=>{const _=Object.values(e.resources()),A=_.some(O=>O.role==="embedding-set");return _.some(O=>O.role==="asset")&&A}),x=J(()=>Object.values(e.resources()).filter(_=>_.role==="asset").length),p=J(()=>{let _=0;for(const A of Object.values(e.resources()))if(A.role==="segment-set"){const E=/\((\d+) segments\)/.exec(A.displayName??"");E&&(_+=Number(E[1]))}return _}),b=()=>{var _;return((_=ye[e.buildConfig().profile])==null?void 0:_.short)??e.buildConfig().profile},v=()=>{var _;return((_=ye[e.buildConfig().profile])==null?void 0:_.hint)??""},y=async()=>{if(s())return;const _=e.buildConfig();if(_.profile==="self-contained-gguf"&&!_.wllama.ggufResourceId){i(!0),d("Fetching default model…");try{if(!await _e(e,O=>d(O))){i(!1),d(null),m(!0);return}}catch{i(!1),d(null),m(!0);return}i(!1),d(null)}const A=e.buildConfig();if(A.profile==="self-contained-gguf"&&!A.wllama.ggufEmbedResourceId)try{await _e(e,void 0,"embed")}catch{}await $()},$=async()=>{i(!0),o(null),d("Finalizing manifest…");try{await yi(e,{onProgress:A=>d(A.message)}),d("Packaging .elf…"),await $t(e),await t.bumpUpdatedAt(e.notebookId);const _=e.fingerprint();await t.updateSummary(e.notebookId,{fingerprint:_,lastBuiltAt:new Date().toISOString()}),d(null)}catch(_){o(_.message??String(_)),d(null)}finally{i(!1)}},k=()=>e.outputs()[0];return(()=>{var _=Zi(),A=_.firstChild,E=A.firstChild,O=E.nextSibling,T=A.nextSibling,D=T.nextSibling,L=D.firstChild,B=L.nextSibling,z=B.nextSibling,S=D.nextSibling,R=S.firstChild,N=R.nextSibling,I=N.nextSibling,j=I.nextSibling;j.nextSibling;var H=S.nextSibling;return O.$$click=()=>r(!0),u(B,b),u(z,v),u(S,x,R),u(S,()=>x()===1?"":"s",N),u(S,p,j),u(S,()=>p()===1?"":"s",null),u(S,h(C,{get when(){return k()},get children(){return[" ","· last built ",q(()=>new Date(k().builtAt).toLocaleString())]}}),null),H.$$click=y,u(H,(()=>{var G=q(()=>!!s());return()=>G()?c()??"Building…":"Build ELF"})()),u(_,h(C,{get when(){return!f()},get children(){return Yi()}}),null),u(_,h(C,{get when(){return q(()=>!!f())()&&!g().buildReady},get children(){return Xi()}}),null),u(_,h(C,{get when(){return a()},get children(){var G=Qi();return u(G,a),G}}),null),u(_,h(Ji,{get open(){return n()},onOpenChange:r}),null),u(_,h(Ce,{get open(){return l()},title:"No GGUF picked",get body(){return["Self-contained mode embeds the model bytes in the .elf so it works offline from disk. Open Build settings (gear icon) and use"," ",eo()," to choose a model first."]},confirmLabel:"Open settings",onConfirm:()=>{m(!1),r(!0)},onCancel:()=>m(!1)}),null),P(G=>{var Y=`mt-3 w-full py-2 rounded text-sm font-medium ${f()&&!s()?"bg-accent text-white hover:bg-accent/90":"bg-white/5 border border-edge text-neutral-500 cursor-not-allowed"}`,ne=!f()||s(),fe=f()?"Auto-finalize manifest, then build .elf":"Need at least one source + embeddings";return Y!==G.e&&V(H,G.e=Y),ne!==G.t&&(H.disabled=G.t=ne),fe!==G.a&&ee(H,"title",G.a=fe),G},{e:void 0,t:void 0,a:void 0}),_})()}K(["click"]);var no=w("<ul class=space-y-2>"),ro=w('<div class="h-full flex flex-col bg-panel"><div class="flex-1 overflow-auto p-3 space-y-3"><div class="text-[11px] uppercase tracking-wider text-neutral-500 px-1 pt-1">Notes'),so=w('<button class="text-[11px] px-2 py-0.5 rounded border border-edge hover:bg-white/5">+ Add note'),io=w(`<div class="text-center py-12 px-4"><div class="text-3xl mb-2">📝</div><p class="text-sm text-neutral-300 mb-1">No notes yet</p><p class="text-[11px] text-neutral-500">Save AI responses or jot your own. Notes stay on this device and don't ship in the .elf.`),oo=w('<li><button class="w-full text-left p-3 rounded-lg border border-edge bg-bg hover:bg-white/[0.04] hover:border-white/30 transition-colors"><div class="flex items-center gap-2 mb-1"><span class="text-base shrink-0"></span><span class="text-sm font-medium text-neutral-100 truncate"></span></div><p class="text-[11px] text-neutral-400 line-clamp-2"></p><div class="text-[10px] text-neutral-600 mt-1">');function ao(){const e=Z(),t=ze(),[n,r]=M(null),[s,i]=M(null),a=J(()=>[...e.notes()].sort((c,d)=>c.updatedAt<d.updatedAt?1:-1)),o=J(()=>{const c=n();return c?e.notes().find(d=>d.id===c)??null:null}),l=()=>{const c=De(e,{content:"",source_type:"user",title:"New note"});r(c.id)},m=c=>{const d=c.content;return typeof d=="string"?d.slice(0,140):d.segments.map(g=>g.text).join(" ").slice(0,140)};return(()=>{var c=ro(),d=c.firstChild,g=d.firstChild;return u(c,h(Ie,{title:"Studio",subtitle:"notes · saved AI answers",get right(){return(()=>{var f=so();return f.$$click=l,f})()}}),d),u(d,h(to,{}),g),u(d,h(C,{get when(){return a().length>0},get fallback(){return io()},get children(){var f=no();return u(f,h(te,{get each(){return a()},children:x=>(()=>{var p=oo(),b=p.firstChild,v=b.firstChild,y=v.firstChild,$=y.nextSibling,k=v.nextSibling,_=k.nextSibling;return b.$$click=()=>r(x.id),u(y,()=>x.source_type==="ai_response"?"🤖":"✍️"),u($,()=>x.title),u(k,()=>m(x)),u(_,()=>new Date(x.updatedAt).toLocaleString()),p})()})),f}}),null),u(c,h(vi,{get open(){return!!o()},get note(){return o()},onOpenChange:f=>!f&&r(null),onSave:f=>{const x=n();x&&Fs(e,{id:x,title:f.title,content:f.content})},onDelete:()=>{const f=n();f&&i(f)},onCitationClick:f=>t.showCitation(f)}),null),u(c,h(Ce,{get open(){return!!s()},title:"Delete note?",get body(){return"This cannot be undone."},destructive:!0,confirmLabel:"Delete",onConfirm:()=>{const f=s();i(null),r(null),f&&Ds(e,f)},onCancel:()=>i(null)}),null),c})()}K(["click"]);var lo=w('<div class="h-full flex items-center justify-center text-neutral-500 text-sm">loading notebook…'),co=w('<div class="h-full flex flex-col bg-bg"><div class="flex-1 min-h-0">');function mo(){const e=sn(),t=ke(),[n]=xt(()=>decodeURIComponent(e.id),async r=>{if(!t.notebooks().some(l=>l.id===r)&&t.ready())return{missing:!0};const i=await on(r),a=an({notebookId:r});i&&a.hydrate(i);const o=ln(a);return $e(()=>o()),{store:a,missing:!1}});return h(C,{get when(){return n()},get fallback(){return lo()},children:r=>h(C,{get when(){return!r().missing},get fallback(){return h(un,{href:"/"})},get children(){return h(gn,{get store(){return r().store},get children(){return h(as,{get children(){var s=co(),i=s.firstChild;return u(s,h(Ln,{get summary(){return t.notebooks().find(a=>a.id===r().store.notebookId)}}),i),u(i,h(Xe,{direction:"horizontal",storageKey:"nb.col1",initialA:360,minA:240,minB:400,get a(){return h(ms,{})},get b(){return h(Xe,{direction:"horizontal",storageKey:"nb.col2",initialA:520,minA:320,minB:240,get a(){return h(ai,{})},get b(){return h(ao,{})}})}})),s}})}})}})})}export{mo as default};
