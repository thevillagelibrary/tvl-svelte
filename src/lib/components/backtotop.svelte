<script>
    import BackToTop from '$lib/assets/icons/backtotop.svg'
    import BackArrow from '$lib/assets/icons/backarrow.svg'
    export let showOnPx = 150;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView();
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <svelte:window on:scroll={handleOnScroll} />
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <button on:click={goTop} class:hidden><svg width="28" height="28" fill="black" viewBox="0 0 256 256"><path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z"></path></svg></button>
  
  <style>

  button {  
    background-color: white;
    right: 40px;
    bottom: 0.1em;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
    border: none;
}

button.hidden {
	opacity:0;
    visibility: hidden;
}

button:not(.hidden):focus,
button:not(.hidden):hover {
	opacity:1;
}
  </style>
  