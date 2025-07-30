import CategoryView from "@/sections/blog/views/categories/category-view";
import { getCategories } from "@/request/server/categories/get-categories";
import { notFound } from "next/navigation";
import getMetadata from "@/request/server/metadata/get-metadata";
import PreguntasFrecuentesBlog from "@/sections/blog/components/preguntas-frecuentes";

export async function generateMetadata({ params, searchParams }) {
  
  const { blogCategorySlug } = await params;
  const metadata = getMetadata('blog');
  const baseMetadata = metadata[blogCategorySlug];
  
  // Si hay parámetro page=, aplicar configuración de noindex
  if (searchParams?.page) {
    return {
      ...baseMetadata,
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
  
  return baseMetadata;
}

const BlogCategoryPage = async ({ searchParams, params }) => {
  const { blogCategorySlug } = await params
  const categories = getCategories();

  if (!Object.values(categories).some(category => category.slug === blogCategorySlug)) {
    return notFound();
  }

  const { page } = await searchParams;

  const category = Object.values(categories).find(category => category.slug === blogCategorySlug);

  return (
    <>
      <CategoryView page={page || 1} category={category.category_key} />
      <PreguntasFrecuentesBlog categoryKey={category.category_key} /> 
    </>
  );
}

export default BlogCategoryPage;