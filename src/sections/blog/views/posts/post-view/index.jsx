import { getPosts } from "@/request/server/posts/get-posts";
import style from "./post-view.module.scss";
import Card from "@/sections/blog/components/card";
import { formatDate } from "@/lib/format-date";
import { cleanText } from "@/lib/clean-text";

const PostView = ({ post }) => {
  const { posts } = getPosts({ blogPostSlug: post.categories[0], page: 1, pageSize: 3 });

  return (
    <main className={style.blogPostView__container}>
      <article itemScope itemType="https://schema.org/BlogPosting" className={style.blogPostView__article}>
        <header className={style.blogPostView__header}>
          <h1 itemProp="headline" className={style.blogPostView__title}>{post.title.rendered}</h1>
        </header>

        <div itemProp="articleBody" className={style.blogPostView__content}>
          <div className={style.blogPostView__imageContainer}>
          <img 
            className={style.blogPostView__image}
            src={post.images[0]}  
          />

          </div>
          <div 
            className={style.blogPostView__contentHtml} 
            dangerouslySetInnerHTML={{ __html: cleanText(post.content?.rendered, ['br']) }} 
          />
        </div>

        <footer className={style.blogPostView__footer}>
          <div className={style.blogPostView__sharing}>
            <span className={style.blogPostView__sharingTitle}>Compartir</span>
            <ul className={style.blogPostView__sharingList}>
              <li className={style.blogPostView__sharingItem}>
                <a href="#" className={style.blogPostView__sharingLink}>Facebook</a>
              </li>
              <li className={style.blogPostView__sharingItem}>
                <a href="#" className={style.blogPostView__sharingLink}>Twitter</a>
              </li>
              <li className={style.blogPostView__sharingItem}>
                <a href="#" className={style.blogPostView__sharingLink}>LinkedIn</a>  
              </li>
            </ul>
          </div>
          <div className={style.blogPostView__dateInformation}>
            <p>Publicado: {formatDate(post.date)}</p>
            <p>Actualizado: junio 28, 2023</p>
          </div>
        </footer>
      </article>
      <aside aria-labelledby="related-title" className={style.blogPostView__related}>
        <h2 id="related-title" className={style.blogPostView__relatedTitle}>Artículos similares</h2>
        <ul className={style.blogPostView__relatedList}>
          {posts.map((post) => (
            <li key={post.id} itemProp="relatedLink" itemScope itemType="https://schema.org/BlogPosting" className={style.blogPostView__relatedItem}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}

export default PostView;