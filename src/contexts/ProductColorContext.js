"use client";

import { createContext, useContext, useState, useCallback } from 'react';

export const ProductColorContext = createContext();

export const ProductColorProvider = ({ children, colors = [], defaultColor = null }) => {
  const [selectedColor, setSelectedColor] = useState(() => {
    if (!colors || colors.length === 0) return null;
    return defaultColor || colors[0].id;
  });

  const getSelectedColor = useCallback(() => {
    if (!selectedColor || !colors) return null;
    return colors.find(color => color.id === selectedColor);
  }, [selectedColor, colors]);

  const getMediaForSelectedColor = useCallback((colors = []) => {
    if (!selectedColor || !colors) return [];
    
    const selectedColorData = colors.find(color => color.id === selectedColor);
    return selectedColorData?.media || [];
  }, [selectedColor]);

  const value = {
    colors,
    selectedColor,
    setSelectedColor,
    getSelectedColor,
    getMediaForSelectedColor
  };

  return (
    <ProductColorContext.Provider value={value}>
      {children}
    </ProductColorContext.Provider>
  );
};

export const useProductColorSafe = () => {
  const context = useContext(ProductColorContext);
  return context || null;
};

export const useProductColor = () => {
  const context = useContext(ProductColorContext);
  if (!context) {
    throw new Error('useProductColor debe usarse dentro de un ProductColorProvider');
  }
  return context;
}; 