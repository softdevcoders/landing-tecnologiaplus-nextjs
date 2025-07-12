"use client";

import React, { useContext } from 'react';
import { ProductColorContext } from '@/contexts/ProductColorContext';
import styles from './color-selector.module.scss';

const ColorSelector = ({ 
  title = "Colores disponibles",
  showColorName = true,
  size = "medium" // small, medium, large
}) => {
  const colorContext = useContext(ProductColorContext);
  
  // Si no hay contexto, no mostrar nada
  if (!colorContext) {
    return null;
  }
  
  const { 
    selectedColor, 
    availableColors, 
    selectColor, 
    getSelectedColor,
    hasMultipleColors 
  } = colorContext;

  // No mostrar el selector si no hay múltiples colores
  if (!hasMultipleColors()) {
    return null;
  }

  const selectedColorObj = getSelectedColor();

  return (
    <div className={styles.colorSelector}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {showColorName && selectedColorObj && (
          <span className={styles.selectedColorName}>
            {selectedColorObj.name}
          </span>
        )}
      </div>
      
      <div className={`${styles.colorGrid} ${styles[size]}`}>
        {availableColors.map((color) => (
          <button
            key={color.id}
            className={`${styles.colorOption} ${
              selectedColor === color.id ? styles.selected : ''
            }`}
            onClick={() => selectColor(color.id)}
            style={{
              backgroundColor: color.hex || color.value,
              backgroundImage: color.gradient ? `linear-gradient(${color.gradient})` : undefined
            }}
            title={color.name}
            aria-label={`Seleccionar color ${color.name}`}
          >
            {/* Indicador de selección */}
            {selectedColor === color.id && (
              <div className={styles.selectedIndicator}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector; 