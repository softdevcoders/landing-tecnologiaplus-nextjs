"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowBack, ArrowForward } from '@/components/ui/icons';
import { getOptimizedSizes, generateBlurDataURL, getOptimizedImageUrl } from '../../utils/imageUtils';
import styles from './thumbnails.module.scss';

const Thumbnails = ({
  mediaItems = [],
  selectedIndex,
  onThumbClick,
  productTitle = '',
  selectedColor = ''
}) => {
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    axis: 'y',
    speed: 10,
    skipSnaps: true,
    watchDrag: false
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [shouldShowButtons, setShouldShowButtons] = useState(false);

  const onThumbsSelect = useCallback(() => {
    if (!emblaThumbsApi) return;
    setCanScrollPrev(emblaThumbsApi.canScrollPrev());
    setCanScrollNext(emblaThumbsApi.canScrollNext());
  }, [emblaThumbsApi]);

  const scrollThumbsPrev = useCallback(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollTo(emblaThumbsApi.selectedScrollSnap() - 2);
  }, [emblaThumbsApi]);

  const scrollThumbsNext = useCallback(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollTo(emblaThumbsApi.selectedScrollSnap() + 2);
  }, [emblaThumbsApi]);

  const handleWheel = useCallback((event) => {
    if (!emblaThumbsApi) return;
    
    // Prevenir el comportamiento por defecto si estamos en los límites del scroll
    if (
      (event.deltaY < 0 && !canScrollPrev) ||
      (event.deltaY > 0 && !canScrollNext)
    ) {
      event.preventDefault();
    }
    
    // Ajustar la sensibilidad del scroll
    const scrollMultiplier = 1.5;
    const scrollDistance = event.deltaY * scrollMultiplier;
    
    emblaThumbsApi.scrollTo(
      emblaThumbsApi.scrollProgress() * 
      emblaThumbsApi.scrollSnapList().length + 
      scrollDistance / 100
    );
  }, [emblaThumbsApi, canScrollPrev, canScrollNext]);

  useEffect(() => {
    if (!emblaThumbsApi) return;

    const viewport = emblaThumbsRef.current;
    if (viewport) {
      viewport.addEventListener('wheel', handleWheel, { passive: false });
    }

    emblaThumbsApi.on('select', onThumbsSelect);
    emblaThumbsApi.on('reInit', onThumbsSelect);
    onThumbsSelect();

    // Mostrar botones solo si hay scroll disponible
    const hasOverflow = emblaThumbsApi.scrollSnapList().length > 6;
    setShouldShowButtons(hasOverflow);

    return () => {
      if (viewport) {
        viewport.removeEventListener('wheel', handleWheel);
      }
      emblaThumbsApi.off('select', onThumbsSelect);
      emblaThumbsApi.off('reInit', onThumbsSelect);
    };
  }, [emblaThumbsApi, onThumbsSelect, emblaThumbsRef, handleWheel]);

  if (!mediaItems || mediaItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.thumbs}>
      <div className={styles.thumbsTrack}>
        <div className={`${styles.viewport} ${styles.scrollable}`} ref={emblaThumbsRef}>
          <div className={styles.container}>
            {mediaItems.map((item, index) => (
              <button
                key={index}
                className={`${styles.thumb} ${index === selectedIndex ? styles.selected : ''}`}
                onClick={() => onThumbClick(index)}
                type="button"
                aria-label={`Ir a ${item.type === 'video' ? 'video' : 'imagen'} ${index + 1}`}
              >
                {item.type === 'video' ? (
                  <Image
                    src={getOptimizedImageUrl({url: item.thumbnail, width: 150, height: 150, quality: 80})} 
                    alt={`Miniatura: ${item.alt}`}
                    width={150}
                    height={150}
                    sizes={getOptimizedSizes('thumbnail', false)}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain' 
                    }}
                    priority={true} // Solo las primeras 3 imágenes con priority
                    blurDataURL={generateBlurDataURL()}
                    placeholder="blur"
                    unoptimized={true}
                  />
                ) : (
                  <Image
                    src={getOptimizedImageUrl({url: item.src, width: 150, height: 150, quality: 80})}
                    alt={`Miniatura: ${item.alt}`}
                    width={150} 
                    height={150}
                    sizes={getOptimizedSizes('thumbnail', false)}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain' 
                    }}
                    priority={index < 3} // Solo las primeras 3 imágenes con priority
                    blurDataURL={generateBlurDataURL()}
                    placeholder="blur"
                    unoptimized={true}
                  />
                )}
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