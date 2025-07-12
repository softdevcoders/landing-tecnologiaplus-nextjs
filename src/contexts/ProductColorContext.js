"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export const ProductColorContext = createContext();

export const useProductColor = () => {
  const context = useContext(ProductColorContext);
  if (!context) {
    throw new Error('useProductColor must be used within a ProductColorProvider');
  }
  return context;
};

export const useProductColorSafe = () => {
  const context = useContext(ProductColorContext);
  return context;
};

export const ProductColorProvider = ({ children, colors = [], defaultColor = null }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || colors[0]?.id || null);
  const [availableColors, setAvailableColors] = useState(colors);

  useEffect(() => {
    if (colors.length > 0) {
      setAvailableColors(colors);
      
      if (!selectedColor || !colors.find(color => color.id === selectedColor)) {
        setSelectedColor(defaultColor || colors[0]?.id || null);
      }
    }
  }, [colors, defaultColor, selectedColor]);

  const selectColor = useCallback((colorId) => {
    const colorExists = availableColors.find(color => color.id === colorId);
    if (colorExists) {
      setSelectedColor(colorId);
    }
  }, [availableColors]);

  const getSelectedColor = useCallback(() => {
    return availableColors.find(color => color.id === selectedColor) || null;
  }, [availableColors, selectedColor]);

  const getImagesForSelectedColor = useCallback(() => {
    const selectedColorObj = getSelectedColor();
    return selectedColorObj?.images || [];
  }, [getSelectedColor]);

  const hasMultipleColors = useCallback(() => {
    return availableColors.length > 1;
  }, [availableColors]);

  const value = useMemo(() => ({
    selectedColor,
    availableColors,
    selectColor,
    getSelectedColor,
    getImagesForSelectedColor,
    hasMultipleColors,
    setAvailableColors
  }), [
    selectedColor,
    availableColors,
    selectColor,
    getSelectedColor,
    getImagesForSelectedColor,
    hasMultipleColors
  ]);

  return (
    <ProductColorContext.Provider value={value}>
      {children}
    </ProductColorContext.Provider>
  );
}; 