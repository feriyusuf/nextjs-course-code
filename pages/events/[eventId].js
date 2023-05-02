import { Fragment } from 'react';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import { getAllEvents, getEventById } from '../../helpers/api-util';

function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
