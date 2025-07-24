import styles from "./compatible-con.module.scss";
import Image from "next/image";
import Link from "next/link";

const CompatibleCon = ({ compatibleConProducts = [] }) => {
  return (
    <div className={styles.compatibleCon}>
      <span className={styles.compatibleCon__title}>Compatible con</span>
      <div className={styles.compatibleCon__products}>
        {compatibleConProducts.map((product, index) => ( 
          <Link href={product.link} className={styles.compatibleCon__product} key={index}>
            <Image 
              src={product?.image?.url} 
              alt={product?.image?.alt} 
              width={85} 
              height={85}
              unoptimized={true}
              className={styles.compatibleCon__product__image}
            />
            <div className={styles.compatibleCon__product__content}>
              <span className={styles.compatibleCon__product__title}>{product.name}</span>
              <span className={styles.compatibleCon__product__description}>{product.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompatibleCon;