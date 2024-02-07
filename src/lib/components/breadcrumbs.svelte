<script>
  import { page } from '$app/stores'
  import { pages } from '$lib/constants';
  const pathParts = $page.url.pathname.split('/');
  const path = `/${pathParts[1]}`;
  const mainPage = pages.find((aPage) => aPage.path === pathParts[1]);
  const subPages = mainPage.subPages;
  let subPage;
  if (pathParts.length > 2) {
    subPage = subPages.find((subPage) => subPage.path === pathParts[2]);
  }
</script>

<div>
  {#if (pathParts.length > 2)}
    <section>
      <span>
        <a href={path}>{mainPage.name}</a>
      </span>
      &nbsp;&raquo;&nbsp;<span>{subPage.name}</span>
    </section>
  {/if}
</div>

<style>  
  section {
    background-color: var(--background-secondary);
    border-bottom: 1px  solid  var(--color-border-primary);
    border-top: 1px  solid  var(--color-border-primary);
    font-size: var(--step-1);
    margin-bottom: 0.5em;
    padding: .25em 0 .5em .25em;
    text-align: left;
    text-transform: capitalize;
  }
</style>