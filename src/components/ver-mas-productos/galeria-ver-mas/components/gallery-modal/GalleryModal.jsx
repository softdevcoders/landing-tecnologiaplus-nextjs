"use client";

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { getOptimizedSizes, generateBlurDataURL, getOptimizedImageUrl } from '../../../../../lib/imageUtils';
import styles from './gallery-modal.module.scss';

const GalleryModal = ({ 
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

  // Filtrar solo imágenes
  const mediaItemsToShow = mediaItems.filter(item => item.type === 'image');

  if (!isOpen || mediaItemsToShow.length === 0) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar galería"
            type="button"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.galleryGrid}>
          {mediaItemsToShow.map((item, index) => (
            <div key={index} className={styles.imageItem}>
              <Image
                src={getOptimizedImageUrl({url: item?.src, width: 800, quality: 80})} 
                alt={item.alt}
                title={item.title}
                width={800}
                height={800}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default GalleryModal; 