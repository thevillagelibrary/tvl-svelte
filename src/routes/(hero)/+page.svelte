<script>
  import { browser } from '$app/environment';
  export let data;
  import {UpcomingEventsLinks} from '$lib/components';
  import { getFutureEvents } from '$lib/components';
  const hoursData = data.items.valueRanges[0];
  const hours = hoursData.values[2][1];
  const upcomingEventsData = data.items.valueRanges[1];
  const events = upcomingEventsData.values;
  const futureEvents = getFutureEvents(events);
  if (browser) {
    localStorage.setItem('futureEvents', JSON.stringify(futureEvents))
  }
  
</script>




  

      <section class='pagenosidemenu'>
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
            <UpcomingEventsLinks {futureEvents} />
          </article>
        </section>
      </section>