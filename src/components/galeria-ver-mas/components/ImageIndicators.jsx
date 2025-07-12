"use client";

import styles from "./image-indicators.module.scss";

const ImageIndicators = ({ 
  totalImages, 
  selectedIndex, 
  onSelect 
}) => {
  if (totalImages <= 1) return null;

  return (
    <div className={styles.bullets}>
      {Array.from({ length: totalImages }, (_, index) => (
        <button
          key={index}
          className={`${styles.bullet} ${index === selectedIndex ? styles.active : ''}`}
          onClick={() => onSelect(index)}
          aria-label={`Ir a imagen ${index + 1}`}
          type="button"
        />
      ))}
    </div>
  );
};

export default ImageIndicators; 