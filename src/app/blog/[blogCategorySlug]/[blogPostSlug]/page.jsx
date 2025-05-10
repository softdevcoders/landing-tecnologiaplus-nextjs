import { getPosts } from "@/request/server/posts/get-posts";

const BlogPostPage = () => {

  const posts = getPosts();

  return (
    <div>
      <h1>BlogPostPage</h1>
      <p>Welcome to the BlogPostPage page!</p>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPostPage;