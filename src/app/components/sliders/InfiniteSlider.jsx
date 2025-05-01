"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './InfiniteSlider.module.scss';

const InfiniteSlider = ({ logos = [], pauseOnHover = true }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sliderRef = useRef(null);
  const observerRef = useRef(null);

  // Ensure we have at least 10 logos for smooth scrolling
  const processedLogos = useMemo(() => {
    if (logos.length === 0) return [];
    
    // If we have less than 10 logos, duplicate them to ensure smooth scrolling
    let result = [...logos];
    while (result.length < 10) {
      result = [...result, ...logos];
    }
    
    return result;
  }, [logos]);

  // Preload images to prevent flickering
  useEffect(() => {
    if (processedLogos.length === 0) return;
    
    let loadedCount = 0;
    const totalImages = processedLogos.length;
    const loadTimeout = setTimeout(() => setImagesLoaded(true), 3000);
    
    const preloadImages = async () => {
      const promises = processedLogos.map(logo => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = logo.src;
          img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setImagesLoaded(true);
              clearTimeout(loadTimeout);
            }
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setImagesLoaded(true);
              clearTimeout(loadTimeout);
            }
            resolve();
          };
        });
      });
      
      await Promise.all(promises);
    };
    
    preloadImages();
    
    return () => clearTimeout(loadTimeout);
  }, [processedLogos]);

  // Handle visibility changes using Intersection Observer
  useEffect(() => {
    if (!sliderRef.current) return;
    
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      
      if (sliderRef.current) {
        sliderRef.current.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      }
    };
    
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });
    
    observerRef.current.observe(sliderRef.current);
    
    return () => {
      if (observerRef.current && sliderRef.current) {
        observerRef.current.unobserve(sliderRef.current);
      }
    };
  }, []);

  if (processedLogos.length === 0) return null;

  // Create two sets of logos for the continuous loop effect
  const allLogos = [...processedLogos, ...processedLogos];

  return (
    <div className={styles.slider_container}>
      <div 
        ref={sliderRef}
        className={`${styles.slider} ${!imagesLoaded ? styles.hidden : ''}`}
        style={pauseOnHover ? {} : { '&:hover': { animationPlayState: 'running' } }}
      >
        {allLogos.map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className={styles.slide}>
            <img 
              src={logo.src} 
              alt={logo.alt || 'Partner logo'} 
              width="150"
              height="80"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
