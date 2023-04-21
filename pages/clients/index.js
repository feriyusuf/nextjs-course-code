import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'feri', name: 'Feri' },
    { id: 'yusuf', name: 'Yusuf' },
    { id: 'nada', name: 'Nada' },
    { id: 'nuri', name: 'Nuri' },
    { id: 'awaliyah', name: 'Awaliyah' },
    { id: 'vani', name: 'Vani' },
    { id: 'nurbayani', name: 'Nurbayani' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
