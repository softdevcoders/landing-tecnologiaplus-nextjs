import { getPost } from "@/request/server/posts/get-post";
import PostView from "@/sections/blog/views/posts/post-view";
import { ROBOTS_CONFIG } from "@/data/metadata/config";
import { notFound } from "next/navigation";

// // Page Metadata
export async function generateMetadata({ params }) {
  try {
    const { blogPostSlug } = await params;
    
    const post = getPost({ blogPostSlug });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    return {
      title: {
        absolute: post?.metadata?.title
      },
      keywords: post?.metadata?.keywords,
      description: post?.metadata?.description,
      robots: ROBOTS_CONFIG,
      openGraph: {
        title: {
          absolute: post?.metadata?.title
        },
        description: post?.metadata?.description,
        url: `${baseUrl}${post.current_link}`,
        siteName: post?.metadata?.title,
        images: [{
          url: `https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600/${post.images[0]}`,
          width: 600,
          height: 600,
          alt: post?.metadata?.title,
          type: 'image/jpg',
        }],
        locale: 'es-ES',
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: {
          absolute: post?.metadata?.title
        },
        description: post?.metadata?.description,
        url: `${baseUrl}${post.current_link}`,
        images: [{
          url: `https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600/${post.images[0]}`,
          width: 600,
          height: 600,
          alt: post?.metadata?.title,
          type: 'image/jpg',
        }],
      },
      alternates: {
        canonical: `${baseUrl}${post.current_link}`,
      },
      manifest: `${baseUrl}/manifest.json`,
      icons: {
        icon: 'favicon.ico',
        shortcut: 'favicon.ico',
        apple: 'favicon.ico',
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return null;
  }
}

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