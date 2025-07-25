import { getPost } from "@/request/server/posts/get-post";
import PostView from "@/sections/blog/views/posts/post-view";
import { ROBOTS_CONFIG, LOGO_METADATA } from "@/data/metadata/config";
import { notFound } from "next/navigation";
import { generateImageVariants, generateImageAltText } from "@/lib/optimizedImageServer";
import { cleanText } from "@/lib/clean-text";
import { routes } from "@/config/routes";

export const dynamic = "force-static";

// Page Metadata Optimizado para SEO de Imágenes
export async function generateMetadata({ params }) {
  try {
    const { blogPostSlug } = await params;
    
    const post = getPost({ blogPostSlug });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';
    
    if (!post) {
      return null;
    }

    // Generar todas las variantes de imagen optimizadas
    const imageVariants = generateImageVariants(post.images[0]);
    
    // Generar alt text descriptivo
    const imageAltText = generateImageAltText(
      cleanText(post?.metadata?.title), 
      post?.categories?.[0]
    );

    // Obtener fecha de publicación y modificación
    const publishedDate = post.date ? new Date(post.date).toISOString() : undefined;
    const modifiedDate = post.modified ? new Date(post.modified).toISOString() : publishedDate;
    
    return {
      title: {
        absolute: cleanText(post?.metadata?.title)
      },
      keywords: post?.metadata?.keywords,
      description: cleanText(post?.metadata?.description),
      robots: ROBOTS_CONFIG,
      openGraph: {
        title: {
          absolute: cleanText(post?.metadata?.title)
        },
        description: cleanText(post?.metadata?.description),
        url: `${baseUrl}${post.current_link}`,
        siteName: 'Tecnología Plus',
        images: [{
          url: imageVariants?.openGraph,
          width: 1200,
          height: 630,
          alt: imageAltText,
        }],
        locale: 'es-ES',
        type: 'article',
        authors: ['Tecnología Plus'],
        publishedTime: publishedDate,
        modifiedTime: modifiedDate,
        section: `${Object.values(routes.blog.children).find(child => child.category_key === post?.categories?.[0])?.label} - Blog` || 'Blog',
        tags: post?.metadata?.keywords || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: {
          absolute: cleanText(post?.metadata?.title)
        },
        description: cleanText(post?.metadata?.description),
        images: [{
          url: imageVariants?.twitterCard,
          width: 1200,
          height: 628,
          alt: imageAltText,
          type: 'image/jpeg',
        }],
      },
      other: {
        image: imageVariants?.openGraph,
        'image:width': 1200,
        'image:height': 630,
        'image:alt': imageAltText,
      },
      alternates: {
        canonical: `${baseUrl}${post.current_link}`,
      },
      manifest: `${baseUrl}/manifest.json`,
      icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: LOGO_METADATA,
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