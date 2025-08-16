import styles from "./image-indicators.module.scss";

const ImageIndicators = ({ 
  totalImages, 
  selectedIndex, 
  onSelect,
  currentMediaItem = null
}) => {
  if (totalImages <= 1) return null;

  // Verificar si el item actual tiene fondo oscuro
  const hasDarkBackground = currentMediaItem?.darkBackground || false;

  return (
    <div className={`${styles.bullets} ${hasDarkBackground ? styles.darkBullets : ''}`}>
      {Array.from({ length: totalImages }, (_, index) => (
        <button
          key={index}
          className={`${styles.bullet} ${index === selectedIndex ? styles.active : ''} ${hasDarkBackground ? styles.darkBullet : ''}`}
          onClick={() => onSelect(index)}
          aria-label={`Ir a imagen ${index + 1}`}
          type="button"
        />
      ))}
    </div>
  );
};

export default ImageIndicators; 