import getMetadata from "@/request/server/metadata/get-metadata";
import BlogView from "@/sections/blog/views/root/blog-view";

export async function generateMetadata() {
  const metadata = getMetadata('blog');
  return metadata;
}

const BlogPage = ({ searchParams }) => {
  const page = searchParams.page || 1;
  
  return (
    <BlogView page={page} />
  );
}

export default BlogPage;