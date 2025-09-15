import Image from "next/image"
import Link from "next/link"
import LinkButton from "@/components/ui/link"
import style from "./card-home.module.scss"
import { truncateAltText, cleanText, formatDate } from "@/lib/blog"

const CardHome = ({ post }) => {
  return (
    <article className={style.blogCard}>
      <Link href={post.enlace_completo} className={style.blogCard__image__link}> 
        <div className={style.blogCard__image} >
          <Image  
            src={`https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_800/${post?.imagen_principal?.src}`} 
            alt={post?.imagen_principal?.alt ?? truncateAltText(post?.titulo)}
            title={post?.imagen_principal?.title ?? truncateAltText(post?.titulo)}
            width={435}
            height={235}
            unoptimized={true}
            className={style.blogCard__image__img}
          />
        </div>
      </Link>
      
      <div className={style.blogCard__content}>
        <Link href={post.enlace_completo}>
          <h2 className={style.blogCard__title}>
              {cleanText(post.titulo)}
          </h2>
        </Link>
        <Link href={post.enlace_completo}>
          <p className={style.blogCard__excerpt}>
            {cleanText(post.extracto)}
          </p>
        </Link>
        <div className={style.blogCard__footer}>
          <time className={style.blogCard__date}>{formatDate(post.fecha_creacion)}</time>
          <LinkButton href={post.enlace_completo} title={`Leer más sobre ${post.titulo}`} className={style.blogCard__button}>
            Leer más
          </LinkButton>
        </div>
      </div>
    </article>
  )
}

export default CardHome