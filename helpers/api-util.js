export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-course-code-b9589-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );

  const data = await response.json();
  const events = Object.keys(data).map((key) => {
    return { id: key, ...data[key] };
  });

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();

  return events.filter((event) => event.isFeatured);
}
