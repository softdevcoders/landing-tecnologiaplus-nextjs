import Link from "next/link"
import Image from "next/image"
import LinkButton from "@/components/ui/link"
import style from "./card-related.module.scss"
import { truncateAltText, formatDate, cleanText } from "@/lib/blog"

const CarRelated = ({ post }) => {

  return (
    <article className={style.blogCard}>
      <Link href={post.enlace_completo} className={style.blogCard__image__link}> 
        <div className={style.blogCard__image} >
          <Image  
            src={`https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_500,q_80/${post?.imagen_principal?.src}`} 
            alt={post?.imagen_principal?.alt ?? truncateAltText(post?.titulo)}
            title={post?.imagen_principal?.title ?? truncateAltText(post?.titulo)}
            width={335}
            height={185}
            unoptimized={true}
            className={style.blogCard__image__img}
          />
        </div>
      </Link>
      
      <div data-nosnippet className={style.blogCard__content}>
        <Link href={post.enlace_completo} title={`Leer más sobre ${post.titulo}`}>
          <h3 className={style.blogCard__title}>
              {cleanText(post.titulo)}
          </h3>
        </Link>
        <p className={style.blogCard__excerpt}>
          {cleanText(post.extracto)}
        </p>
        <div className={style.blogCard__footer}>
          <time className={style.blogCard__date}>{formatDate(post.modified && new Date(post.fecha_modificacion) > new Date(post.fecha_creacion) ? post.fecha_modificacion : post.fecha_creacion)}</time>
          <LinkButton 
            href={post.enlace_completo} 
            title={`Leer más sobre ${post.titulo}`} 
            className={style.blogCard__button}
            size="small"
          >
            Leer más
          </LinkButton>
        </div>
      </div>
    </article>
  )
}

export default CarRelated