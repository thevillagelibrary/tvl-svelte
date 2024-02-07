import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-q3kdsh">We wish to thank all the organizations, businesses, and dedicated volunteers who have made our
		library possible.</p> <p data-svelte-h="svelte-1m2ibzc">A special thanks goes to David L. Litten, who was a major donor to the new wing in memory of his
		late wife, Ann Resch Litten, and who continues to suport the library generously in her memory.</p> <p data-svelte-h="svelte-du2z0m">A special thanks also goes to Landings Landlovers, which has been a regular and generous
		supporter of the library for many years.</p> <p data-svelte-h="svelte-1fzgaov">Below are links to the websites of some of these contributors:</p> <a href="https://www.landingslandlovers.com" data-svelte-h="svelte-1q73wbb">Landings Landlovers</a> <br> <a href="https://www.landings.org" data-svelte-h="svelte-17wryrq">The Landings Association</a><br> <a href="https://thelandings.com/golf-and-athletic-club" data-svelte-h="svelte-znpuft">The Landings Golf and Athletic Club
	</a><br><br>`;
    }
  })}`;
});
export {
  Page as default
};
