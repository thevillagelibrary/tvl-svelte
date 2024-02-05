<script>  
  import { pages } from '$lib/constants';
</script>



<nav id='menu_not-phone'>  
  <!-- svelte-ignore a11y-missing-content -->
  <a href='##' class='modalClose' hidden></a>
  <div>
    <!-- svelte-ignore a11y-missing-content -->
    <a href='##' class='modalClose' hidden></a>     
    <ul> 
      {#each pages as page}
          <div>
            <li>
              <a href={page.path !== 'home'? `/${page.path}` : '/'}>{page.name}</a>
              <ul>
                {#if (page.subPages)}
                  {#each page.subPages as subPage}
                    <li>
                      <a href={`/${page.path}/${subPage.path}`}>{subPage.name}</a>
                    </li>
                  {/each}
                {/if}
              </ul>
            </li>
          </div>
      {/each}
    </ul>
  </div>
</nav>