<script>
  import { browser } from '$app/environment';
  export let data;
  import getFutureEvents from '$lib/utils/getfutureevents'
  const hoursData = data.items.valueRanges[0];
  const hours = hoursData.values[2][1];
  const upcomingEventsData = data.items.valueRanges[1];
  const events = upcomingEventsData.values;
  const futureEvents = getFutureEvents(events);
  const futureEventCount = futureEvents.length;
  if (browser) {
    localStorage.setItem('futureEvents', JSON.stringify(futureEvents))
  }  
</script>

<div class='pagewithoutsubpages'>
  <section id='home' class='vstack'>
    <h2>Hours</h2>
    <small>{hours}</small>
    <div class='divider full'></div>
    <h2>Quick Links</h2>
    <section>
      <article>
        <a href='https://thevillagelibrary.library.site'>
          Online Catalog
        </a>
        <a href='/newarrivals'>New Arrivals</a>
        <a href='/newsevents/literaryprizes'>Literary Prizes</a>
        <a
          href='https://thevillagelibrary.org/album/album.html'>
          Photo Album
        </a>
      </article>
      <article>
        <a href='/donate'>Donate</a>
        <a href='/donate/recentdonors'>Recent Donors</a>
        <a href='/donate/supporters'>Our Supporters</a>
        <a href='/about/bookdonations'>Book Donations</a>
      </article>
    </section>
    <article>
      {#if (futureEventCount > 0)}
      <br />
      <div class='divider full'></div>
      <h2>Upcoming Events</h2>
      <a href='/upcomingevents'>
        Click here for details.
      </a>
      <dl>
        {#each futureEvents as event, index}
          <div>
            <dt>
              <h3>{event[3]}</h3>
            </dt>
            <dd>
              {event[5]}, {event[2]}
            </dd>
          </div>
          {/each}
      </dl>
      {/if}
    </article>
  </section>
</div>

<style>    
  #home article {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
  .vstack :not(:first-child) {
		margin-top: .5em;
	}
  #home h2 {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
  #home section > :first-child {
    text-align: right;
  }
  #home section > :last-child {
    text-align: left;
  }
  #home section {
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
  }
  #home section {
    font-size: var(--step-1);
    font-weight: 500;
  }
  #home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: hidden;
    text-align: center;
  }
  dd {
				margin: 0 1em 0 1em;
				text-align: center;
			}
  dl {
    font-size: var(--step-1);
    margin-bottom: 0.625em;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
	}
</style>