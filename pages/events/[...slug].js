import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';

import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const year = +slug[0];
  const month = +slug[1];
  
  if (isNaN(year) || isNaN(month)) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const events = getFilteredEvents({
    year,
    month,
  });

  if (!events || events.length === 0) {
    return <p className="center">No event found for choosen filter!</p>;
  }

  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  );
}

export default FilteredEventsPage;
