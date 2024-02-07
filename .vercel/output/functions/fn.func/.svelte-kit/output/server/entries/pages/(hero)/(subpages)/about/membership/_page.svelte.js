import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-25mivf">Membership in The Village Library is open to anyone. It will cost only $20 for a family to join.
		After that, the annual dues are only $20 per year per family. This fee will give you full
		privileges to borrow any of our 24,000 books for 3 weeks without charge. You don&#39;t need to
		be a member to purchase any of our thousands of used books.</p> <p data-svelte-h="svelte-sl6768">We have a special rate for our latest bestselling books, DVDs and Audio Books. We put the latest
		books and best sellers on &quot;RENTAL&quot;. These books are in a special area and will cost
		$.30 per day. DVDs and Audio books, which can be found in the new Ann Resch Litten Memorial
		Wing, will cost $.40 per day. These special charges are imposed to encourage people to return
		these high demand items sooner so that more patrons can have access to them. All &quot;Great
		Courses&quot; CDs and DVDs can be checked out the sane as books, free for three weeks.</p> <p data-svelte-h="svelte-kci0vr">We have no paid employees. The library is managed and staffed by volunteers. Volunteers are
		always needed at the Village Library. If you have an interest in helping others, we encourage
		you to apply to become a library volunteer. Some of our volunteers have been active for more
		than 20 years. To be a volunteer, you don’t need library skills, but you will need to be able to
		enter data into a computer. Almost anyone who can create email can learn our system.</p>`;
    }
  })}`;
});
export {
  Page as default
};
