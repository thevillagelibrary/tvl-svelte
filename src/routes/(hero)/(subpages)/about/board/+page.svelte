<script>
	export let data;
	import PageBody from '$lib/components/pagebody.svelte';
	const organizationValues = data.items.values;
	const organization = organizationValues.toSpliced(0, 2);
</script>

<PageBody>
	<p>
		The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)] corporation and is managed by a
		slate of officers elected by a board of directors. The directors are chosen by the members at an
		annual meeting in May of each year.
	</p>
	<h2>Officers & Directors</h2>
	<table id="board">
		<tbody>
			{#each organization as item}
				<tr>
					<td>{item[1]}</td>
					<td>{item[2]}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</PageBody>

<style>
	tr :first-child {
		padding-right: 0.5em;
		text-align: right;
	}
	tr :last-child {
		padding-left: 0.5em;
		text-align: left;
	}
	td {
		font-size: var(--step-1);
		width: 20%;
	}
	table {
		font-family: var(--font-sans-serif);
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		width: 100%;
	}
</style>
