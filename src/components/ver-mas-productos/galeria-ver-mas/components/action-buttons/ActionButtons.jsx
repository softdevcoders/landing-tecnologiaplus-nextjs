"use client";

import { useState } from 'react';
import GalleryModal from '../gallery-modal/GalleryModal';
import VideoModal from '../video-modal/VideoModal';
import styles from './action-buttons.module.scss';
import Arrows360 from '@/components/ui/icons/arrows-360';
import Gallery from '@/components/ui/icons/gallery';

// Icono 3D para el botón específico
const View3DIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const ActionButtons = ({ 
  mediaItems = [], 
  currentMediaItem = null,
  productTitle = '', 
  selectedColor = '',
  isMobile = false
}) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Verificar si hay imágenes, videos y modelos 3D disponibles
  const hasImages = mediaItems.some(item => item.type === 'image');
  const hasVideo = mediaItems.some(item => item.type === 'video');
  const has3DModel = mediaItems.some(item => item.type === '3d');

  // Verificar si el item actual tiene fondo oscuro
  const hasDarkBackground = currentMediaItem?.darkBackground || false;

  // No mostrar botones si no hay contenido
  if (!hasImages && !hasVideo && !has3DModel) {
    return null;
  }

  return (
    <>
      <div className={`${styles.actionButtons} ${hasDarkBackground ? styles.darkBackground : ''} ${isMobile && has3DModel ? styles.has3DContent : ''}`}>
        {/* Botón "Ver todas" solo en desktop */}
        {!isMobile && hasImages && (
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
        
        {/* Botón 360° para desktop o cuando hay video */}
        {(!isMobile || hasVideo) && (hasVideo || has3DModel) && (
          <button
            className={`${styles.actionButton} ${hasDarkBackground ? styles.darkButton : ''}`}
            onClick={() => setIsVideoModalOpen(true)}
            type="button"
            aria-label={has3DModel ? "Ver modelo 3D 360°" : "Ver video 360°"}
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