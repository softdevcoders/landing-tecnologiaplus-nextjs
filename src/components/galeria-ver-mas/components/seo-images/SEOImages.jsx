import Image from "next/image";
import { generateImageAlt, getOptimizedSizes } from "../../utils/imageUtils";

const SEOImages = ({ 
  mediaItems = [], 
  productTitle = '', 
  selectedColor = '', 
  isMobile = false 
}) => {
  // Filtrar solo imágenes (no videos)
  const imageItems = mediaItems.filter(item => item.type === 'image');

  if (imageItems.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {imageItems.map((image, index) => {
        const altText = generateImageAlt(image, index, productTitle, selectedColor);
        const optimizedSizes = getOptimizedSizes('main', isMobile);

        return (
          <Image
            key={`seo-${index}`}
            src={image.src}
            alt={altText}
            width={image.width}
            height={image.height}
            priority={index === 0} // Solo la primera imagen con priority
            sizes={optimizedSizes}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            unoptimized={false}
            quality={85}
          />
        );
      })}
    </div>
  );
};

export default SEOImages; 