import BlogView from "@/sections/blog/views/root/blog-view";

const BlogPage = ({ searchParams }) => {
  const page = searchParams.page || 1;
  
  return (
    <BlogView page={page} />
  );
}

export default BlogPage;