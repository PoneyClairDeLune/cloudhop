var f=function(n=200,t="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${t}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${t}</div><div>${e}</div><div id="d"><center>Mint Flower v${pW}@${pV}</center></div></div></body>`,{status:n,headers:{Server:"Mint Flower","Content-Type":"text/html"}})};Object.forEach=function(n,t){Object.keys(n).forEach(function(r){t(n[r],r,n)})};var L=function(n,t){let e=new Set;return t?.length>0&&t.forEach(function(r){r.length>0&&e.add(r.toLowerCase())}),n.forEach(function(r){r.length>0&&e.add(r.toLowerCase())}),e},S=function(n,t){let e={};return Object.forEach(t||{},function(r,o){e[o.toLowerCase()]=r}),n.split(",").forEach(function(r){let o=r.indexOf("=");o<r.length-1&&(e[r.slice(0,o).toLowerCase()]=r.slice(o+1))}),e},_=function(n,t){let e={};n.forEach(function(o,i){e[i.toLowerCase()]=o}),t?.strip?.size>0&&t.strip.forEach(function(o){delete e[o]});let r=Object.keys(t?.set||{});return r.length>0&&r.forEach(function(o){e[o.toLowerCase()]=t.set[o]}),e},O=async function(n,t,e={}){let r={},o=n.body;t?.constructor!=Function&&(t=function(a,h){return[a,h]}),n.headers.forEach(function(a,h){let c=t(h.toLowerCase(),a);r[c[0].toLowerCase()]=c[1]}),e?.strip?.size>0&&e.strip.forEach(function(a){delete r[a]});let i=Object.keys(e?.set||{});return i.length>0&&i.forEach(function(a){r[a.toLowerCase()]=e.set[a]}),new Response(o,{status:n.status,headers:r})};var D=function(n,t){let e,r=n.split(",");if(r.forEach(function(o,i,a){let h=o.indexOf(";");h>-1&&(a[i]=o.slice(0,h))}),t.length>r.length){let o=127;r.forEach(function(i,a){let h=t.indexOf(i);h>-1&&h<o&&(e=i,o=h)}),!e&&t.includes("*")&&(e=r[0])}else t.forEach(function(o,i){if(o!="*"){let a=n.indexOf(o);!e&&a>-1&&(e=o)}else e||(e=r[0])});return e||"en"};var H="102.0",U=function(n="noBracket",t="Mozilla/5.0"){let e=t,r=t.toLowerCase().has("mobile");switch(n){case"asIs":break;case"mimic":{e="Mozilla/5.0 (",t.has("Firefox")||t.has("Trident")?(e+=r?"Android 12; Mobile":"Windows NT 10.0; Win64; x64",e+=`; rv:${H}) Gecko/${r?H:20100101} Firefox/${H}`):t.has("Safari")?(e+=r?"Linux; Android 12; Pixel 5":"Windows NT 10.0; Win64; x64",e+=`) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 ${r?"Mobile ":""}Safari/537.36`):e="Dalvik/2.1.0 (Linux; Android 12; Pixel 5)";break}case"noBracket":{let o=t.indexOf("(")+1,i=t.indexOf(")");if(o>-1&&o<i){if(e=t.slice(0,o),t.has("Trident"))e+="Windows NT 10.0; Trident/7.0; rv:11.0";else if(t.has("Firefox")){let a=t.slice(t.indexOf("Firefox/")+8).split(" ")[0];e+=r?"Android 12; Mobile":"Windows NT 10.0; Win64; x64",e+=`; rv:${a}`}else t.has("Chrome")?e+=r?"Linux; Android 12; Pixel 5":"Windows NT 10.0; Win64; x64":t.has("Safari")&&(e+=r?"iPhone; CPU iPhone OS 13_3_1 like Mac OS X":"Macintosh; Intel Mac OS X 10_15_17");e+=t.slice(i)}break}default:e=n}return e};String.prototype.has=String.prototype.includes;Array.prototype.has=Array.prototype.includes;self.pW="0.3";var W=["http:","https:","ws:","wss:"],v=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var l=eG("DEBUGGER","0")=="1",$=eG("BACKENDS","internal").split(","),F=eG("BACKHOST",""),Y=eG("MASK_IP","strip"),B=eG("MASK_UA","noBracket"),J=eG("FOLLOW_REDIR","0"),N=eG("FORCE_IN_TLS","asIs"),M=eG("FORCE_OUT_TLS","asIs"),he=eG("ADAPT_BODY","0")=="1",j=eG("MATCH_LANG","*").split(","),A=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),X=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,Q=eG("HEALTH_PATH"),E=eG("HEALTH_CRITERIA","asIs"),I=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),Z=L(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,x-requested-with,accept-language,te,user-agent,sec-ch-lang,sec-ch-save-data,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,viewport-width,viewport-height,dpr,device-memory,rtt,downlink,ect,sec-ch-viewport-width,sec-ch-viewport-height,sec-ch-dpr,sec-ch-device-memory,sec-ch-rtt,sec-ch-downlink,sec-ch-ect".split(",")),ee=L(eG("STRIP_HEADERS","").split(","),["alt-svc","content-encoding","strict-transport-security"]),y=S(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),te=S(eG("SET_HEADERS","")),g=parseInt(eG("IDLE_SHUTDOWN","0"));g>0?g=Math.max(g,60)*1e3:g=-1;console.info(`Debug: ${l?"on":"off"}`);console.info(`Backends: ${$}`);console.info(`Mask: UA(${B}), IP(${Y}), lang(${j})`);console.info(`TLS: in(${N}), out(${M});`);console.info(`Health: active(${X}), tries(${A}), crit(${E}), timeout(${I}ms), path(${Q})`);console.info(`Inactivity shutdown: ${g}`);var R=Date.now();pP&&(console.info("Platform persistence available."),g>0&&setInterval(function(){Date.now()-R>g&&(console.info("Requested idle shutdown."),pE())},1e3),X>0&&console.info("Active health checking enabled, but not implemented."));var z=async function(n,t){if(g>0&&(R=Date.now()),$.length==1&&$[0]=="internal")return f(503,"Hey, it works!",'<a id="c" href="https://github.com/ltgcgo/mint/" target="_blank">Mint</a> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(n.url),r=W.indexOf(e.protocol);if(r==-1)return f(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Mint</span>.`);switch(N){case"plain":{if(r%2==1)return f(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(r%2==0)return f(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(M){case"tls":case"plain":{e.protocol=W[(r>>1<<1)+ +(M=="tls")]||e.protocol;break}}let o=n.headers.get("Host")||"",i=te||{},a="",h=n.headers.get("Accept-Language")||"";a=D(h,j),a?.length>0&&(y["Accept-Language"]=a),y["User-Agent"]=U(B,n.headers.get("User-Agent"));let c,m=[],p=!0,x=A,T,C;for(;x>=0&&p;){(T?.length<1||!T)&&(T=$.slice());let w=T.draw(),re=w.lastIndexOf("]"),ne=w.lastIndexOf(":");if(m.push(w),e.hostname=w,e.port="",l&&console.info(`Tries: ${x}, lang: ${a||"blank"}, target: ${n.method} ${e.protocol}//${w}/`),n.headers.get("Upgrade")?.toLowerCase()=="websocket"){let{socket:s,response:q}=Deno.upgradeWebSocket(n),u,k=[];s.addEventListener("open",function(){u=new WebSocket(e.toString().replace("http","ws")),u.addEventListener("close",function(){s.close()}),u.addEventListener("open",function(){k.length>0&&(k.forEach(function(d){u.send(d)}),k=void 0),l&&console.info("WebSocket connection established.")}),u.addEventListener("error",function(d){l&&console.error(`WebSocket transmission error on remote${d.message?": ":""}${d.message||""}.`)}),u.addEventListener("message",function(d){s.readyState==1&&s.send(d.data)})});try{s.addEventListener("close",function(){l&&console.error("WebSocket transmission closed."),u?.close()}),s.addEventListener("error",function(d){l&&console.error(`WebSocket transmission error on Mint: ${d.message}`)}),s.addEventListener("message",function(d){u?.readyState==1?u.send(d.data):k.push(d.data)})}catch(d){console.error(d.stack)}return q}let b={};b.method=n.method,n.bodyUsed&&(b.body=n.body),y.Host=`${F?.length>2?F:w}`;let P=n.headers.get("origin"),G=n.headers.get("referer");P?.length>0&&(y.Origin=P.replaceAll(o,w)),G?.length>0&&(y.Referer=G.replaceAll(o,w)),b.headers=_(n.headers,{strip:Z,set:y}),l&&(C=b.headers),J=="0"&&(b.redirect="manual");let K=AbortSignal.timeout(I);b.signal=K;let V=new Request(e.toString(),b);try{switch(c=await fetch(e.toString(),V),Math.floor(c.status/100)){case 2:{p=!1;break}case 3:{let s=c.headers.get("location");c=f(c.status,"Redirection",`Origin issued an redirect to: <a href="${s}">${s}</a>.`),p=!1;break}case 4:{p=v.indexOf(E)==0;break}case 5:{p=v.indexOf(E)<=1;break}default:p=v.indexOf(E)<=2,p||(c=f(502,"Bad gateway",`All origins are down.${l?" Trace: "+m:""}`))}}catch(s){if(p=v.indexOf(E)<=2,p)c=f(500,"Internal error",`${l?"Tried to access: "+e.href+"<br/>":""}<pre>${s}${l&&s.stack?`
`+s.stack:""}</pre>`);else switch(console.error(s.stack),s.constructor.name){case"TypeError":{c=f(502,"Bad gateway",`The last origin is down.${l?" Trace: "+m:""}<br/><pre>${s.stack}</pre>`);break}case"DOMException":{c=f(504,"Timeout",`Gateway timeout after ${I} ms.${l?" Trace: "+m:""}`);break}default:c=f(500,"Unknown error",`<pre>${s.stack}</pre>`)}}if(g>0&&(R=Date.now()),l&&(i["X-MintFlower-Target"]=e.toString(),i["X-MintFlower-Health"]=`${x}/${A}`,i["X-MintFlower-Trace"]=m.toString(),i["X-MintFlower-Up"]=JSON.stringify(C)),x<=1&&!c)return c=f(502,"Bad gateway",`Passive health check count exceeded${l?": "+m:""}.`),i["X-MintFlower-Health"]=`0/${A}`,await O(c,!1,{set:i});x--}return await O(c,!1,{strip:ee,set:i})||f(500,"Empty response",`${p?"Successful":"Failed"} empty response from trace: ${m}.<br/>Last requested URL: ${e.toString()}`)};var ge=async function(n,t){let e=t.remoteAddr.hostname;return await z(n,e)};export{ge as serve};
