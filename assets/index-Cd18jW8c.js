const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Root-hT4l2jRp.js","./index-BC4IW0ax.js","./App-CnVgM5ZX.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const y="modulepreload",g=function(l,n){return new URL(l,n).href},h={},p=function(n,c,a){let e=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),m=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(c.map(i=>{if(i=g(i,a),i in h)return;h[i]=!0;const u=i.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(!!a)for(let f=o.length-1;f>=0;f--){const d=o[f];if(d.href===i&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${v}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":y,u||(s.as="script"),s.crossOrigin="",s.href=i,m&&s.setAttribute("nonce",m),document.head.appendChild(s),u)return new Promise((f,d)=>{s.addEventListener("load",f),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return e.then(o=>{for(const r of o||[])r.status==="rejected"&&t(r.reason);return n().catch(t)})};Promise.all([p(()=>import("./Root-hT4l2jRp.js"),__vite__mapDeps([0,1]),import.meta.url),p(()=>import("./App-CnVgM5ZX.js").then(l=>l.W),__vite__mapDeps([2,1]),import.meta.url)]).then(([{default:l},{default:n}])=>{l(n)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"})});export{p as _};
