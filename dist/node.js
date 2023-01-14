"use strict";let eG=(a,b="")=>{return process.env[a]||b};let pV="Node",pE=process.exit.bind();let self=globalThis;let pP=true;
// Node.js import section
import http from "node:http";(()=>{Object.forEach=function(o,t){Object.keys(o).forEach(function(e){t(o[e],e,o)})};var a=function(o,t){let r=new Set;return t?.length>0&&t.forEach(function(e){e.length>0&&r.add(e.toLowerCase())}),o.forEach(function(e){e.length>0&&r.add(e.toLowerCase())}),r},s=function(o,t){let r={};return Object.forEach(t||{},function(e,i){r[i.toLowerCase()]=e}),o.split(",").forEach(function(e){let i=e.indexOf("=");i<e.length-1&&(r[e.slice(0,i).toLowerCase()]=e.slice(i+1))}),r};String.prototype.has=String.prototype.includes;Array.prototype.has=Array.prototype.includes;self.pW="0.3";Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};Array.prototype.draw=function(){return this.splice(Math.floor(Math.random()*this.length),1)};var l=eG("DEBUGGER","0")=="1",d=eG("BACKENDS","internal").split(","),R=eG("BACKHOST",""),f=eG("MASK_IP","strip"),h=eG("MASK_UA","noBracket"),P=eG("FOLLOW_REDIR","0"),p=eG("FORCE_IN_TLS","asIs"),u=eG("FORCE_OUT_TLS","asIs"),G=eG("ADAPT_BODY","0")=="1",g=eG("MATCH_LANG","*").split(","),m=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),c=pP?parseFloat(eG("HEALTH_ACTIVE","5")):0,w=eG("HEALTH_PATH"),b=eG("HEALTH_CRITERIA","asIs"),y=Math.max(parseInt(eG("TIMEOUT_MS","0")),2500),_=a(eG("STRIP_HEADERS_UP","").split(","),"host,cf-connecting-ip,cdn-loop,cf-ew-via,cf-visitor,cf-ray,x-forwarded-for,x-real-ip,x-requested-with,accept-language,te,user-agent,sec-ch-lang,sec-ch-save-data,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,sec-ch-ua-arch,sec-ch-ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,viewport-width,viewport-height,dpr,device-memory,rtt,downlink,ect,sec-ch-viewport-width,sec-ch-viewport-height,sec-ch-dpr,sec-ch-device-memory,sec-ch-rtt,sec-ch-downlink,sec-ch-ect".split(",")),D=a(eG("STRIP_HEADERS","").split(","),["alt-svc"]),U=s(eG("SET_HEADERS_UP",""),{"sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"same-origin"}),W=s(eG("SET_HEADERS","")),n=parseInt(eG("IDLE_SHUTDOWN","0"));n>0?n=Math.max(n,60)*1e3:n=-1;console.info(`Debug: ${l?"on":"off"}`);console.info(`Backends: ${d}`);console.info(`Mask: UA(${h}), IP(${f}), lang(${g})`);console.info(`TLS: in(${p}), out(${u});`);console.info(`Health: active(${c}), tries(${m}), crit(${b}), timeout(${y}ms), path(${w})`);console.info(`Inactivity shutdown: ${n}`);var x=Date.now();pP&&(console.info("Platform persistence available."),n>0&&setInterval(function(){Date.now()-x>n&&(console.info("Requested idle shutdown."),pE())},1e3),c>0&&console.info("Active health checking enabled, but not implemented."));var X=http.createServer(function(o,t){t.writeHead(200,new Headers({"X-Platform":pV})),t.write("Test body."),t.end()});})();
