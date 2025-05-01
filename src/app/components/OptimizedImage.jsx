'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { optimizeCloudinaryImage, generateResponsiveImageSources } from '../utils/ImageOptimization';

/**
 * OptimizedImage component for improved image loading performance
 * This component automatically handles responsive images, lazy loading, and BlurUp loading
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 80,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Only optimize Cloudinary images
  const isCloudinaryImage = src && typeof src === 'string' && src.includes('cloudinary.com');
  
  // Generate responsive image sources
  const responsiveProps = isCloudinaryImage
    ? generateResponsiveImageSources(src, [320, 640, 768, 1024, 1280], quality)
    : { src };
  
  // Calculate optimal size for the placeholder
  const placeholderSize = Math.min(20, Math.floor(width / 10));
  
  // Generate low quality placeholder
  const placeholderSrc = isCloudinaryImage
    ? optimizeCloudinaryImage(src, placeholderSize, null, 20)
    : undefined;
  
  // Generate blur data URL for non-Cloudinary images
  const blurDataURL = !isCloudinaryImage 
    ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23dedede'/%3E%3C/svg%3E`
    : undefined;
  
  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : loading;
  
  // Set fetchPriority based on loading strategy
  const fetchPriority = priority ? 'high' : 'auto';
  
  return (
    <div className={`optimized-image-container ${isLoaded ? 'loaded' : ''}`}>
      {isCloudinaryImage ? (
        <Image
          {...responsiveProps}
          alt={alt}
          width={width}
          height={height}
          className={`${className || ''} ${isLoaded ? 'loaded' : ''}`}
          loading={loadingStrategy}
          fetchPriority={fetchPriority}
          placeholder={placeholderSrc ? "blur" : undefined}
          blurDataURL={placeholderSrc}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className || ''} ${isLoaded ? 'loaded' : ''}`}
          loading={loadingStrategy}
          fetchPriority={fetchPriority}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      <style jsx>{`
        .optimized-image-container {
          position: relative;
          overflow: hidden;
        }
        
        :global(.optimized-image-container img) {
          transition: filter 0.3s ease-out;
        }
        
        :global(.optimized-image-container img:not(.loaded)) {
          filter: blur(10px);
        }
        
        :global(.optimized-image-container img.loaded) {
          filter: blur(0);
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage; 