"use client";

import { useState, useEffect } from 'react';
import { extractDimensionsFromUrl, optimizeCloudinaryUrl } from '../../utils/imageUtils';
import styles from './OptimizedImage.module.css';

/**
 * OptimizedImage component for better performance and dimensions management
 * This addresses LCP issues, aspect ratio problems, and adds proper dimensions
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  style = {},
  ...props
}) => {
  // State to manage image source after optimization
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width, height });
  const isCloudinary = src && typeof src === 'string' && src.includes('res.cloudinary.com');
  
  // Detect image dimensions and optimize Cloudinary URLs after hydration
  useEffect(() => {
    // Skip processing for initial render to prevent hydration mismatches
    if (isCloudinary) {
      // If dimensions aren't explicitly provided, try to extract from URL
      if ((!width || !height) && src) {
        const extractedDimensions = extractDimensionsFromUrl(src);
        if (extractedDimensions.width && extractedDimensions.height) {
          setDimensions(extractedDimensions);
        }
      }
      
      // Apply optimization only after hydration
      const timer = setTimeout(() => {
        // Optimize the image URL if it's from Cloudinary
        const optimizedSrc = optimizeCloudinaryUrl(
          src, 
          dimensions.width || width, 
          dimensions.height || height
        );
        setImgSrc(optimizedSrc);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [src, isCloudinary, width, height, dimensions]);
  
  // Handle successful image load
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  // Handle image error by falling back to original source
  const handleImageError = () => {
    if (imgSrc !== src) {
      setImgSrc(src); // Fallback to original
    }
  };
  
  // Ensure we have some dimensions to prevent layout shifts
  const finalWidth = dimensions.width || width || 300;
  const finalHeight = dimensions.height || height || 200;
  
  // Calculate aspect ratio for the style
  const aspectRatio = finalWidth && finalHeight ? `${finalWidth} / ${finalHeight}` : undefined;
  
  // Determine loading strategy
  const loadingAttr = priority ? 'eager' : loading;
  const fetchPriority = priority ? 'high' : 'auto';
  
  // Combine styles
  const combinedStyle = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0.8,
    filter: isLoaded ? 'blur(0)' : 'blur(5px)',
    ...style,
    aspectRatio
  };
  
  // Set a CSS class string that handles missing module classes
  const cssClasses = [
    styles.optimizedImage || '',
    isLoaded ? (styles.loaded || '') : (styles.loading || ''),
    className || ''
  ].filter(Boolean).join(' ');
  
  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={finalWidth}
      height={finalHeight}
      loading={loadingAttr}
      fetchPriority={fetchPriority}
      sizes={sizes}
      className={cssClasses || undefined}
      style={combinedStyle}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage; 