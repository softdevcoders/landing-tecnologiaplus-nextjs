import BlogContentSection from '@/sections/blog/views/root/blog-content-section';
import style from './blog-view.module.scss';

import BlogHeroSection from "@/sections/blog/views/root/blog-hero-section"

const BlogView = () => {
  return (
    <main className={style.blogView__main}> 
      <BlogHeroSection />
      <BlogContentSection />
    </main>
  )
}

export default BlogView;