import Link from 'next/link';
import Image from 'next/image';
import { getOptimizedImageUrl } from "@/lib/imageUtils";
import style from "./related-products.module.scss";

export default function ProductCard({ product }) {
  return (
    <>
      <article className={style.product__card}>
        <Link href={product.link}>
          <h3 className={style.product__card__title}>{product.name}</h3>
          <p 
            className={style.product__card__description}>
            {product.description}
          </p>
          <Image
            width={320} 
            height={230}
            src={getOptimizedImageUrl({ url: product.img, width: 600, quality: 80 })}
            alt={product.altText}
            {...product.title_attribute && { title: product.title_attribute }}
            className={product.customClass ? product.customClass : ""}
            unoptimized={true}
          />
          <p className={style.product__card__description}>
            {product.sold}
          </p>
        </Link>
      </article>
      <Link href={product.link}>Ver más</Link>
    </>
  );
} 