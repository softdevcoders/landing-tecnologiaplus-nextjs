"use client";

import { useProductColor } from '@/components/ver-mas-productos/galeria-ver-mas/contexts/ProductColorContext';
import Image from 'next/image';
import { generateThumbnailAlt, getOptimizedSizes, generateBlurDataURL, getOptimizedImageUrl } from "../../../../../lib/imageUtils";
import styles from './color-selector.module.scss';

const ColorSelector = ({
  title = "Elige el color",
  showLabel = false,
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
      {title && <span className={styles.title}>{title}</span>}
      <span className={styles.colorSelected_label}>{colors.find(color => color.id === selectedColor)?.name}</span>
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
                <Image
                  src={getOptimizedImageUrl({url: thumbnail.src, width: 150, height: 150, quality: 80})}
                  alt={`Color: ${item.name}`} 
                  width={80} 
                  height={80}
                  sizes={getOptimizedSizes('color-selector', false)}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain' 
                  }}
                  priority={true}
                  blurDataURL={generateBlurDataURL()}
                  placeholder="blur"
                  unoptimized={true}
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