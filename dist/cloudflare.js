"use strict";let envGet=function(a,b=""){return self[a]||b};(()=>{Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var r={Server:"Cloud Hop","Content-Type":"text/html"},i=envGet("DEBUGGER","0")=="1",s=envGet("BACKENDS","internal").split(","),d=envGet("BACKHOST",""),h=envGet("MASK_IP","give"),u=envGet("MASK_UA","noBracket"),p=envGet("FORCE_IN_TLS","asIs"),c=envGet("FORCE_OUT_TLS","asIs"),f=envGet("ADAPT_BODY","0")=="1",A=envGet("MATCH_LANG","*").split(","),m=Math.max(parseInt(envGet("HEALTH_MAX_TRIES","3")),1),T=self.isPersPlat&&Math.max(parseFloat(envGet("HEALTH_ACTIVE","5")),15)*1e3,v=envGet("HEALTH_CRITERIA","asIs"),a=async function(e,t){if(s.length==1&&s[0]=="internal")return new Response("<!DOCTYPE html><head><title>Cloud Hop: It works!</title><style>*{font-family:sans-serif}a{text-decoration:none}</style></head><body>Cloud Hop is now deployed to this platform. Please refer to the documentation for further configuration.</body>",{status:503,headers:r});let n=new URL(e.url),l,o=[];return l||new Response("Empty respose.",{status:500})};addEventListener("fetch",async function(e){let t=e.request,n=t.headers.get("cf-connecting-ip");e.respondWith(a(t,n))});})();
//# sourceMappingURL=cloudflare.js.map
