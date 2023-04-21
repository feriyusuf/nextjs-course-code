import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();
  const query = router.query;

  console.log(query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
