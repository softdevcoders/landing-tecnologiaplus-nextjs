import Image from "next/image";
import style from "./post-view.module.scss";
import { routes } from "@/config/routes";
import { getPosts } from "@/request/server/posts/get-posts";
import CarRelated from "@/sections/blog/components/card-related";
import PreguntasFrecuentesBlog from "@/sections/blog/components/preguntas-frecuentes";
import { truncateAltText, formatDate, htmlReader } from "@/lib/blog";


const PostView = ({ post }) => {
  const { posts } = getPosts({ category: post.categoria, page: 1, pageSize: 3, exclude: [post.id] });

  const message = `Hola, te comparto este artículo: \n\n${process.env.NEXT_PUBLIC_BASE_URL}${post.enlace_completo}/`;

  const optimizedAltText = truncateAltText(post?.titulo);

  let shouldAddMarginBottom = true;

  switch (post.categoria) {
    case routes.blog.children.llamadoresDeMeseros.category_key:
      shouldAddMarginBottom = false;
      break;
    case routes.blog.children.localizadoresParaRestaurantes.category_key:
      shouldAddMarginBottom = false;
      break;
  }

  return (
    <>
      <main className={`${style.blogPostView__container} ${shouldAddMarginBottom ? style.blogPostView__containerWithMarginBottom : ""}`}>
        <article className={style.blogPostView__article} data-blog-article="true">
          <header className={style.blogPostView__header}>
            <h1 className={style.blogPostView__title}>{post.titulo}</h1>
          </header>

          <div className={style.blogPostView__content}>  
            <div className={style.blogPostView__imageContainer}>
              <Image
                src={`https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/${post.imagen_principal.src}`} 
                alt={post.imagen_principal.alt ?? optimizedAltText}
                title={post.imagen_principal.title ?? optimizedAltText}
                className={style.blogPostView__image}
                loading="eager"
                width={720}
                height={405}
                unoptimized={true}
              />
            </div>
            <div 
              className={style.blogPostView__contentHtml} 
              dangerouslySetInnerHTML={{ __html: htmlReader(post.plantilla) }}
              data-nosnippet
            />
          </div>

          <footer className={style.blogPostView__footer}>
            <div className={style.blogPostView__sharing}>
              <span className={style.blogPostView__sharingTitle}>Compartir</span>
              <ul className={style.blogPostView__sharingList}>
                <li className={style.blogPostView__sharingItem}>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}${post.enlace_completo}`)}`} 
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
              <p>Publicado: {formatDate(post.fecha_creacion)}</p>
              {post.fecha_modificacion && (
                <p>Actualizado: {formatDate(post.fecha_modificacion)}</p>
              )}
            </div>
          </footer>
        </article>
        <aside aria-labelledby="related-title" className={style.blogPostView__related}>
          <h2 id="related-title" className={style.blogPostView__relatedTitle}>Artículos similares</h2>
          <ul className={style.blogPostView__relatedList}>
            {posts.map((post) => (
              <li key={post.id} className={style.blogPostView__relatedItem}>
                <CarRelated post={post} />
              </li>
            ))}
          </ul>
        </aside>
      </main>
      <PreguntasFrecuentesBlog categoryKey={post.categoria} />
    </>
  );
}

export default PostView;