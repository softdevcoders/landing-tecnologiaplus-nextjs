"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from "embla-carousel-react";

export const useMainCarousel = () => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: "keepSnaps",
    align: "center",
    skipSnaps: false,
    slidesToScroll: 1,
    speed: 10,
    breakpoints: {
      '(max-width: 768px)': { 
        dragFree: false,
        containScroll: 'keepSnaps',
        speed: 15,
        skipSnaps: false
      }
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Callback para actualizar el índice seleccionado cuando cambia el carrusel
  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi]);

  // Efecto para sincronizar el índice seleccionado con el carrusel principal
  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on('select', onSelect);
    onSelect(); // Inicializar el estado
    return () => emblaMainApi.off('select', onSelect);
  }, [emblaMainApi, onSelect]);

  // Efecto para desactivar drag cuando está en zoom
  useEffect(() => {
    if (!emblaMainApi) return;
    
    if (isZoomed) {
      // Desactivar drag cuando está en zoom
      emblaMainApi.reInit({ 
        loop: true,
        dragFree: false,
        containScroll: "keepSnaps",
        align: "center",
        skipSnaps: false,
        slidesToScroll: 1,
        speed: 10,
        watchDrag: false,
        breakpoints: {
          '(max-width: 768px)': { 
            dragFree: false,
            containScroll: 'keepSnaps',
            speed: 15,
            skipSnaps: false,
            watchDrag: false
          }
        }
      });
    } else {
      // Reactivar drag cuando no está en zoom
      emblaMainApi.reInit({ 
        loop: true,
        dragFree: false,
        containScroll: "keepSnaps",
        align: "center",
        skipSnaps: false,
        slidesToScroll: 1,
        speed: 10,
        watchDrag: true,
        breakpoints: {
          '(max-width: 768px)': { 
            dragFree: false,
            containScroll: 'keepSnaps',
            speed: 15,
            skipSnaps: false,
            watchDrag: true
          }
        }
      });
    }
  }, [isZoomed, emblaMainApi]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) {
      if (isZoomed) {
        setIsZoomed(false);
      }
      emblaMainApi.scrollPrev();
    }
  }, [emblaMainApi, isZoomed, setIsZoomed]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) {
      if (isZoomed) {
        setIsZoomed(false);
      }
      emblaMainApi.scrollNext();
    }
  }, [emblaMainApi, isZoomed, setIsZoomed]);

  const scrollTo = useCallback((index) => {
    if (emblaMainApi) {
      if (isZoomed) {
        setIsZoomed(false);
      }
      emblaMainApi.scrollTo(index);
    }
  }, [emblaMainApi, isZoomed, setIsZoomed]);

  const reInitCarousel = useCallback(() => {
    if (emblaMainApi) {
      emblaMainApi.reInit();
    }
  }, [emblaMainApi]);

  return {
    emblaMainRef,
    selectedIndex,
    isZoomed,
    setIsZoomed,
    scrollPrev,
    scrollNext,
    scrollTo,
    reInitCarousel
  };
}; 