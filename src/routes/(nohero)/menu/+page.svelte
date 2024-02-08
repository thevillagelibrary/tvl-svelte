<script>  
  import { goto } from '$app/navigation';
  import { pages } from '$lib/constants';
	import BackArrow from '$lib/assets/icons/backarrow.svg';
  function handleClick(event) {
    event.preventDefault();
    goto('/')
  }
</script>

<section>
	<button class="close" on:click={handleClick}>
		<img id="backarrow" src={BackArrow} alt="Back Arrow" />
	</button>
	<br />
	<br />
  <div class='divider full'></div>
  <nav>
    <ul> 
      {#each pages as page}
            <li>
              <a href={page.path !== 'home'? `/${page.path}` : '/'}>{page.name}</a>
            </li>
            {#if (page.subPages)}
              {#each page.subPages as subPage}
                  <li class='subpages'>
                      <a href={`/${page.path}/${subPage.path}`}>{subPage.name}</a>
                  </li>
              {/each}
            {/if}
      {/each}
    </ul>
  </nav>
</section>


<style>
	#backarrow {
		height: 4em; 
	}
  ul li.subpages > a  {
    padding-left: 1em;
  }
  nav > ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-left: 2em;
    text-align: left;
  }
  nav > ul li > a {
    font-size: var(--step-1);
    text-align: left;
  }
	section {
	margin: 0 auto;
	padding-bottom: 3em;
	white-space: pre-wrap;
	width: var(--page-width);
	}
</style>

