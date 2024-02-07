<script>
	export let data;
	const values = data.items.values;
	import GoogleSheetsData from '$lib/components/googlesheetsdata.svelte';
	import PageBody from '$lib/components/pagebody.svelte';
</script>

<PageBody>
	<GoogleSheetsData name={'RecentDonors'} {values} />
</PageBody>
