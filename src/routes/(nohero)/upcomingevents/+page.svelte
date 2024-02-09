<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	let futureEvents;
	let futureEventCount = 0;
	if (browser) {
		futureEvents = JSON.parse(localStorage.getItem('futureEvents'));
		futureEventCount = futureEvents.length;
	}
	import StoryTime from '$lib/assets/images/posters/StoryTime.jpg';
	import BackArrow from '$lib/assets/icons/backarrow.svg';
	const posters = [
		{
			name: 'StoryTime',
			src: StoryTime
		}
	];
	let poster;
	let altText;

	function handleClick(event) {
		event.preventDefault();
		goto('/');
	}
</script>

<section id="upcomingeventslist">
	<button class="close" on:click={handleClick}>
		<img id="backarrow" src={BackArrow} alt="Back Arrow" />
	</button>
	<br />
	<br />
	<div class="divider full"></div>
	{#if futureEventCount > 0}
		{#each futureEvents as event, index}
			<article>
				<h2>{event[3]}</h2>
				{#if event[6]}
					<img
						class="poster"
						alt={event[3] + ' Poster'}
						src={posters.find((item) => item.name === event[6]).src}
					/>
				{/if}
				<p>
					<b>{event[5]}:</b>
					{event[2]} -- {event[4]}
				</p>
				{#if index < futureEventCount - 1}
					<div class="divider side-menu"></div>
				{/if}
			</article>
		{/each}
	{:else}
		<p>There are no upcoming events.</p>
	{/if}
	<div class="divider full"></div>
</section>

<style>
	#upcomingeventslist {
	margin: 0 auto;
	padding-bottom: 3em;
	white-space: pre-wrap;
	width: var(--page-width);
	}
	#backarrow {
		height: 3em;
	}
</style>
