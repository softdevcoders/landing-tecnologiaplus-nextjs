import style from './blog-main.module.scss';
import BlogHeroSection from "./blog-hero-section"
import BlogContentSection from './blog-content-section';
import { routes } from "@/config/routes";
import Link from '@/components/ui/link';

const BlogMain = ({ posts, pagination, shouldAddMarginBottom = true }) => {
  return (
    <main className={`${style.blogMain__main} ${shouldAddMarginBottom ? style.blogMain__mainWithMarginBottom : ""}`}>
      <BlogHeroSection />
      {
        posts.length === 0 ? (
          <div className={style.blogMain__noPosts}>
            <h2>No hay artículos</h2>
            <p>Lo sentimos, no hay artículos disponibles en este momento.</p>
            <Link href={routes.blog.url} title="Todos los artículos">
              Todos los artículos
            </Link>
          </div>
        ) : (
          <BlogContentSection posts={posts} pagination={pagination} shouldAddMarginBottom={shouldAddMarginBottom} />
        )
      }
    </main>
  )
}

export default BlogMain;