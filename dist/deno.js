"use strict";import {serve} from "https://deno.land/std/http/server.ts";(()=>{Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var o={Server:"Cloud Hop"},u=envGet("DEBUGGER","0")=="1",r=envGet("BACKENDS","internal").split(","),d=envGet("BACKHOST",""),p=envGet("MASK_IP","give"),f=envGet("MASK_UA","noBracket"),h=envGet("FORCE_IN_TLS","asIs"),c=envGet("FORCE_OUT_TLS","asIs"),m=envGet("ADAPT_BODY","0")=="1",v=envGet("MATCH_LANG").split(","),A=Math.max(parseInt(envGet("HEALTH_MAX_TRIES","3")),1),G=self.isPersPlat&&Math.max(parseFloat(envGet("HEALTH_ACTIVE","5")),15)*1e3,I=envGet("HEALTH_CRITERIA","asIs"),s=async function(e,t){if(r.length==1&&r[0]=="internal")return new Response("<!DOCTYPE html><head><title>Cloud Hop: It works!</title><style>*{font-family:sans-serif}a{text-decoration:none}</style></head><body>Cloud Hop is now deployed to this platform. Please refer to the documentation for further configuration.</body>",{status:503,headers:o});let n=new URL(e.url),a,l=[];return a||new Response("Empty respose.",{status:500})};serve(async function(e,t){let n=t.remoteAddr.hostname;return await s(e,n)});})();
//# sourceMappingURL=deno.js.map
