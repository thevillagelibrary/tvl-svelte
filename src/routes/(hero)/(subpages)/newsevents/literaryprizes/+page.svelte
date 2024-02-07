<script>
	import PageBody from '$lib/components/pagebody.svelte';
</script>

<PageBody>
	<section>
		<article>
			<h2>The Pulitzer Prizes:</h2>
			<a href="https://www.pulitzer.org/prize-winners-by-category/219"> Fiction </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/218"> Drama </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/220"> History </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/222"> Biography </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/650"> Memoir or Autobiography </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/224"> Poetry </a>
			<a href="https://www.pulitzer.org/prize-winners-by-category/223"> General Nonfiction </a>
		</article>
		<article>
			<h2>The Booker Prizes:</h2>
			<a
				href="https://thebookerprizes.com/the-booker-library/features/full-list-of-booker-prize-winners-shortlisted-authors-and-their-books"
			>
				Domestic Winners and Shortlisted Authors
			</a>
			<a
				href="https://thebookerprizes.com/the-booker-library/features/full-list-of-international-booker-prize-winners-shortlisted-authors-and-their-books"
			>
				International Winners and Shortlisted Authors
			</a>
			<br />
			<h2>National Book Awards:</h2>
			<a href="https://www.nationalbook.org/national-book-awards/years/"> Browse By Year </a>
		</article>
	</section>
</PageBody>

<style>
	a {
		font-size: var(--step-1);
		font-weight: 500;
	}
	article {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 50%;
	}
	h2 {
		font-size: var(--step-1);
	}
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-bottom: 1em;
	}
</style>
