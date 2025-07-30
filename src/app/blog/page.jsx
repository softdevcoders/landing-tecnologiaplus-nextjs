import getMetadata from "@/request/server/metadata/get-metadata";
import BlogView from "@/sections/blog/views/root/blog-view";

export async function generateMetadata({ searchParams }) {
  const { root: metadata } = getMetadata('blog');
  
  // Si hay parámetro page=, aplicar configuración de noindex
  if (searchParams?.page) {
    return {
      ...metadata,
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    };
  }
  
  return metadata;
}

const BlogPage = async ({ searchParams }) => {
  const { page } = await searchParams;
  
  return (
    <BlogView page={page || 1} />
  );
}

export default BlogPage;