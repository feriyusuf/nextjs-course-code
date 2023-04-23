import { useRouter } from 'next/router';
import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({
    year,
    month,
  });

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found for choosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}

export default FilteredEventsPage;
