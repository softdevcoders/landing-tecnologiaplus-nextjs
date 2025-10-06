"use client";

import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import VideoPlayer from '../video-player/VideoPlayer';
import Viewer3D from '../3d-viewer';
import styles from './video-modal.module.scss';

const VideoModal = ({ 
  isOpen, 
  onClose, 
  mediaItems = [], 
  productTitle = '', 
  selectedColor = '' 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
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

  // Obtener el primer modelo 3D o video
  const first3DModel = mediaItems.find(item => item.type === '3d');
  const firstVideo = mediaItems.find(item => item.type === 'video');
  const mediaToShow = first3DModel || firstVideo;

  if (!isOpen || !mediaToShow) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
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
          {mediaToShow.type === '3d' ? (
            <Viewer3D
              modelID={mediaToShow.modelID}
              title={`${productTitle} - Modelo 3D 360°${selectedColor ? ` ${selectedColor}` : ''}`}
              isMobile={isMobile}
            />
          ) : (
            <VideoPlayer
              video={mediaToShow}
              title={`${productTitle} - Video 360°${selectedColor ? ` ${selectedColor}` : ''}`}
            />
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VideoModal; 