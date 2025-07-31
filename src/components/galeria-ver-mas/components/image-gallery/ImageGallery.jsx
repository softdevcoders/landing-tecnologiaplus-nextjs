"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./image-gallery.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";
import Thumbnails from "../thumbnails";
import ZoomableImage from "../zoomable-image";
import FirstImageWrapper from "../first-image/FirstImageWrapper";
import SEOImages from "../seo-images/SEOImages";
import VideoPlayer from "../video-player/VideoPlayer";
import ImageIndicators from "../image-indicators";
import ActionButtons from "../action-buttons/ActionButtons";
import { useMainCarousel } from "../../hooks/useMainCarousel";
import { useGalleryState } from "../../hooks/useGalleryState";
import { generateImageAlt, getOptimizedSizes } from "../../utils/imageUtils";

const ImageGallery = ({ mediaItems = [], colors = [], hasColors = false, productTitle = '' }) => {
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
      {/* Componente SEO para indexación de todas las imágenes */}
      <SEOImages
        mediaItems={displayMediaItems}
        productTitle={productTitle}
        selectedColor={colorContext?.getSelectedColor()?.name || ''}
        isMobile={isMobile}
      />
      
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
                ) : (
                  // Renderizar directamente con Next.js Image para eliminar loader
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.src}
                        alt={generateImageAlt(item, index, productTitle, colorContext?.getSelectedColor()?.name || '')}
                        width={item.width}
                        height={item.height}
                        priority={index === 0}
                        sizes={getOptimizedSizes('main', isMobile)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                        unoptimized={false}
                        quality={85}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
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
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery; 