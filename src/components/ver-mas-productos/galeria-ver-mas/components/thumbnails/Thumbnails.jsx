"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowBack, ArrowForward } from '@/components/ui/icons';
import { getOptimizedSizes, generateBlurDataURL, getOptimizedImageUrl } from '../../../../../lib/imageUtils';
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
    dragFree: false,
    axis: 'y',
    speed: 10,
    skipSnaps: false,
    watchDrag: true
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [shouldShowButtons, setShouldShowButtons] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);

  const onThumbsSelect = useCallback(() => {
    if (!emblaThumbsApi) return;
    setCanScrollPrev(emblaThumbsApi.canScrollPrev());
    setCanScrollNext(emblaThumbsApi.canScrollNext());
  }, [emblaThumbsApi]);

  const scrollThumbsPrev = useCallback(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollPrev();
  }, [emblaThumbsApi]);

  const scrollThumbsNext = useCallback(() => {
    if (!emblaThumbsApi) return;
    emblaThumbsApi.scrollNext();
  }, [emblaThumbsApi]);

  const handleWheel = useCallback((event) => {
    if (!emblaThumbsApi) return;
    
    // Prevenir el comportamiento por defecto
    event.preventDefault();
    
    // Detectar si es un trackpad (deltaY más pequeño) o mouse wheel (deltaY más grande)
    const isTrackpad = Math.abs(event.deltaY) < 50;
    const scrollThreshold = isTrackpad ? 10 : 50;
    
    // Acumular el scroll para gestos suaves
    setScrollAccumulator(prev => {
      const newAccumulator = prev + event.deltaY;
      
      if (Math.abs(newAccumulator) > scrollThreshold) {
        if (newAccumulator > 0) {
          emblaThumbsApi.scrollNext();
        } else {
          emblaThumbsApi.scrollPrev();
        }
        return 0; // Resetear el acumulador
      }
      
      return newAccumulator;
    });
  }, [emblaThumbsApi]);

  const handleTouchStart = useCallback((event) => {
    setTouchStartY(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event) => {
    if (!emblaThumbsApi || touchStartY === null) return;
    
    event.preventDefault();
    
    const touchY = event.touches[0].clientY;
    const deltaY = touchStartY - touchY;
    const threshold = 30; // Umbral mínimo para considerar un swipe
    
    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        emblaThumbsApi.scrollNext();
      } else {
        emblaThumbsApi.scrollPrev();
      }
      setTouchStartY(null);
    }
  }, [emblaThumbsApi, touchStartY]);

  const handleTouchEnd = useCallback(() => {
    setTouchStartY(null);
  }, []);

  useEffect(() => {
    if (!emblaThumbsApi) return;

    const viewport = emblaThumbsRef.current;
    if (viewport) {
      viewport.addEventListener('wheel', handleWheel, { passive: false });
      viewport.addEventListener('touchstart', handleTouchStart);
      viewport.addEventListener('touchmove', handleTouchMove);
      viewport.addEventListener('touchend', handleTouchEnd);
    }

    emblaThumbsApi.on('select', onThumbsSelect);
    emblaThumbsApi.on('reInit', onThumbsSelect);
    onThumbsSelect();

    // Mostrar botones solo si hay scroll disponible
    const hasOverflow = emblaThumbsApi.scrollSnapList().length > 4;
    setShouldShowButtons(hasOverflow);

    return () => {
      if (viewport) {
        viewport.removeEventListener('wheel', handleWheel);
        viewport.removeEventListener('touchstart', handleTouchStart);
        viewport.removeEventListener('touchmove', handleTouchMove);
        viewport.removeEventListener('touchend', handleTouchEnd);
      }
      emblaThumbsApi.off('select', onThumbsSelect);
      emblaThumbsApi.off('reInit', onThumbsSelect);
    };
  }, [emblaThumbsApi, onThumbsSelect, emblaThumbsRef, handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Efecto para hacer scroll al thumbnail seleccionado
  useEffect(() => {
    if (!emblaThumbsApi || selectedIndex === undefined) return;
    
    // Hacer scroll al thumbnail seleccionado
    emblaThumbsApi.scrollTo(selectedIndex);
  }, [emblaThumbsApi, selectedIndex]);

  // Efecto para limpiar el acumulador de scroll después de inactividad
  useEffect(() => {
    if (scrollAccumulator === 0) return;
    
    const timeout = setTimeout(() => {
      setScrollAccumulator(0);
    }, 1000); // Limpiar después de 1 segundo de inactividad
    
    return () => clearTimeout(timeout);
  }, [scrollAccumulator]);

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
                    src={getOptimizedImageUrl({url: item.thumbnail, width: 150, height: 150, quality: 80, type: 'video'})} 
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