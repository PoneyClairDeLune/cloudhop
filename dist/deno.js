"use strict";import {serve} from "https://deno.land/std/http/server.ts";(()=>{var i=[function(t,n){return self[t]||n},function(t,n){return Deno.env.get(t)||n}],r=function(t){return i["global,deno".split(",").indexOf(t)]};Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var u={Server:"Cloud Hop"},e;self.Deno?e=r("deno"):e=r("global");var c=e("DEBUGGER","0")=="1",o=e("BACKENDS","internal").split(","),m=e("BACKHOST",""),h=e("MASK_IP","give"),A=e("MASK_UA","noBracket"),E=e("FORCE_IN_TLS","asIs"),I=e("FORCE_OUT_TLS","asIs"),T=e("ADAPT_BODY","0")=="1",H=e("MATCH_LANG").split(","),C=Math.max(parseInt(e("HEALTH_MAX_TRIES","3")),1),g=self.isPersPlat&&Math.max(parseFloat(e("HEALTH_ACTIVE","5")),15)*1e3,y=e("HEALTH_CRITERIA","asIs"),s=async function(t,n){if(o.length==1&&o[0]=="internal")return new Response("<!DOCTYPE html><head><title>Cloud Hop: It works!</title><style>*{font-family:sans-serif}a{text-decoration:none}</style></head><body>Cloud Hop is now deployed to this platform. Please refer to the documentation for further configuration.</body>",{status:503,headers:u});let l=new URL(t.url),a,f=[];return a||new Response("Empty respose.",{status:500})};serve(async function(t,n){let l=n.remoteAddr.hostname;return await s(t,l)});})();
//# sourceMappingURL=deno.js.map
