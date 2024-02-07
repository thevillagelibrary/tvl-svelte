import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-3ek257">In 1990 a small but visionary group of people on Skidaway Island conceived the idea of a
		community library. It started out small with books donated by residents in a store front located
		in the commercial section of the island. Through the generosity of many people a building was
		constructed in 1996. Today we have more than 24,000 books. In the last two years, we have served
		over 2,400 members.</p> <p data-svelte-h="svelte-t8hhbj">Unlike tax supported public libraries, we receive no funds from Federal, State or local
		governments. Our funding comes from membership fees, donations, book rentals, the sale of used
		books and engraved bricks. Because we are a Section 501 (c) (3) organization, all donations are
		tax-deductible.</p> <address data-svelte-h="svelte-2xzmk1">Village Library, Inc.
		<br>
		1 Skidaway Village Square
		<br>
		Savannah, GA 31411
		<br>
		(912) 598-1183</address> <p data-svelte-h="svelte-idsykx">The Library is open Tuesday through Saturday from 10:00 a.m. to 5:00 p.m. We are closed on
		Sunday and Monday, and on the following holidays: Memorial Day, Fourth of July, Labor Day,
		Thanksgiving (and the afternoon before), December 24-26, and New Years Eve and Day.</p> <p data-svelte-h="svelte-rswxda">The library is run by about ninety volunteers who each donate from 25 to more than 100 hours of
		their time each year. Some of them have served for 20 years. These are the people who keep the
		library running smoothly by checking books in and out, wrapping new books in plastic jackets,
		attaching bar codes and entering them into our system. Without their generosity the library
		would not exist.</p>`;
    }
  })}`;
});
export {
  Page as default
};
