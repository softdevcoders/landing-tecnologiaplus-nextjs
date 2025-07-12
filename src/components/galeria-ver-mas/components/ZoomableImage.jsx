"use client";

import { useCallback, useMemo, useRef } from 'react';
import Image from "next/image";
import styles from "../image-gallery.module.scss";

const ZoomableImage = ({
  image,
  isZoomed,
  zoomPosition,
  onZoomChange,
  onZoomPositionChange,
  index,
  isSelected,
  priority = false
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
    
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(e.clientX, e.clientY, rect);
    onZoomPositionChange(newPosition);
  }, [isZoomed, calculateZoomPosition, onZoomPositionChange]);

  // Manejador memoizado para el movimiento táctil durante el zoom
  const handleTouchMove = useCallback((e) => {
    if (!isZoomed || !imageRef.current) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(touch.clientX, touch.clientY, rect);
    onZoomPositionChange(newPosition);
  }, [isZoomed, calculateZoomPosition, onZoomPositionChange]);

  // Manejador memoizado para alternar el estado del zoom
  const handleImageClick = useCallback(() => {
    onZoomChange(!isZoomed);
  }, [isZoomed, onZoomChange]);

  // Estilos memoizados para la transformación del zoom
  const zoomStyles = useMemo(() => ({
    objectFit: 'contain',
    transform: isZoomed ? `scale(${1.75}) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'none',
    transformOrigin: '0 0'
  }), [isZoomed, zoomPosition.x, zoomPosition.y]);

  return (
    <div 
      ref={isSelected ? imageRef : null}
      className={`${styles.imageWrapper} ${isZoomed && isSelected ? styles.zoomedWrapper : ''}`}
      onClick={handleImageClick}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={
        isZoomed && isSelected
          ? { cursor: 'zoom-out' }
          : { cursor: 'zoom-in' }
      }
    >
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={image.alt || `Imagen ${index + 1}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
          style={zoomStyles}
        />
      </div>
    </div>
  );
};

export default ZoomableImage; 