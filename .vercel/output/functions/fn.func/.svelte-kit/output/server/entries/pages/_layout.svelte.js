import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css = {
  code: '#backToTop.svelte-lei3aw{display:block;position:sticky;z-index:600;bottom:0;width:4rem;height:4rem;padding-bottom:1rem;margin:-3.5rem 0 0 auto;opacity:0.6;transition:opacity 0.3s}#backToTop.hidden.svelte-lei3aw{opacity:0;visibility:hidden}#backToTop.svelte-lei3aw:not(.hidden):focus,#backToTop.svelte-lei3aw:not(.hidden):hover{opacity:1}#backToTop.svelte-lei3aw:after{content:"^";position:relative;display:block;width:2.5rem;height:2.5rem;text-align:center;font-size:4rem;border-radius:50%;color:var(--heroBgColor);background:var(--heroColor)}',
  map: null
};
const Backtotop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `   <div id="backToTop" class="${["svelte-lei3aw", "hidden"].join(" ").trim()}"></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Backtotop, "BackToTop").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
