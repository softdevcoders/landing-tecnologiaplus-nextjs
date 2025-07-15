"use client";

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import VideoPlayer from '../video-player/VideoPlayer';
import styles from './video-modal.module.scss';

const VideoModal = ({ 
  isOpen, 
  onClose, 
  mediaItems = [], 
  productTitle = '', 
  selectedColor = '' 
}) => {
  // Cerrar modal con ESC
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Cerrar modal al hacer clic en el backdrop
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Obtener el primer video
  const firstVideo = mediaItems.find(item => item.type === 'video');

  if (!isOpen || !firstVideo) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Video 360°{selectedColor && ` - ${selectedColor}`}
          </h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar video"
            type="button"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.videoContainer}>
          <VideoPlayer
            video={firstVideo}
            title={`${productTitle} - Video 360°${selectedColor ? ` ${selectedColor}` : ''}`}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VideoModal; 