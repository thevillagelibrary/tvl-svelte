<script>
  import { page } from '$app/stores';
  import BreadCrumbs from '$lib/components/common/navbars/breadcrumbs.svelte';
  import NavV from '$lib/components/common/navbars/navv.svelte';
  import { pages } from '$lib/constants';
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => $page.url.pathname.includes(`/${obj.path}`));
</script>

<section class='pagenosidemenu'>
<!-- <article class='visibility_not-phone'>
  {#if (currentMainPage?.subPages)}
  <NavV mainPage={currentMainPage} />
  {/if}
</article> -->
<article>
  <BreadCrumbs />
  <slot />
</article>
</section>
