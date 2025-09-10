import { getPosts } from '@/request/server/posts/get-posts';
import BlogMain from '@/sections/blog/components/blog-main';
import { routes } from '@/config/routes';

const CategoryView = ({ category, page }) => {
  const { posts, pagination } = getPosts({ category, page });

  let shouldAddMarginBottom = true;

  switch (category) {
    case routes.blog.children.llamadoresDeMeseros.category_key:
      shouldAddMarginBottom = false;
      break;
    case routes.blog.children.localizadoresParaRestaurantes.category_key:
      shouldAddMarginBottom = false;
      break;
    case routes.blog.children.llamadoDeEnfermeria.category_key:
      shouldAddMarginBottom = false;
      break;
    case routes.blog.children.turneroTurnoexpress.category_key:
      shouldAddMarginBottom = false;
      break;
  }
  
  return (
    <BlogMain posts={posts} pagination={pagination} shouldAddMarginBottom={shouldAddMarginBottom} />
  )
}

export default CategoryView;