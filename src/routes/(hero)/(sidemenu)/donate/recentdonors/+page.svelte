<script>
  export let data;
  const values = data.items.values;
  import GoogleSheetsData from '$lib/components/common/googlesheetsdata.svelte';
  import PageBody from '$lib/components/common/pagebody.svelte';
</script>

<PageBody>
  <GoogleSheetsData name={'RecentDonors'} values={values} />
</PageBody>
