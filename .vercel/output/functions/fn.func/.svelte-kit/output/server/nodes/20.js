import * as server from '../entries/pages/(hero)/newarrivals/_page.server.js';

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(hero)/newarrivals/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(hero)/newarrivals/+page.server.js";
export const imports = ["_app/immutable/nodes/20.cVadn-0-.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js","_app/immutable/chunks/googlesheetsdata.psi9fO6e.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/20.itnFVhHr.css","_app/immutable/assets/googlesheetsdata.z3RRUfbs.css"];
export const fonts = [];
