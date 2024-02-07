import { c as create_ssr_component, e as escape, f as each } from "../../../chunks/ssr.js";
function getFutureEvents(events) {
  let allEvents = [...events];
  allEvents.splice(0, 2);
  const eventCount = allEvents.length;
  let futureEvents = [];
  if (eventCount > 0) {
    futureEvents = allEvents.filter(checkEvent);
  }
  function checkEvent(event) {
    const today = Date.now();
    const todayDate = new Date(today);
    const todayObj = dateObj(todayDate);
    const eventString = Date.parse(event[1]);
    const eventDate = new Date(eventString);
    const eventObj = dateObj(eventDate);
    return eventObj.getTime() >= todayObj.getTime();
  }
  function dateObj(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
  return futureEvents;
}
const css = {
  code: "#home.svelte-1844mzy article.svelte-1844mzy.svelte-1844mzy{display:flex;flex-direction:column;margin-top:0}.vstack.svelte-1844mzy .svelte-1844mzy.svelte-1844mzy:not(:first-child){margin-top:.5em}#home.svelte-1844mzy h2.svelte-1844mzy.svelte-1844mzy{margin-left:auto;margin-right:auto;width:60%}#home.svelte-1844mzy section.svelte-1844mzy>.svelte-1844mzy:first-child{text-align:right}#home.svelte-1844mzy section.svelte-1844mzy>.svelte-1844mzy:last-child{text-align:left}#home.svelte-1844mzy section.svelte-1844mzy.svelte-1844mzy{display:flex;flex-direction:row;gap:2em;justify-content:space-around;margin-left:auto;margin-right:auto}#home.svelte-1844mzy section.svelte-1844mzy.svelte-1844mzy{font-size:var(--step-1);font-weight:500}#home.svelte-1844mzy.svelte-1844mzy.svelte-1844mzy{display:flex;flex-direction:column;justify-content:space-around;overflow-y:hidden;text-align:center}dd.svelte-1844mzy.svelte-1844mzy.svelte-1844mzy{margin:0 1em 0 1em;text-align:center}dl.svelte-1844mzy.svelte-1844mzy.svelte-1844mzy{font-size:var(--step-1);margin-bottom:0.625em;margin-left:auto;margin-right:auto;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const hoursData = data.items.valueRanges[0];
  const hours = hoursData.values[2][1];
  const upcomingEventsData = data.items.valueRanges[1];
  const events = upcomingEventsData.values;
  const futureEvents = getFutureEvents(events);
  const futureEventCount = futureEvents.length;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="pagewithoutsubpages"><section id="home" class="vstack svelte-1844mzy"><h2 class="svelte-1844mzy" data-svelte-h="svelte-1sfrqqj">Hours</h2> <small class="svelte-1844mzy">${escape(hours)}</small> <div class="divider full svelte-1844mzy"></div> <h2 class="svelte-1844mzy" data-svelte-h="svelte-e00ks4">Quick Links</h2> <section class="svelte-1844mzy" data-svelte-h="svelte-1x4buj"><article class="svelte-1844mzy"><a href="https://thevillagelibrary.library.site" class="svelte-1844mzy">Online Catalog</a> <a href="/newarrivals" class="svelte-1844mzy">New Arrivals</a> <a href="/newsevents/literaryprizes" class="svelte-1844mzy">Literary Prizes</a> <a href="https://thevillagelibrary.org/album/album.html" class="svelte-1844mzy">Photo Album</a></article> <article class="svelte-1844mzy"><a href="/donate" class="svelte-1844mzy">Donate</a> <a href="/donate/recentdonors" class="svelte-1844mzy">Recent Donors</a> <a href="/donate/supporters" class="svelte-1844mzy">Our Supporters</a> <a href="/about/bookdonations" class="svelte-1844mzy">Book Donations</a></article></section> <article class="svelte-1844mzy">${futureEventCount > 0 ? `<br class="svelte-1844mzy"> <div class="divider full svelte-1844mzy"></div> <h2 class="svelte-1844mzy" data-svelte-h="svelte-5y0elb">Upcoming Events</h2> <a href="/upcomingevents" class="svelte-1844mzy" data-svelte-h="svelte-1rsua8h">Click here for details.</a> <dl class="svelte-1844mzy">${each(futureEvents, (event, index) => {
    return `<div class="svelte-1844mzy"><dt class="svelte-1844mzy"><h3 class="svelte-1844mzy">${escape(event[3])}</h3></dt> <dd class="svelte-1844mzy">${escape(event[5])}, ${escape(event[2])}</dd> </div>`;
  })}</dl>` : ``}</article></section> </div>`;
});
export {
  Page as default
};
