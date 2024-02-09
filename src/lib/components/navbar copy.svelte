<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment'
  	import { invalidateAll, afterNavigate } from '$app/navigation';
	$: path = $page.url.pathname;  
  	if (browser) afterNavigate(invalidateAll());
	import { pages } from '$lib/constants';
	import homeIcon from '$lib/assets/icons/homeicon.svg';
	import aboutIcon from '$lib/assets/icons/abouticon.svg';
	import newseventsIcon from '$lib/assets/icons/newseventsicon.svg';
	import newarrivalsIcon from '$lib/assets/icons/newarrivalsicon.svg';
	import donateIcon from '$lib/assets/icons/donateicon.svg';
	const icons = {
		home: homeIcon,
		about: aboutIcon,
		newsevents: newseventsIcon,
		newarrivals: newarrivalsIcon,
		donate: donateIcon
	};
</script>

<nav>
	<ul>
		{#each pages as aPage}
			{#if aPage.subPages.length > 0}
				<li class='linkWithSubpages'>
					<a
						href={`/${aPage.path}`}
						class={path.includes(aPage.path)
								? 'active'
								: 'inactive'}
					>
						<img src={icons[aPage.path]} alt={`${aPage.name} Icon`} />{aPage.name}
					</a>
					<ul class='dropdown'>
						<li><a href={`/${aPage.path}`} 
              class={path.includes(aPage.path)
                  ? 'activesub'
                  : 'inactivesub'}>{aPage.name}</a></li>
						{#each aPage.subPages as subPage}
							<li>
								<a href={`/${aPage.path}/${subPage.path}`}
                  class={path.includes(subPage.path)
                    ? 'activesub'
                    : 'inactivesub'}>{subPage.name}</a>
							</li>
						{/each}
					</ul>
				</li>
			{:else}
				<li>
					<a
						href={aPage.path !== 'home' ? `/${aPage.path}` : '/'}
						class={path === '/'
							? aPage.path === 'home'
								? 'active'
								: 'inactive'
							: path.includes(aPage.path)
								? 'active'
								: 'inactive'}
					>
						<img src={icons[aPage.path]} alt={`${aPage.name} Icon`} />{aPage.name}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
  a {
    font-size: var(--step--2);

  }
	nav {
		background-color: var(--background-white);
		display: block;
		height: fit-content;
		position: relative;
		z-index: 999;
	}
	nav > ul li > a:hover img {
		background-color: var(--color-secondary);
		color: var(--color-black);
	}
	nav > ul li > a {
		color: var(--color-black);
		display: block;
		text-align: left;
		text-decoration: none;
	}
	nav > ul li > a.active > img,
  nav > ul li > a:hover > img { 
  background: var(--color-secondary);
  border: 2px solid var(--color-primary);
  color: var(--color-black);
  text-align: center;
  width: inherit;
	}
	nav > ul li > a.activesub {
		background: var(--color-secondary);
		color: var(--color-black);
		text-align: center;
		width: inherit;
	}
	nav > ul li > a.inactive {
		background: var(--background-white);
		color: var(--color-black);
	}
	nav > ul li > a.inactive:hover img {
		background: var(--color-secondary);
		color: var(--color-black);
	}
	nav > ul li > a.inactivesub:hover {
		background: var(--color-secondary);
		color: var(--color-black);
		text-align: center;
	}
	nav > ul li {
		box-sizing: border-box;
		color: var(--color-black);
		display: block;
		font-family: var(--font-sans-serif);
		font-weight: 700;
		height: auto;
		line-height: 1.5em;
		margin-top: 0;
		outline: 0;
		overflow-wrap: break-word;
		text-align: center;
		text-decoration: none;
		text-size-adjust: 100%;
		width: fit-content;
	}
	nav > ul > li > a > img {
		padding-top: 0.25em;
	}
	nav > ul > li {
		display: block;
	}
	nav > ul > li > a {
		padding: 0 0.3125em;
	}
	nav > ul > li > ul a {
		color: var(--color-white);
	}
	nav > ul > li > ul > li > a {
		color: var(--color-white);
	}
	nav > ul > li > ul li a:hover {
		text-align: left;
		width: inherit;
	}
	nav > ul {
		align-items: baseline;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		font-family: var(--font-sans-serif);
		font-size: var(--step-1);
		gap: 0.5em;
		height: fit-content;
		justify-content: center;
		line-height: 1.5em;
		list-style-type: none;
		margin: 0.625em 0 0 0;
		vertical-align: center;
		width: 100%;
	}
	nav li {
		display: inline-block;
	}
	nav li:hover ul li {
		width: 100%;
	}
	nav ul ul {
		background-color: var(--color-primary);
		color: var(--color-white);
		display: none;
		position: absolute;
		top: 100%;
		width: fit-content;
	}
  nav li:hover  .dropdown {
    display: block;
  }

	nav ul ul li a:focus {
		background-color: var(--color-secondary);
	}
	nav ul ul li a {
		font-size: var(--step--2);
		font-weight: normal;
		padding: 0 0.5em;
		text-align: center;
	}
	nav ul ul li:first-of-type {
		border-bottom: 4px solid var(--color-black);
	}
  .linkWithSubpages {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
.dropdown { 
  border: 2px solid var(--color-secondary);
  background-color: var(--color-primary);
  display: none;
  opacity: 1;
  position: absolute;
  z-index: 2;
}
</style>
