import CategoryView from "@/sections/blog/views/categories/category-view";
import { getCategories } from "@/request/server/categories/get-categories";
import { notFound } from "next/navigation";

const BlogCategoryPage = async ({ searchParams, params }) => {
  const { blogCategorySlug } = await params
  const categories = getCategories();

  if (!Object.values(categories).some(category => category.slug === blogCategorySlug)) {
    return notFound();
  }

  const page = searchParams.page || 1;

  const category = Object.values(categories).find(category => category.slug === blogCategorySlug);

  return (
    <CategoryView page={page} category={category.category_key} />
  );
}

export default BlogCategoryPage;