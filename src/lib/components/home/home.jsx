import { Link, useLoaderData } from 'react-router-dom';
import UpcomingEventsLinks from '@/components/home/upcomingeventslinks';
import { PageBodyNoSideMenu } from '@/components/common';
import { getFutureEvents } from '@/components';

export default function Home() {
  const data = useLoaderData();
  const hoursData = data.valueRanges[0];
  const hours = hoursData.values[2][1];
  const upcomingEventsData = data.valueRanges[1];
  const events = upcomingEventsData.values;
  const futureEvents = getFutureEvents(events);
  localStorage.setItem('futureEvents', JSON.stringify(futureEvents))

  return (
    <>
      <PageBodyNoSideMenu name={'Home'}>
        <section id='home' className='vstack'>
          <h2>Hours</h2>
          <small>{hours}</small>
          <div className='divider full'></div>
          <h2>Quick Links</h2>
          <section>
            <article>
              <a href='https://thevillagelibrary.library.site'>
                Online Catalog
              </a>
              <Link to='/newarrivals'>New Arrivals</Link>
              <Link to='/newsevents/literaryprizes'>Literary Prizes</Link>
              <a
                href='https://thevillagelibrary.org/album/album.html'>
                Photo Album
              </a>
            </article>
            <article>
              <Link to='/donate'>Donate</Link>
              <Link to='/donate/recentdonors'>Recent Donors</Link>
              <Link to='/donate/supporters'>Our Supporters</Link>
              <Link to='/about/bookdonations'>Book Donations</Link>
            </article>
          </section>
          <article>
            <UpcomingEventsLinks futureEvents={futureEvents} />
          </article>
        </section>
      </PageBodyNoSideMenu>
    </>
  );
}
