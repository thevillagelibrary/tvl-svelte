<script>
  //TODO Check Breadcrumbs classes
  import BreadCrumbs from '$lib/components/common/navbars/breadcrumbs.svelte';
</script>

<section class='pagewithoutsubpages'>
  <BreadCrumbs />
</section>
<section class='pagewithsubpages'>
  <article class='pagewithsubpagesbody'>
    <slot />
  </article>
</section>