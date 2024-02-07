<script>
  export let name;
  export let values;
  let categories = [];
  getCategories();
  categories.forEach(setEntryCount);

  function getCategories() {
    let categoryList = [];
    let i;
    for (i = 1; i < values.length; i++) {
      let category = values[i][0];
      if (category !== '') {
        let categoryObject = {
          row: i,
          category: values[i][0],
          entries: 0,
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
  const combinedAuthorTitle = values[0][2] === 'Not Used';

  const categoryList = categories.map(buildCategoryList);
  function buildCategoryList(category) {
    return category;
  }

  const listValues = categoryList.map(buildListValues);
  function buildListValues(category, index) {
    const rowNumber = category.row;
    const entries = category.entries;
    const lastEntry = rowNumber + entries;
    const listValue = values.filter(createListValue);
    function createListValue(entry, index) {
      return index > rowNumber && index < lastEntry + 1;
    }
    return listValue;
  }
</script>

  
  <div id='updated'>
    <i>{updated}</i>
  </div>


{#if (name === 'Books')}
  <h3>Rental or New at the Library</h3>
{/if}
{#if (name === 'RecentDonors')}
  <h2>Thanks to those who have donated to the Library recently.</h2>
{/if}
{#each categoryList as list, index}
  {#if (categoryList.length > 1 || name === 'YouthSection')}
    <h4>{list.category}</h4>
  {/if}
  <ul>
    
  {#each listValues[index] as listValue}
  {#if (combinedAuthorTitle)}
        <li>
          <p>{listValue[1]}</p>
        </li>
  {:else}
    {#if (name === 'RecentDonors')} 
        <li>
          <p>
            {listValue[1]}
            {#if (listValue[2])}
            ({listValue[2]})
            {/if}
          </p>
        </li>
    {:else}
      <li>
        <p>
          {listValue[1]},{' '}
          <span>
            <i>{listValue[2]}</i>
          </span>
        </p>
      </li>
    {/if}
  {/if}
{/each}

  </ul>
  <br />
{/each}
{#if (name === 'Books')}
  <section>
    <b>KAREN MARTORELLI</b><br />
    <i>Acquisitions Chair</i>
  </section>
{/if}

<style>  
  section {
    display: block;
    font-size: 1.2em;
    text-align: left;
	}

  #updated {
    font-size: 1.2em;
    text-align: right;
    }
</style>
