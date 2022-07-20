"use strict";import{serve}from"https://deno.land/std/http/server.ts";let eG=(a,b="")=>{return Deno.env.get(a)||b};let pV="Deno",pE=Deno.exit.bind(),pP=true;(()=>{var c=function(o=200,a="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${a}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${a}</div><div>${e}</div><div id="d"><center>Cloud Hop v${pW}@${pV}</center></div></div></body>`,{status:o,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};Object.forEach=function(o,a){Object.keys(o).forEach(function(t){a(o[t],t,o)})};var T=function(o,a){let e=new Set;return a?.length>0&&a.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),o.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),e},E=function(o,a){let e={};return Object.forEach(a||{},function(t,r){e[r.toLowerCase()]=t}),o.split(",").forEach(function(t){let r=t.indexOf("=");r<t.length-1&&(e[t.slice(0,r).toLowerCase()]=t.slice(r+1))}),e},O=function(o,a){let e={};o.forEach(function(r,n){e[n.toLowerCase()]=r}),a?.strip?.size>0&&a.strip.forEach(function(r){delete e[r]});let t=Object.keys(a?.set||{});return t.length>0&&t.forEach(function(r){e[r.toLowerCase()]=a.set[r]}),e},$=async function(o,a,e={}){let t={},r=o.body;a?.constructor!=Function&&(a=function(s,i){return[s,i]}),o.headers.forEach(function(s,i){let d=a(i.toLowerCase(),s);t[d[0].toLowerCase()]=d[1]}),e?.strip?.size>0&&e.strip.forEach(function(s){delete t[s]});let n=Object.keys(e?.set||{});return n.length>0&&n.forEach(function(s){t[s.toLowerCase()]=e.set[s]}),new Response(r,{status:o.status,headers:t})};self.pW="0.2";var P=["http:","https:","ws:","wss:"],g=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var f=eG("DEBUGGER","0")=="1",y=eG("BACKENDS","internal").split(","),b=eG("BACKHOST",""),_=eG("MASK_IP","strip"),D=eG("MASK_UA","noBracket"),M=eG("FOLLOW_REDIR","0"),C=eG("FORCE_IN_TLS","asIs"),v=eG("FORCE_OUT_TLS","asIs"),Y=eG("ADAPT_BODY","0")=="1",U=eG("MATCH_LANG","*").split(","),H=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),I=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,B=eG("HEALTH_PATH"),m=eG("HEALTH_CRITERIA","asIs"),S=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),j=T(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,sec-ch-lang,sec-ch-save-data,sec-ch-width,sec-ch-viewport-width,sec-ch-viewport-height,sec-ch-dpr,sec-ch-device-memory,sec-ch-rtt,sec-ch-downlink,sec-ch-ect,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model".split(",")),q=T(eG("STRIP_HEADERS","").split(","),["alt-svc"]),A=E(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),F=E(eG("SET_HEADERS","")),l=parseInt(eG("IDLE_SHUTDOWN","0"));l>0?l=Math.max(l,60)*1e3:l=-1;console.info(`Debug mode: ${f?"on":"off"}`);console.info(`Backends: ${y}`);console.info(`Host: ${b}`);console.info(`Masking: UA(${D}), IP(${_}), lang(${U})`);console.info(`TLS: in(${C}), out(${v});`);console.info(`Health: active(${I}), tries(${H}), crit(${m}), timeout(${S}ms), path(${B})`);console.info(`Inactivity shutdown: ${l}`);var k=Date.now();pP&&(console.info("Platform persistence available."),l>0&&setInterval(function(){Date.now()-k>l&&(console.info("Requested idle shutdown."),pE())},1e3),I>0&&console.info("Active health checking enabled, but not implemented."));var R=async function(o,a){if(l>0&&(k=Date.now()),y.length==1&&y[0]=="internal")return c(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(o.url),t=P.indexOf(e.protocol);if(t==-1)return c(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(C){case"plain":{if(t%2==1)return c(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(t%2==0)return c(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(v){case"tls":case"plain":{e.protocol=[(t>>1<<1)+ +(v=="tls")];break}}let r=F||{},n,s=[],i=!0,d=H,w,x;for(;d>=0&&i;){(w?.length<1||!w)&&(w=y.slice());let h=w.draw(),X=h.lastIndexOf("]"),N=h.lastIndexOf(":");s.push(h),e.hostname=h,e.port="",f&&console.info(`Tries: ${d}, target: ${o.method} ${e.protocol}//${h}/`);let p={};p.method=o.method,o.bodyUsed&&(p.body=o.body),A.host=`${b?.length>2?b:h}`,p.headers=O(o.headers,{strip:j,set:A}),f&&(x=p.headers),p.redirect=M=="0"?"manual":"follow";let L=AbortSignal.timeout(S);p.signal=L;let G=new Request(e.toString(),p);try{switch(n=await fetch(e,G),Math.floor(n.status/100)){case 2:{i=!1;break}case 3:{let u=n.headers.get("location");n=c(n.status,"Redirection",`Origin issued an redirect to: <a href="${u}">${u}</a>.`),i=!1;break}case 4:{i=g.indexOf(m)==0;break}case 5:{i=g.indexOf(m)<=1;break}default:i=g.indexOf(m)<=2,i||(n=c(502,"Bad gateway",`All origins are down.${f?" Trace: "+s:""}`))}}catch(u){if(i=g.indexOf(m)<=2,!i)switch(console.error(u.stack),u.constructor.name){case"TypeError":{n=c(502,"Bad gateway",`The last origin is down.${f?" Trace: "+s:""}<br/><pre>${u.stack}</pre>`);break}case"DOMException":{n=c(504,"Timeout",`Gateway timeout after ${S} ms.${f?" Trace: "+s:""}`);break}default:n=c(500,"Unknown error",`<pre>${u.stack}</pre>`)}}if(l>0&&(k=Date.now()),f&&(r["X-CloudHop-Target"]=h,r["X-CloudHop-Health"]=`${d}/${H}`,r["X-CloudHop-Trace"]=s.toString(),r["X-CloudHop-Up"]=JSON.stringify(x)),d<=1&&!n)return n=c(502,"Bad gateway",`Passive health check count exceeded${f?": "+s:""}.`),r["X-CloudHop-Health"]=`0/${H}`,await $(n,!1,{set:r});d--}return await $(n,!1,{strip:q,set:r})||c(500,"Empty response",`${i?"Successful":"Failed"} empty response from trace: ${s}.<br/>Last requested URL: ${e.toString()}`)};serve(async function(o,a){let e=a.remoteAddr.hostname;return await R(o,e)});})();
//# sourceMappingURL=deno.js.map
