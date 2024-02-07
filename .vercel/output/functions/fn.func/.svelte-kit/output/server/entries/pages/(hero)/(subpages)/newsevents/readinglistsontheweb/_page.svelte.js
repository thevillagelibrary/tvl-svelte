import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const tgarx = "/_app/immutable/assets/TGARX.mGBXhCdD.gif";
const css = {
  code: "h2.svelte-1ymawzl{font-size:var(--step-1)}h3.svelte-1ymawzl{font-size:var(--step-0)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<section data-svelte-h="svelte-mme53r"><h2 class="svelte-1ymawzl">On its 125th anniversary, the New York Public Library published this list:</h2> <br> <a href="https://www.nypl.org/125/topcheckouts">Top 10 Checkouts of All Time</a> <br> <br> <div class="divider side-menu"></div> <h2 class="svelte-1ymawzl">This site lists all mysteries by an author by publishing date:</h2> <br> <a href="http://stopyourekillingme.com">Stop, You&#39;re Killing Me!</a> <br> <br> <div class="divider side-menu"></div> <h2 class="svelte-1ymawzl">A national survey conducted by PBS published this list of America&#39;s 100 most-loved books:</h2> <br> <a href="http://www.pbs.org/the-great-american-read/newarrivals/#/">The Great American Read</a> <br> <br> <h3 class="svelte-1ymawzl">Our collection includes all except those marked &quot;X&quot; below.</h3> <img alt="The Great American Read"${add_attribute("src", tgarx, 0)}></section>`;
    }
  })}`;
});
export {
  Page as default
};
