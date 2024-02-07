import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as Pagebody } from "../../../../../../chunks/pagebody.js";
const css = {
  code: "ul.svelte-1lz6cwo.svelte-1lz6cwo{list-style-type:disc;margin-left:2em;text-align:left;width:80%t}dl.svelte-1lz6cwo.svelte-1lz6cwo{font-family:var(--font-sans-serif);margin-left:2em;text-align:left}dl.svelte-1lz6cwo dd.svelte-1lz6cwo{margin-left:3em}dl.svelte-1lz6cwo dt.svelte-1lz6cwo,dl.svelte-1lz6cwo dd.svelte-1lz6cwo{padding-left:1.5em;text-indent:-1.5em}dl.svelte-1lz6cwo.svelte-1lz6cwo{font-size:var(--step-1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Pagebody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<ul class="svelte-1lz6cwo" data-svelte-h="svelte-wfhfmp"><li>Small Donations (individual or one small bag or box): Tues. - Sat., 10 a.m. to 5 p.m.</li> <li>Large Donations: Sat., 10 a.m. to 12</li> <li>Estate Donations: By appointment (call the Library)</li></ul> <p data-svelte-h="svelte-1r42oqc">The Village Library accepts donations of current hardback and paperback books, children’s books,
		Audio book CDs, and DVDs. Virtually all items that you donate to the library will be sold,
		generating much-needed revenue for your library. Therefore, all donated items must be in very
		good condition, not damaged or outdated. Unfortunately, there are items we cannot accept such as
		magazines, reference and textbooks, travel guides and cassette tapes. Please see the list below
		for more specific information regarding all donated items.</p> <p data-svelte-h="svelte-gh0f4o">The Village Library is most interested in the following types of materials for inclusion in its
		Book Sale inventory. Our books are available for sale during regular hours of operation, Monthly
		Bag of Book Sales, and our annual Fall and Spring Book Sales:</p> <dl class="svelte-1lz6cwo" data-svelte-h="svelte-15zvmx3"><dt class="svelte-1lz6cwo">Hardbound current fiction and non-fiction books with jackets</dt><dt class="svelte-1lz6cwo">Biographies and autobiographies</dt><dt class="svelte-1lz6cwo">Children&#39;s books</dt><dt class="svelte-1lz6cwo">Trade Paperback books fiction and non-fiction</dt><dt class="svelte-1lz6cwo">Mass Market paperbacks</dt><dt class="svelte-1lz6cwo">Books of local interest</dt><dt class="svelte-1lz6cwo">Cookbooks</dt><dt class="svelte-1lz6cwo">Art Books/Coffee Table Books</dt><dt class="svelte-1lz6cwo">Media material: Audio book CDs, DVD&#39;s</dt></dl> <p data-svelte-h="svelte-emt9rt">The following are books and periodicals that we cannot use or even accept as they present a
		disposal problem:</p> <dl class="svelte-1lz6cwo" data-svelte-h="svelte-7a9ml1"><dt class="svelte-1lz6cwo">Damaged books, which may include:</dt><dd class="svelte-1lz6cwo">Missing book jackets, covers, or pages; loose bindings; ripped or missing pages;
			disintegrating pages and covers caused by exposure to heat and sun; water-damaged or moldy
			books
		</dd><dt class="svelte-1lz6cwo">Textbooks and Reference books, which include:</dt><dd class="svelte-1lz6cwo">Encyclopedias, Dictionaries, Bibliographies, Almanacs, Directories, Atlases, Handbooks</dd><dt class="svelte-1lz6cwo">Informational Books:</dt><dd class="svelte-1lz6cwo">Technological, Tax, Investment, Medical, Educational, Legal</dd><dt class="svelte-1lz6cwo">Condensed or Abridged materials</dt><dt class="svelte-1lz6cwo">Magazines of any sort</dt><dt class="svelte-1lz6cwo">Travel and Restaurant Guides</dt><dt class="svelte-1lz6cwo">Cassette Tapes and VHS tapes</dt><dt class="svelte-1lz6cwo">Ex-library books</dt></dl> <p data-svelte-h="svelte-oj4tll"><b>The Village Library acknowledges the great importance of your donation.</b></p> <p data-svelte-h="svelte-1ovq479"><b>Thank you.</b></p>`;
    }
  })}`;
});
export {
  Page as default
};
