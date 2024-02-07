import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as Googlesheetsdata } from "../../../../chunks/googlesheetsdata.js";
const css = {
  code: "a.svelte-1nh56v4{font-size:var(--step-1);font-weight:500}article.svelte-1nh56v4{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let values = [];
  for (let i = 0; i < 3; i++) {
    values[i] = data.items.valueRanges[i].values;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="pagewithoutsubpages"><section><article class="svelte-1nh56v4" data-svelte-h="svelte-vuql96"><a href="/newarrivals#just-off-rental" class="svelte-1nh56v4">Just Off Rental</a> <a href="/newarrivals#books" class="svelte-1nh56v4">Books</a></article> <br> <div class="divider full"></div> <br> <h2 id="just-off-rental" data-svelte-h="svelte-1sfx5u4">Just Off Rental</h2> ${validate_component(Googlesheetsdata, "GoogleSheetsData").$$render($$result, { name: "JustOffRental", values: values[0] }, {}, {})} <div class="divider full"></div> <br> <h2 id="books" data-svelte-h="svelte-19cv3ca">Books</h2> ${validate_component(Googlesheetsdata, "GoogleSheetsData").$$render($$result, { name: "Books", values: values[1] }, {}, {})}</section> </div>`;
});
export {
  Page as default
};
