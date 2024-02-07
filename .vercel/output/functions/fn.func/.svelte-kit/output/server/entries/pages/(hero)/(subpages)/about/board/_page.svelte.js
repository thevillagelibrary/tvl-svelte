import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const css = {
  code: "tr.svelte-1v4m9nf .svelte-1v4m9nf:first-child{padding-right:0.5em;text-align:right}tr.svelte-1v4m9nf .svelte-1v4m9nf:last-child{padding-left:0.5em;text-align:left}td.svelte-1v4m9nf.svelte-1v4m9nf{font-size:var(--step-1);width:20%}table.svelte-1v4m9nf.svelte-1v4m9nf{font-family:var(--font-sans-serif);margin-left:auto;margin-right:auto;padding:0;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const organization = data.items.values;
  organization.splice(0, 1);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1luwkpy">The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)] corporation and is managed by a
		slate of officers elected by a board of directors. The directors are chosen by the members at an
		annual meeting in May of each year.</p> <h2 data-svelte-h="svelte-16ll1nq">Officers &amp; Directors</h2> <table id="board" class="svelte-1v4m9nf"><tbody>${each(organization, (item) => {
        return `<tr class="svelte-1v4m9nf"><td class="svelte-1v4m9nf">${escape(item[1])}</td> <td class="svelte-1v4m9nf">${escape(item[2])}</td> </tr>`;
      })}</tbody></table>`;
    }
  })}`;
});
export {
  Page as default
};
