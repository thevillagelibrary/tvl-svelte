import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { B as BackArrow } from "../../../../chunks/backarrow.js";
const css = {
  code: "#upcomingeventslist.svelte-lcgdbw{margin:0 auto;padding-bottom:3em;white-space:pre-wrap;width:var(--page-width)}#backarrow.svelte-lcgdbw{height:3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="upcomingeventslist" class="svelte-lcgdbw"><button class="close" data-svelte-h="svelte-1o4nr8f"><img id="backarrow"${add_attribute("src", BackArrow, 0)} alt="Back Arrow" class="svelte-lcgdbw"></button> <br> <br> <div class="divider full"></div> ${`<p data-svelte-h="svelte-1npje9q">There are no upcoming events.</p>`} <div class="divider full"></div> </section>`;
});
export {
  Page as default
};
