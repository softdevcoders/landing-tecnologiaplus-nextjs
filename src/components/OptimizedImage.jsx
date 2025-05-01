'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * OptimizedImage component that enhances the Next.js Image component
 * with better defaults for performance and responsive handling
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  loading = 'lazy',
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Maintain aspect ratio if both width and height are provided
  const imageStyle = {
    objectFit: 'contain',
    ...style,
  };

  // If only one dimension is provided, calculate the other to maintain aspect ratio
  if (width && !height && typeof width === 'number') {
    imageStyle.aspectRatio = '16 / 9';
  } else if (!width && height && typeof height === 'number') {
    imageStyle.aspectRatio = '3 / 4';
  } else if (width && height) {
    imageStyle.aspectRatio = `${width} / ${height}`;
  }

  return (
    <div className={`image-container ${isLoading ? 'image-loading' : ''} ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width || 0}  
        height={height || 0}
        quality={quality}
        priority={priority}
        loading={loading}
        sizes={sizes}
        style={imageStyle}
        className={`optimized-image ${isLoading ? 'loading' : 'loaded'}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
      
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: auto;
        }
        
        .image-loading::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #f0f0f0;
          z-index: 1;
        }
        
        .loading {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .loaded {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage; 