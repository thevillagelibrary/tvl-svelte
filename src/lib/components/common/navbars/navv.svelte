<script>
  export let mainPage;
  import { page } from '$app/stores';
  let path = `/${mainPage.path}`;
</script>


<nav id='nav_v' class='visibility_not-phone'>
  <ul>
    <li>
      <a
        href={path}
        class={$page.url.pathname === path ? 'active' :  ''}
      >
        {mainPage.name}
      </a>
    </li>
    <li><div class='divider nav-v'></div></li>      
    {#each mainPage.subPages as subPage}
        <li>
        <a
          href={`/${mainPage.path}/${subPage.path}`}
          class={$page.url.pathname === `/${mainPage.path}/${subPage.path}` ? 'active' :  ''}
          >
          {subPage.name}
        </a>
        </li>
      {/each}
  </ul>
</nav>