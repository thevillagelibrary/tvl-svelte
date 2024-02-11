<script>
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	import { pages } from '$lib/constants';
	const icons = {
		home: '<svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>',
		about:
			'<svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>',
		newsevents:
			'<svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"></path><path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></path></svg>',
		newarrivals:
			'<svg class="icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M5 8h4"></path><path d="M9 16h4"></path><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path><path d="M14 9l4 -1"></path><path d="M16 16l3.923 -.98"></path></svg>',
		donate:
			'<svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path></svg>'
	};
</script>

<nav>
	<ul>
		{#each pages as aPage}
			{#if aPage.subPages.length > 0}
				<li class="linkWithSubpages">
					<a href={`/${aPage.path}`} class={path.includes(aPage.path) ? 'active' : 'inactive'}>
						<div>{@html `${icons[aPage.path]}`}</div>
						{aPage.name}
					</a>
					<ul class="dropdown">
						<li>
							<a
								href={`/${aPage.path}`}
								class={path.includes(aPage.path) ? 'activesub' : 'inactivesub'}>{aPage.name}</a
							>
						</li>
						{#each aPage.subPages as subPage}
							<li>
								<a
									href={`/${aPage.path}/${subPage.path}`}
									class={path.includes(subPage.path) ? 'activesub' : 'inactivesub'}
									>{subPage.name}</a
								>
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
						<div>{@html `${icons[aPage.path]}`}</div>
						{aPage.name}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	a {
		display: flex;
		flex-direction: column;
		font-size: var(--step--2);
	}
	a > div {
		height: 30px;
	}
	nav {
		background-color: var(--background-white);
		display: block;
		height: fit-content;
		position: relative;
		z-index: 999;
	}
	a {
		align-items: center;
		color: var(--color-black);
		display: flex;
		flex-direction: column;
		text-align: center;
		text-decoration: none;
	}

	a.active > div {
		background: var(--color-secondary);
		border: 2px solid var(--color-primary);
		color: var(--color-black);
		text-align: center;
		width: fit-content;
	}
	a.active:hover > div {
		background: var(--color-secondary);
		border: 2px solid var(--color-primary);
		color: var(--color-black);
		text-align: center;
		width: fit-content;
	}

	a.activesub {
		background: var(--color-secondary);
		color: var(--color-black);
		text-align: center;
		width: inherit;
	}
	a.inactive {
		background: var(--background-white);
		color: var(--color-black);
		text-align: center;
	}
	a.inactive:hover > div {
		background: var(--color-secondary);
		color: var(--color-white);
	}
	a.inactivesub:hover {
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
	nav li:hover .dropdown {
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
