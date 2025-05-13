// import Link from "next/link"
import LinkButton from "@/components/ui/link"
import Link from "next/link"
import style from "./card.module.scss"
import { cleanText } from "@/lib/clean-text"
import { formatDate } from "@/lib/format-date"

const Card = ({ post }) => {
  return (
    <article className={style.blogCard}>
      <div className={style.blogCard__image} >
        <img 
          src={post.images[0]} 
          alt="Imagen representativa del post de llamado de enfermería" 
          className={style.blogCard__image__img} 
        />
      </div>
      
      <div className={style.blogCard__content}>
        <Link href={post.current_link} title="Leer el artículo completo sobre el sistema de llamado de enfermería">
          <h2 className={style.blogCard__title}>
              {cleanText(post.title.rendered)}
          </h2>
        </Link>
        <p className={style.blogCard__excerpt}>
          {cleanText(post.excerpt.rendered)}
        </p>
        <div className={style.blogCard__footer}>
          <time className={style.blogCard__date}>{formatDate(post.date)}</time>
          <LinkButton href={post.current_link} title="Leer más sobre el sistema de llamado de enfermería">
            Leer más
          </LinkButton>
        </div>
      </div>
    </article>
  )
}

export default Card