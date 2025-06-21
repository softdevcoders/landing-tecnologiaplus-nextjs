import getMetadata from "@/request/server/metadata/get-metadata";
import BlogView from "@/sections/blog/views/root/blog-view";

export async function generateMetadata() {
  const { root: metadata } = getMetadata('blog');
  return metadata;
}

const BlogPage = async ({ searchParams }) => {
  const { page } = await searchParams;
  
  return (
    <BlogView page={page || 1} />
  );
}

export default BlogPage;