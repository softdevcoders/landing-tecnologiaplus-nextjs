import Card from "@/sections/blog/components/card";
import { getPosts } from "@/request/server/posts/get-posts";
import style from "./blog-content-section.module.scss";

const BlogContentSection = () => {
  const posts = getPosts()

  return (
    <div className={style.blogContent__container}>
      <div className={style.blogContent__grid}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
       {/* <div className={style.blogContent__pagination}>
        <button className={style.blogContent__paginationButton}>1</button>
        <button className={style.blogContent__paginationButton}>2</button>
        <button className={style.blogContent__paginationButton}>3</button>
       </div> */}
    </div>
  )
}

export default BlogContentSection;