"use client";

import { useProductColor } from '@/contexts/ProductColorContext';
import styles from './color-selector.module.scss';

const ColorSelector = ({
  title = "Colores disponibles",
  showColorName = true,
  size = "medium" // small, medium, large
}) => {
  const colorContext = useProductColor();
  
  // Si no hay contexto, no mostrar nada
  if (!colorContext) {
    return null;
  }

  const { colors, selectedColor, setSelectedColor } = colorContext;

  // Si no hay colores, no mostrar nada
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className={styles.colorSelector}>
      {title && <h3 className={styles.title}>{title}</h3>}
      
      <div className={`${styles.colorList} ${styles[size]}`}>
        {colors.map((color) => (
          <button
            key={color.id}
            className={`${styles.colorButton} ${selectedColor === color.id ? styles.selected : ''}`}
            onClick={() => setSelectedColor(color.id)}
            style={{ backgroundColor: color.value }}
            title={color.name}
            aria-label={`Seleccionar color ${color.name}`}
            aria-pressed={selectedColor === color.id}
          >
            {showColorName && (
              <span className={styles.colorName}>{color.name}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector; 