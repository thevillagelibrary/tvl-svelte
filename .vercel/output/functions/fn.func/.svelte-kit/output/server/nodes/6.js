import * as server from '../entries/pages/(hero)/(subpages)/about/board/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(hero)/(subpages)/about/board/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(hero)/(subpages)/about/board/+page.server.js";
export const imports = ["_app/immutable/nodes/6.1uWcXS_a.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/pagebody.z4mjAVF9.js","_app/immutable/chunks/stores.9zhMZl7q.js","_app/immutable/chunks/entry.LyB7Ukaq.js","_app/immutable/chunks/index.dGjVzpUS.js"];
export const stylesheets = ["_app/immutable/assets/6.tZ4WF2Ft.css","_app/immutable/assets/pagebody.bxmD5xJK.css"];
export const fonts = [];
