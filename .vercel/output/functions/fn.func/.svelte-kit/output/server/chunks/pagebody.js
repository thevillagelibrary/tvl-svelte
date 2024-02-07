import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import { p as pages } from "./index.js";
const css = {
  code: "section.svelte-wza1w1{background-color:var(--background-secondary);border-bottom:1px  solid  var(--color-border-primary);border-top:1px  solid  var(--color-border-primary);font-size:var(--step-1);margin-bottom:0.5em;padding:.25em 0 .5em .25em;text-align:left;text-transform:capitalize}",
  map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathParts = $page.url.pathname.split("/");
  const path = `/${pathParts[1]}`;
  const mainPage = pages.find((aPage) => aPage.path === pathParts[1]);
  const subPages = mainPage.subPages;
  let subPage;
  if (pathParts.length > 2) {
    subPage = subPages.find((subPage2) => subPage2.path === pathParts[2]);
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div>${pathParts.length > 2 ? `<section class="svelte-wza1w1"><span><a${add_attribute("href", path, 0)}>${escape(mainPage.name)}</a></span>
       » <span>${escape(subPage.name)}</span></section>` : ``} </div>`;
});
const Pagebody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="pagewithoutsubpages">${validate_component(Breadcrumbs, "BreadCrumbs").$$render($$result, {}, {}, {})}</section> <section class="pagewithsubpages"><article class="pagewithsubpagesbody">${slots.default ? slots.default({}) : ``}</article></section>`;
});
export {
  Pagebody as P
};
