// import Link from "next/link"
import LinkButton from "@/components/ui/link"
import Link from "next/link"
import style from "./card-related.module.scss"
import { cleanText } from "@/lib/clean-text"
import { formatDate } from "@/lib/format-date"
import Image from "next/image"

const CarRelated = ({ post }) => {
  return (
    <article className={style.blogCard}>
      <Link href={post.current_link}>
        <div className={style.blogCard__image} >
          <Image  
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${post.images[0]}`}
            alt={post.title.rendered}
            width={335}
            height={185}
            className={style.blogCard__image__img}
          />
        </div>
      </Link>
      
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