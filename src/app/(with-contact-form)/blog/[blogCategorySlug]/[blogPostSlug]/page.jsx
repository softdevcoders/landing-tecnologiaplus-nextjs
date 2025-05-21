import { getPost } from "@/request/server/posts/get-post";
import PostView from "@/sections/blog/views/posts/post-view";

// // Page Metadata
export async function generateMetadata({ params }) {
  
  const { blogPostSlug } = await params;
  
  const post = getPost({ blogPostSlug });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      absolute: post?.metadata?.title
    },
    keywords: post?.metadata?.keywords,
    description: post?.metadata?.description,
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
      card: 'summary_large_image',
      title: {
        absolute: post?.metadata?.title
      },
      description: post?.metadata?.description,
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
      languages: {
        es: `${baseUrl}${post.current_link}`,
      },
    },
    manifest: `${baseUrl}/manifest.json`,
    icons: {
      icon: 'favicon.ico',
      shortcut: 'favicon.ico',
      apple: 'favicon.ico',
    },
  };
}

const BlogPostPage = async ({ params }) => {

  const { blogPostSlug } = await params;

  console.log("blogPostSlug", blogPostSlug);
  

  const post = getPost({ blogPostSlug });

  if (!post) {
    return notFound();
  }

  return (
    <PostView post={post} />
  );
}

export default BlogPostPage;