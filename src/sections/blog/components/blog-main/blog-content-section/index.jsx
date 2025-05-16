import Card from "@/sections/blog/components/card";
import style from "./blog-content-section.module.scss";
import Link from "next/link";
import { categories } from "@/data/categories";
import blogs from "@/data/blogs";

const BlogContentSection = ({ posts, pagination }) => {
  return (
    <div className={style.blogContent__container}>
      <div className={style.blogContent__content}>
        <div className={style.blogContent__grid}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>

        <div className={style.blogContent__pagination}>
          {Array.from({ length: pagination.totalPages }, (_, i) => ++i).map((page) => (
            <Link 
              key={page} 
              href={`?page=${page}`} 
              className={`${style.blogContent__paginationButton} ${+pagination.currentPage === page ? style.blogContent__paginationButton__active : ''}`}
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
      <div className={style.blogContent__categories}>
        <h2 className={style.blogContent__categoriesTitle}>Categorías</h2>
        <ul className={style.blogContent__categoriesList}>
          {Object.keys(categories).map((category) => (
            <li key={categories[category].category_key} className={style.blogContent__categoriesItem}>
              <Link href={`/blog${categories[category].url_category}`} className={style.blogContent__categoriesLink}>
                {`${categories[category].category_name} (${blogs.filter((post) => post.categories.includes(category)).length})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogContentSection;