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

<div class='visbility_phone'>
  {#if (pathParts.length > 2)}
    <section id='breadcrumbs'>
      <span>
        <a href={path}>{mainPage.name}</a>
      </span>
      &nbsp;&raquo;&nbsp;<span>{subPage.name}</span>
    </section>
  {/if}
</div>