"use client";

import { useCallback, useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./galeria-ver-mas.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import { ProductColorContext } from "@/contexts/ProductColorContext";

const ImageGallery = ({ images = [], fallbackImages = [] }) => {
  // Usar el contexto de colores de forma segura (sin lanzar error)
  const colorContext = useContext(ProductColorContext);

  // Determinar qué imágenes usar
  const getImagesToDisplay = () => {
    if (colorContext) {
      const colorImages = colorContext.getImagesForSelectedColor();
      // Si hay imágenes del color seleccionado, usarlas
      if (colorImages.length > 0) {
        return colorImages;
      }
    }
    // Si no hay contexto o no hay imágenes del color, usar las imágenes directas o fallback
    return images.length > 0 ? images : fallbackImages;
  };

  const displayImages = getImagesToDisplay();

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true 
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

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
    dragFree: false,
    axis: isMobile ? 'x' : 'y',
    watchDrag: false,
    skipSnaps: false,
    align: 'start'
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

  // Manejador del scroll del mouse
  useEffect(() => {
    if (!emblaThumbsRef.current) return;

    const handleWheel = (event) => {
      event.preventDefault();
      if (!emblaThumbsApi) return;

      const delta = isMobile ? event.deltaX : event.deltaY;
      const scrollDirection = delta > 0 ? 1 : -1;
      
      // Ajustamos la sensibilidad del scroll
      const scrollMultiplier = 1.5;
      emblaThumbsApi.scrollTo(
        emblaThumbsApi.selectedScrollSnap() + (scrollDirection * scrollMultiplier)
      );
      updateScrollButtons();
    };

    const element = emblaThumbsRef.current;
    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [emblaThumbsApi, emblaThumbsRef, isMobile, updateScrollButtons]);

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

  // Reinicializar cuando cambien las imágenes (por ejemplo, cambio de color)
  useEffect(() => {
    if (emblaMainApi) {
      emblaMainApi.reInit();
      setSelectedIndex(0);
      setIsZoomed(false);
      setZoomPosition({ x: 50, y: 50 });
    }
    if (emblaThumbsApi) {
      emblaThumbsApi.reInit();
      updateScrollButtons();
    }
  }, [displayImages, emblaMainApi, emblaThumbsApi, updateScrollButtons]);

  // Reinicializar cuando cambie el color seleccionado
  useEffect(() => {
    if (colorContext && colorContext.selectedColor) {
      setSelectedIndex(0);
      setIsZoomed(false);
      setZoomPosition({ x: 50, y: 50 });
    }
  }, [colorContext?.selectedColor]);

  const scrollThumbsPrev = useCallback(() => {
    if (emblaThumbsApi) {
      // Calculamos el número de thumbnails visibles
      const viewportSize = emblaThumbsApi.scrollSnapList().length;
      const currentIndex = emblaThumbsApi.selectedScrollSnap();
      
      // Movemos por bloques completos
      const targetIndex = Math.max(0, currentIndex - Math.floor(viewportSize / 2));
      emblaThumbsApi.scrollTo(targetIndex);
      updateScrollButtons();
    }
  }, [emblaThumbsApi, updateScrollButtons]);

  const scrollThumbsNext = useCallback(() => {
    if (emblaThumbsApi) {
      // Calculamos el número de thumbnails visibles
      const viewportSize = emblaThumbsApi.scrollSnapList().length;
      const currentIndex = emblaThumbsApi.selectedScrollSnap();
      const maxIndex = emblaThumbsApi.scrollSnapList().length - 1;
      
      // Movemos por bloques completos
      const targetIndex = Math.min(maxIndex, currentIndex + Math.floor(viewportSize / 2));
      emblaThumbsApi.scrollTo(targetIndex);
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

  const scrollDots = useCallback((index) => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    emblaMainApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  // Reset zoom when changing images
  useEffect(() => {
    setIsZoomed(false);
    setZoomPosition({ x: 50, y: 50 });
  }, [selectedIndex]);

  // Controlar el comportamiento del carrusel cuando se hace zoom
  useEffect(() => {
    if (!emblaMainApi) return;

    if (isZoomed) {
      emblaMainApi.reInit({ dragFree: false });
    } else {
      emblaMainApi.reInit({ dragFree: true });
    }
  }, [isZoomed, emblaMainApi]);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const calculateZoomPosition = (clientX, clientY, rect) => {
    // Calculamos la posición relativa del cursor en la imagen (0-1)
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    const zoomLevel = 1.75;
    
    // Calculamos el rango máximo para asegurar que podemos llegar a todos los bordes
    // Para un zoom de 1.75x, necesitamos movernos un 75% del tamaño de la imagen
    const maxOffset = (zoomLevel - 1) * 100;
    
    // Ajustamos la posición para que 0.5 (centro) corresponda al 50% del movimiento
    const x = relativeX * maxOffset;
    const y = relativeY * maxOffset;

    return {
      x: Math.max(0, Math.min(maxOffset, x)),
      y: Math.max(0, Math.min(maxOffset, y))
    };
  };

  const handleMouseMove = (e) => {
    if (!isZoomed || !imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(e.clientX, e.clientY, rect);
    setZoomPosition(newPosition);
  };

  const handleTouchMove = (e) => {
    if (!isZoomed || !imageRef.current) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const rect = imageRef.current.getBoundingClientRect();
    const newPosition = calculateZoomPosition(touch.clientX, touch.clientY, rect);
    setZoomPosition(newPosition);
  };

  if (!displayImages || displayImages.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      {/* Miniaturas */}
      {displayImages.length > 1 && (
        <div className={styles.thumbs}>
          <div className={styles.thumbsTrack}>
            <div className={`${styles.viewport} ${styles.scrollable}`} ref={emblaThumbsRef}>
              <div className={styles.container}>
                {displayImages.map((image, index) => (
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

            {/* Botones de navegación para thumbnails */}
            {displayImages.length > 5 && (
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
            {displayImages.map((image, index) => (
              <div className={styles.slide} key={index}>
                <div 
                  ref={index === selectedIndex ? imageRef : null}
                  className={`${styles.imageWrapper} ${isZoomed && index === selectedIndex ? styles.zoomedWrapper : ''}`}
                  onClick={handleImageClick}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  style={
                    isZoomed && index === selectedIndex
                      ? {
                          cursor: 'zoom-out'
                        }
                      : { cursor: 'zoom-in' }
                  }
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={image.src}
                      alt={image.alt || `Imagen ${index + 1}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                      style={{ 
                        objectFit: 'contain',
                        transform: isZoomed ? `scale(${1.75}) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)` : 'none',
                        transformOrigin: '0 0'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayImages.length > 1 && !isZoomed && (
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

        {/* Bullets */}
        {displayImages.length > 1 && !isZoomed && (
          <div className={styles.bullets}>
            {displayImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.bullet} ${index === selectedIndex ? styles.active : ''}`}
                onClick={() => scrollDots(index)}
                aria-label={`Ir a imagen ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery; 