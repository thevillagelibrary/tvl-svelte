import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const css = {
  code: "section.svelte-19dq752{display:flex;flex-direction:column;white-space:pre-wrap;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="svelte-19dq752"><p data-svelte-h="svelte-7jxaws">1. Curbside pickup is available Tuesdays through Saturdays.</p> <p>2.${escape(" ")} <a href="https://thevillagelibrary.library.site" data-svelte-h="svelte-5ulb7n">Click here to view our online catalog.</a></p> <p data-svelte-h="svelte-3ciouj">3. Call 598-1183 between 10:00 a.m. and 3:00 p.m. to reserve your books. Please limit your
			selections to 3 adult books or 5 children&#39;s books and do not leave a voicemail message.</p> <p data-svelte-h="svelte-12e7h4t">4. Curbside pickup is between 11:00 a.m. and 4:00 p.m. Please stay in your car, pop your
			trunk, and a volunteer will bring your books to you.</p> <p data-svelte-h="svelte-10e3kwu">5. If your membership needs to be renewed or fines are due, we will let you know when you pick
			your books up and what the options are to pay.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};
