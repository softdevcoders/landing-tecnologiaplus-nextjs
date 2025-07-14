"use client";

import { useCallback, useState, useEffect, useMemo } from 'react';
import { useProductColorSafe } from '@/contexts/ProductColorContext';

export const useGalleryState = (media = [], colors = [], hasColors = false) => {
  const colorContext = useProductColorSafe();
  const [isMobile, setIsMobile] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  // Ordenar los medios: videos primero, luego imágenes (solo si no hay colores)
  const sortMedia = useCallback((mediaItems) => {
    if (!mediaItems || mediaItems.length === 0) return [];
    
    return [...mediaItems].sort((a, b) => {
      if (a.type === 'video' && b.type !== 'video') return -1;
      if (a.type !== 'video' && b.type === 'video') return 1;
      return 0;
    });
  }, []);

  // Memoizar los items a mostrar
  const displayMediaItems = useMemo(() => {
    if (hasColors && colorContext) {
      // Obtener los medios del color seleccionado
      const selectedColor = colorContext.getSelectedColor();
      return selectedColor?.media || [];
    }

    // Para items sin color, ordenamos con los videos primero
    return sortMedia(media);
  }, [colorContext, media, hasColors, sortMedia]);

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
    displayMediaItems,
    isMobile,
    zoomPosition,
    setZoomPosition,
    resetGalleryState,
    colorContext
  };
}; 