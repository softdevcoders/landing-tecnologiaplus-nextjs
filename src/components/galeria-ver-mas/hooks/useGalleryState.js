"use client";

import { useCallback, useState, useEffect, useMemo } from 'react';
import { useProductColorSafe } from '@/contexts/ProductColorContext';

export const useGalleryState = (images = [], fallbackImages = []) => {
  const colorContext = useProductColorSafe();
  const [isMobile, setIsMobile] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  // Memoizar las imágenes a mostrar
  const displayImages = useMemo(() => {
    if (colorContext) {
      const colorImages = colorContext.getImagesForSelectedColor();
      if (colorImages.length > 0) {
        return colorImages;
      }
    }
    return images.length > 0 ? images : fallbackImages;
  }, [colorContext, images, fallbackImages]);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Efecto para manejar el responsive y detectar dispositivos móviles
  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const resetGalleryState = useCallback((setIsZoomed, setSelectedIndex) => {
    setSelectedIndex(0);
    setIsZoomed(false);
    setZoomPosition({ x: 50, y: 50 });
  }, []);

  return {
    displayImages,
    isMobile,
    zoomPosition,
    setZoomPosition,
    resetGalleryState,
    colorContext
  };
}; 