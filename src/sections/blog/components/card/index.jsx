import Link from "next/link"
import style from "./card.module.scss"
import { cleanText } from "@/lib/clean-text"
import { formatDate } from "@/lib/format-date"

const Card = ({ post }) => {
  return (
    <article className={style.blogCard}>
      <div className={style.blogCard__image} >
        <img 
          src={post.yoast_head_json.og_image[0].url} 
          alt="Imagen representativa del post de llamado de enfermería" 
          className={style.blogCard__image__img} 
        />
      </div>
      
      <div className={style.blogCard__content}>
        <Link href={post.link} title="Leer el artículo completo sobre el sistema de llamado de enfermería">
          <h2 className={style.blogCard__title}>
              {cleanText(post.title.rendered)}
          </h2>
        </Link>
        <p className={style.blogCard__excerpt}>
          {cleanText(post.excerpt.rendered)}
        </p>
        <div className={style.blogCard__footer}>
          <time className={style.blogCard__date}>{formatDate(post.date)}</time>
          <Link href={post.link} className={style.blogCard__ctaButton} title="Leer más sobre el sistema de llamado de enfermería">
            Leer más
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Card