import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  const query = router.query;
  console.log(query);

  const loadProjectHandler = () => {
    // load data ...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: query.id,
        clientprojectid: 'next.js-course',
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
