"use client";

import { useCallback, useMemo, useRef } from 'react';
import ImageLoader from "../image-loader";
import { generateImageAlt, shouldUsePriority, getOptimizedSizes, generateBlurDataURL } from "../../utils/imageUtils";
import styles from "./zoomable-image.module.scss";

const ZoomableImage = ({
  image,
  isZoomed,
  zoomPosition,
  onZoomChange,
  onZoomPositionChange,
  index,
  isSelected,
  priority = false,
  productTitle = '',
  selectedColor = '',
  isMobile = false
}) => {
  const imageRef = useRef(null);

  // Función memoizada para calcular la posición del zoom basada en las coordenadas del cursor
  const calculateZoomPosition = useCallback((clientX, clientY, rect) => {
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;
    const zoomLevel = 1.75;
    const maxOffset = (zoomLevel - 1) * 100;
    
    const x = relativeX * maxOffset;
    const y = relativeY * maxOffset;

    return {
      x: Math.max(0, Math.min(maxOffset, x)),
      y: Math.max(0, Math.min(maxOffset, y))
    };
  }, []);

  // Manejador memoizado para el movimiento del mouse durante el zoom
  const handleMouseMove = useCallback((e) => {
    if (!isZoomed || !imageRef.current) return;
    e.stopPropagation();
    
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(e.clientX, e.clientY, rect);
    onZoomPositionChange(newPosition);
  }, [isZoomed, calculateZoomPosition, onZoomPositionChange]);

  // Manejador memoizado para el movimiento táctil durante el zoom
  const handleTouchMove = useCallback((e) => {
    if (!isZoomed || !imageRef.current) return;
    
    // Prevenir scroll del navegador completamente
    e.preventDefault();
    e.stopPropagation();
    
    const touch = e.touches[0];
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(touch.clientX, touch.clientY, rect);
    onZoomPositionChange(newPosition);
  }, [isZoomed, calculateZoomPosition, onZoomPositionChange]);

  // Manejador para prevenir eventos de drag cuando está en zoom
  const handleTouchStart = useCallback((e) => {
    if (isZoomed) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [isZoomed]);

  const handleTouchEnd = useCallback((e) => {
    if (isZoomed) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [isZoomed]);

  // Manejador para cancelación de touch
  const handleTouchCancel = useCallback((e) => {
    if (isZoomed) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [isZoomed]);

  // Manejador específico para cerrar zoom
  const handleCloseZoom = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onZoomChange(false);
  }, [onZoomChange]);

  // Manejador memoizado para alternar el estado del zoom
  const handleImageClick = useCallback((e) => {
    e.stopPropagation();
    onZoomChange(!isZoomed);
  }, [isZoomed, onZoomChange]);

  // Estilos memoizados para la transformación del zoom
  const zoomStyles = useMemo(() => ({
    objectFit: 'contain',
    transform: isZoomed ? `scale(${1.75}) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'none',
    transformOrigin: '0 0'
  }), [isZoomed, zoomPosition.x, zoomPosition.y]);

  // Generar alt text descriptivo
  const altText = useMemo(() => 
    generateImageAlt(image, index, productTitle, selectedColor), 
    [image, index, productTitle, selectedColor]
  );

  // Determinar si usar priority
  const usePriority = useMemo(() => 
    priority || shouldUsePriority(index, 0, 1), 
    [priority, index]
  );

  // Optimizar sizes
  const optimizedSizes = useMemo(() => 
    getOptimizedSizes('main', isMobile), 
    [isMobile]
  );

  return (
    <div 
      ref={isSelected ? imageRef : null}
      className={`${styles.imageWrapper} ${isZoomed && isSelected ? styles.zoomedWrapper : ''}`}
      onClick={handleImageClick}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      style={
        isZoomed && isSelected
          ? { cursor: 'zoom-out' }
          : { cursor: 'zoom-in' }
      }
    >
      {/* Botón de cerrar zoom */}
      {isZoomed && isSelected && (
        <button
          className={styles.closeZoomButton}
          onClick={handleCloseZoom}
          onTouchEnd={handleCloseZoom}
          aria-label="Cerrar zoom"
          type="button"
        >
          <span className={styles.closeZoomIcon}>✕</span>
          <span className={styles.closeZoomText}>Cerrar zoom</span>
        </button>
      )}

      <div className={styles.imageContainer}>
        <ImageLoader
          src={image.src}
          alt={altText}
          width={image.width}
          height={image.height}
          priority={usePriority}
          sizes={optimizedSizes}
          style={zoomStyles}
          blurDataURL={generateBlurDataURL()}
          placeholder="blur"
          unoptimized={false}
          skipLoader={priority} // Evitar loader si es la primera imagen
        />
      </div>
    </div>
  );
};

export default ZoomableImage; 