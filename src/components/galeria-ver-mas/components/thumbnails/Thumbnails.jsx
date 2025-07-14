"use client";

import { useCallback, useEffect, useState } from 'react';
import ImageLoader from "../image-loader";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import { generateThumbnailAlt, getOptimizedSizes, generateBlurDataURL } from "../../utils/imageUtils";
import styles from "./thumbnails.module.scss";

const Thumbnails = ({ 
  images, 
  selectedIndex, 
  onThumbClick,
  isMobile,
  productTitle = '',
  selectedColor = ''
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
    
    setCanScrollPrev(emblaThumbsApi.canScrollPrev());
    setCanScrollNext(emblaThumbsApi.canScrollNext());
  }, [emblaThumbsApi]);

  // Efecto para inicializar y manejar cambios en el carrusel
  useEffect(() => {
    if (!emblaThumbsApi) return;

    updateScrollButtons();
    emblaThumbsApi.on('select', updateScrollButtons);
    emblaThumbsApi.on('reInit', updateScrollButtons);

    return () => {
      emblaThumbsApi.off('select', updateScrollButtons);
      emblaThumbsApi.off('reInit', updateScrollButtons);
    };
  }, [emblaThumbsApi, updateScrollButtons]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    if (!emblaThumbsApi) return;

    const delta = isMobile ? event.deltaX : event.deltaY;
    const scrollDirection = delta > 0 ? 1 : -1;
    
    if (scrollDirection > 0 && emblaThumbsApi.canScrollNext()) {
      emblaThumbsApi.scrollNext();
    } else if (scrollDirection < 0 && emblaThumbsApi.canScrollPrev()) {
      emblaThumbsApi.scrollPrev();
    }
  }, [emblaThumbsApi, isMobile]);

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
    if (emblaThumbsApi && emblaThumbsApi.canScrollPrev()) {
      emblaThumbsApi.scrollPrev();
    }
  }, [emblaThumbsApi]);

  const scrollThumbsNext = useCallback(() => {
    if (emblaThumbsApi && emblaThumbsApi.canScrollNext()) {
      emblaThumbsApi.scrollNext();
    }
  }, [emblaThumbsApi]);

  // Efecto para reinicializar el carrusel de miniaturas cuando cambia la orientación
  useEffect(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.reInit();
    }
  }, [isMobile, emblaThumbsApi]);

  if (images.length <= 1) return null;

  // Mostrar botones si hay más de 3 imágenes en móvil o más de 5 en desktop
  const shouldShowButtons = isMobile ? images.length > 3 : images.length > 5;

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
                <ImageLoader
                  src={image.src}
                  alt={generateThumbnailAlt(image, index, productTitle, selectedColor)}
                  width={image.width}
                  height={image.height}
                  sizes={getOptimizedSizes('thumbnail', isMobile)}
                  style={{ objectFit: 'contain' }}
                  priority={false}
                  blurDataURL={generateBlurDataURL()}
                  placeholder="blur"
                />
              </button>
            ))}
          </div>
        </div>

        {shouldShowButtons && (
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