import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <>
      <article>
        <Link href={product.link}>
          <h3 itemProp="name">{product.name}</h3>
          <p itemProp="description">
            {product.description}
          </p>
          <Image
            width={320} 
            height={230}
            src={product.img}
            alt={`imagen de ${product.name}`}
            className={product.customClass ? product.customClass : ""}
            loading="lazy"
            itemProp="image"
          />
          <p itemProp="orderQuantity">
            {product.sold}
          </p>
        </Link>
      </article>
      <Link href={product.link}>Ver más</Link>
    </>
  );
} 