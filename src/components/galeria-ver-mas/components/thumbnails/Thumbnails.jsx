"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowBack, ArrowForward } from '@/components/ui/icons';
import ImageLoader from '../image-loader';
import { generateThumbnailAlt, getOptimizedSizes, generateBlurDataURL } from '../../utils/imageUtils';
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
    axis: 'y'
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
    if (emblaThumbsApi) emblaThumbsApi.scrollPrev();
  }, [emblaThumbsApi]);

  const scrollThumbsNext = useCallback(() => {
    if (emblaThumbsApi) emblaThumbsApi.scrollNext();
  }, [emblaThumbsApi]);

  useEffect(() => {
    if (!emblaThumbsApi) return;

    emblaThumbsApi.on('select', onThumbsSelect);
    emblaThumbsApi.on('reInit', onThumbsSelect);
    onThumbsSelect();

    // Mostrar botones solo si hay scroll disponible
    const hasOverflow = emblaThumbsApi.scrollSnapList().length > 6;
    setShouldShowButtons(hasOverflow);

    return () => {
      emblaThumbsApi.off('select', onThumbsSelect);
      emblaThumbsApi.off('reInit', onThumbsSelect);
    };
  }, [emblaThumbsApi, onThumbsSelect]);

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
                  <ImageLoader
                    src={item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`}
                    alt={`Vista previa del video ${index + 1}`}
                    width={320}
                    height={180}
                    sizes={getOptimizedSizes('thumbnail', false)}
                    style={{ objectFit: 'contain' }}
                    priority={false}
                    blurDataURL={generateBlurDataURL()}
                    placeholder="blur"
                  />
                ) : (
                  <ImageLoader
                    src={item.src}
                    alt={generateThumbnailAlt(item, index, productTitle, selectedColor)}
                    width={item.width}
                    height={item.height}
                    sizes={getOptimizedSizes('thumbnail', false)}
                    style={{ objectFit: 'cover' }}
                    priority={false}
                    blurDataURL={generateBlurDataURL()}
                    placeholder="blur"
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