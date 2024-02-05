<script>
  //import { MdMenu as MenuIcon } from 'react-icons/md';
  import { page } from '$app/stores';
  $: path = $page.url.pathname;
  import { pages } from '$lib/constants';
  import MenuIcon from '$lib/assets/icons/menu.svg'
</script>


<nav class='visibility_not-phone nav_h'>
    <ul > 
      {#each pages as aPage}
          <li>
            <a
              href={aPage.path !== 'home'? `/${aPage.path}` : '/'}
              class={path === '/' ? aPage.path === 'home' ? 'active' : '' : path.includes(aPage.path) ? 'active' : ''}>
              {aPage.name}
            </a>
          </li>
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