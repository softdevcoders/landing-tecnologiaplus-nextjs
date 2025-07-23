import { getPosts } from "@/request/server/posts/get-posts";
import style from "./post-view.module.scss";
import { formatDate } from "@/lib/format-date";
import { htmlReader } from "@/lib/html-reader";
import CarRelated from "@/sections/blog/components/card-related";
import Link from "next/link";
import { routes } from "@/config/routes";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { generateImageVariants } from "@/lib/optimizedImageServer";
import { truncateAltText } from "@/lib/truncate-alt-text";

const PostView = ({ post }) => {
  const { posts } = getPosts({ category: post.categories[0], page: 1, pageSize: 3, exclude: [post.id] });
  const message = `Hola, te comparto este artículo: \n\n${process.env.NEXT_PUBLIC_BASE_URL}${post.current_link}/`;
  const whatsappLink = `https://wa.me/573164682034?text=Hola, vengo del artículo "${post.title.rendered}" y quiero más información.`;

  const optimizedAltText = truncateAltText(post?.metadata?.title);
  const imageVariants = generateImageVariants(post.images[0]);

  return (
    <>
      <ArticleSchema 
        post={post} 
        baseUrl={process.env.NEXT_PUBLIC_BASE_URL} 
      />
      
      <main className={style.blogPostView__container}>
      <article itemScope itemType="https://schema.org/BlogPosting" className={style.blogPostView__article}>
        <header className={style.blogPostView__header}>
          <h1 itemProp="headline" className={style.blogPostView__title}>{post.title.rendered}</h1>
        </header>

        <div itemProp="articleBody" className={style.blogPostView__content}>
          <div className={style.blogPostView__imageContainer}>
            <img
              src={imageVariants?.original} 
              alt={optimizedAltText}
              className={style.blogPostView__image}
              loading="eager"
              itemProp="image"
              width={720}
              height={405}
            />
          </div>
          <div 
            className={style.blogPostView__contentHtml} 
            dangerouslySetInnerHTML={{ __html: htmlReader(post.content.template_name) }} 
          />
          <div className={style.blogPostView__contentHtlmFooter}>
            <p  className={style.blogPostView__contentHtmlFooterText}><Link href={routes.contact.url} className={style.blogPostView__contentHtmlFooterLink}>Contáctanos hoy mismo</Link> y descubre cómo podemos llevar tu servicio al siguiente nivel!</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={style.blogPostView__contentHtmlFooterButton}>Cotizar</a>
          </div>
        </div>

        <footer className={style.blogPostView__footer}>
          <div className={style.blogPostView__sharing}>
            <span className={style.blogPostView__sharingTitle}>Compartir</span>
            <ul className={style.blogPostView__sharingList}>
              <li className={style.blogPostView__sharingItem}>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}${post.current_link}`)}`} 
                  className={`${style.blogPostView__sharingLink} ${style.facebook}`} 
                  title="Compartir en Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944985/facebook_2x-8_sy9pch.webp"
                    alt="Compartir en Facebook"
                    width={23}
                    height={48}
                  />
                </a>
              </li>
              <li className={style.blogPostView__sharingItem}>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(message)}`}
                  className={style.blogPostView__sharingLink} 
                  title="Compartir en WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944987/wpp_2x-8_tsgorp.webp"
                    alt="Compartir en WhatsApp"
                    width={48}
                    height={49}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={style.blogPostView__dateInformation}>
            <p>Publicado: {formatDate(post.date)}</p>
            {post.modified && (
              <p>Actualizado: {formatDate(post.modified)}</p>
            )}
          </div>
        </footer>
      </article>
      <aside aria-labelledby="related-title" className={style.blogPostView__related}>
        <h2 id="related-title" className={style.blogPostView__relatedTitle}>Artículos similares</h2>
        <ul className={style.blogPostView__relatedList}>
          {posts.map((post) => (
            <li key={post.id} itemProp="relatedLink" itemScope itemType="https://schema.org/BlogPosting" className={style.blogPostView__relatedItem}>
              <CarRelated post={post} />
            </li>
          ))}
        </ul>
      </aside>
    </main>
   </>
  );
}

export default PostView;