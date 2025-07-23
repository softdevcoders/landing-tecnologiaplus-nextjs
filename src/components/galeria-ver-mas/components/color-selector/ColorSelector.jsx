"use client";

import { useProductColor } from '@/contexts/ProductColorContext';
import ImageLoader from '../image-loader';
import { generateThumbnailAlt, getOptimizedSizes, generateBlurDataURL } from "../../utils/imageUtils";
import styles from './color-selector.module.scss';

const ColorSelector = ({
  title = "Elige el color",
  showLabel = true,
  size = "small", // small, medium, large
  productTitle = ''
}) => {
  const colorContext = useProductColor();
  
  // Si no hay contexto, no mostrar nada
  if (!colorContext) {
    return null;
  }

  const { colors, selectedColor, setSelectedColor } = colorContext;

  // Si no hay colores, no mostrar nada
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className={styles.imageSelector}>
      {title && <span className={styles.title}>{title}</span>}
      
      <div className={`${styles.imageList} ${styles[size]}`}>
        {colors.map((item) => {
          
          // Usar thumbnail dedicado si existe, sino buscar en media
          let thumbnail;
          if (item.thumbnail) {
            thumbnail = item.thumbnail;
        
          } else if (item.media && item.media.length > 0) {
            // Buscar la primera imagen en el array de media
            thumbnail = item.media.find(media => media.type === 'image');
        
          }
          
          if (!thumbnail) {
        
            return null;
          }

          return (
            <button
              key={item.id}
              className={`${styles.imageButton} ${selectedColor === item.id ? styles.selected : ''}`}
              onClick={() => {
            
                setSelectedColor(item.id);
              }}
              aria-label={`Seleccionar ${item.name}`}
              aria-pressed={selectedColor === item.id}
            >
              <div className={styles.imageWrapper}>
                <ImageLoader
                  src={thumbnail.src}
                  alt={generateThumbnailAlt(thumbnail, 0, productTitle, item.name)}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  sizes={getOptimizedSizes('color-selector', false)}
                  style={{ objectFit: 'contain' }}
                  priority={false}
                  blurDataURL={generateBlurDataURL()}
                  placeholder="blur"
                />
              </div>
              {showLabel && (
                <span className={styles.imageLabel}>{item.name}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector; 