"use client";

import { useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import styles from "../galeria-ver-mas.module.scss";

const Thumbnails = ({ 
  images, 
  selectedIndex, 
  onThumbClick,
  isMobile 
}) => {
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: false,
    axis: isMobile ? 'x' : 'y',
    watchDrag: false,
    skipSnaps: false,
    align: 'start'
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaThumbsApi) return;
    
    const scrollSnaps = emblaThumbsApi.scrollSnapList();
    const currentIndex = emblaThumbsApi.selectedScrollSnap();
    
    setCanScrollPrev(currentIndex > 0);
    setCanScrollNext(currentIndex < scrollSnaps.length - 1);
  }, [emblaThumbsApi]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    if (!emblaThumbsApi) return;

    const delta = isMobile ? event.deltaX : event.deltaY;
    const scrollDirection = delta > 0 ? 1 : -1;
    
    const scrollMultiplier = 1.5;
    emblaThumbsApi.scrollTo(
      emblaThumbsApi.selectedScrollSnap() + (scrollDirection * scrollMultiplier)
    );
    updateScrollButtons();
  }, [emblaThumbsApi, isMobile, updateScrollButtons]);

  // Efecto para manejar el scroll del mouse en las miniaturas
  useEffect(() => {
    if (!emblaThumbsRef.current) return;

    const element = emblaThumbsRef.current;
    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [emblaThumbsRef, handleWheel]);

  const scrollThumbsPrev = useCallback(() => {
    if (!emblaThumbsApi) return;
    
    const viewportSize = emblaThumbsApi.scrollSnapList().length;
    const currentIndex = emblaThumbsApi.selectedScrollSnap();
    const targetIndex = Math.max(0, currentIndex - Math.floor(viewportSize / 2));
    
    emblaThumbsApi.scrollTo(targetIndex);
    updateScrollButtons();
  }, [emblaThumbsApi, updateScrollButtons]);

  const scrollThumbsNext = useCallback(() => {
    if (!emblaThumbsApi) return;
    
    const viewportSize = emblaThumbsApi.scrollSnapList().length;
    const currentIndex = emblaThumbsApi.selectedScrollSnap();
    const maxIndex = emblaThumbsApi.scrollSnapList().length - 1;
    const targetIndex = Math.min(maxIndex, currentIndex + Math.floor(viewportSize / 2));
    
    emblaThumbsApi.scrollTo(targetIndex);
    updateScrollButtons();
  }, [emblaThumbsApi, updateScrollButtons]);

  // Efecto para reinicializar el carrusel de miniaturas cuando cambia la orientación
  useEffect(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.reInit();
      updateScrollButtons();
    }
  }, [isMobile, emblaThumbsApi, updateScrollButtons]);

  if (images.length <= 1) return null;

  return (
    <div className={styles.thumbs}>
      <div className={styles.thumbsTrack}>
        <div className={`${styles.viewport} ${styles.scrollable}`} ref={emblaThumbsRef}>
          <div className={styles.container}>
            {images.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumb} ${
                  index === selectedIndex ? styles.selected : ''
                }`}
                onClick={() => onThumbClick(index)}
                type="button"
                aria-label={`Ir a imagen ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="100px"
                  style={{ objectFit: 'cover' }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {images.length > 5 && (
          <>
            <button
              className={`${styles.thumbNavButton} ${styles.prev} ${!canScrollPrev ? styles.hidden : ''}`}
              onClick={scrollThumbsPrev}
              aria-label="Miniaturas anteriores"
              type="button"
            >
              <ArrowBack aria-hidden="true" />
            </button>
            
            <button
              className={`${styles.thumbNavButton} ${styles.next} ${!canScrollNext ? styles.hidden : ''}`}
              onClick={scrollThumbsNext}
              aria-label="Miniaturas siguientes"
              type="button"
            >
              <ArrowForward aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Thumbnails; 