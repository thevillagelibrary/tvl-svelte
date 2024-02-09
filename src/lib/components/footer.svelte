<script>
import Facebook from '$lib/assets/images/Facebook.png';
import InstagramIcon from '$lib/assets/images/Instagram.png';
</script>

<footer>
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
  <a href='mailto:thevillagelibrary.org@gmail.com'>
    Contact our Webmaster
  </a>
</section></footer>

<style>    
  img {
        display: block;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        width: 3em;
    }			footer :nth-child(2) {
				display: flex;
				flex-direction: column;
			}
			footer a {
				color: var(--color-white);
			}
			footer a {
				font-size: var(--step--1);
				margin: 0;
			}
			footer a:hover {
				color: var(--color-link-hover);
			}
			footer address {
				font-size: var(--step--1);
			}
			footer article {
				display: flex;
				flex-direction: row;
				gap: 1em;
				height: fit-content;
			}
			footer {
				background-color: var(--color-tertiary);
				color: var(--color-white);
				display: flex;
				flex-direction: row;
				flex-shrink: 0;
				font-size: var(--step--3);
				justify-content: space-around;
				line-height: 1.2em;
				margin-top: 0.625em;
				padding: 0.25em 0;
				text-align: center;
			}
</style>