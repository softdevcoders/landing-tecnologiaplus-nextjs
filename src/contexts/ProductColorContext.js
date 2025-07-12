"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export const ProductColorContext = createContext();

export const useProductColor = () => {
  const context = useContext(ProductColorContext);
  if (!context) {
    throw new Error('useProductColor must be used within a ProductColorProvider');
  }
  return context;
};

// Hook seguro que no lanza error si no está dentro del provider
export const useProductColorSafe = () => {
  const context = useContext(ProductColorContext);
  return context; // Retorna null si no está dentro del provider
};

export const ProductColorProvider = ({ children, colors = [], defaultColor = null }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || colors[0]?.id || null);
  const [availableColors, setAvailableColors] = useState(colors);

  // Efecto para resetear el color seleccionado cuando cambian los colores disponibles
  useEffect(() => {
    if (colors.length > 0) {
      setAvailableColors(colors);
      
      // Si no hay un color seleccionado o el color seleccionado no está disponible
      if (!selectedColor || !colors.find(color => color.id === selectedColor)) {
        setSelectedColor(defaultColor || colors[0]?.id || null);
      }
    }
  }, [colors, defaultColor, selectedColor]);

  const selectColor = (colorId) => {
    const colorExists = availableColors.find(color => color.id === colorId);
    if (colorExists) {
      setSelectedColor(colorId);
    }
  };

  const getSelectedColor = () => {
    return availableColors.find(color => color.id === selectedColor) || null;
  };

  const getImagesForSelectedColor = () => {
    const selectedColorObj = getSelectedColor();
    return selectedColorObj?.images || [];
  };

  const hasMultipleColors = () => {
    return availableColors.length > 1;
  };

  const value = {
    selectedColor,
    availableColors,
    selectColor,
    getSelectedColor,
    getImagesForSelectedColor,
    hasMultipleColors,
    setAvailableColors
  };

  return (
    <ProductColorContext.Provider value={value}>
      {children}
    </ProductColorContext.Provider>
  );
}; 