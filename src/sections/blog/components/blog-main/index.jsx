import BlogHeroSection from "./blog-hero-section"
import BlogContentSection from './blog-content-section';
import style from './blog-main.module.scss';

const BlogMain = ({ posts, pagination }) => {
  return (
    <main className={style.blogMain__main}> 
      <BlogHeroSection />
      <BlogContentSection posts={posts} pagination={pagination} />
    </main>
  )
}

export default BlogMain;