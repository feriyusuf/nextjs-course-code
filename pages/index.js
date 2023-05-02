import { useEffect, useState } from 'react';
import EventList from '../components/events/event-list';
import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return Object.keys(data)
        .map((key) => {
          return { ...data[key], id: key };
        })
        .filter((event) => event.isFeatured);
    });

function HomePage(props) {
  const [events, setEvents] = useState(props.events);
  const { data, error } = useSWR(
    'https://nextjs-course-code-b9589-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !events) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-course-code-b9589-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );

  const data = await response.json();
  const events = Object.keys(data)
    .map((key) => {
      return { ...data[key], id: key };
    })
    .filter((event) => event.isFeatured);

  return { props: { events } };
}

export default HomePage;
