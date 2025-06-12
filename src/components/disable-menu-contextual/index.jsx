'use client';

import { useEffect } from "react";

const DisableRightClickOnImages = () => {
  useEffect(() => {
    let touchTimeout;
    let isScrolling = false;
    let startY = 0;
    let startX = 0;
    let lastTouchTime = 0;
    const SCROLL_THRESHOLD = 5;

    const preventDefaultActions = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length !== 1) return; 
      
      const touch = e.touches[0];
      startY = touch.clientY;
      startX = touch.clientX;
      isScrolling = false;
      lastTouchTime = Date.now();

      
      touchTimeout = setTimeout(() => {
        if (!isScrolling) {
          preventDefaultActions(e);
        }
      }, 100);
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      
      const touch = e.touches[0];
      const deltaY = Math.abs(touch.clientY - startY);
      const deltaX = Math.abs(touch.clientX - startX);
      const timeDiff = Date.now() - lastTouchTime;

      
      if (deltaY > SCROLL_THRESHOLD || deltaX > SCROLL_THRESHOLD) {
        isScrolling = true;
        clearTimeout(touchTimeout);
      }

      
      if (isScrolling) {
        return true;
      }

      
      if (timeDiff > 100) {
        preventDefaultActions(e);
      }
    };

    const handleTouchEnd = () => {
      clearTimeout(touchTimeout);
      isScrolling = false;
    };

    
    const applyProtectiveStyles = (img) => {
      const styles = {
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
        'pointer-events': 'auto',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
      };
      
      Object.assign(img.style, styles);
      img.setAttribute('draggable', 'false');
      img.setAttribute('data-protected', 'true');
    };

    
    const protectImage = (img) => {
      applyProtectiveStyles(img);
      
      // Always block the context menu
      img.addEventListener('contextmenu', preventDefaultActions);

      // Detect if the image lives inside a Swiper carousel (commonly used for product image sliders)
      const isInSwiper = Boolean(
        img.closest('.swiper') ||
        img.closest('.swiper-container') ||
        img.closest('.swiper-wrapper') ||
        img.closest('.swiper-slide') ||
        img.dataset.allowSwipe === 'true'
      );

      // Only attach the stricter touch / pointer blockers when the image is NOT in a carousel.
      if (!isInSwiper) {
        img.addEventListener('touchstart', handleTouchStart, { passive: true });
        img.addEventListener('touchmove', handleTouchMove, { passive: true });
        img.addEventListener('touchend', handleTouchEnd);
        img.addEventListener('mousedown', preventDefaultActions);
        img.addEventListener('pointerdown', preventDefaultActions);
      }

      // Always prevent drag and clipboard interactions regardless of Swiper presence
      img.addEventListener('dragstart', preventDefaultActions);
      img.addEventListener('copy', preventDefaultActions);
      img.addEventListener('cut', preventDefaultActions);
      img.addEventListener('paste', preventDefaultActions);
    };

    
    const unprotectImage = (img) => {
      img.removeEventListener('contextmenu', preventDefaultActions);
      img.removeEventListener('touchstart', handleTouchStart);
      img.removeEventListener('touchmove', handleTouchMove);
      img.removeEventListener('touchend', handleTouchEnd);
      img.removeEventListener('dragstart', preventDefaultActions);
      img.removeEventListener('mousedown', preventDefaultActions);
      img.removeEventListener('pointerdown', preventDefaultActions);
      img.removeEventListener('copy', preventDefaultActions);
      img.removeEventListener('cut', preventDefaultActions);
      img.removeEventListener('paste', preventDefaultActions);
    };

    
    const images = document.querySelectorAll('img');
    images.forEach(protectImage);

    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'IMG') {
            protectImage(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(protectImage);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    
    const style = document.createElement('style');
    style.textContent = `
      img[data-protected="true"] {
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
      }
      
      img[data-protected="true"]::selection {
        background: transparent;
      }
    `;
    document.head.appendChild(style);

    
    return () => {
      observer.disconnect();
      images.forEach(unprotectImage);
      clearTimeout(touchTimeout);
      style.remove();
    };
  }, []);

  return null;
};

export default DisableRightClickOnImages;
