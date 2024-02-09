<script>
	import MenuIcon from '$lib/assets/icons/menuicon.svg';
</script>

<section>
  <article>
	<a href="/menu"><img src={MenuIcon} alt='Menu Icon'/></a>
  </article>
  <article>
    <h1>The Village Library</h1>
    <div>Skidaway Island</div>
    <p>(912) 598-1183</p>
  </article>
  <article>
      <a href='/donate'>Donate</a>
  </article>
</section>

<style>
	section {
		align-items: center;
		background-color: var(--color-primary);
		color: var(--color-black);
		display: flex;
		flex-direction: row;
		height: fit-content;
		justify-content: space-around;
		overflow-wrap: break-word;
		padding-bottom: 0.2em;
		text-align: center;
		white-space: pre-wrap;
		width: 100%;
	}
	section :first-child article,
	section :last-child article {
		width: 15%;
	}
	section :nth-child(1) article{
		height: 0;
	}
	section :nth-child(2)  {
		align-items: center;
		display: flex;
		flex-direction: column;
		font-family: 'Lucida-Calligraphy';
		padding: 0.5em 0 0.25em 0;
		width: 70%;
	}
	section :nth-child(2) > p {
	font-size: var(--step--1);
	font-weight: 700;
	margin-bottom: 0;
	}  
	section :nth-child(2) article div {
		font-size: var(--step-0);
		font-weight: bold;
		margin: 0;
		text-align: center;
		width: 100%;
	}
	section :nth-child(3) a {
		color: var(--color-black);
		font-family: var(--font-sans-serif);
		font-size: var(--step--3);
		font-weight: 600;
		text-align: center;
		vertical-align: center;
	}
	a {
		background: var(--color-secondary);
		border-radius: 0.375em;
		border-style: solid;
		border-width: 0;
		height: fit-content;
		line-height: 1.2em;
		/* margin-bottom: 1em;
		margin-top: 1;
		padding-bottom: 0.125em; */
		padding: .25em;
		text-align: center;
		width: fit-content;
	}

	section article:first-of-type a {
		background-color: var(--color-primary);
	}
	a:focus,
	a:hover {
		transform: scale(1.2);
	}

	h1 {
		background: var(--color-primary);
		color: var(--color-black);
		display: block;
		font-family: 'Lucida-Calligraphy';
		font-size: var(--step-3);
		font-weight: 700;
		height: fit-content;
		width: fit-content;
	}
</style>