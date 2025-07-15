"use client";

import { useProductColor } from '@/contexts/ProductColorContext';
import ImageLoader from '../image-loader';
import { generateThumbnailAlt, getOptimizedSizes, generateBlurDataURL } from "../../utils/imageUtils";
import styles from './color-selector.module.scss';

const ColorSelector = ({
  title = "Elige el color",
  showLabel = true,
  size = "medium", // small, medium, large
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
      {title && <h3 className={styles.title}>{title}</h3>}
      
      <div className={`${styles.imageList} ${styles[size]}`}>
        {colors.map((item) => {
          // Tomamos la primera imagen del color como miniatura
          const thumbnail = item.thumbnail;
          if (!thumbnail) return null;

          return (
            <button
              key={item.id}
              className={`${styles.imageButton} ${selectedColor === item.id ? styles.selected : ''}`}
              onClick={() => setSelectedColor(item.id)}
              aria-label={`Seleccionar ${item.name}`}
              aria-pressed={selectedColor === item.id}
            >
              <div className={styles.imageWrapper}>
                <ImageLoader
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  sizes={getOptimizedSizes('color-selector', false)}
                  style={{ objectFit: 'cover' }}
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