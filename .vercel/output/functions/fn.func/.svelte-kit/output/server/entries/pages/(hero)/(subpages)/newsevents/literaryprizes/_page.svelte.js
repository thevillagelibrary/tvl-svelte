import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const css = {
  code: "a.svelte-1s0sjuj{font-size:var(--step-1);font-weight:500}article.svelte-1s0sjuj{display:flex;flex-direction:column;gap:1em;width:50%}h2.svelte-1s0sjuj{font-size:var(--step-1)}section.svelte-1s0sjuj{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="svelte-1s0sjuj" data-svelte-h="svelte-1ydacut"><article class="svelte-1s0sjuj"><h2 class="svelte-1s0sjuj">The Pulitzer Prizes:</h2> <a href="https://www.pulitzer.org/prize-winners-by-category/219" class="svelte-1s0sjuj">Fiction</a> <a href="https://www.pulitzer.org/prize-winners-by-category/218" class="svelte-1s0sjuj">Drama</a> <a href="https://www.pulitzer.org/prize-winners-by-category/220" class="svelte-1s0sjuj">History</a> <a href="https://www.pulitzer.org/prize-winners-by-category/222" class="svelte-1s0sjuj">Biography</a> <a href="https://www.pulitzer.org/prize-winners-by-category/650" class="svelte-1s0sjuj">Memoir or Autobiography</a> <a href="https://www.pulitzer.org/prize-winners-by-category/224" class="svelte-1s0sjuj">Poetry</a> <a href="https://www.pulitzer.org/prize-winners-by-category/223" class="svelte-1s0sjuj">General Nonfiction</a></article> <article class="svelte-1s0sjuj"><h2 class="svelte-1s0sjuj">The Booker Prizes:</h2> <a href="https://thebookerprizes.com/the-booker-library/features/full-list-of-booker-prize-winners-shortlisted-authors-and-their-books" class="svelte-1s0sjuj">Domestic Winners and Shortlisted Authors</a> <a href="https://thebookerprizes.com/the-booker-library/features/full-list-of-international-booker-prize-winners-shortlisted-authors-and-their-books" class="svelte-1s0sjuj">International Winners and Shortlisted Authors</a> <br> <h2 class="svelte-1s0sjuj">National Book Awards:</h2> <a href="https://www.nationalbook.org/national-book-awards/years/" class="svelte-1s0sjuj">Browse By Year</a></article></section>`;
    }
  })}`;
});
export {
  Page as default
};
