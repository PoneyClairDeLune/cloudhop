"use strict";let eG=(a,b="")=>{return self[a]||b};let pV="Cloudflare",pE=()=>{},pP=true;(()=>{var l=function(o=200,r="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${r}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${r}</div><div>${e}</div><div id="d"><center>Cloud Hop v${pW}@${pV}</center></div></div></body>`,{status:o,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};Object.forEach=function(o,r){Object.keys(o).forEach(function(t){r(o[t],t,o)})};var T=function(o,r){let e=new Set;return r?.length>0&&r.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),o.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),e},E=function(o,r){let e={};return Object.forEach(r||{},function(t,a){e[a.toLowerCase()]=t}),o.split(",").forEach(function(t){let a=t.indexOf("=");a<t.length-1&&(e[t.slice(0,a).toLowerCase()]=t.slice(a+1))}),e},O=function(o,r){let e={};o.forEach(function(a,n){e[n.toLowerCase()]=a}),r?.strip?.size>0&&r.strip.forEach(function(a){delete e[a]});let t=Object.keys(r?.set||{});return t.length>0&&t.forEach(function(a){e[a.toLowerCase()]=r.set[a]}),e},$=async function(o,r,e={}){let t={},a=o.body;r?.constructor!=Function&&(r=function(s,i){return[s,i]}),o.headers.forEach(function(s,i){let d=r(i.toLowerCase(),s);t[d[0].toLowerCase()]=d[1]}),e?.strip?.size>0&&e.strip.forEach(function(s){delete t[s]});let n=Object.keys(e?.set||{});return n.length>0&&n.forEach(function(s){t[s.toLowerCase()]=e.set[s]}),new Response(a,{status:o.status,headers:t})};self.pW="0.2";var P=["http:","https:","ws:","wss:"],g=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var f=eG("DEBUGGER","0")=="1",y=eG("BACKENDS","internal").split(","),b=eG("BACKHOST",""),_=eG("MASK_IP","strip"),D=eG("MASK_UA","noBracket"),M=eG("FOLLOW_REDIR","0"),A=eG("FORCE_IN_TLS","asIs"),v=eG("FORCE_OUT_TLS","asIs"),Y=eG("ADAPT_BODY","0")=="1",U=eG("MATCH_LANG","*").split(","),H=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),I=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,B=eG("HEALTH_PATH"),m=eG("HEALTH_CRITERIA","asIs"),S=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),q=T(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,sec-ch-lang,sec-ch-save-data,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,viewport-width,viewport-height,dpr,device-memory,rtt,downlink,ect".split(",")),j=T(eG("STRIP_HEADERS","").split(","),["alt-svc"]),C=E(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),F=E(eG("SET_HEADERS","")),c=parseInt(eG("IDLE_SHUTDOWN","0"));c>0?c=Math.max(c,60)*1e3:c=-1;console.info(`Debug mode: ${f?"on":"off"}`);console.info(`Backends: ${y}`);console.info(`Host: ${b}`);console.info(`Masking: UA(${D}), IP(${_}), lang(${U})`);console.info(`TLS: in(${A}), out(${v});`);console.info(`Health: active(${I}), tries(${H}), crit(${m}), timeout(${S}ms), path(${B})`);console.info(`Inactivity shutdown: ${c}`);var k=Date.now();pP&&(console.info("Platform persistence available."),c>0&&setInterval(function(){Date.now()-k>c&&(console.info("Requested idle shutdown."),pE())},1e3),I>0&&console.info("Active health checking enabled, but not implemented."));var R=async function(o,r){if(c>0&&(k=Date.now()),y.length==1&&y[0]=="internal")return l(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(o.url),t=P.indexOf(e.protocol);if(t==-1)return l(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(A){case"plain":{if(t%2==1)return l(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(t%2==0)return l(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(v){case"tls":case"plain":{e.protocol=[(t>>1<<1)+ +(v=="tls")];break}}let a=F||{},n,s=[],i=!0,d=H,w,x;for(;d>=0&&i;){(w?.length<1||!w)&&(w=y.slice());let h=w.draw(),X=h.lastIndexOf("]"),N=h.lastIndexOf(":");s.push(h),e.hostname=h,e.port="",f&&console.info(`Tries: ${d}, target: ${o.method} ${e.protocol}//${h}/`);let p={};p.method=o.method,o.bodyUsed&&(p.body=o.body),C.host=`${b?.length>2?b:h}`,p.headers=O(o.headers,{strip:q,set:C}),f&&(x=p.headers),M=="0"&&(p.redirect="manual");let L=AbortSignal.timeout(S);p.signal=L;let G=new Request(e.toString(),p);try{switch(n=await fetch(e,G),Math.floor(n.status/100)){case 2:{i=!1;break}case 3:{let u=n.headers.get("location");n=l(n.status,"Redirection",`Origin issued an redirect to: <a href="${u}">${u}</a>.`),i=!1;break}case 4:{i=g.indexOf(m)==0;break}case 5:{i=g.indexOf(m)<=1;break}default:i=g.indexOf(m)<=2,i||(n=l(502,"Bad gateway",`All origins are down.${f?" Trace: "+s:""}`))}}catch(u){if(i=g.indexOf(m)<=2,!i)switch(console.error(u.stack),u.constructor.name){case"TypeError":{n=l(502,"Bad gateway",`The last origin is down.${f?" Trace: "+s:""}<br/><pre>${u.stack}</pre>`);break}case"DOMException":{n=l(504,"Timeout",`Gateway timeout after ${S} ms.${f?" Trace: "+s:""}`);break}default:n=l(500,"Unknown error",`<pre>${u.stack}</pre>`)}}if(c>0&&(k=Date.now()),f&&(a["X-CloudHop-Target"]=h,a["X-CloudHop-Health"]=`${d}/${H}`,a["X-CloudHop-Trace"]=s.toString(),a["X-CloudHop-Up"]=JSON.stringify(x)),d<=1&&!n)return n=l(502,"Bad gateway",`Passive health check count exceeded${f?": "+s:""}.`),a["X-CloudHop-Health"]=`0/${H}`,await $(n,!1,{set:a});d--}return await $(n,!1,{strip:j,set:a})||l(500,"Empty response",`${i?"Successful":"Failed"} empty response from trace: ${s}.<br/>Last requested URL: ${e.toString()}`)};addEventListener("fetch",async function(o){let r=o.request,e=r.headers.get("cf-connecting-ip");o.respondWith(R(r,e))});})();
//# sourceMappingURL=cloudflare.js.map
