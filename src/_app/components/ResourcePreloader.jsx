'use client'

import { useEffect } from 'react'

/**
 * ResourcePreloader component - handles preloading critical assets
 * Does not accept any props to avoid potential DOM attribute issues
 */
export default function ResourcePreloader() {
  useEffect(() => {
    try {
      // Function to preload images
      const preloadCriticalImages = () => {
        const criticalImages = [
          // Background image for slider hero
          'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jlxxsnlercoj0nihz4am_udppso.webp',
          // Localizadores images (LCP images)
          'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_auto,q_auto/v1744781254/Imagen_portada_4x-8_dfrjjg_1_1_lvtv17.webp',
          'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_auto,q_auto/v1744781156/Imagen_portada_4x-8_dfrjjg_1_cg4eew.webp',
          'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462120/12_1-8_o5nq6u.webp',
          'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861573/12_1-8_1_x1xwix.webp',
        ]
        
        criticalImages.forEach(src => {
          try {
            const imgLoader = new Image()
            imgLoader.fetchPriority = 'high'
            imgLoader.src = src
          } catch (err) {
            console.error('Error preloading image:', src, err)
          }
        })
      }

      // Execute preloaders with a small delay to avoid blocking initial render
      setTimeout(() => {
        preloadCriticalImages()
      }, 100)
      
      // Add preconnect for Cloudinary in case it wasn't added in the head
      if (typeof document !== 'undefined' && !document.querySelector('link[rel="preconnect"][href="https://res.cloudinary.com"]')) {
        try {
          const preconnect = document.createElement('link')
          preconnect.rel = 'preconnect'
          preconnect.href = 'https://res.cloudinary.com'
          preconnect.crossOrigin = 'anonymous'
          document.head.appendChild(preconnect)
        } catch (err) {
          console.error('Error adding preconnect:', err)
        }
      }
    } catch (err) {
      console.error('Error in ResourcePreloader:', err)
    }
  }, [])

  // Component doesn't render anything visible
  return null
} 