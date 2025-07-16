"use client";

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ImageLoader from '../image-loader';
import { generateImageAlt, getOptimizedSizes, generateBlurDataURL } from '../../utils/imageUtils';
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
  const imageItems = mediaItems.filter(item => item.type === 'image');

  if (!isOpen || imageItems.length === 0) return null;

  const modalContent = (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Galería Completa{selectedColor && ` - ${selectedColor}`}
          </h2>
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
          {imageItems.map((item, index) => (
            <div key={index} className={styles.imageItem}>
              <ImageLoader
                src={item.src}
                alt={generateImageAlt(item, index, productTitle, selectedColor)}
                width={item.width}
                height={item.height}
                sizes={getOptimizedSizes('gallery-modal', false)}
                style={{ objectFit: 'contain' }}
                priority={index < 6}
                blurDataURL={generateBlurDataURL()}
                placeholder="blur"
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