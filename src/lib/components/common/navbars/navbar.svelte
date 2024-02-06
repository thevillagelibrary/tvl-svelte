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


<nav class='visibility_not-phone nav_h'>
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
.dropbtn:hover {  
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
</style>