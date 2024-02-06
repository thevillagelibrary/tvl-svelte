<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  $: path = $page.url.pathname;
  import { pages } from '$lib/constants';
  import homeIcon from '$lib/assets/icons/homeicon.svg'
  import aboutIcon from '$lib/assets/icons/abouticon.svg'
  import newseventsIcon from '$lib/assets/icons/newseventsicon.svg'
  import newarrivalsIcon from '$lib/assets/icons/newarrivalsicon.svg'
  import donateIcon from '$lib/assets/icons/donateicon.svg'
  const icons = {
    home: homeIcon,
    about: aboutIcon,
    newsevents: newseventsIcon,
    newarrivals:newarrivalsIcon,
    donate: donateIcon
  }
</script>


<nav>
  <ul>
      {#each pages as aPage}
       {#if (aPage.subPages.length > 0)}
          <li>
            <div class='dropdown'>
              <button
                on:click={() => goto(`/${aPage.path}`)}
                class={path === '/' ? aPage.path === 'home' ? 'active dropbtn' : ' dropbtn' : path.includes(aPage.path) ? 'active dropbtn' : ' dropbtn'}>
                <img src={icons[aPage.path]} alt={`${aPage.name} Icon`} />{aPage.name}
              </button>
                <div id={aPage.path} class='dropdown-content'>
                  <a href={`/${aPage.path}`}>{aPage.name}</a>
                  <div class='divider'></div>
                  {#each aPage.subPages as subPage}
                      <a href={`/${aPage.path}/${subPage.path}`}>{subPage.name}</a>
                  {/each}
                </div>
            </div>
          </li>
        {:else}
        <li>
          <a
            href={aPage.path !== 'home'? `/${aPage.path}` : '/'}
            class={path === '/' ? aPage.path === 'home' ? 'active' : '' : path.includes(aPage.path) ? 'active' : ''}>
            <img src={icons[aPage.path]} alt={`${aPage.name} Icon`} />{aPage.name}
          </a>
        </li>
        {/if}
      {/each}
  </ul>
</nav>

<style>
  

/* Dropdown styles */

.dropbtn {
      background-color: var(--background-white);
      border: 0;
      border-radius: 0;
      cursor: pointer;
      box-sizing: border-box;
      color: var(--color-black);
      display: block;
      font-family: var(--font-sans-serif);
      font-size: var(--step--2);
      font-weight: 700;
      height: auto;
      margin-top: 0;
      outline: 0;
      overflow-wrap: break-word;
      text-align: center;
      text-decoration: none;
      text-size-adjust: 100%;
      width: fit-content; 
}

.dropbtn.active,
.dropbtn:hover,
nav > ul li > a.active,
nav > ul li > a:hover {  
  background: var(--color-secondary);
  border: 2px solid var(--color-primary);
  border-radius: 1em;
  color: var(--color-black);
  text-align: center;
  width: inherit;
}


.dropdown {
  position: relative;
  display: inline-block;
  width: fit-content;
}
.dropdown-content { 
  border: 2px solid var(--color-secondary);
  border-radius: 1em;
  background-color: var(--color-primary);
  display: none;
  opacity: 1;
  position: absolute;
  z-index: 2;
}

#about {
  left: -125%;
  min-width: 350%;
}

#newsevents {
  left: -225%;
  min-width: 550%;  
}

#donate {
  left: -72%;
  min-width: 250%
}

.dropdown-content a {
  color: var(--color-white);
  display: block;
  text-decoration: none;
}

.dropdown-content a:hover {color: var(--color-black); background-color: var(--color-secondary);}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {
  background-color: var(--color-secondary);
  color: var(--color-black);}
  
nav {
  background-color: var(--background-white);
  display: block;
}

nav > li > a {
  padding: 0;
}
nav > li {
  margin-bottom: 0;
}
nav > ul li > a {
  line-height: 1.5em;
  padding: 0 0.5em;
  vertical-align: center;
}

nav > ul li > a > svg {
  padding-top: 0.5em;
}
nav > ul li > a {
  box-sizing: border-box;
  color: var(--color-black);
  display: block;
  font-family: var(--font-sans-serif);
  font-size: var(--step--2);
  font-weight: 700;
  height: auto;
  margin-top: 0;
  outline: 0;
  overflow-wrap: break-word;
  text-align: center;
  text-decoration: none;
  text-size-adjust: 100%;
  width: fit-content;
}
nav > ul li > a.active {
  background: var(--color-secondary);
  color: var(--color-black);
  text-align: center;
  width: inherit;
}
nav > ul li > a.inactive {
  background: var(--background-white);
  color: var(--color-black);
  width: inherit;
}
nav > ul {
  height: fit-content;
}
nav > ul {
  background: var(--background-white);
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0.625em;
  padding: 0;
}
nav > ul {
  height: fit-content;
  margin: 0.625em 0;
}
nav li {
  display: inline-block;
}
nav > ul li > a:hover {
  background-color: var(--color-secondary);
  color: var(--color-black);
}
</style>