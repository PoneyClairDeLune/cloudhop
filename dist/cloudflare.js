"use strict";let eG=(a,b="")=>{return self[a]||b};let pV="Cloudflare",pE=()=>{};"use strict";(()=>{var l=function(o=200,a="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${a}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${a}</div><div>${e}</div><div id="d"><center>Cloud Hop v${pW}@${pV}</center></div></div></body>`,{status:o,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};Object.forEach=function(o,a){Object.keys(o).forEach(function(t){a(o[t],t,o)})};var H=function(o,a){let e=new Set;return a?.length>0&&a.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),o.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),e},T=function(o,a){let e={};return Object.forEach(a||{},function(t,r){e[r.toLowerCase()]=t}),o.split(",").forEach(function(t){let r=t.indexOf("=");r<t.length-1&&(e[t.slice(0,r).toLowerCase()]=t.slice(r+1))}),e},k=function(o,a){let e={};o.forEach(function(r,n){e[n.toLowerCase()]=r}),a?.strip?.size>0&&a.strip.forEach(function(r){delete e[r]});let t=Object.keys(a?.set||{});return t.length>0&&t.forEach(function(r){e[r.toLowerCase()]=a.set[r]}),e},E=async function(o,a,e={}){let t={},r=o.body;a?.constructor!=Function&&(a=function(i,s){return[i,s]}),o.headers.forEach(function(i,s){let c=a(s.toLowerCase(),i);t[c[0].toLowerCase()]=c[1]}),e?.strip?.size>0&&e.strip.forEach(function(i){delete t[i]});let n=Object.keys(e?.set||{});return n.length>0&&n.forEach(function(i){t[i.toLowerCase()]=e.set[i]}),new Response(r,{status:o.status,headers:t})};self.pW="0.2";var A=["http:","https:","ws:","wss:"],m=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var d=eG("DEBUGGER","0")=="1",g=eG("BACKENDS","internal").split(","),v=eG("BACKHOST",""),L=eG("MASK_IP","strip"),G=eG("MASK_UA","noBracket"),C=eG("FORCE_IN_TLS","asIs"),$=eG("FORCE_OUT_TLS","asIs"),K=eG("ADAPT_BODY","0")=="1",_=eG("MATCH_LANG","*").split(","),y=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),D=self.isPersPlat&&Math.max(parseFloat(eG("HEALTH_ACTIVE","5")),15)*1e3,w=eG("HEALTH_CRITERIA","asIs"),b=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),P=H(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip".split(",")),U=H(eG("STRIP_HEADERS","").split(","),["alt-svc"]),M=T(eG("SET_HEADERS_UP","")),B=T(eG("SET_HEADERS","")),p=parseInt(eG("IDLE_SHUTDOWN","0"));p>0?p=Math.max(p,60)*1e3:p=-1;console.info(`Debug mode: ${d?"on":"off"}`);console.info(`Backends: ${g}`);console.info(`Host: ${v}`);console.info(`Masking: UA(${G}), IP(${L}), lang(${_})`);console.info(`TLS: in(${C}), out(${$});`);console.info(`Health: active(${D}), tries(${y}), crit(${w}), timeout(${b}ms)`);console.info(`Inactivity shutdown: ${p}`);var S=Date.now();p>0&&setInterval(function(){Date.now()-S>p&&(console.info("Requested idle shutdown."),pE())},1e3);var I=async function(o,a){if(S=Date.now(),g.length==1&&g[0]=="internal")return l(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(o.url),t=A.indexOf(e.protocol);if(t==-1)return l(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(C){case"plain":{if(t%2==1)return l(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(t%2==0)return l(400,"HTTP only","Only HTTP connections are allowed.");break}}switch($){case"tls":case"plain":{e.protocol=[(t>>1<<1)+ +($=="tls")];break}}let r=B||{},n,i=[],s=!0,c=y,x;for(;c>=0&&s;){let h=g.random(),q=h.lastIndexOf("]"),j=h.lastIndexOf(":");i.push(h),e.hostname=h,e.port="",d&&console.info(`Tries: ${c}, target: ${o.method} ${e.protocol}//${h}/`);let u={};u.method=o.method,o.bodyUsed&&(u.body=o.body),u.headers=k(o.headers,{strip:P,set:M}),d&&(x=u.headers);let O=AbortSignal.timeout(b);u.signal=O;let R=new Request(e.toString(),u);try{switch(n=await fetch(e,R),Math.floor(n.status/100)){case 2:{s=!1;break}case 3:{let f=n.headers.get("location");n=l(n.status,"Redirection",`Origin issued an redirect to: <a href="${f}">${f}</a>.`),s=!1;break}case 4:{s=m.indexOf(w)==0;break}case 5:{s=m.indexOf(w)<=1;break}default:s=m.indexOf(w)<=2,s||(n=l(502,"Bad gateway",`All origins are down.${d?" Trace: "+i:""}`))}}catch(f){if(s=m.indexOf(w)<=2,!s)switch(console.error(f.stack),f.constructor.name){case"TypeError":{n=l(502,"Bad gateway",`The last origin is down.${d?" Trace: "+i:""}<br/><pre>${f.stack}</pre>`);break}case"DOMException":{n=l(504,"Timeout",`Gateway timeout after ${b} ms.${d?" Trace: "+i:""}`);break}default:n=l(500,"Unknown error",`<pre>${f.stack}</pre>`)}}if(S=Date.now(),d&&(r["X-CloudHop-Target"]=h,r["X-CloudHop-Health"]=`${c}/${y}`,r["X-CloudHop-Trace"]=i.toString(),r["X-CloudHop-Up"]=JSON.stringify(x)),c<=1&&!n)return n=l(502,"Bad gateway",`Passive health check count exceeded${d?": "+i:""}.`),r["X-CloudHop-Health"]=`0/${y}`,await E(n,!1,{set:r});c--}return await E(n,!1,{strip:U,set:r})||l(500,"Empty response",`${s?"Successful":"Failed"} empty response from trace: ${i}.<br/>Last requested URL: ${e.toString()}`)};addEventListener("fetch",async function(o){let a=o.request,e=a.headers.get("cf-connecting-ip");o.respondWith(I(a,e))});})();
//# sourceMappingURL=cloudflare.js.map
