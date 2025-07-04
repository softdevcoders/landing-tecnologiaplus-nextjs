import Link from 'next/link';
import style from './related-products.module.scss';

export default function ProductCard({ product }) {
  return (
    <div className={style.swiper__slide__card}>
      <div className={`${style.swiper__slide__card__info} ${product.shouldImageBeAtTheBottom ? style.swiper__slide__card__info__image__at__bottom : ""}`}>
        <Link href={product.link}> 
          <h3 className={style.swiper__slide__card__info__title}>{product.name}</h3>
        </Link>
        <Link href={product.link}> 
          <p className={style.swiper__slide__card__info__description}>{product.description}</p>
        </Link>
        <Link href={product.link}> 
          <div className={style.swiper__slide__card__info__img__container}>
            <img
              width={320} 
              height={230}
              src={product.img}
              alt={`imagen de ${product.name}`}
              className={`${style.swiper__slide__card__info__img} ${product.customClass ? product.customClass : ""}`}
              loading="lazy"
            />
          </div>
        </Link>
        <p className={style.swiper__slide__card__info__selling__counter}>{product.sold}</p>
      </div>
      <Link className={style.swiper__slide__card__btn} href={product.link}>
        Ver más
      </Link>
    </div>
  );
} 