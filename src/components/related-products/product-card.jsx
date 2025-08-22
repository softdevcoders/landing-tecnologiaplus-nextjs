import Link from 'next/link';
import Image from 'next/image';
import { getOptimizedImageUrl } from "@/lib/imageUtils";

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
            src={getOptimizedImageUrl({ url: product.img, width: 600, quality: 80 })}
            alt={product.altText}
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