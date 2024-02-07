import { c as create_ssr_component, e as escape, f as each } from "./ssr.js";
const css = {
  code: "section.svelte-12xxhna{display:block;font-size:1.2em;text-align:left}#updated.svelte-12xxhna{font-size:1.2em;text-align:right}",
  map: null
};
function buildCategoryList(category) {
  return category;
}
const Googlesheetsdata = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { values } = $$props;
  let categories = [];
  getCategories();
  categories.forEach(setEntryCount);
  function getCategories() {
    let i;
    for (i = 1; i < values.length; i++) {
      let category = values[i][0];
      if (category !== "") {
        let categoryObject = {
          row: i,
          category: values[i][0],
          entries: 0
        };
        categories.push(categoryObject);
      }
    }
  }
  function setEntryCount(item, index) {
    if (categories.length < 2) {
      categories[0].entries = values.length - 2;
    } else {
      let i;
      for (i = 0; i < categories.length - 1; i++) {
        categories[i].entries = categories[i + 1].row - categories[i].row - 1;
      }
      categories[i].entries = values.length - categories[i].row - 1;
    }
  }
  const updated = values[0][3];
  const combinedAuthorTitle = values[0][2] === "Not Used";
  const categoryList = categories.map(buildCategoryList);
  const listValues = categoryList.map(buildListValues);
  function buildListValues(category, index) {
    const rowNumber = category.row;
    const entries = category.entries;
    const lastEntry = rowNumber + entries;
    const listValue = values.filter(createListValue);
    function createListValue(entry, index2) {
      return index2 > rowNumber && index2 < lastEntry + 1;
    }
    return listValue;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  $$result.css.add(css);
  return `<div id="updated" class="svelte-12xxhna"><i>${escape(updated)}</i></div> ${name === "Books" ? `<h3 data-svelte-h="svelte-azpmgi">Rental or New at the Library</h3>` : ``} ${name === "RecentDonors" ? `<h2 data-svelte-h="svelte-ly5uyp">Thanks to those who have donated to the Library recently.</h2>` : ``} ${each(categoryList, (list, index) => {
    return `${categoryList.length > 1 || name === "YouthSection" ? `<h4>${escape(list.category)}</h4>` : ``} <ul>${each(listValues[index], (listValue) => {
      return `${combinedAuthorTitle ? `<li><p>${escape(listValue[1])}</p> </li>` : `${name === "RecentDonors" ? `<li><p>${escape(listValue[1])} ${listValue[2] ? `(${escape(listValue[2])})` : ``}</p> </li>` : `<li><p>${escape(listValue[1])},${escape(" ")} <span><i>${escape(listValue[2])}</i> </span></p> </li>`}`}`;
    })}</ul> <br>`;
  })} ${name === "Books" ? `<section class="svelte-12xxhna" data-svelte-h="svelte-fuzbjc"><b>KAREN MARTORELLI</b><br> <i>Acquisitions Chair</i></section>` : ``}`;
});
export {
  Googlesheetsdata as G
};
