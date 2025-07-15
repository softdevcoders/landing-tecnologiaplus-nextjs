"use client";

import { useState } from 'react';
import GalleryModal from '../gallery-modal/GalleryModal';
import VideoModal from '../video-modal/VideoModal';
import styles from './action-buttons.module.scss';

const ActionButtons = ({ 
  mediaItems = [], 
  productTitle = '', 
  selectedColor = '' 
}) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Verificar si hay imágenes e videos disponibles
  const hasImages = mediaItems.some(item => item.type === 'image');
  const hasVideo = mediaItems.some(item => item.type === 'video');

  // Debug: mostrar en consola si hay contenido
  console.log('ActionButtons - hasImages:', hasImages, 'hasVideo:', hasVideo, 'mediaItems:', mediaItems);

  // No mostrar botones si no hay contenido
  if (!hasImages && !hasVideo) {
    console.log('ActionButtons - No content available');
    return null;
  }

  console.log('ActionButtons - Rendering buttons');

  return (
    <>
      <div className={styles.actionButtons}>
        {hasImages && (
          <button
            className={styles.actionButton}
            onClick={() => setIsGalleryModalOpen(true)}
            type="button"
            aria-label="Ver galería completa"
          >
            <span className={styles.buttonIcon}>🖼️</span>
            <span className={styles.buttonText}>Ver galería completa</span>
          </button>
        )}
        
        {hasVideo && (
          <button
            className={styles.actionButton}
            onClick={() => setIsVideoModalOpen(true)}
            type="button"
            aria-label="Ver video 360°"
          >
            <span className={styles.buttonIcon}>🎥</span>
            <span className={styles.buttonText}>Video 360°</span>
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