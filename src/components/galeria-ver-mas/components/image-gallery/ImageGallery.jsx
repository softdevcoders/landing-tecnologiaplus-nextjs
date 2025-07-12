"use client";

import { useEffect } from "react";
import styles from "./image-gallery.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import Thumbnails from "../thumbnails";
import ZoomableImage from "../zoomable-image";
import ImageIndicators from "../image-indicators";
import { useMainCarousel } from "../../hooks/useMainCarousel";
import { useGalleryState } from "../../hooks/useGalleryState";

const ImageGallery = ({ images = [], fallbackImages = [] }) => {
  const {
    displayImages,
    isMobile,
    zoomPosition,
    setZoomPosition,
    resetGalleryState,
    colorContext
  } = useGalleryState(images, fallbackImages);

  const {
    emblaMainRef,
    selectedIndex,
    isZoomed,
    setIsZoomed,
    scrollPrev,
    scrollNext,
    scrollTo: handleThumbClick,
    reInitCarousel
  } = useMainCarousel();

  // Efecto para reiniciar el estado cuando cambian las imágenes
  useEffect(() => {
    reInitCarousel();
    resetGalleryState(setIsZoomed, () => {});
  }, [displayImages, reInitCarousel, resetGalleryState, setIsZoomed]);

  // Efecto para reiniciar el estado cuando cambia el color seleccionado
  useEffect(() => {
    if (colorContext?.selectedColor) {
      resetGalleryState(setIsZoomed, () => {});
    }
  }, [colorContext?.selectedColor, resetGalleryState, setIsZoomed]);

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