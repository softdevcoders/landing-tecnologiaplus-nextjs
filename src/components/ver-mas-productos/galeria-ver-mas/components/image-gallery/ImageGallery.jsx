"use client";

import { useEffect, useState } from "react";
import styles from "./image-gallery.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import Thumbnails from "../thumbnails";
import ZoomableImageDirect from "../zoomable-image-direct/ZoomableImageDirect";
import VideoPlayer from "../video-player/VideoPlayer";
import Viewer3D from "../3d-viewer";
import ImageIndicators from "../image-indicators";
import ActionButtons from "../action-buttons/ActionButtons";
import GalleryModal from "../gallery-modal/GalleryModal";
import { useMainCarousel } from "../../hooks/useMainCarousel";
import { useGalleryState } from "../../hooks/useGalleryState";

const ImageGallery = ({ mediaItems = [], colors = [], hasColors = false, productTitle = '' }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
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

  const {
    displayMediaItems,
    currentMediaItem,
    isMobile,
    zoomPosition,
    setZoomPosition,
    resetGalleryState,
    colorContext
  } = useGalleryState(mediaItems, colors, hasColors, selectedIndex);

  // Efecto para reiniciar el estado cuando cambian los items
  useEffect(() => {
    reInitCarousel();
    resetGalleryState(setIsZoomed, () => {});
  }, [displayMediaItems, reInitCarousel, resetGalleryState, setIsZoomed]);

  // Efecto para reiniciar el estado cuando cambia el color seleccionado
  useEffect(() => {
    if (colorContext?.selectedColor) {
      resetGalleryState(setIsZoomed, () => {});
    }
  }, [colorContext?.selectedColor, resetGalleryState, setIsZoomed]);

  // Verificar si el item actual tiene fondo oscuro
  const hasDarkBackground = currentMediaItem?.darkBackground || false;

  if (!displayMediaItems || displayMediaItems.length === 0) {
    return null;
  }

  // Obtener la primera imagen para renderizado SSR
  const firstImage = displayMediaItems[0];
  const isFirstImageVideo = firstImage?.type === 'video';

  return (
    <div className={styles.gallery}>
      
      {!isMobile && (
        <Thumbnails
          mediaItems={displayMediaItems}
          selectedIndex={selectedIndex}
          onThumbClick={handleThumbClick}
          isMobile={isMobile}
          productTitle={productTitle}
          selectedColor={colorContext?.getSelectedColor()?.name || ''}
        />
      )}

      <div className={styles.mainCarousel}>
        <div className={styles.viewport} ref={emblaMainRef}>
          <div className={styles.container}>
            {displayMediaItems.map((item, index) => (
              <div className={styles.slide} key={index}>
                {item.type === 'video' ? (
                  <div className={styles.videoWrapper}>
                    <VideoPlayer
                      video={item}
                      title={`${productTitle} - Video ${index + 1}`}
                      isActive={index === selectedIndex}
                    />
                  </div>
                ) : item.type === '3d' ? (
                  <div className={styles.model3dWrapper}>
                    <Viewer3D
                      modelID={item.modelID}
                      title={`${productTitle} - Modelo 3D ${index + 1}`}
                      isMobile={isMobile}
                    />
                  </div>
                ) : (
                  // Renderizar con zoom y sin loader
                  <ZoomableImageDirect
                    image={item}
                    isZoomed={isZoomed}
                    zoomPosition={zoomPosition}
                    onZoomChange={setIsZoomed}
                    onZoomPositionChange={setZoomPosition}
                    index={index}
                    isSelected={index === selectedIndex}
                    priority={index === 0}
                    productTitle={productTitle}
                    selectedColor={colorContext?.getSelectedColor()?.name || ''}
                    isMobile={isMobile}
                    onOpenGalleryModal={() => setIsGalleryModalOpen(true)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación - solo en desktop */}
        {displayMediaItems.length > 1 && !isZoomed && (
          <>
            <button
              className={`${styles.navButton} ${styles.prev} ${hasDarkBackground ? styles.darkNav : ''}`}
              onClick={scrollPrev}
              aria-label="Imagen anterior"
              type="button"
            >
              <ArrowBack aria-hidden="true" />
            </button>
            <button
              className={`${styles.navButton} ${styles.next} ${hasDarkBackground ? styles.darkNav : ''}`}
              onClick={scrollNext}
              aria-label="Imagen siguiente"
              type="button"
            >
              <ArrowForward aria-hidden="true" />
            </button>
          </>
        )}

        {/* Indicadores de imagen */}
        {displayMediaItems.length > 1 && !isZoomed && (
          <ImageIndicators
            totalImages={displayMediaItems.length}
            selectedIndex={selectedIndex}
            onSelect={handleThumbClick}
            currentMediaItem={currentMediaItem}
          />
        )}

        {/* Botones de acción */}
        {!isZoomed && (
          <ActionButtons
            mediaItems={displayMediaItems}
            currentMediaItem={currentMediaItem}
            productTitle={productTitle}
            selectedColor={colorContext?.getSelectedColor()?.name || ''}
            isMobile={isMobile}
          />
        )}
      </div>

      {/* Modal de galería */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        mediaItems={displayMediaItems}
        productTitle={productTitle}
        selectedColor={colorContext?.getSelectedColor()?.name || ''}
      />
    </div>
  );
};

export default ImageGallery; 