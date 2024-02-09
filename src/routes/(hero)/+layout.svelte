<script>
	import Hero from '$lib/components/hero.svelte';
	import Footer from '$lib/components/footer.svelte';
	import NavBar from '$lib/components/navbar.svelte';
</script>

<header>
	<Hero />
	<div id="new-wing"></div>
	<NavBar />
</header>

<main>
	<slot />
</main>
<Footer />

<style>
	#new-wing {
		aspect-ratio: 650/160;
		background-image: url('$lib/assets/images/NewWing.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		margin: 0, auto;
		width: 100%;
	}
</style>
