import * as server from '../entries/pages/(hero)/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(hero)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(hero)/+page.server.js";
export const imports = ["_app/immutable/nodes/3.w1nCEU42.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/3.m6-w7mE7.css"];
export const fonts = [];
