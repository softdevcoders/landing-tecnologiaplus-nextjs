"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from "embla-carousel-react";

export const useMainCarousel = () => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true 
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

  // Efecto para actualizar el comportamiento del carrusel según el estado del zoom
  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.reInit({ dragFree: !isZoomed });
  }, [isZoomed, emblaMainApi]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const scrollTo = useCallback((index) => {
    if (emblaMainApi) emblaMainApi.scrollTo(index);
  }, [emblaMainApi]);

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