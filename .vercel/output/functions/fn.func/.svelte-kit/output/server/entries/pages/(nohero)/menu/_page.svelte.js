import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as pages } from "../../../../chunks/index.js";
import { B as BackArrow } from "../../../../chunks/backarrow.js";
const css = {
  code: "#backarrow.svelte-1lg8fa4.svelte-1lg8fa4.svelte-1lg8fa4{height:3em}ul.svelte-1lg8fa4 li.subpages.svelte-1lg8fa4>a.svelte-1lg8fa4{padding-left:1em}nav.svelte-1lg8fa4>ul.svelte-1lg8fa4.svelte-1lg8fa4{display:flex;flex-direction:column;list-style-type:none;margin-left:2em;text-align:left}nav.svelte-1lg8fa4>ul li.svelte-1lg8fa4>a.svelte-1lg8fa4{font-size:var(--step-1);text-align:left}section.svelte-1lg8fa4.svelte-1lg8fa4.svelte-1lg8fa4{margin:0 auto;padding-bottom:3em;white-space:pre-wrap;width:var(--page-width)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1lg8fa4"><button class="close" data-svelte-h="svelte-1o4nr8f"><img id="backarrow"${add_attribute("src", BackArrow, 0)} alt="Back Arrow" class="svelte-1lg8fa4"></button> <br> <br> <div class="divider full"></div> <nav class="svelte-1lg8fa4"><ul class="svelte-1lg8fa4">${each(pages, (page) => {
    return `<li class="svelte-1lg8fa4"><a${add_attribute("href", page.path !== "home" ? `/${page.path}` : "/", 0)} class="svelte-1lg8fa4">${escape(page.name)}</a></li> ${page.subPages ? `${each(page.subPages, (subPage) => {
      return `<li class="subpages svelte-1lg8fa4"><a${add_attribute("href", `/${page.path}/${subPage.path}`, 0)} class="svelte-1lg8fa4">${escape(subPage.name)}</a> </li>`;
    })}` : ``}`;
  })}</ul></nav> </section>`;
});
export {
  Page as default
};
