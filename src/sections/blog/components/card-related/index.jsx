// import Link from "next/link"
import LinkButton from "@/components/ui/link"
import Link from "next/link"
import style from "./card-related.module.scss"
import { cleanText } from "@/lib/clean-text"
import { formatDate } from "@/lib/format-date"
import Image from "next/image"
import { truncateAltText } from "@/lib/truncate-alt-text"

const CarRelated = ({ post }) => {
  const optimizedAltText = truncateAltText(post?.metadata?.title);
  return (
    <article className={style.blogCard}>
      <Link href={post.current_link} className={style.blogCard__image__link}> 
        <div className={style.blogCard__image} >
          <Image  
            src={`https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_500/${post.images[0]}`} 
            alt={optimizedAltText}
            width={335}
            height={185}
            unoptimized={true}
            className={style.blogCard__image__img}
          />
        </div>
      </Link>
      
      <div className={style.blogCard__content}>
        <Link href={post.current_link} title={`Leer más sobre ${post.title.rendered}`}>
          <h3 className={style.blogCard__title}>
              {cleanText(post.title.rendered)}
          </h3>
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