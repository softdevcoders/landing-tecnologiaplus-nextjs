"use client";

import { useState, memo, useCallback, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

/**
 * Enhanced YouTube embed component with robust error handling and user experience
 * Features:
 * - Privacy-focused (no cookies until user consent)
 * - Retry mechanism with exponential backoff
 * - Loading states and user feedback
 * - Accessibility improvements
 * - Performance optimizations
 * - Analytics tracking
 */
const YouTubePlayer = ({ 
  videoId, 
  title, 
  imageCover, 
  imageCoverAlt = "Vista previa del video", 
  imageCoverTitle = "Vista previa del video",
  autoplay = true,
  muted = false,
  startTime = 0,
  onVideoStart,
  onVideoError,
  className = "",
  ...props 
}) => {
  const [consent, setConsent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retryDelay, setRetryDelay] = useState(1000);
  const iframeRef = useRef(null);
  const retryTimeoutRef = useRef(null);

  // Improved video ID extraction with better error handling
  const extractVideoId = useCallback((id) => {
    if (!id) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^[a-zA-Z0-9_-]{11}$/ // Direct video ID format
    ];
    
    for (const pattern of patterns) {
      const match = id.match(pattern);
      if (match) {
        return match[1] || match[0];
      }
    }
    
    return id; // Return as-is if no pattern matches
  }, []);

  const extractedVideoId = extractVideoId(videoId);

  // Build embed URL with enhanced parameters
  const buildEmbedUrl = useCallback(() => {
    if (!extractedVideoId) return null;
    
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      showinfo: '0',
      enablejsapi: '0',
      origin: typeof window !== 'undefined' ? window.location.origin : '',
      ...(autoplay && { autoplay: '1' }),
      ...(muted && { mute: '1' }),
      ...(startTime > 0 && { start: startTime.toString() }),
      ...(retryCount > 0 && { t: Date.now().toString() }) // Cache busting for retries
    });
    
    return `https://www.youtube-nocookie.com/embed/${extractedVideoId}?${params.toString()}`;
  }, [extractedVideoId, autoplay, muted, startTime, retryCount]);

  const embedUrl = buildEmbedUrl();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  // Handle consent with loading state
  const handleConsent = useCallback(() => {
    setIsLoading(true);
    setConsent(true);
    setHasError(false);
    setRetryCount(0);
    
    // Call analytics callback if provided
    if (onVideoStart) {
      onVideoStart(extractedVideoId);
    }
  }, [extractedVideoId, onVideoStart]);

  // Enhanced error handling with retry mechanism
  const handleIframeError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    
    // Call error callback if provided
    if (onVideoError) {
      onVideoError(extractedVideoId, retryCount);
    }
  }, [extractedVideoId, retryCount, onVideoError]);

  // Retry mechanism with exponential backoff
  const handleRetry = useCallback(() => {
    if (retryCount >= 3) {
      setHasError(true);
      return;
    }
    
    const newRetryCount = retryCount + 1;
    const newDelay = Math.min(retryDelay * 2, 10000); // Max 10 seconds
    
    setRetryCount(newRetryCount);
    setRetryDelay(newDelay);
    setIsLoading(true);
    setHasError(false);
    
    // Clear previous timeout
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
    
    // Retry after delay
    retryTimeoutRef.current = setTimeout(() => {
      setConsent(true);
    }, newDelay);
  }, [retryCount, retryDelay]);

  // Handle iframe load success
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  // Don't render if no valid video ID
  if (!extractedVideoId) {
    return (
      <div className={`${styles.youtubeContainer} ${className}`} {...props}>
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}>⚠️</div>
          <p>Error: ID de video no válido</p>
          <small>Verifica que el video ID sea correcto</small>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.youtubeContainer} ${className}`} {...props}>
      {!consent || true ? (
        <div 
          className={styles.thumbnailContainer} 
          onClick={hasError ? handleRetry : handleConsent}
          role="button"
          tabIndex={0}
          aria-label={hasError ? "Reintentar cargar video" : "Reproducir video"}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              hasError ? handleRetry() : handleConsent();
            }
          }}
        >
          <picture>
            <source
              srcSet={imageCover || `https://i.ytimg.com/vi/${extractedVideoId}/maxresdefault.jpg`}
              type="image/jpeg"
            />
            <img
              src={imageCover || `https://i.ytimg.com/vi/${extractedVideoId}/hqdefault.jpg`}
              alt={imageCoverAlt}
              title={imageCoverTitle} 
              className={styles.thumbnail}
              loading="lazy"
              width="660"
              height="344"
            />
          </picture>
          
          {/* Loading overlay */}
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
              <p>Cargando video...</p>
            </div>
          )}
          
          {/* Play button or retry button */}
          <div className={styles.playButton} aria-hidden="true">
            {hasError ? (
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <circle cx="34" cy="24" r="20" fill="#f00" opacity="0.9"/>
                <path d="M 28,18 L 28,30 L 40,24 Z" fill="#fff"/>
              </svg>
            ) : (
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path
                  className={styles.playButtonBg}
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="#f00"
                ></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            )}
          </div>
          
          <div className={styles.consentMessage}>
            {hasError && (
              <div>
                <p>Error al cargar el video</p>
                <small>Intento {retryCount + 1} de 3</small>
                <button 
                  className={styles.retryButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRetry();
                  }}
                  disabled={retryCount >= 3}
                >
                  {retryCount >= 3 ? 'Máximo de reintentos alcanzado' : 'Reintentar'}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.iframeContainer}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
              <p>Cargando video...</p>
            </div>
          )}
          <iframe
            ref={iframeRef}
            className={styles.youtubeIframe}
            width="660"
            height="344"
            src={embedUrl}
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
            onError={handleIframeError}
            onLoad={handleIframeLoad}
            sandbox="allow-scripts allow-same-origin allow-presentation"
            aria-label={`Reproductor de video: ${title || 'Video de YouTube'}`}
          />
        </div>
      )}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(YouTubePlayer);
