<script>
	import Hero from '$lib/components/common/hero.svelte';
	import Footer from '$lib/components/common/footer.svelte';
	import NavHNotPhone from '$lib/components/common/navbars/navhnotphone.svelte';
	import MenuNotPhone from '$lib/components/common/menunotphone.svelte';
</script>

<header>
	<Hero />
	<div id="new-wing"></div>
	<NavHNotPhone />
</header>

<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>
<MenuNotPhone />

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
