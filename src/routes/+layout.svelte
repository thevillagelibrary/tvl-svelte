<script>
	import Hero from '$lib/components/common/Hero.svelte';
</script>

<main>
	<Hero />
    <div id='new-wing'></div>
	<slot />
</main>

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

