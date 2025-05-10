import { getPost } from "@/request/server/posts/get-post";
import PostView from "@/sections/blog/views/posts/post-view";


const BlogPostPage = async ({ params }) => {

  const { blogPostSlug } = await params;

  const post = getPost({ blogPostSlug });

  if (!post) {
    return notFound();
  }

  return (
    <PostView post={post} />
  );
}

export default BlogPostPage;