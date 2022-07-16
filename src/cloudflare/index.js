"use strict";
import {handleRequest} from "../core/index.js";
//import {stripHeader} from "./strip.js";

self.envGet = envGet;

addEventListener("fetch", async function (event) {
	let request = event.request;
	let clientInfo = request.headers.get("cf-connecting-ip");
	event.respondWith(handleRequest(request, clientInfo));
});