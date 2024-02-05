<script>
 /*  export let name;
  console.log("😊😊 name", name) */
  import { page } from '$app/stores';
  import BreadCrumbs from '$lib/components/common/navbars/breadcrumbs.svelte';
  import NavV from '$lib/components/common/navbars/navv.svelte';
  import { pages } from '$lib/constants';
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => $page.url.pathname.includes(`/${obj.path}`));
  console.log("😊😊 currentMainPage", currentMainPage)
</script>

<section class='visibility_phone'>
  <BreadCrumbs />
</section>
<section class='pagesidemenu'>
<article class='visibility_not-phone'>
  {#if (currentMainPage?.subPages)}
  <NavV mainPage={currentMainPage} />
  {/if}
</article>
<article class='pagesidemenubody'>
  <slot />
</article>
</section>
