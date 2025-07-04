import Link from 'next/link';
import style from './related-products.module.scss';

export default function ProductCard({ product }) {
  return (
    <article>
      <Link href={product.link} className={style.product__link}>
        <h3 itemProp="name">{product.name}</h3>
        <img
          width={320} 
          height={230}
          src={product.img}
          alt={`imagen de ${product.name}`}
          className={`${style.product__img} ${product.customClass ? product.customClass : ""}`}
          loading="lazy"
          itemProp="image"
        />
        <p itemProp="description">
          {product.description}
        </p>
        <p itemProp="orderQuantity">
          {product.sold}
        </p>
      </Link>
      <Link href={product.link}>Ver más</Link>
    </article>
  );
} 