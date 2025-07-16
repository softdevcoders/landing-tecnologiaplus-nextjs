"use client";

import { useState } from 'react';
import GalleryModal from '../gallery-modal/GalleryModal';
import VideoModal from '../video-modal/VideoModal';
import styles from './action-buttons.module.scss';
import Image from 'next/image';

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
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1752604707/ver-todas_ublus1.svg" 
              alt="Ver galería completa icon" 
              className={styles.buttonIcon}
              width={23} 
              height={21} 
            />
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
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1752604706/360_a9buqj.svg" 
              alt="Ver galería completa icon" 
              className={styles.buttonIcon}
              width={32} 
              height={23} 
            />
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