<script>  
import Facebook from '$lib/assets/images/Facebook.png';
import InstagramIcon from '$lib/assets/images/Instagram.png';
</script>


<section>
  <address>
    Village Library, Inc.
    <br />
    1 Skidaway Village Square
    <br />
    Savannah, GA 31411
    <br />
    (912) 598-1183
  </address>
</section>
<section>
  <article>
    <a
      id='facebook'
      href='http://www.facebook.com/SIvillagelibrary/'>
      <img alt='Facebook' src={Facebook} />
    </a>
    <a
      id='instagram'
      href='http://www.instagram.com/si_village_library'>
      <img
        alt='Follow us on Instagram'
        src={InstagramIcon}
      />
    </a>
  </article>
  <br />
  <a href='/menu'>
    Site Map
  </a>
</section>
<section>
  <a href='mailto:thevillagelibrary.inc@gmail.com'>
    Contact our Webmaster
  </a>
</section>

<style>    
  img {
        display: block;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        width: 3em;
    }
</style>