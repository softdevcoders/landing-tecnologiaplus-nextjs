import style from './blog-main.module.scss';
import BlogHeroSection from "./blog-hero-section"
import BlogContentSection from './blog-content-section';
import { routes } from "@/config/routes";
import Link from '@/components/ui/link';

const BlogMain = ({ posts, pagination }) => {
  return (
    <main className={style.blogMain__main}> 
      <BlogHeroSection />
      {
        posts.length === 0 ? (
          <div className={style.blogMain__noPosts}>
            <h2>No hay publicaciones</h2>
            <p>Lo sentimos, no hay publicaciones disponibles en este momento.</p>
            <Link href={routes.blog.url} title="Ir a todos los blogs">
              Ir a todos los blogs
            </Link>
          </div>
        ) : (
          <BlogContentSection posts={posts} pagination={pagination} />
        )

      }
    </main>
  )
}

export default BlogMain;