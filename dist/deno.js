"use strict";import{serve}from"https://deno.land/std/http/server.ts";let eG=function(a,b=""){return Deno.env.get(a)||b};let pV="Deno";(()=>{var r=function(a=200,n="Lorem",e="Blank."){return new Response(`<!DOCTYPE html><head><meta content="true" name="HandheldFriendly"/><title>${n}</title><style>body{font-family:sans-serif;position:absolute;width:100%;height:100%;background:#fff;margin:0;display:flex;align-items:center;justify-content:center;color:#555}#a{width:max-content;max-width:min(450px,80vw)}#b{text-align:center!important;font-weight:bold;font-size:1.5em;color:#333}#c{color:#333}#a>div{hyphens:auto;text-align:justify;padding:4px}a{text-decoration:none}#d{color:#777;font-size:0.75em}pre{overflow:scroll;padding:2px}@media(prefers-color-scheme:dark){html{filter:invert(100%)}}</style></head><body lang="en"><div id="a"><div id="b">${n}</div><div>${e}</div><div id="d"><center>Cloudhop v${pW}@${pV}</center></div></div></body>`,{status:a,headers:{Server:"Cloud Hop","Content-Type":"text/html"}})};self.pW="0.2";var T=["http:","https:","ws:","wss:"],c=["client","server","loose","asIs"];Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var f=eG("DEBUGGER","0")=="1",u=eG("BACKENDS","internal").split(","),O=eG("BACKHOST",""),k=eG("MASK_IP","give"),A=eG("MASK_UA","noBracket"),x=eG("FORCE_IN_TLS","asIs"),w=eG("FORCE_OUT_TLS","asIs"),C=eG("ADAPT_BODY","0")=="1",$=eG("MATCH_LANG","*").split(","),h=Math.max(parseInt(eG("HEALTH_MAX_TRIES","3")),1),G=self.isPersPlat&&Math.max(parseFloat(eG("HEALTH_ACTIVE","5")),15)*1e3,p=eG("HEALTH_CRITERIA","asIs"),E=Math.max(parseInt(eG("TIMEOUT_MS","4000")),4e3);console.info(`Debug mode: ${f?"on":"off"}`);console.info(`Backends: ${u}`);var y=async function(a,n){if(u.length==1&&u[0]=="internal")return r(503,"Hey, it works!",'<span id="c">Cloud Hop</span> is now deployed to this platform. Please refer to the documentation for further configuration.');let e=new URL(a.url),i=T.indexOf(e.protocol);if(i==-1)return r(400,"Unsupported",`Protocol "${e.protocol}" is not supported by <span id="c">Cloud Hop</span>.`);switch(x){case"plain":{if(i%2==1)return r(400,"HTTPS only","Only HTTPS connections are allowed.");break}case"tls":{if(i%2==0)return r(400,"HTTP only","Only HTTP connections are allowed.");break}}switch(w){case"tls":case"plain":{e.protocol=[(i>>1<<1)+ +(w=="tls")];break}}let o,s=[],t=!0,m=h;for(;m>=0&&t;){if(console.info(`Remaining tries: ${h}`),h<=0)return r(502,"Bad gateway",`All origins are down${f?": "+s:""}.`);let l=u.random(),H=l.lastIndexOf("]"),I=l.lastIndexOf(":");s.push(l),e.hostname=l,e.port="";let g=new Request(e.toString(),a);try{switch(o=await fetch(e,g),Math.floor(o.status/100)){case 2:{t=!1;break}case 3:{let d=o.headers.get("location");o=r(o.status,"Redirection",`Origin issued an redirect to: <a href="${d}">${d}</a>.`),t=!1;break}case 4:{t=c.indexOf(p)==0;break}case 5:{t=c.indexOf(p)<=1;break}default:t=c.indexOf(p)<=2,t||(o=r(502,"Bad gateway",`Origin down.${f?" Trace: "+s:""}`))}}catch(d){t=c.indexOf(p)<=2,t||(o=r(502,"Bad gateway",`Origin down.${f?" Trace: "+s:""}<br/><pre>${d.stack}</pre>`))}m--}return o||r(500,"Empty response",`${t?"Successful":"Failed"} empty response from trace: ${s}.<br/>Last requested URL: ${e.toString()}`)};serve(async function(a,n){let e=n.remoteAddr.hostname;return await y(a,e)});})();
//# sourceMappingURL=deno.js.map
