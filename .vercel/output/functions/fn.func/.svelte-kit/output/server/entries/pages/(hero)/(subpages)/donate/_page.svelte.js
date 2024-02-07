import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../chunks/pagebody.js";
const css = {
  code: "form.svelte-kqpwkg{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<article data-svelte-h="svelte-dvl33x"><p>Unlike tax supported public libraries, we receive no funds from Federal, State, or local
			governments. Our funding comes from membership fees, donations, book rentals, the sale of used
			books and engraved bricks. Because we are a Section 501 (c) (3) organization, all donations
			are tax-deductible.</p> <h2>Make a Tax-deductible Donation</h2> <small>Click below to donate through PayPal, even if you do not have a PayPal account:</small> <br> <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="svelte-kqpwkg"><input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="ECABE5X7996XU"> <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form> <br> <div class="divider sub"></div> <br> <small>Or, write a check to &quot;The Village Library&quot; and deposit it in the book drop at the
			library or mail it to:</small> <br> <address>Village Library, Inc.
			<br>
			1 Skidaway Village Square
			<br>
			Savannah, GA 31411</address></article> <div></div> <br> <div class="divider full"></div> <br> <article data-svelte-h="svelte-duxu8o"><h2>Buy a Brick Program</h2> <p>The Buy a Brick Program is a means of raising funds to support the library. The bricks border
			the entry to the library. In addition to supporting the library by having bricks engraved with
			their own names, our donors have had bricks engraved with the names of their grandchildren, to
			commemorate the passing of a loved one or to honor a friend.</p> <p>Brick donations are $200 each. All contributions are tax-deductible as the library is a
			not-for-profit organization. Brick donor forms are available at the library front desk. Checks
			should be made payable to The Village Library.</p></article>`;
    }
  })}`;
});
export {
  Page as default
};
