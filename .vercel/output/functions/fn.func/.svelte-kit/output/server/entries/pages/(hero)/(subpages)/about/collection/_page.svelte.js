import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1465qbd">For a small library, our collection is impressive, with more than 24,000 books. We have nearly
		all the Best Sellers, as well as more than 1,700 of the latest audio books and selected DVDs.
		Our 14,000 fiction books include the latest fiction, classics, as well as Pulitzer, Booker and
		other award winning books. We stock several copies of the most popular authors’ books. We have
		800 biographies and 3,000 other non-fiction books including a large selection of history,
		gardening, and cook books. We have 1,500 popular books in a Large Print format. Our 4,400
		children’s books are organized by reading ability; beginning with learning to read through
		elementary, middle school and beyond. In addition to the categories listed above, we stock 2,000
		used paperback and hardcover books for sale. To maintain a strong and vibrant collection, we
		spend $11,000 on new books each year.</p>`;
    }
  })}`;
});
export {
  Page as default
};
