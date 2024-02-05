<script>
  export let data;
  import PageBodySideMenu from '$lib/components/common/pagebodysidemenu.svelte';
  const organization = data.items.values;
  organization.splice(0, 1);
</script>


  <PageBodySideMenu>
    <p>
      The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)]
      corporation and is managed by a slate of officers elected by a board of
      directors. The directors are chosen by the members at an annual meeting
      in May of each year.
    </p>
    <h2>Officers & Directors</h2>
    <table id='board'>
      <tbody>
        {#each organization as item}
          <tr>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </PageBodySideMenu>
