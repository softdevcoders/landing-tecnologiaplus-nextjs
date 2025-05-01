// components/sliders/InfiniteSlider2.js
"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './InfiniteSlider2.module.scss';

// Helper to detect SVG images
const isSvgImage = (src) => {
  return src && (src.toLowerCase().endsWith('.svg') || src.includes('.svg'));
};

// Calculate optimal duration based on item count to maintain consistent speed
const calculateOptimalDuration = (itemCount, preset = 'normal') => {
  // Base duration for different presets
  const baseMultipliers = {
    slow: 1,     // Similar to Platzi.com's slow slider
    normal: 1,     // Standard speed
    fast: 0.7      // Faster speed
  };
  
  // Ensure at least 10 items for calculation (including duplicates for loop)
  const effectiveCount = Math.max(itemCount, 10);
  
  // Calculate base duration: larger count = proportionally larger duration
  // This ensures visual speed stays consistent regardless of item count
  const baseDuration = effectiveCount * 4;
  
  // Apply the speed multiplier
  const multiplier = baseMultipliers[preset] || baseMultipliers.normal;
  
  return baseDuration * multiplier;
};

const InfiniteSlider2 = ({ 
  logos, 
  images, 
  speed = 5000, 
  duration = 40, 
  className,
  activeDefaultSpeed = false,
  defaultSpeed = 40,
  stopOnFocus = false,
  speedPreset = 'normal' // 'slow', 'normal', or 'fast'
}) => {
  // For backwards compatibility, handle both logos and images props
  const items = logos || images || [];
  
  // State to track when component is in view
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Calculate animation duration based on item count and chosen preset
  const calculatedDuration = calculateOptimalDuration(items.length, speedPreset);
  
  // Calculate animation duration - faster speed = lower duration
  // If activeDefaultSpeed is true, use defaultSpeed instead of provided duration
  const animationDuration = activeDefaultSpeed 
    ? defaultSpeed 
    : calculatedDuration || duration || (items.length > 0 ? 40 : 0);

  // Normalize items array for consistent server/client rendering
  // Important: this must be the same on both server and client to avoid hydration mismatches
  const normalizedItems = items.length >= 5 
    ? items 
    : [...items, ...items, ...items].slice(0, 15);
  
  // Double the items to ensure continuous scrolling
  const displayItems = [...normalizedItems, ...normalizedItems];
  
  // Client-side effects
  useEffect(() => {
    setIsClient(true);
    
    // Set up intersection observer to detect when slider is in view
    if (typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsInView(entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(containerRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  // Add animation keyframes dynamically to ensure they're available
  useEffect(() => {
    if (isClient) {
      // Create a new style element instead of accessing existing stylesheets
      // This avoids CORS issues when accessing stylesheets
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      
      // Add the keyframes to our new style element
      styleElement.innerHTML = `
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `;
      
      // Append the style element to head
      document.head.appendChild(styleElement);
      
      // Clean up function to remove the style element when component unmounts
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [isClient]);
  
  // Determine if we should animate based on client state and viewport
  // Only pause on hover if stopOnFocus is true
  const shouldAnimate = isClient && isInView && !(stopOnFocus && isHovered);
  
  // Animation styles with proper fallbacks
  const trackStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    width: 'max-content',
    padding: '10px 0',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    transition: isHovered ? 'transform 0.2s ease' : 'none',
    // Only animate on client-side to avoid hydration issues
    animation: isClient && shouldAnimate ? `scrollX ${animationDuration}s linear infinite` : 'none',
    animationPlayState: shouldAnimate ? 'running' : 'paused',
  };

  // Handle image loading error
  const handleImageError = (e) => {
    if (isClient && e && e.target) {
      // Instead of hiding, show a placeholder color
      e.target.style.opacity = '0.5';
      e.target.style.background = '#f0f0f0';
    }
  };

  // Static styles to ensure consistent rendering between server and client
  const logoItemStyle = {
    flex: '0 0 auto',
    width: '150px',
    height: '80px',
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transformStyle: 'preserve-3d', // Helps with 3D rendering
  };

  // Special handling for the Los Olivos logo and similar SVGs
  const isLosOlivosLogo = (src) => {
    return src && (
      src.includes('Mesa_de_trabajo_20_o1drqb') || 
      src.toLowerCase().includes('los_olivos') ||
      src.toLowerCase().includes('olivos')
    );
  };

  // Special handling for specific problematic SVGs (width: 130px, height: 50px)
  const isProblematicSvg = (src) => {
    return src && (
      // Add any specific SVGs that still have issues
      src.includes('Mesa_de_trabajo') ||
      src.includes('trabajo_')
    );
  };

  // Render each logo item
  const renderLogoItem = (item, index) => {
    const isSvg = isSvgImage(item.src);
    const isLosOlivos = isLosOlivosLogo(item.src);
    const isProblemSvg = isProblematicSvg(item.src);
    
    // Special style for Los Olivos logo to prevent breathing
    const losOlivosStyle = {
      position: 'absolute',
      display: 'block',
      width: '120px',
      height: '40px',
      maxWidth: '120px',
      maxHeight: '40px',
      objectFit: 'contain',
      filter: 'grayscale(100%) opacity(0.7)',
      transition: 'filter 0.3s ease',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      willChange: 'filter',
      imageRendering: 'auto',
      shapeRendering: 'auto',
      textRendering: 'auto',
      transformOrigin: 'center center',
    };
    
    // Fixed style for problematic SVGs (width: 130px, height: 50px)
    const stabilizedSvgStyle = {
      position: 'absolute',
      display: 'block',
      width: '130px',
      height: '50px',
      maxWidth: '130px',
      maxHeight: '50px',
      objectFit: 'contain', // Changed from 'none' to 'contain'
      objectPosition: 'center',
      filter: 'grayscale(100%) opacity(0.7)',
      transition: 'filter 0.3s ease',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      willChange: 'filter',
      imageRendering: 'auto',
      transformOrigin: 'center center',
    };
    
    // SVG style with basic fixes
    const svgImageStyle = {
      position: 'absolute',
      display: 'block',
      width: '130px',
      height: '50px',
      maxWidth: '130px',
      maxHeight: '50px',
      objectFit: 'contain',
      filter: 'grayscale(100%) opacity(0.7)',
      transition: 'filter 0.3s ease',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      willChange: 'filter',
    };
    
    // Regular image style
    const logoImageStyle = {
      position: 'absolute',
      display: 'block',
      width: 'auto',
      height: '50px',
      maxWidth: '130px',
      objectFit: 'contain',
      filter: 'grayscale(100%) opacity(0.7)',
      transition: 'filter 0.3s ease',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      willChange: 'filter',
    };
    
    // Choose the appropriate style
    let imageStyle;
    if (isLosOlivos) {
      imageStyle = losOlivosStyle;
    } else if (isProblemSvg) {
      imageStyle = stabilizedSvgStyle;
    } else if (isSvg) {
      imageStyle = svgImageStyle;
    } else {
      imageStyle = logoImageStyle;
    }
    
    return (
      <div 
        key={`slide-${index}`}
        style={logoItemStyle}
      >
        <img 
          src={item.src} 
          alt={item.alt || 'Client logo'} 
          loading="lazy"
          width={isProblemSvg ? "130" : (isLosOlivos ? "120" : "130")}
          height={isProblemSvg ? "50" : (isLosOlivos ? "40" : "50")}
          decoding="async"
          onError={handleImageError}
          style={imageStyle}
          onMouseEnter={(e) => {
            if (isClient && e && e.currentTarget) {
              e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
            }
          }}
          onMouseLeave={(e) => {
            if (isClient && e && e.currentTarget) {
              e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)';
            }
          }}
        />
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '20px 0',
        margin: '10px 0',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      {/* Gradient masks for fading effect on edges */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '150px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to right, white 20%, rgba(255, 255, 255, 0) 100%)'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '150px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to left, white 20%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      
      {/* Infinite scrolling track - only animate when in view */}
      <div 
        style={trackStyle}
        onMouseEnter={() => isClient && setIsHovered(true)}
        onMouseLeave={() => isClient && setIsHovered(false)}
      >
        {displayItems.map((item, index) => renderLogoItem(item, index))}
      </div>
    </div>
  );
};

export default InfiniteSlider2;
