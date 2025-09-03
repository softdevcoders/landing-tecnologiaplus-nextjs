import Card from "@/sections/blog/components/card";
import style from "./blog-content-section.module.scss";
import Link from "next/link";
import blogs from "@/data/blogs";
import { routes } from "@/config/routes";
import Pagination from "@/sections/blog/components/pagination";

const BlogContentSection = ({ posts, pagination }) => {
  const categories = routes.blog.children;

  return (
    <div className={style.blogContent__container} data-nosnippet>
      <div className={style.blogContent__content}>
        <div className={style.blogContent__grid}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>

        <Pagination 
          totalPages={pagination.totalPages} 
          currentPage={+pagination.currentPage} 
        />
      </div>
      <div className={style.blogContent__categories}>
        <h2 className={style.blogContent__categoriesTitle}>Categorías</h2>
        <ul className={style.blogContent__categoriesList}>
          <li className={style.blogContent__categoriesItem}>
            <Link href={routes.blog.url} className={style.blogContent__categoriesLink}>
              Todos los artículos ({blogs.length})
            </Link>
          </li>
          {Object.keys(routes.blog.children).map((category) => (
            <li key={categories[category].category_key} className={style.blogContent__categoriesItem}>
              <Link href={categories[category].url} className={style.blogContent__categoriesLink}>
                {`${categories[category].category_name} (${blogs.filter((post) => post.categories.includes(categories[category].category_key)).length})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogContentSection;