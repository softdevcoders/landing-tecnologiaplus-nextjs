"use client";

import { useCallback, useEffect, useState, useContext, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./galeria-ver-mas.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import { ProductColorContext } from "@/contexts/ProductColorContext";
import Thumbnails from "./components/Thumbnails";
import ZoomableImage from "./components/ZoomableImage";
import ImageIndicators from "./components/ImageIndicators";

const ImageGallery = ({ images = [], fallbackImages = [] }) => {
  const colorContext = useContext(ProductColorContext);

  const displayImages = useMemo(() => {
    if (colorContext) {
      const colorImages = colorContext.getImagesForSelectedColor();
      if (colorImages.length > 0) {
        return colorImages;
      }
    }
    return images.length > 0 ? images : fallbackImages;
  }, [colorContext, images, fallbackImages]);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true 
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Callback para actualizar el índice seleccionado cuando cambia el carrusel
  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi]);

  // Efecto para manejar el responsive y detectar dispositivos móviles
  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  // Efecto para sincronizar el índice seleccionado con el carrusel principal
  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on('select', onSelect);
    onSelect(); // Inicializar el estado
    return () => emblaMainApi.off('select', onSelect);
  }, [emblaMainApi, onSelect]);

  const resetGalleryState = useCallback(() => {
    setSelectedIndex(0);
    setIsZoomed(false);
    setZoomPosition({ x: 50, y: 50 });
  }, []);

  // Efecto para reiniciar el estado cuando cambian las imágenes
  useEffect(() => {
    if (emblaMainApi) {
      emblaMainApi.reInit();
      resetGalleryState();
    }
  }, [displayImages, emblaMainApi, resetGalleryState]);

  // Efecto para reiniciar el estado cuando cambia el color seleccionado
  useEffect(() => {
    if (colorContext?.selectedColor) {
      resetGalleryState();
    }
  }, [colorContext?.selectedColor, resetGalleryState]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const handleThumbClick = useCallback((index) => {
    if (emblaMainApi) emblaMainApi.scrollTo(index);
  }, [emblaMainApi]);

  // Efecto para actualizar el comportamiento del carrusel según el estado del zoom
  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.reInit({ dragFree: !isZoomed });
  }, [isZoomed, emblaMainApi]);

  if (!displayImages || displayImages.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      <Thumbnails
        images={displayImages}
        selectedIndex={selectedIndex}
        onThumbClick={handleThumbClick}
        isMobile={isMobile}
      />

      <div className={styles.mainCarousel}>
        <div className={styles.viewport} ref={emblaMainRef}>
          <div className={styles.container}>
            {displayImages.map((image, index) => (
              <div className={styles.slide} key={index}>
                <ZoomableImage
                  image={image}
                  isZoomed={isZoomed}
                  zoomPosition={zoomPosition}
                  onZoomChange={setIsZoomed}
                  onZoomPositionChange={setZoomPosition}
                  index={index}
                  isSelected={index === selectedIndex}
                  priority={index === 0}
                />
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

        {!isZoomed && (
          <ImageIndicators
            totalImages={displayImages.length}
            selectedIndex={selectedIndex}
            onSelect={handleThumbClick}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery; 