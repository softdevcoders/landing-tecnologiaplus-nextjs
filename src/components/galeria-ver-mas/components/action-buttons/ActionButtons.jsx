"use client";

import { useState } from 'react';
import GalleryModal from '../gallery-modal/GalleryModal';
import VideoModal from '../video-modal/VideoModal';
import styles from './action-buttons.module.scss';
import Arrows360 from '@/components/ui/icons/arrows-360';
import Gallery from '@/components/ui/icons/gallery';

const ActionButtons = ({ 
  mediaItems = [], 
  currentMediaItem = null,
  productTitle = '', 
  selectedColor = '' 
}) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Verificar si hay imágenes e videos disponibles
  const hasImages = mediaItems.some(item => item.type === 'image');
  const hasVideo = mediaItems.some(item => item.type === 'video');

  // Verificar si el item actual tiene fondo oscuro
  const hasDarkBackground = currentMediaItem?.darkBackground || false;

  // No mostrar botones si no hay contenido
  if (!hasImages && !hasVideo) {
    return null;
  }

  return (
    <>
      <div className={`${styles.actionButtons} ${hasDarkBackground ? styles.darkBackground : ''}`}>
        {hasImages && (
          <button
            className={`${styles.actionButton} ${hasDarkBackground ? styles.darkButton : ''}`}
            onClick={() => setIsGalleryModalOpen(true)}
            type="button"
            aria-label="Ver galería completa"
          >
            <Gallery color={hasDarkBackground ? '#000' : '#fff'} />
            <span className={styles.buttonText}>Ver todas</span>
          </button>
        )}
        
        {hasVideo && (
          <button
            className={`${styles.actionButton} ${hasDarkBackground ? styles.darkButton : ''}`}
            onClick={() => setIsVideoModalOpen(true)}
            type="button"
            aria-label="Ver video 360°"
          >
            <Arrows360 color={hasDarkBackground ? '#000' : '#fff'} />
            <span className={styles.buttonText}>360°</span>
          </button>
        )}
      </div>

      {/* Modal de galería */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        mediaItems={mediaItems}
        productTitle={productTitle}
        selectedColor={selectedColor}
      />

      {/* Modal de video */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        mediaItems={mediaItems}
        productTitle={productTitle}
        selectedColor={selectedColor}
      />
    </>
  );
};

export default ActionButtons; 