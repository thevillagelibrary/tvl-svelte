<script>
  import { pages } from '$lib/constants';
</script>


<ul> 
  {#each pages as page}
      <div>
        <li>
          <a href={`/${page.path}`}>{page.name}</a>
        </li>
        {#if (!page.subPages)}
          {#each page.subPages as subPage}
              <li class='subpages'>
                  <a href={`/${page.path}/${subPage.path}`}>{subPage.name}</a>
              </li>
          {/each}
        {/if}
      </div>
  {/each}
</ul>