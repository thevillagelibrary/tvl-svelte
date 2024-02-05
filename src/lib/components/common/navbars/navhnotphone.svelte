<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  $: path = $page.url.pathname;
  import { pages } from '$lib/constants';
  import MenuIcon from '$lib/assets/icons/menu.svg'
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
                {aPage.name}
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
            {aPage.name}
          </a>
        </li>
        {/if}
      {/each}
    <li>
      <a href='#menu_not-phone'>
        <img id="menuicon" src={MenuIcon} alt="Menu Icon" /></a>
    </li>
    <li>
      <a href='/menu'>Phone_Menu</a>
    </li>
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

.dropbtn.active {  
  background: var(--color-secondary);
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
  background-color: var(--color-black);
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
  left: -200%;
  min-width: 550%;  
}

#donate {
  left: -80%;
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