"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./galeria-ver-mas.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";

const ImageGallery = ({ images = [] }) => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: isMobile ? 'x' : 'y',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaThumbsApi) return;
    
    const scrollSnaps = emblaThumbsApi.scrollSnapList();
    const currentIndex = emblaThumbsApi.selectedScrollSnap();
    
    setCanScrollPrev(currentIndex > 0);
    setCanScrollNext(currentIndex < scrollSnaps.length - 1);
  }, [emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
      const thumbs = emblaThumbsApi.scrollSnapList();
      const targetIndex = Math.min(
        thumbs.length - 1,
        emblaMainApi.selectedScrollSnap()
      );
      emblaThumbsApi.scrollTo(targetIndex);
      updateScrollButtons();
    };

    emblaMainApi.on('select', onSelect);
    emblaThumbsApi.on('select', updateScrollButtons);
    emblaThumbsApi.on('scroll', updateScrollButtons);
    emblaThumbsApi.on('reInit', updateScrollButtons);

    // Inicializar estados
    onSelect();
    updateScrollButtons();

    return () => {
      emblaMainApi.off('select', onSelect);
      emblaThumbsApi.off('select', updateScrollButtons);
      emblaThumbsApi.off('scroll', updateScrollButtons);
      emblaThumbsApi.off('reInit', updateScrollButtons);
    };
  }, [emblaMainApi, emblaThumbsApi, updateScrollButtons]);

  // Reinicializar el carrusel cuando cambia la orientación
  useEffect(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.reInit();
      updateScrollButtons();
    }
  }, [isMobile, emblaThumbsApi, updateScrollButtons]);

  const scrollThumbsPrev = useCallback(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.scrollPrev();
      updateScrollButtons();
    }
  }, [emblaThumbsApi, updateScrollButtons]);

  const scrollThumbsNext = useCallback(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.scrollNext();
      updateScrollButtons();
    }
  }, [emblaThumbsApi, updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      {/* Miniaturas */}
      {images.length > 1 && (
        <div className={styles.thumbs}>
          <div className={styles.thumbsTrack}>
            <div className={styles.viewport} ref={emblaThumbsRef}>
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
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Botones de navegación para thumbnails */}
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
      )}

      {/* Carrusel principal */}
      <div className={styles.mainCarousel}>
        <div className={styles.viewport} ref={emblaMainRef}>
          <div className={styles.container}>
            {images.map((image, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt || `Imagen ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                    style={{ objectFit: 'contain' }}
                    quality={85}
                  />
                </div>
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prev}`}
                onClick={scrollPrev}
                aria-label="Imagen anterior"
                type="button"
              >
                <ArrowBack aria-hidden="true" />
              </button>
              
              <button
                className={`${styles.navButton} ${styles.next}`}
                onClick={scrollNext}
                aria-label="Siguiente imagen"
                type="button"
              >
                <ArrowForward aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery; 