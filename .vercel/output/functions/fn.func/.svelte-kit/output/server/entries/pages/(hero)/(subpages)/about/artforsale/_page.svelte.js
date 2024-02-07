import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 data-svelte-h="svelte-1txpt23">LOVE ART? LOVE THE VILLAGE LIBRARY?</h2> <br> <p data-svelte-h="svelte-6xny80">The next time you come to The Village Library, please take a moment or two to view the many
		wonderful pieces of art that hang in the Ann Resch Litten Corridor which leads from the main
		library into the new addition to the library.</p> <p data-svelte-h="svelte-1clyd70">Many local artists have graciously donated these paintings to The Village Library. These
		artworks are for sale at prices far below their intrinsic value. They would be wonderful gifts
		for a birthday or anniversary, or even a wall in your own home.</p> <p data-svelte-h="svelte-wfi2ta">All monies from the sale of these pieces will help The Village Library continue its mission to
		provide you a conveniently located source for your reading and listening pleasure.</p>`;
    }
  })}`;
});
export {
  Page as default
};
