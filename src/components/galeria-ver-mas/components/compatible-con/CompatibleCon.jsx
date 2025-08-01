import styles from "./compatible-con.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getOptimizedImageUrl } from "../../utils/imageUtils";

const CompatibleCon = ({ compatibleConProducts = [] }) => {
  return (
    <div className={styles.compatibleCon}>
      <span className={styles.compatibleCon__title}>Compatible con</span>
      <div className={styles.compatibleCon__products}>
        {compatibleConProducts.map((product, index) => ( 
          <Link href={product.url} className={styles.compatibleCon__product} key={index}>
            <Image 
              src={getOptimizedImageUrl({url: product?.mainImage?.src, width: 120, quality: 80})}  
              alt={product?.mainImage?.alt} 
              width={85} 
              height={85}
              className={styles.compatibleCon__product__image}
              unoptimized={true}
            />
            <div className={styles.compatibleCon__product__content}>
              <span className={styles.compatibleCon__product__title}>{product.title}</span>
              <span className={styles.compatibleCon__product__description}>{product.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompatibleCon;