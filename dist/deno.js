"use strict";import{serve}from"https://deno.land/std/http/server.ts";let eG=(a,b="")=>{return Deno.env.get(a)||b};let pV="Deno",pE=Deno.exit.bind(),pP=true;(()=>{var c=function(i=200,t="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${t}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${t}</div><div>${e}</div><div id="d"><center>Cloud Hop v${pW}@${pV}</center></div></div></body>`,{status:i,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};Object.forEach=function(i,t){Object.keys(i).forEach(function(o){t(i[o],o,i)})};var $=function(i,t){let e=new Set;return t?.length>0&&t.forEach(function(o){o.length>0&&e.add(o.toLowerCase())}),i.forEach(function(o){o.length>0&&e.add(o.toLowerCase())}),e},A=function(i,t){let e={};return Object.forEach(t||{},function(o,r){e[r.toLowerCase()]=o}),i.split(",").forEach(function(o){let r=o.indexOf("=");r<o.length-1&&(e[o.slice(0,r).toLowerCase()]=o.slice(r+1))}),e},P=function(i,t){let e={};i.forEach(function(r,n){e[n.toLowerCase()]=r}),t?.strip?.size>0&&t.strip.forEach(function(r){delete e[r]});let o=Object.keys(t?.set||{});return o.length>0&&o.forEach(function(r){e[r.toLowerCase()]=t.set[r]}),e},v=async function(i,t,e={}){let o={},r=i.body;t?.constructor!=Function&&(t=function(a,l){return[a,l]}),i.headers.forEach(function(a,l){let s=t(l.toLowerCase(),a);o[s[0].toLowerCase()]=s[1]}),e?.strip?.size>0&&e.strip.forEach(function(a){delete o[a]});let n=Object.keys(e?.set||{});return n.length>0&&n.forEach(function(a){o[a.toLowerCase()]=e.set[a]}),new Response(r,{status:i.status,headers:o})};var G=function(i,t){let e,o=i.split(",");if(o.forEach(function(r,n,a){let l=r.indexOf(";");l>-1&&(a[n]=r.slice(0,l))}),t.length>o.length){let r=127;o.forEach(function(n,a){let l=t.indexOf(n);l>-1&&l<r&&(e=n,r=l)}),!e&&t.includes("*")&&(e=o[0])}else t.forEach(function(r,n){if(r!="*"){let a=i.indexOf(r);!e&&a>-1&&(e=r)}else e||(e=o[0])});return e||"en"};var O="102.0",_=function(i="noBracket",t="Mozilla/5.0"){let e=t,o=t.toLowerCase().has("mobile");switch(i){case"asIs":break;case"mimic":{e="Mozilla/5.0 (",t.has("Firefox")||t.has("Trident")?(e+=o?"Android 12; Mobile":"Windows NT 10.0; Win64; x64",e+=`; rv:${O}) Gecko/${o?O:20100101} Firefox/${O}`):t.has("Safari")?(e+=o?"Linux; Android 12; Pixel 5":"Windows NT 10.0; Win64; x64",e+=`) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 ${o?"Mobile ":""}Safari/537.36`):e="Dalvik/2.1.0 (Linux; Android 12; Pixel 5)";break}case"noBracket":{let r=t.indexOf("(")+1,n=t.indexOf(")");if(r>-1&&r<n){if(e=t.slice(0,r),t.has("Trident"))e+="Windows NT 10.0; Trident/7.0; rv:11.0";else if(t.has("Firefox")){let a=t.slice(t.indexOf("Firefox/")+8).split(" ")[0];e+=o?"Android 12; Mobile":"Windows NT 10.0; Win64; x64",e+=`; rv:${a}`}else t.has("Chrome")?e+=o?"Linux; Android 12; Pixel 5":"Windows NT 10.0; Win64; x64":t.has("Safari")&&(e+=o?"iPhone; CPU iPhone OS 13_3_1 like Mac OS X":"Macintosh; Intel Mac OS X 10_15_17");e+=t.slice(n)}break}default:e=i}return e};String.prototype.has=String.prototype.includes;Array.prototype.has=Array.prototype.includes;self.pW="0.2";var D=["http:","https:","ws:","wss:"],H=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var p=eG("DEBUGGER","0")=="1",b=eG("BACKENDS","internal").split(","),k=eG("BACKHOST",""),z=eG("MASK_IP","strip"),U=eG("MASK_UA","noBracket"),K=eG("FOLLOW_REDIR","0"),W=eG("FORCE_IN_TLS","asIs"),C=eG("FORCE_OUT_TLS","asIs"),le=eG("ADAPT_BODY","0")=="1",B=eG("MATCH_LANG","*").split(","),E=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),F=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,q=eG("HEALTH_PATH"),y=eG("HEALTH_CRITERIA","asIs"),L=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),V=$(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,x-requested-with,accept-language,te,user-agent,sec-ch-lang,sec-ch-save-data,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,viewport-width,viewport-height,dpr,device-memory,rtt,downlink,ect,sec-ch-viewport-width,sec-ch-viewport-height,sec-ch-dpr,sec-ch-device-memory,sec-ch-rtt,sec-ch-downlink,sec-ch-ect".split(",")),Y=$(eG("STRIP_HEADERS","").split(","),["alt-svc"]),m=A(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),J=A(eG("SET_HEADERS","")),h=parseInt(eG("IDLE_SHUTDOWN","0"));h>0?h=Math.max(h,60)*1e3:h=-1;console.info(`Debug mode: ${p?"on":"off"}`);console.info(`Backends: ${b}`);console.info(`Host: ${k}`);console.info(`Masking: UA(${U}), IP(${z}), lang(${B})`);console.info(`TLS: in(${W}), out(${C});`);console.info(`Health: active(${F}), tries(${E}), crit(${y}), timeout(${L}ms), path(${q})`);console.info(`Inactivity shutdown: ${h}`);var I=Date.now();pP&&(console.info("Platform persistence available."),h>0&&setInterval(function(){Date.now()-I>h&&(console.info("Requested idle shutdown."),pE())},1e3),F>0&&console.info("Active health checking enabled, but not implemented."));var N=async function(i,t){if(h>0&&(I=Date.now()),b.length==1&&b[0]=="internal")return c(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(i.url),o=D.indexOf(e.protocol);if(o==-1)return c(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(W){case"plain":{if(o%2==1)return c(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(o%2==0)return c(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(C){case"tls":case"plain":{e.protocol=D[(o>>1<<1)+ +(C=="tls")]||e.protocol,console.debug(`${e.protocol}`);break}}let r=i.headers.get("Host")||"",n=J||{},a="",l=i.headers.get("Accept-Language")||"";a=G(l,B),a?.length>0&&(m["Accept-Language"]=a),m["User-Agent"]=_(U,i.headers.get("User-Agent"));let s,u=[],d=!0,x=E,T,R;for(;x>=0&&d;){(T?.length<1||!T)&&(T=b.slice());let f=T.draw(),Q=f.lastIndexOf("]"),Z=f.lastIndexOf(":");u.push(f),e.hostname=f,e.port="",p&&console.info(`Tries: ${x}, lang: ${a||"blank"}, target: ${i.method} ${e.protocol}//${f}/`);let g={};g.method=i.method,i.bodyUsed&&(g.body=i.body),m.Host=`${k?.length>2?k:f}`;let S=i.headers.get("origin"),M=i.headers.get("referer");S?.length>0&&(m.Origin=S.replaceAll(r,f)),M?.length>0&&(m.Referer=M.replaceAll(r,f)),g.headers=P(i.headers,{strip:V,set:m}),p&&(R=g.headers),K=="0"&&(g.redirect="manual");let j=AbortSignal.timeout(L);g.signal=j;let X=new Request(e.toString(),g);try{switch(s=await fetch(e,X),Math.floor(s.status/100)){case 2:{d=!1;break}case 3:{let w=s.headers.get("location");s=c(s.status,"Redirection",`Origin issued an redirect to: <a href="${w}">${w}</a>.`),d=!1;break}case 4:{d=H.indexOf(y)==0;break}case 5:{d=H.indexOf(y)<=1;break}default:d=H.indexOf(y)<=2,d||(s=c(502,"Bad gateway",`All origins are down.${p?" Trace: "+u:""}`))}}catch(w){if(d=H.indexOf(y)<=2,!d)switch(console.error(w.stack),w.constructor.name){case"TypeError":{s=c(502,"Bad gateway",`The last origin is down.${p?" Trace: "+u:""}<br/><pre>${w.stack}</pre>`);break}case"DOMException":{s=c(504,"Timeout",`Gateway timeout after ${L} ms.${p?" Trace: "+u:""}`);break}default:s=c(500,"Unknown error",`<pre>${w.stack}</pre>`)}}if(h>0&&(I=Date.now()),p&&(n["X-CloudHop-Target"]=f,n["X-CloudHop-Health"]=`${x}/${E}`,n["X-CloudHop-Trace"]=u.toString(),n["X-CloudHop-Up"]=JSON.stringify(R)),x<=1&&!s)return s=c(502,"Bad gateway",`Passive health check count exceeded${p?": "+u:""}.`),n["X-CloudHop-Health"]=`0/${E}`,await v(s,!1,{set:n});x--}return await v(s,!1,{strip:Y,set:n})||c(500,"Empty response",`${d?"Successful":"Failed"} empty response from trace: ${u}.<br/>Last requested URL: ${e.toString()}`)};serve(async function(i,t){let e=t.remoteAddr.hostname;return await N(i,e)});})();
//# sourceMappingURL=deno.js.map
