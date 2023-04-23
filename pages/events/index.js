import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
