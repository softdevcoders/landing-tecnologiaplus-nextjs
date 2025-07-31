"use client";

import { useState, useEffect } from 'react';
import FirstImage from './FirstImage';
import ZoomableImage from '../zoomable-image/ZoomableImage';
import styles from './first-image-wrapper.module.scss';

const FirstImageWrapper = ({ 
  image, 
  index, 
  productTitle = '', 
  selectedColor = '', 
  isMobile = false,
  isZoomed = false,
  zoomPosition = { x: 0, y: 0 },
  onZoomChange = () => {},
  onZoomPositionChange = () => {},
  isSelected = false
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que la imagen SSR ya se haya cargado
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Primera imagen (SSR) - siempre visible */}
      <div className={`${styles.firstImageContainer} ${isClient ? styles.hidden : ''}`}>
        <FirstImage
          image={image}
          index={index}
          productTitle={productTitle}
          selectedColor={selectedColor}
          isMobile={isMobile}
        />
      </div>
      
      {/* ZoomableImage (CSR) - aparece cuando el cliente está listo */}
      {isClient && (
        <div className={`${styles.zoomableImageContainer} ${styles.visible}`}>
          <ZoomableImage
            image={image}
            isZoomed={isZoomed}
            zoomPosition={zoomPosition}
            onZoomChange={onZoomChange}
            onZoomPositionChange={onZoomPositionChange}
            index={index}
            isSelected={isSelected}
            priority={true}
            productTitle={productTitle}
            selectedColor={selectedColor}
            isMobile={isMobile}
          />
        </div>
      )}
    </div>
  );
};

export default FirstImageWrapper; 