'use client';

import { useEffect } from 'react';

/**
 * ScriptLoader component to optimize JavaScript loading
 * This component dynamically loads scripts with proper attributes for performance
 */
const ScriptLoader = ({ src, strategy = 'defer', onLoad, id }) => {
  useEffect(() => {
    // Skip if script is already loaded
    if (id && document.getElementById(id)) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    
    if (id) {
      script.id = id;
    }
    
    // Set loading strategy
    if (strategy === 'defer') {
      script.defer = true;
    } else if (strategy === 'lazy') {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.body.appendChild(script);
            observer.disconnect();
          }
        });
      });
      
      // Create a dummy element to observe
      const target = document.createElement('div');
      document.body.appendChild(target);
      observer.observe(target);
      
      return () => {
        observer.disconnect();
        if (target.parentNode) {
          target.parentNode.removeChild(target);
        }
      };
    } else {
      // Default to async
      script.async = true;
    }
    
    // Handle load event
    if (onLoad) {
      script.onload = onLoad;
    }
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src, strategy, onLoad, id]);
  
  return null;
};

export default ScriptLoader; 