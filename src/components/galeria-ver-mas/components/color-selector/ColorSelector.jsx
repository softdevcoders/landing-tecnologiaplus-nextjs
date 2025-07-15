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
    console.log('ColorSelector - No hay contexto de color');
    return null;
  }

  const { colors, selectedColor, setSelectedColor } = colorContext;

  // Si no hay colores, no mostrar nada
  if (!colors || colors.length === 0) {
    console.log('ColorSelector - No hay colores disponibles');
    return null;
  }

  console.log('ColorSelector - Renderizando selector con:', { colors, selectedColor });

  return (
    <div className={styles.imageSelector}>
      {title && <h3 className={styles.title}>{title}</h3>}
      
      <div className={`${styles.imageList} ${styles[size]}`}>
        {colors.map((item) => {
          console.log('ColorSelector - Procesando item:', item);
          
          // Usar thumbnail dedicado si existe, sino buscar en media
          let thumbnail;
          if (item.thumbnail) {
            thumbnail = item.thumbnail;
            console.log('ColorSelector - Usando thumbnail dedicado:', thumbnail);
          } else if (item.media && item.media.length > 0) {
            // Buscar la primera imagen en el array de media
            thumbnail = item.media.find(media => media.type === 'image');
            console.log('ColorSelector - Usando primera imagen de media:', thumbnail);
          }
          
          if (!thumbnail) {
            console.log('ColorSelector - No hay thumbnail disponible para:', item.name);
            return null;
          }

          return (
            <button
              key={item.id}
              className={`${styles.imageButton} ${selectedColor === item.id ? styles.selected : ''}`}
              onClick={() => {
                console.log('ColorSelector - Seleccionando color:', item.id);
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