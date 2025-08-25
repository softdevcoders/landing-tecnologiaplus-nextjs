"use client";

import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import Image from "next/image";
import { generateImageAlt, shouldUsePriority, getOptimizedSizes, generateBlurDataURL, getOptimizedImageUrl } from "../../../../../lib/imageUtils";
import styles from "./zoomable-image-direct.module.scss";

const ZoomableImageDirect = ({
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
  isMobile = false,
  onOpenGalleryModal = () => {}
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

  // Manejador para el movimiento del mouse durante el zoom
  const handleMouseMove = useCallback((e) => {
    if (isZoomed && !isMobile && isSelected && imageRef.current) {
      e.preventDefault();
      e.stopPropagation();
      const rect = imageRef.current.getBoundingClientRect();
      const newPosition = calculateZoomPosition(e.clientX, e.clientY, rect);
      onZoomPositionChange(newPosition);
    }
  }, [isZoomed, isMobile, isSelected, calculateZoomPosition, onZoomPositionChange]);

  // Manejador específico para cerrar zoom
  const handleCloseZoom = useCallback((e) => {
    if (!isMobile) {
      e.preventDefault();
      e.stopPropagation();
      onZoomChange(false);
    }
  }, [onZoomChange, isMobile]);

  // Manejador para click que activa zoom en desktop o abre modal en móvil
  const handleClick = useCallback((e) => {
    // Solo detenemos la propagación si vamos a hacer zoom o abrir el modal
    if ((isMobile && isSelected) || (!isMobile && isSelected && !isZoomed)) {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile) {
        onOpenGalleryModal();
      } else {
        onZoomChange(true);
      }
    } else if (isZoomed) {
      e.preventDefault();
      e.stopPropagation();
      onZoomChange(false);
    }
  }, [isMobile, isSelected, isZoomed, onZoomChange, onOpenGalleryModal]);

  // Estilos para la imagen con soporte de zoom
  const imageStyles = useMemo(() => ({
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    transform: isZoomed && !isMobile ? `scale(${1.75}) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'none',
    transformOrigin: '0 0'
  }), [isZoomed, isMobile, zoomPosition.x, zoomPosition.y]);

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
      className={`${styles.imageWrapper} ${isZoomed && !isMobile ? styles.zoomedWrapper : ''}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      style={
        isZoomed && !isMobile
          ? { cursor: 'zoom-out', pointerEvents: 'all' }
          : !isMobile && isSelected
            ? { cursor: 'zoom-in', pointerEvents: 'all' }
            : { cursor: 'pointer', pointerEvents: isSelected ? 'all' : 'none' }
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
        <Image
          src={getOptimizedImageUrl({url: image.src, width: 1600, quality: 80})} 
          alt={altText}
          width={1800}
          height={1800}
          priority={usePriority}
          sizes={optimizedSizes}
          style={imageStyles}
          placeholder="blur"
          blurDataURL={generateBlurDataURL()}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default ZoomableImageDirect; 