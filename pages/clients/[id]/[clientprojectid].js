import { useRouter } from "next/router";

function SelectedClientProjectPage () {
  const router = useRouter();
  const query = router.query;

  console.log(query);

  return <div>
    <h1>The Project Page for a Spesific Project for a Selected Client</h1>
  </div>
}

export default SelectedClientProjectPage;