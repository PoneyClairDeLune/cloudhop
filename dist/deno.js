"use strict";import{serve}from"https://deno.land/std/http/server.ts";let eG=(a,b="")=>{return Deno.env.get(a)||b};let pV="Deno",pE=Deno.exit.bind(),pP=true;(()=>{var c=function(o=200,r="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${r}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${r}</div><div>${e}</div><div id="d"><center>Cloud Hop v${pW}@${pV}</center></div></div></body>`,{status:o,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};Object.forEach=function(o,r){Object.keys(o).forEach(function(t){r(o[t],t,o)})};var $=function(o,r){let e=new Set;return r?.length>0&&r.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),o.forEach(function(t){t.length>0&&e.add(t.toLowerCase())}),e},A=function(o,r){let e={};return Object.forEach(r||{},function(t,n){e[n.toLowerCase()]=t}),o.split(",").forEach(function(t){let n=t.indexOf("=");n<t.length-1&&(e[t.slice(0,n).toLowerCase()]=t.slice(n+1))}),e},M=function(o,r){let e={};o.forEach(function(n,a){e[a.toLowerCase()]=n}),r?.strip?.size>0&&r.strip.forEach(function(n){delete e[n]});let t=Object.keys(r?.set||{});return t.length>0&&t.forEach(function(n){e[n.toLowerCase()]=r.set[n]}),e},v=async function(o,r,e={}){let t={},n=o.body;r?.constructor!=Function&&(r=function(i,l){return[i,l]}),o.headers.forEach(function(i,l){let s=r(l.toLowerCase(),i);t[s[0].toLowerCase()]=s[1]}),e?.strip?.size>0&&e.strip.forEach(function(i){delete t[i]});let a=Object.keys(e?.set||{});return a.length>0&&a.forEach(function(i){t[i.toLowerCase()]=e.set[i]}),new Response(n,{status:o.status,headers:t})};var P=function(o,r){let e,t=o.split(",");if(t.forEach(function(n,a,i){let l=n.indexOf(";");l>-1&&(i[a]=n.slice(0,l))}),r.length>t.length){let n=127;t.forEach(function(a,i){let l=r.indexOf(a);l>-1&&l<n&&(e=a,n=l)}),!e&&r.includes("*")&&(e=t[0])}else r.forEach(function(n,a){if(n!="*"){let i=o.indexOf(n);!e&&i>-1&&(e=n)}else e||(e=t[0])});return e||"en"};var k="102.0",_=function(o="noBracket",r="Mozilla/5.0"){let e=r,t=r.toLowerCase().has("mobile");switch(o){case"asIs":break;case"mimic":{e="Mozilla/5.0 (",r.has("Firefox")||r.has("Trident")?(e+=t?"Android 12; Mobile":"Windows NT 10.0; Win64; x64",e+=`; rv:${k}) Gecko/${t?k:20100101} Firefox/${k}`):r.has("Safari")?(e+=t?"Linux; Android 12; Pixel 5":"Windows NT 10.0; Win64; x64",e+=`) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 ${t?"Mobile ":""}Safari/537.36`):e="Dalvik/2.1.0 (Linux; Android 12; Pixel 5)";break}case"noBracket":{let n=r.indexOf("("),a=r.indexOf(")");n>-1&&n<a&&(e=r.slice(0,n),e+=r.slice(a))}default:e=o}return e};String.prototype.has=String.prototype.includes;Array.prototype.has=Array.prototype.includes;self.pW="0.2";var z=["http:","https:","ws:","wss:"],T=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var p=eG("DEBUGGER","0")=="1",b=eG("BACKENDS","internal").split(","),O=eG("BACKHOST",""),K=eG("MASK_IP","strip"),D=eG("MASK_UA","noBracket"),X=eG("FOLLOW_REDIR","0"),U=eG("FORCE_IN_TLS","asIs"),L=eG("FORCE_OUT_TLS","asIs"),le=eG("ADAPT_BODY","0")=="1",B=eG("MATCH_LANG","*").split(","),E=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),F=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,q=eG("HEALTH_PATH"),H=eG("HEALTH_CRITERIA","asIs"),C=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),V=$(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,accept-language,te,user-agent,sec-ch-lang,sec-ch-save-data,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,viewport-width,viewport-height,dpr,device-memory,rtt,downlink,ect,sec-ch-viewport-width,sec-ch-viewport-height,sec-ch-dpr,sec-ch-device-memory,sec-ch-rtt,sec-ch-downlink,sec-ch-ect".split(",")),Y=$(eG("STRIP_HEADERS","").split(","),["alt-svc"]),w=A(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),J=A(eG("SET_HEADERS","")),h=parseInt(eG("IDLE_SHUTDOWN","0"));h>0?h=Math.max(h,60)*1e3:h=-1;console.info(`Debug mode: ${p?"on":"off"}`);console.info(`Backends: ${b}`);console.info(`Host: ${O}`);console.info(`Masking: UA(${D}), IP(${K}), lang(${B})`);console.info(`TLS: in(${U}), out(${L});`);console.info(`Health: active(${F}), tries(${E}), crit(${H}), timeout(${C}ms), path(${q})`);console.info(`Inactivity shutdown: ${h}`);var I=Date.now();pP&&(console.info("Platform persistence available."),h>0&&setInterval(function(){Date.now()-I>h&&(console.info("Requested idle shutdown."),pE())},1e3),F>0&&console.info("Active health checking enabled, but not implemented."));var W=async function(o,r){if(h>0&&(I=Date.now()),b.length==1&&b[0]=="internal")return c(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(o.url),t=z.indexOf(e.protocol);if(t==-1)return c(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(U){case"plain":{if(t%2==1)return c(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(t%2==0)return c(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(L){case"tls":case"plain":{e.protocol=[(t>>1<<1)+ +(L=="tls")];break}}let n=o.headers.get("Host")||"",a=J||{},i="",l=o.headers.get("Accept-Language")||"";i=P(l,B),i?.length>0&&(w["Accept-Language"]=i),w["User-Agent"]=_(D,o.headers.get("User-Agent"));let s,u=[],d=!0,y=E,x,S;for(;y>=0&&d;){(x?.length<1||!x)&&(x=b.slice());let f=x.draw(),Q=f.lastIndexOf("]"),Z=f.lastIndexOf(":");u.push(f),e.hostname=f,e.port="",p&&console.info(`Tries: ${y}, lang: ${i||"blank"}, target: ${o.method} ${e.protocol}//${f}/`);let g={};g.method=o.method,o.bodyUsed&&(g.body=o.body),w.Host=`${O?.length>2?O:f}`;let R=o.headers.get("origin"),G=o.headers.get("referer");R?.length>0&&(w.Origin=R.replaceAll(n,f)),G?.length>0&&(w.Referer=G.replaceAll(n,f)),g.headers=M(o.headers,{strip:V,set:w}),p&&(S=g.headers),X=="0"&&(g.redirect="manual");let j=AbortSignal.timeout(C);g.signal=j;let N=new Request(e.toString(),g);try{switch(s=await fetch(e,N),Math.floor(s.status/100)){case 2:{d=!1;break}case 3:{let m=s.headers.get("location");s=c(s.status,"Redirection",`Origin issued an redirect to: <a href="${m}">${m}</a>.`),d=!1;break}case 4:{d=T.indexOf(H)==0;break}case 5:{d=T.indexOf(H)<=1;break}default:d=T.indexOf(H)<=2,d||(s=c(502,"Bad gateway",`All origins are down.${p?" Trace: "+u:""}`))}}catch(m){if(d=T.indexOf(H)<=2,!d)switch(console.error(m.stack),m.constructor.name){case"TypeError":{s=c(502,"Bad gateway",`The last origin is down.${p?" Trace: "+u:""}<br/><pre>${m.stack}</pre>`);break}case"DOMException":{s=c(504,"Timeout",`Gateway timeout after ${C} ms.${p?" Trace: "+u:""}`);break}default:s=c(500,"Unknown error",`<pre>${m.stack}</pre>`)}}if(h>0&&(I=Date.now()),p&&(a["X-CloudHop-Target"]=f,a["X-CloudHop-Health"]=`${y}/${E}`,a["X-CloudHop-Trace"]=u.toString(),a["X-CloudHop-Up"]=JSON.stringify(S)),y<=1&&!s)return s=c(502,"Bad gateway",`Passive health check count exceeded${p?": "+u:""}.`),a["X-CloudHop-Health"]=`0/${E}`,await v(s,!1,{set:a});y--}return await v(s,!1,{strip:Y,set:a})||c(500,"Empty response",`${d?"Successful":"Failed"} empty response from trace: ${u}.<br/>Last requested URL: ${e.toString()}`)};serve(async function(o,r){let e=r.remoteAddr.hostname;return await W(o,e)});})();
//# sourceMappingURL=deno.js.map
