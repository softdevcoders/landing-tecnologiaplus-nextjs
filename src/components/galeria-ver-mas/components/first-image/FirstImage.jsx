import Image from "next/image";
import { generateImageAlt, getOptimizedSizes } from "../../utils/imageUtils";
import styles from "./first-image.module.scss";

const FirstImage = ({ 
  image, 
  index, 
  productTitle = '', 
  selectedColor = '', 
  isMobile = false 
}) => {
  if (!image || image.type === 'video') {
    return null;
  }

  const altText = generateImageAlt(image, index, productTitle, selectedColor);
  const optimizedSizes = getOptimizedSizes('main', isMobile);

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={altText}
          width={image.width}
          height={image.height}
          priority={true}
          sizes={optimizedSizes}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          unoptimized={false}
          quality={85}
        />
      </div>
    </div>
  );
};

export default FirstImage; 