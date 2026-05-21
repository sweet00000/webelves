var Pt=Object.defineProperty;var Lt=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var rt=(e,t,n)=>Lt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ft=!1,zt=(e,t)=>e===t,ee=Symbol("solid-proxy"),Pe=Symbol("solid-track"),ve={equals:zt};let bt=_t;const K=1,$e=2,yt={owned:null,cleanups:null,context:null,owner:null},Te={};var C=null;let je=null,qt=null,M=null,B=null,H=null,Oe=0;function ye(e,t){const n=M,r=C,s=e.length===0,i=t===void 0?r:t,l=s?yt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=s?e:()=>e(()=>P(()=>he(l)));C=l,M=null;try{return J(o,!0)}finally{M=n,C=r}}function O(e,t){t=t?Object.assign({},ve,t):ve;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),$t(n,s));return[vt.bind(n),r]}function Ut(e,t,n){const r=Re(e,t,!0,K);oe(r)}function T(e,t,n){const r=Re(e,t,!1,K);oe(r)}function Xe(e,t,n){bt=Qt;const r=Re(e,t,!1,K);r.user=!0,H?H.push(r):oe(r)}function U(e,t,n){n=n?Object.assign({},ve,n):ve;const r=Re(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,oe(r),vt.bind(r)}function Wt(e){return e&&typeof e=="object"&&"then"in e}function wt(e,t,n){let r,s,i;typeof t=="function"?(r=e,s=t,i={}):(r=!0,s=e,i=t||{});let l=null,o=Te,a=!1,u="initialValue"in i,d=typeof r=="function"&&U(r);const c=new Set,[m,f]=(i.storage||O)(i.initialValue),[h,y]=O(void 0),[b,$]=O(void 0,{equals:!1}),[S,_]=O(u?"ready":"unresolved");function p(R,I,F,j){return l===R&&(l=null,j!==void 0&&(u=!0),(R===o||I===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(j,{value:I})),o=Te,A(I,F)),I}function A(R,I){J(()=>{I===void 0&&f(()=>R),_(I!==void 0?"errored":u?"ready":"unresolved"),y(I);for(const F of c.keys())F.decrement();c.clear()},!1)}function x(){const R=Vt,I=m(),F=h();if(F!==void 0&&!l)throw F;return M&&M.user,I}function E(R=!0){if(R!==!1&&a)return;a=!1;const I=d?d():r;if(I==null||I===!1){p(l,P(m));return}let F;const j=o!==Te?o:P(()=>{try{return s(I,{value:m(),refetching:R})}catch(ce){F=ce}});if(F!==void 0){p(l,void 0,we(F),I);return}else if(!Wt(j))return p(l,j,void 0,I),j;return l=j,"v"in j?(j.s===1?p(l,j.v,void 0,I):p(l,void 0,we(j.v),I),j):(a=!0,queueMicrotask(()=>a=!1),J(()=>{_(u?"refreshing":"pending"),$()},!1),j.then(ce=>p(j,ce,void 0,I),ce=>p(j,void 0,we(ce),I)))}Object.defineProperties(x,{state:{get:()=>S()},error:{get:()=>h()},loading:{get(){const R=S();return R==="pending"||R==="refreshing"}},latest:{get(){if(!u)return x();const R=h();if(R&&!l)throw R;return m()}}});let k=C;return d?Ut(()=>(k=C,E(!1))):E(!1),[x,{refetch:R=>Ht(k,()=>E(R)),mutate:f}]}function Le(e){return J(e,!1)}function P(e){if(M===null)return e();const t=M;M=null;try{return e()}finally{M=t}}function xt(e){Xe(()=>P(e))}function Ye(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function Fe(){return M}function Ht(e,t){const n=C,r=M;C=e,M=null;try{return J(t,!0)}catch(s){Qe(s)}finally{C=n,M=r}}const[ms,gs]=O(!1);function Jt(e,t){const n=Symbol("context");return{id:n,Provider:Zt(n),defaultValue:e}}function Kt(e){let t;return C&&C.context&&(t=C.context[e.id])!==void 0?t:e.defaultValue}function Gt(e){const t=U(e),n=U(()=>ze(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Vt;function vt(){if(this.sources&&this.state)if(this.state===K)oe(this);else{const e=B;B=null,J(()=>Se(this),!1),B=e}if(M){const e=this.observers?this.observers.length:0;M.sources?(M.sources.push(this),M.sourceSlots.push(e)):(M.sources=[this],M.sourceSlots=[e]),this.observers?(this.observers.push(M),this.observerSlots.push(M.sources.length-1)):(this.observers=[M],this.observerSlots=[M.sources.length-1])}return this.value}function $t(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&J(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=je&&je.running;l&&je.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?B.push(i):H.push(i),i.observers&&St(i)),l||(i.state=K)}if(B.length>1e6)throw B=[],new Error},!1)),t}function oe(e){if(!e.fn)return;he(e);const t=Oe;Xt(e,e.value,t)}function Xt(e,t,n){let r;const s=C,i=M;M=C=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=K,e.owned&&e.owned.forEach(he),e.owned=null),e.updatedAt=n+1,Qe(l)}finally{M=i,C=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?$t(e,r):e.value=r,e.updatedAt=n)}function Re(e,t,n,r=K,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return C===null||C!==yt&&(C.owned?C.owned.push(i):C.owned=[i]),i}function _e(e){if(e.state===0)return;if(e.state===$e)return Se(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Oe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===K)oe(e);else if(e.state===$e){const r=B;B=null,J(()=>Se(e,t[0]),!1),B=r}}function J(e,t){if(B)return e();let n=!1;t||(B=[]),H?n=!0:H=[],Oe++;try{const r=e();return Yt(n),r}catch(r){n||(H=null),B=null,Qe(r)}}function Yt(e){if(B&&(_t(B),B=null),e)return;const t=H;H=null,t.length&&J(()=>bt(t),!1)}function _t(e){for(let t=0;t<e.length;t++)_e(e[t])}function Qt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:_e(r)}for(t=0;t<n;t++)_e(e[t])}function Se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===K?r!==t&&(!r.updatedAt||r.updatedAt<Oe)&&_e(r):s===$e&&Se(r,t)}}}function St(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=$e,n.pure?B.push(n):H.push(n),n.observers&&St(n))}}function he(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)he(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)he(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function we(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Qe(e,t=C){throw we(e)}function ze(e){if(typeof e=="function"&&!e.length)return ze(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ze(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Zt(e,t){return function(r){let s;return T(()=>s=P(()=>(C.context={...C.context,[e]:r.value},Gt(()=>r.children))),void 0),s}}const en=Symbol("fallback");function st(e){for(let t=0;t<e.length;t++)e[t]()}function tn(e,t,n={}){let r=[],s=[],i=[],l=0,o=t.length>1?[]:null;return Ye(()=>st(i)),()=>{let a=e()||[],u=a.length,d,c;return a[Pe],P(()=>{let f,h,y,b,$,S,_,p,A;if(u===0)l!==0&&(st(i),i=[],r=[],s=[],l=0,o&&(o=[])),n.fallback&&(r=[en],s[0]=ye(x=>(i[0]=x,n.fallback())),l=1);else if(l===0){for(s=new Array(u),c=0;c<u;c++)r[c]=a[c],s[c]=ye(m);l=u}else{for(y=new Array(u),b=new Array(u),o&&($=new Array(u)),S=0,_=Math.min(l,u);S<_&&r[S]===a[S];S++);for(_=l-1,p=u-1;_>=S&&p>=S&&r[_]===a[p];_--,p--)y[p]=s[_],b[p]=i[_],o&&($[p]=o[_]);for(f=new Map,h=new Array(p+1),c=p;c>=S;c--)A=a[c],d=f.get(A),h[c]=d===void 0?-1:d,f.set(A,c);for(d=S;d<=_;d++)A=r[d],c=f.get(A),c!==void 0&&c!==-1?(y[c]=s[d],b[c]=i[d],o&&($[c]=o[d]),c=h[c],f.set(A,c)):i[d]();for(c=S;c<u;c++)c in y?(s[c]=y[c],i[c]=b[c],o&&(o[c]=$[c],o[c](c))):s[c]=ye(m);s=s.slice(0,l=u),r=a.slice(0)}return s});function m(f){if(i[c]=f,o){const[h,y]=O(c);return o[c]=y,t(a[c],h)}return t(a[c])}}}function w(e,t){return P(()=>e(t||{}))}const nn=e=>`Stale read from <${e}>.`;function Ze(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(tn(()=>e.each,e.children,t||void 0))}function N(e){const t=e.keyed,n=U(()=>e.when,void 0,void 0),r=t?n:U(n,void 0,{equals:(s,i)=>!s==!i});return U(()=>{const s=r();if(s){const i=e.children;return typeof i=="function"&&i.length>0?P(()=>i(t?s:()=>{if(!P(r))throw nn("Show");return n()})):i}return e.fallback},void 0,void 0)}const q=e=>U(()=>e());function rn(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,a=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const d=i<r?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],d)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const d=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],d),t[s]=n[i]}else{if(!u){u=new Map;let c=o;for(;c<i;)u.set(n[c],c++)}const d=u.get(t[l]);if(d!=null)if(o<d&&d<i){let c=l,m=1,f;for(;++c<s&&c<i&&!((f=u.get(t[c]))==null||f!==d+m);)m++;if(m>d-o){const h=t[l];for(;o<d;)e.insertBefore(n[o++],h)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const it="_$DX_DELEGATE";function sn(e,t,n,r={}){let s;return ye(i=>{s=i,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function v(e,t,n,r){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function X(e,t=window.document){const n=t[it]||(t[it]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,an))}}function Q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function V(e,t){t==null?e.removeAttribute("class"):e.className=t}function on(e,t,n,r){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function ot(e,t,n){if(!t)return n?Q(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function ln(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function kt(e,t,n){return P(()=>e(t,n))}function g(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ke(e,t,r,n);T(s=>ke(e,t(),s,n),r)}function an(e){let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,i=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=t[n];if(a&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?a.call(t,u,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();i(a[0]);for(let u=0;u<a.length-2&&(t=a[u],!!l());u++){if(t._$host){t=t._$host,o();break}if(t.parentNode===s)break}}else o();i(r)}function ke(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=te(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=te(e,n,r);else{if(i==="function")return T(()=>{let o=t();for(;typeof o=="function";)o=o();n=ke(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(qe(o,t,n,s))return T(()=>n=ke(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=te(e,n,r),l)return n}else a?n.length===0?lt(e,o,r):rn(e,n,o):(n&&te(e),lt(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=te(e,n,r,t);te(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function qe(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[e.length],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=qe(e,o,a)||s;else if(u==="function")if(r){for(;typeof o=="function";)o=o();s=qe(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||s}else e.push(o),s=!0;else{const d=String(o);a&&a.nodeType===3&&a.data===d?e.push(a):e.push(document.createTextNode(d))}}return s}function lt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function te(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(s,o):e.insertBefore(s,n):a&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}var cn=v('<div class="flex h-full w-full overflow-hidden"><div class=overflow-hidden></div><div class="group relative flex-shrink-0 bg-edge hover:bg-accent/40 transition-colors"></div><div class="flex-1 overflow-hidden">');const at="forge.layout.v1.";function Z(e){const t=(()=>{if(!e.storageKey)return e.initialA;try{const c=localStorage.getItem(at+e.storageKey);if(c){const m=Number(c);if(Number.isFinite(m))return m}}catch{}return e.initialA})(),[n,r]=O(t);let s,i=!1;const l=c=>{if(e.storageKey)try{localStorage.setItem(at+e.storageKey,String(Math.round(c)))}catch{}},o=c=>{c.preventDefault(),i=!0,c.currentTarget.setPointerCapture(c.pointerId)},a=c=>{if(!i||!s)return;const m=s.getBoundingClientRect();let f;e.direction==="horizontal"?f=c.clientX-m.left:f=c.clientY-m.top;const h=e.minA??80,y=e.minB??80,b=e.direction==="horizontal"?m.width:m.height;f=Math.max(h,Math.min(b-y-6,f)),r(f)},u=c=>{i&&(i=!1,c.currentTarget.releasePointerCapture(c.pointerId),l(n()))};xt(()=>{if(!s)return;const c=new ResizeObserver(()=>{if(!s)return;const m=s.getBoundingClientRect(),f=e.direction==="horizontal"?m.width:m.height,h=e.minB??80;n()>f-h-6&&r(Math.max(e.minA??80,f-h-6))});c.observe(s),Ye(()=>c.disconnect())});const d=()=>e.direction==="horizontal";return(()=>{var c=cn(),m=c.firstChild,f=m.nextSibling,h=f.nextSibling,y=s;return typeof y=="function"?kt(y,c):s=c,g(m,()=>e.a),f.addEventListener("pointercancel",u),f.$$pointerup=u,f.$$pointermove=a,f.$$pointerdown=o,g(h,()=>e.b),T(b=>{var $=d()?"row":"column",S=d()?{width:`${n()}px`,"flex-shrink":0}:{height:`${n()}px`,"flex-shrink":0},_=d()?{width:"4px",cursor:"col-resize"}:{height:"4px",cursor:"row-resize"};return $!==b.e&&ln(c,"flex-direction",b.e=$),b.t=ot(m,S,b.t),b.a=ot(f,_,b.a),b},{e:void 0,t:void 0,a:void 0}),c})()}X(["pointerdown","pointermove","pointerup"]);var un=v('<span class="text-neutral-500 normal-case tracking-normal text-[11px]">'),dn=v('<div class="flex items-center justify-between px-3 py-2 border-b border-edge text-[11px] uppercase tracking-wider text-neutral-400 select-none"><div class="flex items-baseline gap-2"><span></span></div><div>');function Ie(e){return(()=>{var t=dn(),n=t.firstChild,r=n.firstChild,s=n.nextSibling;return g(r,()=>e.title),g(n,w(N,{get when(){return e.subtitle},get children(){var i=un();return g(i,()=>e.subtitle),i}}),null),g(s,()=>e.right),t})()}var fn=v('<div class="h-full flex flex-col bg-panel"><div class="flex-1 overflow-auto p-3 text-xs text-neutral-500">Chat history will live here once the agent layer (M2) ships.'),pn=v("<span class=text-neutral-600>M2");function mn(){return(()=>{var e=fn(),t=e.firstChild;return g(e,w(Ie,{title:"Chats",get right(){return pn()}}),t),e})()}const At=Jt();function gn(e){return w(At.Provider,{get value(){return e.store},get children(){return e.children}})}function G(){const e=Kt(At);if(!e)throw new Error("useWorkspace must be used within WorkspaceProvider");return e}function hn(e){return new Worker("/open/forge/assets/hash.worker-DWmkG0bf.js",{type:"module",name:e==null?void 0:e.name})}let ue=null,bn=1;const Ue=new Map;function yn(){return ue||(ue=new hn,ue.onmessage=e=>{const t=Ue.get(e.data.id);t&&(Ue.delete(e.data.id),t(e.data.sha256))},ue)}async function le(e){const t=await e.arrayBuffer(),n=yn(),r=bn++;return new Promise(s=>{Ue.set(r,s),n.postMessage({id:r,buffer:t},[t])})}async function We(e){const t=typeof e=="string"?new TextEncoder().encode(e).buffer:e,n=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(n);let s="";for(let i=0;i<r.length;i++)s+=r[i].toString(16).padStart(2,"0");return s}function ae(){return typeof navigator<"u"&&!!navigator.storage&&typeof navigator.storage.getDirectory=="function"}async function wn(){return navigator.storage.getDirectory()}async function et(e,t){let n=await wn();for(const r of e)r&&(n=await n.getDirectoryHandle(r,{create:t}));return n}function tt(e){const n=e.replace(/^\/+/,"").replace(/\/+$/,"").split("/"),r=n.pop()??"";return{dirs:n,name:r}}async function Ae(e){if(!ae())return null;try{const{dirs:t,name:n}=tt(e);return await(await(await et(t,!1)).getFileHandle(n)).getFile()}catch{return null}}async function nt(e,t){if(!ae())throw new Error("OPFS unavailable");const{dirs:n,name:r}=tt(e),l=await(await(await et(n,!0)).getFileHandle(r,{create:!0})).createWritable();await l.write(t),await l.close()}async function xn(e){if(ae())try{const{dirs:t,name:n}=tt(e);await(await et(t,!1)).removeEntry(n)}catch{}}const D={pathFor(e){return`blobs/${e.slice(0,2)}/${e}`},async put(e,t){await nt(D.pathFor(e),t)},async get(e){return Ae(D.pathFor(e))},async has(e){return await Ae(D.pathFor(e))!==null}};function vn(){return{elf_version:"0.2",id:`urn:uuid:${crypto.randomUUID()}`,title:"Untitled artifact",created:new Date().toISOString(),resources:[],interaction:{kind:"chat",operations:["generate-text"]},fulfillments:{}}}function L(e){const{blobKey:t,status:n,buildError:r,displayName:s,ingestedAt:i,...l}=e;return l}let $n=0;async function ct(e,t){const n=[];for(const r of t){const s=performance.now(),i=await le(r);await D.put(i,r);const l=`res:upload.${Date.now().toString(36)}.${$n++}`,o={id:l,media_type:r.type||_n(r.name),size:r.size,sha256:i,role:"asset",behavioral:!1,canonical_content:!1,blobKey:i,status:"ready",displayName:r.name,ingestedAt:new Date().toISOString()};e.mutate((a,u)=>{u[l]=o,a.resources.push(L(o))}),e.appendJournal({actor:"user",tool:"ingest_files",args:{name:r.name,size:r.size},resultRefs:[l],durationMs:Math.round(performance.now()-s),ok:!0}),n.push(l)}return{resourceIds:n}}function _n(e){switch(e.toLowerCase().split(".").pop()){case"pdf":return"application/pdf";case"md":return"text/markdown";case"txt":return"text/plain";case"html":case"htm":return"text/html";case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";case"json":return"application/json";default:return"application/octet-stream"}}function Ne(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Be(e,t=6,n=4){return e?e.length<=t+n+1?e:`${e.slice(0,t)}…${e.slice(-n)}`:"—"}var Sn=v('<ul class="divide-y divide-edge">'),kn=v('<div class="pointer-events-none absolute inset-0 border-2 border-dashed border-accent/60 bg-accent/5 flex items-center justify-center"><span class="text-accent text-sm">Drop to ingest'),An=v('<div class="relative flex flex-col h-full"><div class="flex items-center gap-2 px-3 py-2 border-b border-edge"><button class="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-edge">+ Add files</button><span class="text-[11px] text-neutral-500">or drop files anywhere in this panel</span><input type=file multiple class=hidden></div><div class="flex-1 overflow-auto">'),Cn=v('<div class="px-3 py-8 text-center text-neutral-500 text-xs">No sources yet. Drop a PDF, MD, TXT, or DOCX file here to get started.'),En=v('<li><div class="flex items-center justify-between gap-2"><div class="min-w-0 flex-1"><div class="truncate text-sm"></div><div class="text-[11px] text-neutral-500 font-mono truncate"></div></div><div class="flex items-center gap-2 shrink-0"><span class="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-edge text-neutral-300"></span><span class="text-[11px] text-neutral-400 tabular-nums"></span></div></div><div class="mt-1 text-[11px] text-neutral-500 font-mono">sha256:');function Mn(){const e=G(),[t,n]=O(!1);let r;const s=async o=>{o.preventDefault(),n(!1);const a=o.dataTransfer;if(!a)return;const u=[];for(const d of Array.from(a.items??[]))if(d.kind==="file"){const c=d.getAsFile();c&&u.push(c)}if(u.length===0&&a.files)for(const d of Array.from(a.files))u.push(d);u.length&&await ct(e,u)},i=async o=>{var u;const a=o.target;(u=a.files)!=null&&u.length&&(await ct(e,Array.from(a.files)),a.value="")},l=()=>Object.values(e.resources()).sort((o,a)=>o.ingestedAt<a.ingestedAt?1:-1);return(()=>{var o=An(),a=o.firstChild,u=a.firstChild,d=u.nextSibling,c=d.nextSibling,m=a.nextSibling;o.addEventListener("drop",s),o.addEventListener("dragleave",()=>n(!1)),o.addEventListener("dragover",h=>{h.preventDefault(),n(!0)}),u.$$click=()=>r==null?void 0:r.click(),c.addEventListener("change",i);var f=r;return typeof f=="function"?kt(f,c):r=c,g(m,w(N,{get when(){return l().length>0},get fallback(){return Cn()},get children(){var h=Sn();return g(h,w(Ze,{get each(){return l()},children:y=>(()=>{var b=En(),$=b.firstChild,S=$.firstChild,_=S.firstChild,p=_.nextSibling,A=S.nextSibling,x=A.firstChild,E=x.nextSibling,k=$.nextSibling;return k.firstChild,b.$$click=()=>e.setSelection(y.id),g(_,()=>y.displayName??y.id),g(p,()=>y.id),g(x,()=>y.role),g(E,()=>Ne(y.size)),g(k,()=>Be(y.sha256,10,6),null),T(()=>V(b,`px-3 py-2 cursor-pointer transition-colors ${e.selection()===y.id?"bg-accent/15":"hover:bg-white/[0.03]"}`)),b})()})),h}})),g(o,w(N,{get when(){return t()},get children(){return kn()}}),null),o})()}X(["click"]);var On=v('<div class="h-full overflow-auto p-3">'),Rn=v('<div class="text-neutral-500 text-xs">Select a resource to inspect.'),In=v('<div class="text-sm space-y-3"><div><div class="text-[11px] uppercase tracking-wider text-neutral-500">Display name</div><div></div></div><div><div class="text-[11px] uppercase tracking-wider text-neutral-500 flex items-center justify-between"><span>SHA-256</span><button class="normal-case tracking-normal text-[11px] text-accent hover:underline">copy</button></div><div class="font-mono text-xs break-all">'),Nn=v('<div><div class="text-[11px] uppercase tracking-wider text-neutral-500"></div><div>');function Bn(){const e=G(),t=()=>{const r=e.selection();return r?e.resources()[r]??null:null},n=async()=>{const r=t();if(r)try{await navigator.clipboard.writeText(r.sha256)}catch{}};return(()=>{var r=On();return g(r,w(N,{get when(){return t()},get fallback(){return Rn()},children:s=>{const i=s();return(()=>{var l=In(),o=l.firstChild,a=o.firstChild,u=a.nextSibling,d=o.nextSibling,c=d.firstChild,m=c.firstChild,f=m.nextSibling,h=c.nextSibling;return g(u,()=>i.displayName??"—"),g(l,w(z,{label:"ID",get value(){return i.id},mono:!0}),d),g(l,w(z,{label:"Media type",get value(){return i.media_type},mono:!0}),d),g(l,w(z,{label:"Role",get value(){return i.role}}),d),g(l,w(z,{label:"Size",get value(){return Ne(i.size)}}),d),f.$$click=n,g(h,()=>i.sha256),g(l,w(z,{label:"Behavioral",get value(){return i.behavioral?"yes":"no"}}),null),g(l,w(z,{label:"Canonical content",get value(){return i.canonical_content?"yes":"no"}}),null),g(l,w(z,{label:"Status",get value(){return i.status}}),null),g(l,w(z,{label:"Ingested at",get value(){return i.ingestedAt},mono:!0}),null),g(l,w(N,{get when(){return q(()=>!!i.derived_from)()&&i.derived_from.length},get children(){return w(z,{label:"Derived from",get value(){return(i.derived_from??[]).join(`
`)},mono:!0})}}),null),g(l,w(N,{get when(){return q(()=>!!i.fetch_urls)()&&i.fetch_urls.length},get children(){return w(z,{label:"Fetch URLs",get value(){return(i.fetch_urls??[]).join(`
`)},mono:!0})}}),null),l})()}})),r})()}function z(e){return(()=>{var t=Nn(),n=t.firstChild,r=n.nextSibling;return g(n,()=>e.label),g(r,()=>e.value),T(()=>V(r,e.mono?"font-mono text-xs break-all":"")),t})()}X(["click"]);var Tn=v('<span class="ml-2 text-amber-300">● unsaved'),jn=v('<span class="text-red-400 text-[11px]">invalid JSON'),Dn=v('<div class="flex flex-col h-full"><div class="flex items-center justify-between px-3 py-2 border-b border-edge text-[11px] text-neutral-400"><span>Manifest</span><div class="flex items-center gap-2"><button class="px-2 py-0.5 text-[11px] rounded bg-white/5 hover:bg-white/10 border border-edge disabled:opacity-50">apply (⌘S)</button></div></div><textarea>');function Pn(){const e=G(),[t,n]=O(JSON.stringify(e.manifest(),null,2)),[r,s]=O(null),[i,l]=O(!1);Xe(()=>{const d=JSON.stringify(e.manifest(),null,2);!i()&&t()!==d&&(n(d),s(null))});const o=()=>{try{const d=JSON.parse(t());if(typeof d!="object"||d===null||Array.isArray(d))throw new Error("Manifest must be a JSON object");e.setManifest(d),s(null),l(!1)}catch(d){s(d.message)}},a=d=>{(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"&&(d.preventDefault(),o())},u=d=>{const c=d.currentTarget;n(c.value),l(!0),s(null)};return Ye(()=>{}),(()=>{var d=Dn(),c=d.firstChild,m=c.firstChild;m.firstChild;var f=m.nextSibling,h=f.firstChild,y=c.nextSibling;return g(m,w(N,{get when(){return i()},get children(){return Tn()}}),null),g(f,w(N,{get when(){return r()},get children(){var b=jn();return T(()=>Q(b,"title",r()??"")),b}}),h),h.$$click=o,y.$$keydown=a,y.addEventListener("blur",o),y.$$input=u,Q(y,"spellcheck",!1),T(b=>{var $=!i(),S=`flex-1 w-full bg-transparent font-mono text-xs p-3 outline-none resize-none ${r()?"border-2 border-red-500/60":""}`,_=r()??"";return $!==b.e&&(h.disabled=b.e=$),S!==b.t&&V(y,b.t=S),_!==b.a&&Q(y,"title",b.a=_),b},{e:void 0,t:void 0,a:void 0}),T(()=>y.value=t()),d})()}X(["click","input","keydown"]);function Ct(e,t){var c,m;const n=Object.values(t),r=n.some(f=>f.role==="asset"),s=n.some(f=>f.role==="document"),i=n.some(f=>f.role==="segment-set"),l=n.some(f=>f.role==="embedding-set"),o=n.some(f=>f.role==="binding-runtime"),a=n.some(f=>f.role==="template"),u=!!((m=(c=e.fulfillments)==null?void 0:c["generate-text"])!=null&&m.length);let d=null;return r?s?i?l?o?a?u||(d="no generate-text fulfillment"):d="no chat template":d="no runtime selected":d="segments not embedded":d="document not segmented":d="no extracted document":d="no source files",{hasSource:r,hasDocument:s,hasSegments:i,hasEmbeddings:l,hasRuntime:o,hasTemplate:a,hasGenerationFulfillment:u,buildReady:d===null,blockingReason:d}}function De(e,t){return Object.values(e).find(n=>n.role===t)??null}function Ln(e){return new Worker("/open/forge/assets/extract.worker-C4bBjWpe.js",{type:"module",name:e==null?void 0:e.name})}let de=null,Fn=1;const He=new Map;function zn(){return de||(de=new Ln,de.onmessage=e=>{const t=He.get(e.data.id);t&&(He.delete(e.data.id),t(e.data))},de)}async function qn(e){const t=zn(),n=Fn++;return new Promise(r=>{He.set(n,r),t.postMessage({...e,id:n},[e.buffer])})}let Un=0;async function Wn(e,t){var m;const n=performance.now(),r=e.resources()[t];if(!r)throw new Error(`source resource not found: ${t}`);const s=await D.get(r.sha256);if(!s)throw new Error(`blob missing for ${t}`);const i=await s.arrayBuffer(),l=await qn({mediaType:r.media_type,fileName:r.displayName,buffer:i});if(!l.ok||l.text===void 0)throw new Error(l.error??"extraction failed");const o=new Blob([l.text],{type:"text/plain;charset=utf-8"}),a=await le(o);await D.put(a,o);const u=`res:text.${Date.now().toString(36)}.${Un++}`,d=((m=r.displayName)==null?void 0:m.replace(/\.[^.]+$/,""))??r.id,c={id:u,media_type:"text/plain",size:o.size,sha256:a,role:"document",behavioral:!1,canonical_content:!0,derived_from:[r.id],blobKey:a,status:"ready",displayName:`${d}.txt`,ingestedAt:new Date().toISOString()};return e.mutate((f,h)=>{h[u]=c,f.resources.push(L(c))}),e.appendJournal({actor:"user",tool:"extract_text",args:{source:r.id,mediaType:r.media_type,pageCount:l.pageCount},resultRefs:[u],durationMs:Math.round(performance.now()-n),ok:!0}),{resourceId:u}}function Et(e,t,n){return Math.max(t,Math.min(n,e))}function Hn(e,t,n,r){const s=e.slice(t,r),i=[`

`,`
`,". ","! ","? "," "];for(const l of i){const o=s.lastIndexOf(l);if(o===-1)continue;const a=t+o+l.length;if(a-t>=n)return a}return Et(r,t+n,e.length)}function ut(e,t,n){let r=t,s=n;for(;r<s&&/\s/.test(e[r]);)r+=1;for(;s>r&&/\s/.test(e[s-1]);)s-=1;return{start:r,end:s}}function Jn(e,t,n={}){const r=String(e||"").replace(/\r\n/g,`
`);if(!r.trim())return[];const s=n.targetChars??1600,i=n.overlapChars??300,l=n.maxChars??s+200,o=n.minChars??Math.max(300,Math.floor(s*.45)),a=[];let u=0,d=0;for(;u<r.length&&d<1e4;){d+=1;const c=Math.min(r.length,u+l),m=Math.min(r.length,u+s),f=Hn(r,u,o,Math.max(m,c)),h=ut(r,u,f);if(h.end<=h.start)break;const y=a.length+1;if(a.push({id:`seg-${String(y).padStart(4,"0")}`,document:t,text:r.slice(h.start,h.end),start:h.start,end:h.end}),h.end>=r.length)break;const b=Et(h.end-i,u+1,r.length);u=ut(r,b,r.length).start}return a}let Kn=0;async function Gn(e,t,n={}){const r=performance.now(),s=e.resources()[t];if(!s)throw new Error(`document not found: ${t}`);if(s.role!=="document")throw new Error(`segmentRecursive expects role 'document', got '${s.role}'`);const i=await D.get(s.sha256);if(!i)throw new Error(`blob missing for ${t}`);const l=await i.text(),o=Jn(l,s.id,n);if(o.length===0)throw new Error("document produced 0 segments");const a=o.map(f=>JSON.stringify(f)).join(`
`)+`
`,u=new Blob([a],{type:"application/x-ndjson"}),d=await le(u);await D.put(d,u);const c=`res:segments.${Date.now().toString(36)}.${Kn++}`,m={id:c,media_type:"application/x-ndjson",size:u.size,sha256:d,role:"segment-set",behavioral:!1,canonical_content:!0,derived_from:[s.id],blobKey:d,status:"ready",displayName:`${s.displayName??s.id} (${o.length} segments)`,ingestedAt:new Date().toISOString()};return e.mutate((f,h)=>{h[c]=m,f.resources.push(L(m)),f.knowledge||(f.knowledge={}),f.knowledge.segments={resource:c,format:"elf-segments-jsonl/v1"},f.knowledge.documents=f.knowledge.documents??[],f.knowledge.documents.includes(s.id)||f.knowledge.documents.push(s.id)}),e.appendJournal({actor:"user",tool:"segment_recursive",args:{source:s.id,target:n.targetChars??1600,overlap:n.overlapChars??300,count:o.length},resultRefs:[c],durationMs:Math.round(performance.now()-r),ok:!0}),{resourceId:c,segmentCount:o.length}}function Vn(e){return new Worker("/open/forge/assets/embed.worker-D6RbUvQF.js",{type:"module",name:e==null?void 0:e.name})}const Je="Xenova/all-MiniLM-L6-v2",Xn="q8";let fe=null,Yn=1;const xe=new Map;function Qn(){return fe||(fe=new Vn,fe.onmessage=e=>{var r;const t=e.data,n=xe.get(t.id);n&&(t.type==="progress"?(r=n.onProgress)==null||r.call(n,t.done,t.total,t.stage):t.type==="done"?(xe.delete(t.id),n.resolve({dim:t.dim,count:t.count,embeddings:t.embeddings})):(xe.delete(t.id),n.reject(new Error(t.error))))},fe)}let Zn=0;async function er(e,t,n={}){const r=performance.now(),s=e.resources()[t];if(!s)throw new Error(`segment-set not found: ${t}`);if(s.role!=="segment-set")throw new Error(`embed expects role 'segment-set', got '${s.role}'`);const i=await D.get(s.sha256);if(!i)throw new Error(`blob missing for ${t}`);const o=(await i.text()).split(`
`).filter(p=>p.trim().length>0).map(p=>JSON.parse(p)),a=n.modelId??Je,u=n.dtype??Xn,d=n.batchSize??16,c=Qn(),m=Yn++,f=await new Promise((p,A)=>{xe.set(m,{resolve:p,reject:A,onProgress:n.onProgress}),c.postMessage({type:"embed",id:m,modelId:a,dtype:u,segments:o.map(x=>x.text),batchSize:d})}),h=new Blob([f.embeddings],{type:"application/octet-stream"}),y=await le(h);await D.put(y,h);const b=`res:embed.${Date.now().toString(36)}.${Zn++}`,$=`res:model.embed.${a.replace(/[^a-z0-9]/gi,"_")}`,S={id:$,media_type:"application/x-onnx-pipeline",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${a}`],blobKey:"",status:"ready",displayName:`embed: ${a} (${u})`,ingestedAt:new Date().toISOString()},_={id:b,media_type:"application/octet-stream",size:h.size,sha256:y,role:"embedding-set",behavioral:!1,canonical_content:!1,derived_from:[s.id,$],blobKey:y,status:"ready",displayName:`embeddings (${f.count} × ${f.dim}, ${a.split("/").pop()})`,ingestedAt:new Date().toISOString()};return e.mutate((p,A)=>{A[$]||(A[$]=S,p.resources.push(L(S))),A[b]=_,p.resources.push(L(_)),p.knowledge||(p.knowledge={}),p.knowledge.embeddings=[{resource:b,dimensions:f.dim,dtype:"float32"}];const x=p.fulfillments;x["retrieve-segments"]=[{id:"flat-cosine",kind:"embedded-index",embedding_set:b,metric:"cosine"}],p.interaction.operations.includes("retrieve-segments")||p.interaction.operations.push("retrieve-segments")}),e.appendJournal({actor:"user",tool:"embed",args:{source:s.id,model:a,dtype:u,count:f.count,dim:f.dim},resultRefs:[b,$],durationMs:Math.round(performance.now()-r),ok:!0}),{resourceId:b,modelHandleResourceId:$,dim:f.dim,count:f.count}}const tr=`// transformers.js + ONNX binding-runtime.
// Reads packaged segments (JSONL), embeddings (Float32Array), and chat template
// from the resource map. Loads embedding model + generation model from CDN.

const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.1.0/+esm';

// CacheStorage trap: in sandboxed iframes (sandbox="allow-scripts" only),
// even READING \`window.caches\` throws SecurityError. Plus some browsers ship
// a CacheStorage that explodes when transformers.js touches it. Stub both.
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
  try {
    exists = typeof globalThis.caches !== 'undefined';
  } catch {
    exists = false; // accessing the getter threw — sandbox or disabled.
  }

  if (!exists) {
    try {
      Object.defineProperty(globalThis, 'caches', {
        value: fakeCaches,
        writable: true,
        configurable: true,
      });
    } catch {
      // Can't even shadow it. Rely on env.useBrowserCache=false to keep
      // transformers.js off the cache path.
    }
  } else {
    try {
      globalThis.caches.open = async () => fakeCache;
    } catch {
      // ignore; the \`useBrowserCache=false\` flag below covers us.
    }
  }
}

function findResource(manifest, predicate) {
  return manifest.resources.find(predicate);
}

function findFulfillment(manifest, op) {
  const list = (manifest.fulfillments && manifest.fulfillments[op]) || [];
  return list[0] || null;
}

async function blobToFloat32(blob) {
  const buf = await blob.arrayBuffer();
  return new Float32Array(buf);
}

function cosine(a, b, dim) {
  // Both vectors are pre-normalized when produced by Forge's embed worker.
  let dot = 0;
  for (let i = 0; i < dim; i++) dot += a[i] * b[i];
  return dot;
}

function renderChatTemplate(template, messages) {
  // Minimal templating: deterministic chatml-style assembly.
  // template = { kind: 'chatml', system_prefix, user_prefix, assistant_prefix, eot }
  const parts = [];
  for (const m of messages) {
    const prefix =
      m.role === 'system'
        ? template.system_prefix
        : m.role === 'user'
          ? template.user_prefix
          : template.assistant_prefix;
    parts.push(\`\${prefix}\${m.content}\${template.eot}\`);
  }
  parts.push(template.assistant_prefix);
  return parts.join('');
}

export async function init({ manifest, resources, log }) {
  patchCachesIfBroken();

  const ui = mountUi(manifest);
  const status = (msg) => {
    log && log(msg);
    ui.log(msg);
  };

  status('loading runtime…');
  const { pipeline, env } = await import(/* @vite-ignore */ TRANSFORMERS_CDN);
  env.allowLocalModels = false;
  env.useBrowserCache = false;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.numThreads = 1;

  // Resolve the segments + embeddings + template + models from the manifest.
  const segRes = findResource(manifest, (r) => r.role === 'segment-set');
  const embRes = findResource(manifest, (r) => r.role === 'embedding-set');
  const tplRes = findResource(manifest, (r) => r.role === 'template');
  const embedModel = findResource(
    manifest,
    (r) => r.role === 'model' && r.media_type === 'application/x-onnx-pipeline' && r.id.startsWith('res:model.embed.'),
  );
  const genFulfill = findFulfillment(manifest, 'generate-text');
  const genModelId = genFulfill && genFulfill.model;
  const embedModelId = embedModel && embedModel.fetch_urls && embedModel.fetch_urls[0]
    ? embedModel.fetch_urls[0].replace('https://huggingface.co/', '')
    : 'Xenova/all-MiniLM-L6-v2';

    //onnx-community/LFM2-1.2B-RAG-ONNX
    //

  if (!segRes || !embRes || !tplRes || !genModelId) {
    throw new Error('manifest missing one of: segment-set, embedding-set, template, generate-text fulfillment.model');
  }

  status(\`loading embedding model (\${embedModelId})…\`);
  const extractor = await pipeline('feature-extraction', embedModelId, {
    device: 'wasm',
    dtype: 'q8',
  });

  status(\`loading generation model (\${genModelId})…\`);
  const webgpuDtype = (genFulfill && genFulfill.dtype_webgpu) || 'q4';
  const wasmDtype = (genFulfill && genFulfill.dtype_wasm) || 'fp16';
  let generator;
  try {
    generator = await pipeline('text-generation', genModelId, {
      device: 'wasm',
      dtype: wasmDtype,
    });
    status(\`wasm/\${wasmDtype} ready\`);
  } catch (err) {
    status(\`wasm/\${wasmDtype} failed (\${err && err.message ? err.message : err}); trying webgpu/\${webgpuDtype}…\`);
    generator = await pipeline('text-generation', genModelId, {
      device: 'webgpu',
      dtype: webgpuDtype,
    });
    status(\`webgpu/\${webgpuDtype} ready\`);
  }

  // Materialise segments + embeddings into RAM.
  status('decoding segments + embeddings…');
  const segText = await resources.get(segRes.id).text();
  const segments = segText
    .split('\\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l));

  const embedDim = manifest.knowledge.embeddings[0].dimensions;
  const embeddings = await blobToFloat32(resources.get(embRes.id));
  if (embeddings.length !== segments.length * embedDim) {
    throw new Error(
      \`embedding count mismatch: \${embeddings.length} floats != \${segments.length} × \${embedDim}\`,
    );
  }

  const template = JSON.parse(await resources.get(tplRes.id).text());

  status('ready.');
  ui.enableInput();

  ui.onAsk(async (query) => {
    ui.appendMessage('user', query);
    ui.appendMessage('assistant', '…thinking…');

    try {
      // 1. Embed query.
      const qOut = await extractor(query, { pooling: 'mean', normalize: true });
      const qVec = qOut.data;

      // 2. Cosine search over flat embeddings.
      const topK = (manifest.interaction['retrieve-segments'] || {}).top_k || 4;
      const scored = [];
      for (let i = 0; i < segments.length; i++) {
        const off = i * embedDim;
        const view = embeddings.subarray(off, off + embedDim);
        scored.push({ idx: i, score: cosine(qVec, view, embedDim) });
      }
      scored.sort((a, b) => b.score - a.score);
      const top = scored.slice(0, topK);
      const context = top
        .map((t) => segments[t.idx].text.substring(0, 800))
        .join('\\n\\n---\\n\\n');
      ui.showSources(top.map((t) => ({ score: t.score, text: segments[t.idx].text })));

      // 3. Build messages, apply template, call generator.
      const sys = (manifest.interaction.system_prompt) ||
        ""//"You are a helpful AI assistant. Use the provided context to answer the question. If the context doesn't contain the answer, use your general knowledge but prioritize the context. Provide detailed.";
      const messages = [
        { role: 'system', content: sys },
        { role: 'user', content: \`Given:\\n\${context}\\n\\n \${query}?\` },
      ];

      // Yield to paint before WASM lock-up.
      await new Promise((r) => setTimeout(r, 50));

      const output = await generator(messages, {
        max_new_tokens: 512,
        temperature: 0.5,
        do_sample: false,
        top_p: 0.9,
      });
      const lastMsg = output[0].generated_text.at(-1);
      const answer = (lastMsg && lastMsg.content) || String(output[0].generated_text);
      ui.replaceLastAssistant(answer);
    } catch (err) {
      ui.replaceLastAssistant(\`Error: \${err && err.message ? err.message : err}\`);
      throw err;
    }
  });
}

// Minimal chat UI, injected if the binding-ui body left a #elf-app mount.
function mountUi(manifest) {
  const root = document.getElementById('elf-app') || document.body;
  root.innerHTML = \`
    <header class="elf-header">
      <h1>\${escapeHtml(manifest.title || '.elf chat')}</h1>
      <div class="elf-fp" title="Artifact identity">\${escapeHtml(manifest.id || '')}</div>
    </header>
    <main class="elf-main">
      <div id="elf-thread" class="elf-thread"></div>
      <div id="elf-sources" class="elf-sources"></div>
      <form id="elf-form" class="elf-form">
        <input id="elf-input" type="text" placeholder="Ask a question…" disabled autocomplete="off" />
        <button id="elf-ask" type="submit" disabled>Ask</button>
      </form>
      <pre id="elf-log" class="elf-log">starting…</pre>
    </main>
  \`;
  const thread = root.querySelector('#elf-thread');
  const sources = root.querySelector('#elf-sources');
  const input = root.querySelector('#elf-input');
  const askBtn = root.querySelector('#elf-ask');
  const form = root.querySelector('#elf-form');
  const logEl = root.querySelector('#elf-log');

  let askHandler = null;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q || !askHandler) return;
    input.value = '';
    askBtn.disabled = true;
    try {
      await askHandler(q);
    } finally {
      askBtn.disabled = false;
    }
  });

  return {
    log: (msg) => {
      logEl.textContent += \`\\n\${msg}\`;
      logEl.scrollTop = logEl.scrollHeight;
    },
    enableInput: () => {
      input.disabled = false;
      askBtn.disabled = false;
      input.focus();
    },
    onAsk: (fn) => {
      askHandler = fn;
    },
    appendMessage: (role, content) => {
      const div = document.createElement('div');
      div.className = \`elf-msg elf-\${role}\`;
      div.textContent = content;
      thread.appendChild(div);
      thread.scrollTop = thread.scrollHeight;
    },
    replaceLastAssistant: (content) => {
      const msgs = thread.querySelectorAll('.elf-assistant');
      const last = msgs[msgs.length - 1];
      if (last) last.textContent = content;
    },
    showSources: (items) => {
      sources.innerHTML =
        '<div class="elf-sources-title">Retrieved context</div>' +
        items
          .map(
            (s) =>
              \`<div class="elf-source"><span class="elf-score">\${s.score.toFixed(3)}</span> \${escapeHtml(s.text.substring(0, 240))}…</div>\`,
          )
          .join('');
    },
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
`,nr=`// wllama + GGUF binding-runtime.
// Same shape as runtime-transformers-onnx.js but uses @wllama/wllama for
// generation. The embedding model still flows through transformers.js.

const TRANSFORMERS_CDN = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.1.0/+esm';
const WLLAMA_CDN = 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.1.4/esm/index.js';

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
      Object.defineProperty(globalThis, 'caches', { value: fakeCaches, writable: true, configurable: true });
    } catch {}
  } else {
    try { globalThis.caches.open = async () => fakeCache; } catch {}
  }
}

function findResource(manifest, predicate) {
  return manifest.resources.find(predicate);
}

function findFulfillment(manifest, op) {
  const list = (manifest.fulfillments && manifest.fulfillments[op]) || [];
  return list[0] || null;
}

async function blobToFloat32(blob) {
  const buf = await blob.arrayBuffer();
  return new Float32Array(buf);
}

function cosine(a, b, dim) {
  let dot = 0;
  for (let i = 0; i < dim; i++) dot += a[i] * b[i];
  return dot;
}

export async function init({ manifest, resources, log }) {
  patchCachesIfBroken();
  const ui = mountUi(manifest);
  const status = (msg) => {
    log && log(msg);
    ui.log(msg);
  };

  status('loading transformers.js for embeddings…');
  const { pipeline, env } = await import(/* @vite-ignore */ TRANSFORMERS_CDN);
  env.allowLocalModels = false;
  env.useBrowserCache = false;
  if (env.backends?.onnx?.wasm) env.backends.onnx.wasm.numThreads = 1;

  const segRes = findResource(manifest, (r) => r.role === 'segment-set');
  const embRes = findResource(manifest, (r) => r.role === 'embedding-set');
  const tplRes = findResource(manifest, (r) => r.role === 'template');
  const embedModel = findResource(manifest, (r) => r.role === 'model' && r.id.startsWith('res:model.embed.'));
  const ggufModel = findResource(manifest, (r) => r.role === 'model' && r.media_type === 'application/x-gguf');
  const genFulfill = findFulfillment(manifest, 'generate-text');

  if (!segRes || !embRes || !tplRes || !ggufModel) {
    throw new Error('manifest missing one of: segment-set, embedding-set, template, gguf model');
  }

  const embedModelId =
    (embedModel && embedModel.fetch_urls && embedModel.fetch_urls[0]
      ? embedModel.fetch_urls[0].replace('https://huggingface.co/', '')
      : 'Xenova/all-MiniLM-L6-v2');

  status(\`loading embedding model (\${embedModelId})…\`);
  const extractor = await pipeline('feature-extraction', embedModelId, {
    device: 'wasm',
    dtype: 'q8',
  });

  status('loading wllama runtime…');
  const wllamaMod = await import(/* @vite-ignore */ WLLAMA_CDN);
  const Wllama = wllamaMod.Wllama || wllamaMod.default;
  const wllama = new Wllama({
    'single-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.1.4/esm/single-thread/wllama.wasm',
    'multi-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.1.4/esm/multi-thread/wllama.wasm',
  });

  status('loading GGUF model bytes…');
  const ggufBlob = resources.get(ggufModel.id);
  const ggufBytes = new Uint8Array(await ggufBlob.arrayBuffer());
  await wllama.loadModel([new File([ggufBytes], 'model.gguf')]);

  status('decoding segments + embeddings…');
  const segText = await resources.get(segRes.id).text();
  const segments = segText
    .split('\\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l));
  const embedDim = manifest.knowledge.embeddings[0].dimensions;
  const embeddings = await blobToFloat32(resources.get(embRes.id));
  const template = JSON.parse(await resources.get(tplRes.id).text());

  status('ready.');
  ui.enableInput();

  ui.onAsk(async (query) => {
    ui.appendMessage('user', query);
    ui.appendMessage('assistant', '…thinking…');

    try {
      const qOut = await extractor(query, { pooling: 'mean', normalize: true });
      const qVec = qOut.data;

      const topK = (manifest.interaction['retrieve-segments'] || {}).top_k || 6;
      const scored = [];
      for (let i = 0; i < segments.length; i++) {
        const off = i * embedDim;
        scored.push({ idx: i, score: cosine(qVec, embeddings.subarray(off, off + embedDim), embedDim) });
      }
      scored.sort((a, b) => b.score - a.score);
      const top = scored.slice(0, topK);
      const context = top
        .map((t) => segments[t.idx].text.substring(0, 600))
        .join('\\n\\n---\\n\\n');
      ui.showSources(top.map((t) => ({ score: t.score, text: segments[t.idx].text })));

      const sys =
        manifest.interaction.system_prompt ||
        "Answer concisely using ONLY the provided context. If the answer is not in the context, say you don't know.";
      const messages = [
        { role: 'system', content: sys },
        { role: 'user', content: \`Context:\\n\${context}\\n\\nQuestion: \${query}\` },
      ];

      const prompt = renderChatTemplate(template, messages);
      const result = await wllama.createCompletion(prompt, {
        nPredict: genFulfill?.max_new_tokens || 256,
        sampling: { temp: 0.2 },
      });
      ui.replaceLastAssistant(result);
    } catch (err) {
      ui.replaceLastAssistant(\`Error: \${err && err.message ? err.message : err}\`);
      throw err;
    }
  });
}

function renderChatTemplate(template, messages) {
  const parts = [];
  for (const m of messages) {
    const prefix =
      m.role === 'system'
        ? template.system_prefix
        : m.role === 'user'
          ? template.user_prefix
          : template.assistant_prefix;
    parts.push(\`\${prefix}\${m.content}\${template.eot}\`);
  }
  parts.push(template.assistant_prefix);
  return parts.join('');
}

function mountUi(manifest) {
  const root = document.getElementById('elf-app') || document.body;
  root.innerHTML = \`
    <header class="elf-header"><h1>\${escapeHtml(manifest.title || '.elf chat')}</h1></header>
    <main class="elf-main">
      <div id="elf-thread" class="elf-thread"></div>
      <div id="elf-sources" class="elf-sources"></div>
      <form id="elf-form" class="elf-form">
        <input id="elf-input" type="text" placeholder="Ask a question…" disabled autocomplete="off" />
        <button id="elf-ask" type="submit" disabled>Ask</button>
      </form>
      <pre id="elf-log" class="elf-log">starting…</pre>
    </main>
  \`;
  const thread = root.querySelector('#elf-thread');
  const sources = root.querySelector('#elf-sources');
  const input = root.querySelector('#elf-input');
  const askBtn = root.querySelector('#elf-ask');
  const form = root.querySelector('#elf-form');
  const logEl = root.querySelector('#elf-log');
  let askHandler = null;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q || !askHandler) return;
    input.value = '';
    askBtn.disabled = true;
    try { await askHandler(q); } finally { askBtn.disabled = false; }
  });
  return {
    log: (msg) => { logEl.textContent += \`\\n\${msg}\`; logEl.scrollTop = logEl.scrollHeight; },
    enableInput: () => { input.disabled = false; askBtn.disabled = false; input.focus(); },
    onAsk: (fn) => { askHandler = fn; },
    appendMessage: (role, content) => {
      const div = document.createElement('div');
      div.className = \`elf-msg elf-\${role}\`;
      div.textContent = content;
      thread.appendChild(div);
      thread.scrollTop = thread.scrollHeight;
    },
    replaceLastAssistant: (content) => {
      const msgs = thread.querySelectorAll('.elf-assistant');
      const last = msgs[msgs.length - 1];
      if (last) last.textContent = content;
    },
    showSources: (items) => {
      sources.innerHTML =
        '<div class="elf-sources-title">Retrieved context</div>' +
        items
          .map((s) => \`<div class="elf-source"><span class="elf-score">\${s.score.toFixed(3)}</span> \${escapeHtml(s.text.substring(0, 240))}…</div>\`)
          .join('');
    },
  };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
`,rr=`<div id="elf-app"></div>
<style>
  :root {
    --elf-bg: #0b0d10;
    --elf-panel: #111418;
    --elf-edge: rgba(255,255,255,0.08);
    --elf-text: #e6e8eb;
    --elf-muted: #9aa0a6;
    --elf-accent: #7c9cff;
    --elf-user: #1f2937;
    --elf-asst: #0f1923;
  }
  html, body {
    margin: 0; padding: 0; height: 100%;
    background: var(--elf-bg); color: var(--elf-text);
    font: 14px/1.5 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  #elf-app { display: flex; flex-direction: column; height: 100%; }
  .elf-header {
    padding: 14px 18px;
    border-bottom: 1px solid var(--elf-edge);
    background: var(--elf-panel);
    display: flex; align-items: baseline; justify-content: space-between;
  }
  .elf-header h1 { font-size: 15px; font-weight: 600; margin: 0; }
  .elf-fp { font-family: ui-monospace, monospace; font-size: 11px; color: var(--elf-muted); }
  .elf-main { flex: 1; min-height: 0; display: grid; grid-template-rows: 1fr auto auto auto; padding: 16px; gap: 12px; max-width: 880px; width: 100%; box-sizing: border-box; margin: 0 auto; }
  .elf-thread { overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-right: 4px; }
  .elf-msg { padding: 10px 14px; border-radius: 8px; max-width: 88%; white-space: pre-wrap; }
  .elf-user { background: var(--elf-user); align-self: flex-end; }
  .elf-assistant { background: var(--elf-asst); align-self: flex-start; }
  .elf-sources { font-size: 12px; color: var(--elf-muted); max-height: 28vh; overflow-y: auto; }
  .elf-sources-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--elf-muted); margin-bottom: 6px; }
  .elf-source { padding: 6px 8px; border-left: 2px solid var(--elf-accent); margin-bottom: 4px; background: rgba(255,255,255,0.02); }
  .elf-score { display: inline-block; min-width: 3em; color: var(--elf-accent); font-family: ui-monospace, monospace; }
  .elf-form { display: flex; gap: 8px; }
  .elf-form input {
    flex: 1; padding: 10px 12px; background: var(--elf-panel); color: var(--elf-text);
    border: 1px solid var(--elf-edge); border-radius: 6px; font: inherit;
  }
  .elf-form button {
    padding: 10px 16px; border: 1px solid var(--elf-edge); border-radius: 6px;
    background: var(--elf-accent); color: white; font-weight: 600; cursor: pointer;
  }
  .elf-form button:disabled { opacity: 0.5; cursor: not-allowed; }
  .elf-log {
    font-family: ui-monospace, monospace; font-size: 11px; color: var(--elf-muted);
    background: var(--elf-panel); border: 1px solid var(--elf-edge); border-radius: 6px;
    padding: 8px 10px; margin: 0; max-height: 14vh; overflow-y: auto; white-space: pre-wrap;
  }
</style>
`,sr={"transformers-onnx":{name:"forge.transformers-onnx",runtimeSource:tr},"wllama-gguf":{name:"forge.wllama-gguf",runtimeSource:nr}};async function dt(e,t,n,r){const s=new Blob([n],{type:r}),i=await le(s);await D.put(i,s);const l={...t,media_type:r,size:s.size,sha256:i,blobKey:i,status:"ready",ingestedAt:new Date().toISOString()};return e.mutate((o,a)=>{const u=o.resources.findIndex(d=>d.id===l.id);u>=0?o.resources[u]=L(l):o.resources.push(L(l)),a[l.id]=l}),l}async function ir(e,t){const n=performance.now(),r=sr[t.kind];if(!r)throw new Error(`unknown runtime kind: ${t.kind}`);const s=`res:runtime.${t.kind}`,i=await dt(e,{id:s,role:"binding-runtime",behavioral:!0,canonical_content:!1,displayName:`${r.name} runtime`,media_type:"",size:0,sha256:""},r.runtimeSource,"application/javascript"),o=await dt(e,{id:"res:binding-ui.chat",role:"binding-ui",behavioral:!1,canonical_content:!1,displayName:"chat UI shell",media_type:"",size:0,sha256:""},rr,"text/html");let a;if(t.kind==="transformers-onnx"){a=`res:model.gen.${t.modelRef.replace(/[^a-z0-9]/gi,"_")}`;const u={id:a,media_type:"application/x-onnx-pipeline",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${t.modelRef}`],blobKey:"",status:"ready",displayName:`gen: ${t.modelRef}`,ingestedAt:new Date().toISOString()};e.mutate((d,c)=>{c[a]||(c[a]=u,d.resources.push(L(u)))})}else if(t.modelResourceId){if(!e.resources()[t.modelResourceId])throw new Error(`gguf resource not found: ${t.modelResourceId}`);e.mutate((d,c)=>{const m=c[t.modelResourceId];m&&(m.role="model",m.media_type="application/x-gguf",m.behavioral=!0)}),a=t.modelResourceId}else{a=`res:model.gen.gguf.${t.modelRef.replace(/[^a-z0-9]/gi,"_")}`;const u={id:a,media_type:"application/x-gguf",size:0,sha256:"0000000000000000000000000000000000000000000000000000000000000000",role:"model",behavioral:!0,canonical_content:!1,fetch_urls:[`https://huggingface.co/${t.modelRef}`],blobKey:"",status:"ready",displayName:`gen: ${t.modelRef} (GGUF)`,ingestedAt:new Date().toISOString()};e.mutate((d,c)=>{c[a]||(c[a]=u,d.resources.push(L(u)))})}return e.mutate(u=>{u.bindings=u.bindings??[];const d=u.bindings.findIndex(h=>h.name.startsWith("forge.")),c={name:r.name,version:"1.0.0",requirements:t.kind==="transformers-onnx"?["transformers-js@>=3.0"]:["wllama@>=2.0"],entry:{ui:o.id,runtime:i.id}};d>=0?u.bindings[d]=c:u.bindings.push(c),u.fulfillments["generate-text"]=[{id:`gen.${t.kind}`,kind:"embedded-model",runtime:t.kind,model_resource:a,model:t.modelRef,max_new_tokens:t.maxNewTokens??256,...t.kind==="transformers-onnx"?{dtype_webgpu:t.dtypeWebgpu??"q4",dtype_wasm:t.dtypeWasm??"fp16"}:{}}],u.permissions=u.permissions??{};const m=u.permissions.network??{mode:"allow-listed",origins:[]};m.mode=m.mode==="none"?"allow-listed":m.mode,m.origins=m.origins??[];const f=["https://huggingface.co","https://cdn.jsdelivr.net"];for(const h of f)m.origins.includes(h)||m.origins.push(h);u.permissions.network=m}),e.appendJournal({actor:"user",tool:"select_generation_runtime",args:{kind:t.kind,modelRef:t.modelRef},resultRefs:[i.id,o.id,a],durationMs:Math.round(performance.now()-n),ok:!0}),{runtimeResourceId:i.id,bindingUiResourceId:o.id,modelResourceId:a}}const Mt={format:"elf-template/v1",kind:"chatml",system_prefix:`<|im_start|>system
`,user_prefix:`<|im_start|>user
`,assistant_prefix:`<|im_start|>assistant
`,eot:`<|im_end|>
`};async function or(e,t=Mt){const n=performance.now(),r=JSON.stringify(t,null,2),s=new Blob([r],{type:"application/json"}),i=await le(s);await D.put(i,s);const l="res:template.chat",o={id:l,media_type:"application/json",size:s.size,sha256:i,role:"template",behavioral:!1,canonical_content:!0,blobKey:i,status:"ready",displayName:`chat template (${t.kind})`,ingestedAt:new Date().toISOString()};return e.mutate((a,u)=>{const d=a.resources.findIndex(c=>c.id===l);d>=0?a.resources[d]=L(o):a.resources.push(L(o)),u[l]=o}),e.appendJournal({actor:"user",tool:"write_chat_template",args:{kind:t.kind},resultRefs:[l],durationMs:Math.round(performance.now()-n),ok:!0}),{resourceId:l}}var lr=v('<div class="mt-3 text-[11px] text-accent">'),ar=v('<div class="mt-3 text-[11px] text-red-400 whitespace-pre-wrap">'),cr=v('<div class="h-full overflow-auto p-3 text-sm"><div class="text-[11px] uppercase tracking-wider text-neutral-500 mb-2">Pipeline</div><div class=space-y-2>'),ur=v('<div class="text-[11px] text-neutral-500 truncate">'),dr=v('<div class="flex items-center gap-3"><span aria-hidden=true></span><div class="flex-1 min-w-0"><div class="text-[13px] text-neutral-200">'),fr=v('<button class="text-[11px] px-2 py-0.5 rounded border border-edge bg-white/5 hover:bg-white/10 disabled:opacity-50">');const ft="HuggingFaceTB/SmolLM2-360M-Instruct";function pr(){const e=G(),[t,n]=O(null),[r,s]=O(null),[i,l]=O(null),o=()=>Ct(e.manifest(),e.resources()),a=async(h,y)=>{n(h),s(null),l(null);try{await y()}catch(b){s(b.message??String(b))}finally{n(null)}},u=()=>a("extract",async()=>{const h=De(e.resources(),"asset");if(!h)throw new Error("no source file");await Wn(e,h.id)}),d=()=>a("segment",async()=>{const h=De(e.resources(),"document");if(!h)throw new Error("no document resource");await Gn(e,h.id,{targetChars:1600,overlapChars:300})}),c=()=>a("embed",async()=>{const h=De(e.resources(),"segment-set");if(!h)throw new Error("no segment-set");await er(e,h.id,{modelId:Je,onProgress:(y,b,$)=>{l(`${$} — ${y} / ${b}`)}})}),m=h=>a("runtime",async()=>{await ir(e,{kind:h,modelRef:h==="transformers-onnx"?ft:"unsloth/SmolLM2-360M-Instruct-GGUF"})}),f=()=>a("template",async()=>{await or(e,Mt)});return(()=>{var h=cr(),y=h.firstChild,b=y.nextSibling;return g(b,w(Y,{label:"1. Source",get done(){return o().hasSource},get hint(){return o().hasSource?"asset uploaded":"drop a file in Sources above"}}),null),g(b,w(Y,{label:"2. Extract text",get done(){return o().hasDocument},get action(){return q(()=>!!(o().hasSource&&!o().hasDocument))()?{label:"Extract",onClick:u,busy:t()==="extract"}:void 0}}),null),g(b,w(Y,{label:"3. Segment",get done(){return o().hasSegments},get action(){return q(()=>!!(o().hasDocument&&!o().hasSegments))()?{label:"Segment",onClick:d,busy:t()==="segment"}:void 0}}),null),g(b,w(Y,{label:"4. Embed",get done(){return o().hasEmbeddings},get hint(){return o().hasEmbeddings?`model: ${Je}`:void 0},get action(){return q(()=>!!(o().hasSegments&&!o().hasEmbeddings))()?{label:"Embed",onClick:c,busy:t()==="embed"}:void 0}}),null),g(b,w(Y,{label:"5. Runtime",get done(){return o().hasRuntime},get hint(){return o().hasRuntime?`gen: ${ft}`:void 0},get action(){return q(()=>!!(o().hasEmbeddings&&!o().hasRuntime))()?{label:"transformers.js + LFM2",onClick:()=>m("transformers-onnx"),busy:t()==="runtime"}:void 0}}),null),g(b,w(Y,{label:"6. Chat template",get done(){return o().hasTemplate},get hint(){return o().hasTemplate?"chatml":void 0},get action(){return q(()=>!!(o().hasRuntime&&!o().hasTemplate))()?{label:"Generate (chatml)",onClick:f,busy:t()==="template"}:void 0}}),null),g(b,w(Y,{label:"7. Build readiness",get done(){return o().buildReady},get hint(){return q(()=>!!o().buildReady)()?"ready — click Build in toolbar":o().blockingReason??""}}),null),g(h,w(N,{get when(){return i()},get children(){var $=lr();return g($,i),$}}),null),g(h,w(N,{get when(){return r()},get children(){var $=ar();return g($,r),$}}),null),h})()}function Y(e){return(()=>{var t=dr(),n=t.firstChild,r=n.nextSibling,s=r.firstChild;return g(s,()=>e.label),g(r,w(N,{get when(){return e.hint},get children(){var i=ur();return g(i,()=>e.hint),i}}),null),g(t,w(N,{get when(){return e.action},children:i=>{const l=i();return(()=>{var o=fr();return on(o,"click",l.onClick),g(o,(()=>{var a=q(()=>!!l.busy);return()=>a()?"…":l.label})()),T(()=>o.disabled=l.busy),o})()}}),null),T(()=>V(n,`inline-block w-3.5 h-3.5 rounded-sm border ${e.done?"bg-accent border-accent":"bg-transparent border-edge"}`)),t})()}X(["click"]);var mr=v('<div class="h-full flex flex-col bg-panel"><div class="flex-1 min-h-0">'),gr=v("<span class=text-neutral-600> resources");function hr(){const e=G();return(()=>{var t=mr(),n=t.firstChild;return g(t,w(Ie,{title:"Workspace",subtitle:"sources · inspector · manifest",get right(){return(()=>{var r=gr(),s=r.firstChild;return g(r,()=>Object.keys(e.resources()).length,s),r})()}}),n),g(n,w(Z,{direction:"vertical",storageKey:"ws.sources",initialA:200,minA:120,minB:200,get a(){return w(Mn,{})},get b(){return w(Z,{direction:"vertical",storageKey:"ws.pipeline",initialA:220,minA:140,minB:200,get a(){return w(pr,{})},get b(){return w(Z,{direction:"vertical",storageKey:"ws.inspector",initialA:180,minA:120,minB:140,get a(){return w(Bn,{})},get b(){return w(Pn,{})}})}})}})),t})()}function br(e){return new Worker("/open/forge/assets/package.worker-BNoEn71p.js",{type:"module",name:e==null?void 0:e.name})}const yr=`// .elf bootstrap. Lives inline in every Forge-built single-file artifact.
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

    // Find the binding-runtime resource and dynamic-import it as an ES module.
    const runtimeEntry = manifest.resources.find((r) => r.role === 'binding-runtime');
    if (!runtimeEntry) throw new Error('no binding-runtime resource declared');
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
`;function Ot(e){return Ke(e)}function Ke(e){if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number")return wr(e);if(typeof e=="string")return pt(e);if(Array.isArray(e))return`[${e.map(n=>Ke(n===void 0?null:n)).join(",")}]`;if(typeof e=="object"){const t=e;return`{${Object.keys(t).filter(s=>t[s]!==void 0).sort().map(s=>`${pt(s)}:${Ke(t[s])}`).join(",")}}`}return"null"}function wr(e){if(!Number.isFinite(e))throw new RangeError(`JCS: non-finite number not permitted (${e})`);return e===0?"0":e.toString()}function pt(e){let t='"';for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r===34?t+='\\"':r===92?t+="\\\\":r===8?t+="\\b":r===9?t+="\\t":r===10?t+="\\n":r===12?t+="\\f":r===13?t+="\\r":r<32?t+=`\\u${r.toString(16).padStart(4,"0")}`:t+=e[n]}return t+'"'}let pe=null,xr=1;const Ge=new Map;function vr(){return pe||(pe=new br,pe.onmessage=e=>{const t=e.data,n=Ge.get(t.id);n&&(Ge.delete(t.id),t.ok?n.resolve(t.encoded):n.reject(new Error(t.error)))},pe)}async function $r(e){const t=vr(),n=xr++;return new Promise((r,s)=>{Ge.set(n,{resolve:r,reject:s}),t.postMessage({id:n,resources:e},e.map(i=>i.bytes))})}function _r(e){var r;const t=[];if(e.elf_version!=="0.2"&&t.push({path:"elf_version",message:`must be "0.2", got "${e.elf_version}"`}),e.id||t.push({path:"id",message:"required"}),e.title||t.push({path:"title",message:"required"}),e.created||t.push({path:"created",message:"required"}),Array.isArray(e.resources)||t.push({path:"resources",message:"must be array"}),e.interaction||t.push({path:"interaction",message:"required"}),e.interaction&&!e.interaction.kind&&t.push({path:"interaction.kind",message:"required"}),e.interaction&&!Array.isArray(e.interaction.operations)&&t.push({path:"interaction.operations",message:"must be array"}),e.fulfillments||t.push({path:"fulfillments",message:"required"}),e.fulfillments)for(const s of((r=e.interaction)==null?void 0:r.operations)??[]){const i=e.fulfillments[s];(!i||i.length===0)&&t.push({path:`fulfillments.${s}`,message:"no fulfillment for declared operation"})}const n=new Set((e.resources??[]).map(s=>s.id));for(const s of e.resources??[])for(const i of s.derived_from??[])n.has(i)||t.push({path:`resources.${s.id}.derived_from`,message:`references unknown resource "${i}"`});return t}class mt extends Error{constructor(n){super(`build failed (${n.length} problem${n.length===1?"":"s"}):
`+n.map(r=>`  • ${r.path}: ${r.message}`).join(`
`));rt(this,"problems");this.problems=n,this.name="BuildError"}}const Sr="0000000000000000000000000000000000000000000000000000000000000000";async function kr(e){const t=performance.now(),n=JSON.parse(JSON.stringify(e.manifest()));n.signatures=[],n.provenance=n.provenance??{},n.provenance.builder="forge/0.1",n.provenance.built_at=new Date().toISOString();const r=_r(n);if(r.length)throw new mt(r);const s=[],i=[];for(const p of n.resources){if(p.sha256===Sr){(!p.fetch_urls||p.fetch_urls.length===0)&&i.push({path:`resources.${p.id}`,message:"has placeholder sha256 but no fetch_urls — cannot package"}),s.push({entry:p,bytes:null});continue}const A=await D.get(p.sha256);if(!A){if(p.fetch_urls&&p.fetch_urls.length>0){s.push({entry:p,bytes:null});continue}i.push({path:`resources.${p.id}`,message:"bytes missing from blob store and no fetch_urls fallback"});continue}const x=await A.arrayBuffer(),E=await We(x);if(E!==p.sha256){i.push({path:`resources.${p.id}.sha256`,message:`bytes hash to ${E}, expected ${p.sha256}`});continue}if(x.byteLength!==p.size){i.push({path:`resources.${p.id}.size`,message:`bytes are ${x.byteLength} long, manifest says ${p.size}`});continue}s.push({entry:p,bytes:x})}if(i.length)throw new mt(i);const l=Ot(n),o=await We(l),a=n.resources.find(p=>p.role==="binding-ui"),u=s.find(p=>p.entry===a),d=u!=null&&u.bytes?new TextDecoder("utf-8").decode(new Uint8Array(u.bytes)):'<div id="elf-app"></div>',c=s.filter(p=>p.bytes!==null).map(p=>({id:p.entry.id,bytes:p.bytes})),m=await $r(c),f=new Map(m.map(p=>[p.id,p.base64])),h=(n.title||".elf artifact").replace(/[<>]/g,""),y=[];y.push("<!DOCTYPE html>"),y.push('<html lang="en">'),y.push("<head>"),y.push('  <meta charset="utf-8">'),y.push('  <meta name="viewport" content="width=device-width, initial-scale=1">'),y.push('  <meta name="elf-version" content="0.2">'),y.push(`  <meta name="elf-fingerprint" content="sha256:${o}">`),y.push(`  <title>${h}</title>`),y.push(`  <script type="application/elf-manifest">
${JSON.stringify(n,null,2)}
  <\/script>`),y.push("  <!--"),y.push(`    artifact identity: sha256:${o}`),y.push(`    canonical bytes: ${l.length} chars (RFC 8785)`),y.push("  -->");for(const p of s){if(p.bytes===null)continue;const A=f.get(p.entry.id)??"";y.push(`  <script type="application/elf-resource" data-id="${p.entry.id}" data-encoding="base64" data-sha256="${p.entry.sha256}" data-media-type="${p.entry.media_type}">${A}<\/script>`)}y.push("</head>");const b=[];b.push("<body>"),b.push(d),b.push('<script type="module">'),b.push(yr),b.push("<\/script>"),b.push("</body>"),b.push("</html>");const $=y.join(`
`)+`
`+b.join(`
`)+`
`,S=new Blob([$],{type:"text/html"}),_=`build.${Date.now().toString(36)}.${o.slice(0,8)}`;return e.appendJournal({actor:"user",tool:"build_single",args:{fingerprint:o,byteSize:S.size},resultRefs:[],durationMs:Math.round(performance.now()-t),ok:!0}),{buildId:_,blob:S,fingerprint:o,byteSize:S.size,manifest:n}}const Ar="outputs";function Cr(e){return`${Ar}/${e}.elf.html`}async function Er(e){const t=await kr(e),n=Cr(t.buildId);await nt(n,t.blob);const r={buildId:t.buildId,title:t.manifest.title,fingerprint:t.fingerprint,byteSize:t.byteSize,builtAt:new Date().toISOString(),path:n};return e.recordOutput(r),r}async function Ve(e){return Ae(e.path)}async function Mr(e,t){await xn(t.path),e.removeOutput(t.buildId)}var Or=v('<ul class="divide-y divide-edge">'),Rr=v('<div class="h-full flex flex-col bg-panel"><div class="flex-1 overflow-auto">'),Ir=v("<span class=text-neutral-600> builds"),Nr=v('<div class="px-3 py-6 text-xs text-neutral-500">No builds yet. Click <span class=text-accent>Build</span> in the chat-column toolbar once your pipeline is complete.'),Br=v('<li><div class="flex items-center justify-between gap-2"><div class="min-w-0 flex-1"><div class="truncate text-sm"></div><div class="font-mono text-[11px] text-neutral-500 truncate">sha256:</div></div><span class="text-[11px] text-neutral-400 tabular-nums shrink-0"></span></div><div class="mt-1 flex items-center justify-between text-[11px] text-neutral-500"><span></span><div class="flex gap-2"><button class="text-accent hover:underline">download</button><button class="text-red-400 hover:underline">delete');function Tr(){const e=G(),t=s=>e.setSelectedBuildId(s),n=async s=>{const i=e.outputs().find(u=>u.buildId===s);if(!i)return;const l=await Ve(i);if(!l)return;const o=URL.createObjectURL(l),a=document.createElement("a");a.href=o,a.download=`${i.title.replace(/\s+/g,"_")}.${i.fingerprint.slice(0,8)}.elf.html`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)},r=async s=>{const i=e.outputs().find(l=>l.buildId===s);i&&confirm(`Delete build ${i.buildId}?`)&&await Mr(e,i)};return(()=>{var s=Rr(),i=s.firstChild;return g(s,w(Ie,{title:"Outputs",get right(){return(()=>{var l=Ir(),o=l.firstChild;return g(l,()=>e.outputs().length,o),l})()}}),i),g(i,w(N,{get when(){return e.outputs().length>0},get fallback(){return Nr()},get children(){var l=Or();return g(l,w(Ze,{get each(){return e.outputs()},children:o=>(()=>{var a=Br(),u=a.firstChild,d=u.firstChild,c=d.firstChild,m=c.nextSibling;m.firstChild;var f=d.nextSibling,h=u.nextSibling,y=h.firstChild,b=y.nextSibling,$=b.firstChild,S=$.nextSibling;return a.$$click=()=>t(o.buildId),g(c,()=>o.title),g(m,()=>Be(o.fingerprint,8,4),null),g(f,()=>Ne(o.byteSize)),g(y,()=>new Date(o.builtAt).toLocaleString()),$.$$click=_=>{_.stopPropagation(),n(o.buildId)},S.$$click=_=>{_.stopPropagation(),r(o.buildId)},T(()=>V(a,`px-3 py-2 cursor-pointer ${e.selectedBuildId()===o.buildId?"bg-accent/15":"hover:bg-white/[0.03]"}`)),a})()})),l}})),s})()}X(["click"]);var jr=v("<span class=text-neutral-200>sha256:"),Dr=v('<div class="absolute right-3 top-12 max-w-[60vw] bg-red-900/80 border border-red-500/40 text-red-100 text-[11px] px-3 py-2 rounded shadow-lg whitespace-pre-wrap font-mono z-10"><button class="ml-2 text-red-200 hover:text-white">×'),Pr=v('<div class="relative flex items-center justify-between px-3 py-2 border-b border-edge bg-panel"><div class="flex items-center gap-3"><span class="text-sm font-semibold text-neutral-200">🜂 Forge</span><span class="text-[11px] text-neutral-500 uppercase tracking-wider">.elf v0.2 builder</span></div><div class="flex items-center gap-2"><button title="Click to copy artifact identity"><span class="text-neutral-400 normal-case font-sans tracking-wider text-[10px]">Identity</span><span class="text-neutral-500 group-hover:text-neutral-300"></span></button><button>'),Lr=v("<span class=text-neutral-500>sha256:000000…0000");function Fr(){const e=G(),[t,n]=O(!1),[r,s]=O(!1),[i,l]=O(!1),[o,a]=O(null);let u;Xe(()=>{const f=e.fingerprint();f&&f!==u&&(u=f,n(!0),setTimeout(()=>n(!1),700))});const d=U(()=>Ct(e.manifest(),e.resources())),c=async()=>{const f=e.fingerprint();if(f)try{await navigator.clipboard.writeText(`sha256:${f}`),s(!0),setTimeout(()=>s(!1),1200)}catch{}},m=async()=>{if(!i()){l(!0),a(null);try{await Er(e)}catch(f){a(f.message??String(f))}finally{l(!1)}}};return(()=>{var f=Pr(),h=f.firstChild,y=h.nextSibling,b=y.firstChild,$=b.firstChild,S=$.nextSibling,_=b.nextSibling;return b.$$click=c,g(b,w(N,{get when(){return e.fingerprint()},get fallback(){return Lr()},get children(){var p=jr();return p.firstChild,g(p,()=>Be(e.fingerprint(),8,4),null),p}}),S),g(S,()=>r()?"✓":"⧉"),_.$$click=m,g(_,()=>i()?"Building…":"Build"),g(f,w(N,{get when(){return o()},get children(){var p=Dr(),A=p.firstChild;return g(p,o,A),A.$$click=()=>a(null),p}}),null),T(p=>{var A=`group flex items-center gap-2 px-2.5 py-1 rounded border border-edge font-mono text-[11px] hover:bg-white/5 transition-colors ${t()?"animate-pulse-fp":""}`,x=`px-3 py-1 text-xs rounded border ${d().buildReady&&!i()?"border-accent/50 bg-accent text-white hover:bg-accent/90":"border-edge bg-white/5 text-neutral-400 cursor-not-allowed"}`,E=!d().buildReady||i(),k=d().buildReady?"Build single-file .elf":d().blockingReason??"";return A!==p.e&&V(b,p.e=A),x!==p.t&&V(_,p.t=x),E!==p.a&&(_.disabled=p.a=E),k!==p.o&&Q(_,"title",p.o=k),p},{e:void 0,t:void 0,a:void 0,o:void 0}),f})()}X(["click"]);var zr=v('<div class="h-full flex flex-col bg-bg"><div class="flex-1 overflow-auto px-4 py-6 text-sm text-neutral-400"><div class="max-w-2xl mx-auto space-y-3"><p class=text-neutral-300><span class=text-accent>M0 milestone:</span> drop a file in the Sources panel on the left. Watch the manifest grow and the identity badge above pulse with the new fingerprint.</p><p>The chat surface lights up in M2 when the agent client is wired. For now this column shows a live activity log so you can see writes land.</p></div><div class="mt-6 max-w-2xl mx-auto"><div class="text-[11px] uppercase tracking-wider text-neutral-500 mb-2">Activity log</div><ul class="space-y-1 font-mono text-[11px] text-neutral-400">'),qr=v("<li class=text-neutral-600>No activity yet — drop a file to see entries appear."),Ur=v('<li class="flex gap-3"><span class="text-neutral-600 shrink-0"></span><span></span><span class="text-neutral-200 shrink-0"></span><span class="truncate text-neutral-500"> → ');function Wr(){const e=G();return(()=>{var t=zr(),n=t.firstChild,r=n.firstChild,s=r.nextSibling,i=s.firstChild,l=i.nextSibling;return g(t,w(Fr,{}),n),g(l,w(Ze,{get each(){return e.journal().slice().reverse().slice(0,80)},get fallback(){return qr()},children:o=>(()=>{var a=Ur(),u=a.firstChild,d=u.nextSibling,c=d.nextSibling,m=c.nextSibling,f=m.firstChild;return g(u,()=>o.ts.slice(11,19)),g(d,()=>o.actor),g(c,()=>o.tool),g(m,()=>JSON.stringify(o.args),f),g(m,()=>o.resultRefs.join(", "),null),T(()=>V(d,o.actor==="agent"?"text-accent shrink-0":"text-neutral-300 shrink-0")),a})()})),t})()}var Hr=v('<div class="h-full flex flex-col bg-panel"><div class="flex-1 min-h-0 bg-bg">'),Jr=v("<span class=text-neutral-600>no build"),Kr=v('<div class="flex items-center gap-2"><span class="font-mono text-[11px] text-neutral-400"> · sha256:</span><button class="text-[11px] px-2 py-0.5 rounded border border-edge hover:bg-white/5">reload</button><button class="text-[11px] px-2 py-0.5 rounded border border-edge hover:bg-white/5">download'),Gr=v("<span>loading build…"),Vr=v('<div class="h-full flex items-center justify-center text-xs text-neutral-500 px-6 text-center">'),Xr=v("<span>Build a .elf to preview it here."),Yr=v('<iframe class="w-full h-full border-0 bg-white"sandbox=allow-scripts title="elf preview">');function Qr(){const e=G(),[t,n]=O(0),r=()=>{const l=e.selectedBuildId();return l?e.outputs().find(o=>o.buildId===l)??null:null},[s]=wt(()=>({entry:r(),key:t()}),async({entry:l})=>{if(!l)return null;const o=await Ve(l);return o?o.text():null}),i=async()=>{const l=r();if(!l)return;const o=await Ve(l);if(!o)return;const a=URL.createObjectURL(o),u=document.createElement("a");u.href=a,u.download=`${l.title.replace(/\s+/g,"_")}.${l.fingerprint.slice(0,8)}.elf.html`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(a)};return(()=>{var l=Hr(),o=l.firstChild;return g(l,w(Ie,{title:"Preview",subtitle:"sandboxed iframe",get right(){return w(N,{get when(){return r()},get fallback(){return Jr()},children:a=>(()=>{var u=Kr(),d=u.firstChild,c=d.firstChild,m=d.nextSibling,f=m.nextSibling;return g(d,()=>Ne(a().byteSize),c),g(d,()=>Be(a().fingerprint,6,4),null),m.$$click=()=>n(h=>h+1),f.$$click=i,u})()})}}),o),g(o,w(N,{get when(){return s()},get fallback(){return(()=>{var a=Vr();return g(a,w(N,{get when(){return r()},get fallback(){return Xr()},get children(){return Gr()}})),a})()},children:a=>(()=>{var u=Yr();return T(d=>{var c=a(),m=t();return c!==d.e&&Q(u,"srcdoc",d.e=c),m!==d.t&&Q(u,"data-reload",d.t=m),d},{e:void 0,t:void 0}),u})()})),l})()}X(["click"]);var Zr=v(`<div class="bg-red-900/40 border-b border-red-500/40 px-4 py-2 text-sm text-red-100">Forge requires the Origin Private File System (OPFS). Your browser either doesn't support it or has it disabled. State will not persist between reloads.`);function es(){return w(N,{get when(){return!ae()},get children(){return Zr()}})}const Ce=Symbol("store-raw"),ne=Symbol("store-node"),W=Symbol("store-has"),Rt=Symbol("store-self");function It(e){let t=e[ee];if(!t&&(Object.defineProperty(e,ee,{value:t=new Proxy(e,rs)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,i=n.length;s<i;s++){const l=n[s];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(t)})}}return t}function re(e){let t;return e!=null&&typeof e=="object"&&(e[ee]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function se(e,t=new Set){let n,r,s,i;if(n=e!=null&&e[Ce])return n;if(!re(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)s=e[l],(r=se(s,t))!==s&&(e[l]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let a=0,u=l.length;a<u;a++)i=l[a],!o[i].get&&(s=e[i],(r=se(s,t))!==s&&(e[i]=r))}return e}function Ee(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function be(e,t,n){if(e[t])return e[t];const[r,s]=O(n,{equals:!1,internal:!0});return r.$=s,e[t]=r}function ts(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===ee||t===ne||(delete n.value,delete n.writable,n.get=()=>e[ee][t]),n}function Nt(e){Fe()&&be(Ee(e,ne),Rt)()}function ns(e){return Nt(e),Reflect.ownKeys(e)}const rs={get(e,t,n){if(t===Ce)return e;if(t===ee)return n;if(t===Pe)return Nt(e),n;const r=Ee(e,ne),s=r[t];let i=s?s():e[t];if(t===ne||t===W||t==="__proto__")return i;if(!s){const l=Object.getOwnPropertyDescriptor(e,t);Fe()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=be(r,t,i)())}return re(i)?It(i):i},has(e,t){return t===Ce||t===ee||t===Pe||t===ne||t===W||t==="__proto__"?!0:(Fe()&&be(Ee(e,W),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ns,getOwnPropertyDescriptor:ts};function ie(e,t,n,r=!1){if(!r&&e[t]===n)return;const s=e[t],i=e.length;n===void 0?(delete e[t],e[W]&&e[W][t]&&s!==void 0&&e[W][t].$()):(e[t]=n,e[W]&&e[W][t]&&s===void 0&&e[W][t].$());let l=Ee(e,ne),o;if((o=be(l,t,s))&&o.$(()=>n),Array.isArray(e)&&e.length!==i){for(let a=e.length;a<i;a++)(o=l[a])&&o.$();(o=be(l,"length",i))&&o.$(e.length)}(o=l[Rt])&&o.$()}function Bt(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];ie(e,s,t[s])}}function ss(e,t){if(typeof t=="function"&&(t=t(e)),t=se(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&ie(e,n,s)}ie(e,"length",r)}else Bt(e,t)}function ge(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const l=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let a=0;a<r.length;a++)ge(e,[r[a]].concat(t),n);return}else if(o&&l==="function"){for(let a=0;a<e.length;a++)r(e[a],a)&&ge(e,[a].concat(t),n);return}else if(o&&l==="object"){const{from:a=0,to:u=e.length-1,by:d=1}=r;for(let c=a;c<=u;c+=d)ge(e,[c].concat(t),n);return}else if(t.length>1){ge(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(s,n),i===s)||r===void 0&&i==null||(i=se(i),r===void 0||re(s)&&re(i)&&!Array.isArray(i)?Bt(s,i):ie(e,r,i))}function gt(...[e,t]){const n=se(e||{}),r=Array.isArray(n),s=It(n);function i(...l){Le(()=>{r&&l.length===1?ss(n,l[0]):ge(n,l)})}return[s,i]}const Me=new WeakMap,Tt={get(e,t){if(t===Ce)return e;const n=e[t];let r;return re(n)?Me.get(n)||(Me.set(n,r=new Proxy(n,Tt)),r):n},set(e,t,n){return ie(e,t,se(n)),!0},deleteProperty(e,t){return ie(e,t,void 0,!0),!0}};function me(e){return t=>{if(re(t)){let n;(n=Me.get(t))||Me.set(t,n=new Proxy(t,Tt)),e(n)}return t}}let ht=1;function is(){const[e,t]=gt(vn()),[n,r]=gt({}),[s,i]=O([]),[l,o]=O([]),[a,u]=O(null),[d,c]=O(null),m=new Set,f=()=>m.forEach(x=>x()),h=x=>{Le(()=>{t(me(E=>{r(me(k=>{x(E,k)}))}))}),f()},y=x=>{o(E=>[x,...E.filter(k=>k.buildId!==x.buildId)]),c(x.buildId),f()},b=x=>{o(E=>E.filter(k=>k.buildId!==x)),d()===x&&c(null),f()},$=x=>{const E={...x,id:`j-${ht++}`,ts:new Date().toISOString()};i(k=>[...k,E]),f()},S=x=>{t(me(E=>{for(const k of Object.keys(E))delete E[k];Object.assign(E,x)})),f()},_=x=>{Le(()=>{t(me(k=>{for(const R of Object.keys(k))delete k[R];Object.assign(k,x.manifest)})),r(me(k=>{for(const R of Object.keys(k))delete k[R];Object.assign(k,x.resources)})),i(x.journal??[]);const E=(x.journal??[]).map(k=>Number(k.id.replace("j-",""))).filter(k=>!Number.isNaN(k));ht=(E.length?Math.max(...E):0)+1,o(x.outputs??[]),c(x.selectedBuildId??null)})},p=U(()=>{const x={...e,signatures:[]};return Ot(x)}),[A]=wt(p,async x=>We(x));return{manifest:()=>e,resources:()=>n,journal:s,outputs:l,selection:a,setSelection:u,selectedBuildId:d,setSelectedBuildId:x=>{c(x),f()},mutate:h,appendJournal:$,recordOutput:y,removeOutput:b,setManifest:S,hydrate:_,fingerprint:()=>A(),onWrite(x){return m.add(x),()=>m.delete(x)}}}const jt="workspace.json",os=500;async function ls(){if(!ae())return null;const e=await Ae(jt);if(!e)return null;try{const t=await e.text();return JSON.parse(t)}catch(t){return console.warn("Failed to parse workspace snapshot:",t),null}}function as(e){if(!ae())return()=>{};let t=null,n=!1,r=!1;const s=async()=>{if(n){r=!0;return}n=!0;try{const o={manifest:JSON.parse(JSON.stringify(e.manifest())),resources:JSON.parse(JSON.stringify(e.resources())),journal:JSON.parse(JSON.stringify(e.journal())),outputs:JSON.parse(JSON.stringify(e.outputs())),selectedBuildId:e.selectedBuildId()},a=JSON.stringify(o);await nt(jt,new Blob([a],{type:"application/json"}))}catch(o){console.warn("Snapshot write failed:",o)}finally{n=!1,r&&(r=!1,i())}},i=()=>{t!==null&&clearTimeout(t),t=window.setTimeout(()=>{t=null,s()},os)},l=e.onWrite(i);return()=>{l(),t!==null&&clearTimeout(t)}}var cs=v('<div class="h-full flex flex-col"><div class="flex-1 min-h-0">'),us=v('<div class="fixed bottom-3 left-3 text-[11px] text-neutral-500 bg-panel border border-edge rounded px-2 py-1">restoring workspace…');function ds(){const e=is(),[t,n]=O(!1);return xt(async()=>{const r=await ls();r&&e.hydrate(r),as(e),n(!0)}),w(gn,{store:e,get children(){var r=cs(),s=r.firstChild;return g(r,w(es,{}),s),g(s,w(Z,{direction:"horizontal",storageKey:"col1",initialA:360,minA:240,minB:400,get a(){return w(fs,{})},get b(){return w(Z,{direction:"horizontal",storageKey:"col2",initialA:520,minA:320,minB:240,get a(){return w(Wr,{})},get b(){return w(Qr,{})}})}})),g(r,(()=>{var i=q(()=>!t());return()=>i()&&us()})(),null),r}})}function fs(){return w(Z,{direction:"vertical",storageKey:"col1.chats",initialA:140,minA:60,minB:300,get a(){return w(mn,{})},get b(){return w(Z,{direction:"vertical",storageKey:"col1.workspace",initialA:520,minA:200,minB:120,get a(){return w(hr,{})},get b(){return w(Tr,{})}})}})}const Dt=document.getElementById("root");if(!Dt)throw new Error("#root not found");sn(()=>w(ds,{}),Dt);
