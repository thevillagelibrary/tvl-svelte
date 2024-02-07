import * as server from '../entries/pages/(hero)/(subpages)/donate/recentdonors/_page.server.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(hero)/(subpages)/donate/recentdonors/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(hero)/(subpages)/donate/recentdonors/+page.server.js";
export const imports = ["_app/immutable/nodes/14._d-WEngP.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js","_app/immutable/chunks/googlesheetsdata.psi9fO6e.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/pagebody.z4mjAVF9.js","_app/immutable/chunks/stores.9zhMZl7q.js","_app/immutable/chunks/entry.LyB7Ukaq.js","_app/immutable/chunks/index.dGjVzpUS.js"];
export const stylesheets = ["_app/immutable/assets/googlesheetsdata.z3RRUfbs.css","_app/immutable/assets/pagebody.bxmD5xJK.css"];
export const fonts = [];
