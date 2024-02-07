

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.tKk5QQ9V.js","_app/immutable/chunks/scheduler.APWDNMY4.js","_app/immutable/chunks/index.QNaJDHQu.js"];
export const stylesheets = ["_app/immutable/assets/0.RuY-6o0F.css"];
export const fonts = [];
