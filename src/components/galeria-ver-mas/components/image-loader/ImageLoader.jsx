"use client";

import { useState, useCallback } from 'react';
import Image from "next/image";
import styles from "./image-loader.module.scss";

const ImageLoader = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  style,
  className,
  onClick,
  onLoad,
  placeholder = "blur",
  blurDataURL,
  skipLoader = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(!skipLoader);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const handleClick = useCallback((e) => {
    if (!isLoading && !hasError) {
      onClick?.(e);
    }
  }, [isLoading, hasError, onClick]);

  return (
    <div className={`${styles.imageContainer} ${className || ''}`} onClick={handleClick}>
      {/* Loader */}
      {isLoading && !skipLoader && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className={styles.error}>
          <div className={styles.errorIcon}>📷</div>
          <span className={styles.errorText}>Error al cargar imagen</span>
        </div>
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        style={{
          width: '100%',
          height: '100%',
          ...style,
          opacity: (isLoading && !skipLoader) ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={placeholder}
        blurDataURL={blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="}
        {...props}
      />
    </div>
  );
};

export default ImageLoader; 