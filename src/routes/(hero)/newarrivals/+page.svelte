<script>
	export let data;
	import GoogleSheetsData from '$lib/components/googlesheetsdata.svelte';
	let values = [];
	for (let i = 0; i < 3; i++) {
		values[i] = data.items.valueRanges[i].values;
	}
</script>

<div class="pagewithoutsubpages">
	<section>
		<article>
			<a href="/newarrivals#just-off-rental">Just Off Rental</a>
			<a href="/newarrivals#books">Books</a>
		</article>
		<br />
		<div class="divider full"></div>
		<br />
		<h2 id="just-off-rental">Just Off Rental</h2>
		<GoogleSheetsData name={'JustOffRental'} values={values[0]} />
		<div class="divider full"></div>
		<br />
		<h2 id="books">Books</h2>
		<GoogleSheetsData name={'Books'} values={values[1]} />
	</section>
</div>

<style>
	a {
		font-size: var(--step-1);
		font-weight: 500;
	}
	article {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
