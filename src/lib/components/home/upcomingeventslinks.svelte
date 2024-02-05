<script>
  export let futureEvents;
  const futureEventCount = futureEvents.length;
</script>


      

  {#if (futureEventCount > 0)}
    <br />
    <div class='divider full'></div>
    <h2>Upcoming Events</h2>
    <a href='/upcomingevents'>
      Click here for details.
    </a>
    <dl id='upcomingevents'>
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