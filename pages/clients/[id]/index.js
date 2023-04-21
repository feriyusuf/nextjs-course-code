import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  const query = router.query;

  console.log(query);

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}

export default ClientProjectsPage;
