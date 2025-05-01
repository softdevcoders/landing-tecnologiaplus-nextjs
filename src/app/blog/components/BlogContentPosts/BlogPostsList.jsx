import Pagination from "@/app/components/Pagination/Pagination";
import styles from "./BlogPostsList.module.scss";
import { blogPosts } from "./blogPostsData";

function BlogPostsList() {
  return (
    <section className={styles.blog__posts__list}>
      <Pagination posts={blogPosts} />
    </section>
  );
}

export default BlogPostsList;
