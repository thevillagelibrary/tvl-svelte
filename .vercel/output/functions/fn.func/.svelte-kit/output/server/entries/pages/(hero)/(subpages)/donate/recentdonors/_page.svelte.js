import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { G as Googlesheetsdata } from "../../../../../../chunks/googlesheetsdata.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const values = data.items.values;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Googlesheetsdata, "GoogleSheetsData").$$render($$result, { name: "RecentDonors", values }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
