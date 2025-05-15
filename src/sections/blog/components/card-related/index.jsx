// import Link from "next/link"
import LinkButton from "@/components/ui/link"
import Link from "next/link"
import style from "./card-related.module.scss"
import { cleanText } from "@/lib/clean-text"
import { formatDate } from "@/lib/format-date"
import ResponsiveImage from "@/components/ui/responsive-image"

const CarRelated = ({ post }) => {
  return (
    <article className={style.blogCard}>
      <div className={style.blogCard__image} >
        <ResponsiveImage  
          image={{
            src: post.images[0], 
            alt: `Imagen de ${post.title.rendered}`,
            className: style.blogCard__image__img,
            sizes: [
              { imageWidth: 335, mediaQuery: "(min-width: 0px)" }, 
            ],
          }}
        />
      </div>
      
      <div className={style.blogCard__content}>
        <Link href={post.current_link} title={`Leer más sobre ${post.title.rendered}`}>
          <h2 className={style.blogCard__title}>
              {cleanText(post.title.rendered)}
          </h2>
        </Link>
        <p className={style.blogCard__excerpt}>
          {cleanText(post.excerpt.rendered)}
        </p>
        <div className={style.blogCard__footer}>
          <time className={style.blogCard__date}>{formatDate(post.date)}</time>
          <LinkButton 
            href={post.current_link} 
            title={`Leer más sobre ${post.title.rendered}`} 
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