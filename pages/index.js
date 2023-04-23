import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        {featuredEvents.map((event) => {
          return <li>{event.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
