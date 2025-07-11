"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./galeria-ver-mas.module.scss";
import { ArrowBack, ArrowForward } from "@/components/ui/icons";

const ImageGallery = ({ images = [] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div className={styles.gallery}>
      {/* Imagen principal */}
      <div className={styles.mainImage}>
        <Image
          src={images[activeImageIndex].src}
          alt={images[activeImageIndex].alt || `Imagen ${activeImageIndex + 1}`}
          fill
          priority={activeImageIndex === 0}
          sizes="(max-width: 768px) 100vw, 60vw"
          style={{ objectFit: 'contain' }}
        />

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button
              className={`${styles.navButton} ${styles.prev}`}
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              <ArrowBack />
            </button>
            
            <button
              className={`${styles.navButton} ${styles.next}`}
              onClick={handleNextImage}
              aria-label="Siguiente imagen"
            >
              <ArrowForward />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${
                index === activeImageIndex ? styles.active : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt || `Miniatura ${index + 1}`}
                fill
                sizes="100px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 