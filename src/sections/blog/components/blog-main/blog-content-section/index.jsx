import Card from "@/sections/blog/components/card";
import style from "./blog-content-section.module.scss";
import Link from "next/link";

const BlogContentSection = ({ posts, pagination }) => {
  return (
    <div className={style.blogContent__container}>
      <div className={style.blogContent__grid}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>

      <div className={style.blogContent__pagination}>
        {Array.from({ length: pagination.totalPages }, (_, i) => ++i).map((page) => (
          <Link 
            key={page} 
            href={`/blog?page=${page}`} 
            className={`${style.blogContent__paginationButton} ${+pagination.currentPage === page ? style.blogContent__paginationButton__active : ''}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogContentSection;