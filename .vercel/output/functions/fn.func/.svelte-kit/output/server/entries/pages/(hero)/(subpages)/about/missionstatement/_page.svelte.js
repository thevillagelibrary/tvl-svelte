import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const css = {
  code: "p.svelte-1j4bic4{border:2px solid var(--color-secondary);border-radius:20px;display:block;margin-left:auto;margin-right:auto;margin-top:2em;padding:1em;width:80%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="svelte-1j4bic4" data-svelte-h="svelte-3behgy">The volunteer-run Village Library offers a welcoming environment for people of all ages from
		Skidaway Island and beyond with a collection that entertains and enriches.</p>`;
    }
  })}`;
});
export {
  Page as default
};
