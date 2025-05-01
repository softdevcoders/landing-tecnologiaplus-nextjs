'use client'

import { useEffect } from 'react'

/**
 * DeferNonCriticalJS component - handles loading non-critical JS after the page is interactive
 */
export default function DeferNonCriticalJS() {
  useEffect(() => {
    try {
      // Load non-critical JS after page is interactive
      const loadDeferredJS = () => {
        try {
          // Wait for page to become idle
          if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
              try {
                loadScripts()
              } catch (err) {
                console.error('Error in loadScripts:', err)
              }
            }, { timeout: 2000 }) // 2 second timeout
          } else {
            // Fallback for browsers that don't support requestIdleCallback
            setTimeout(() => {
              try {
                loadScripts()
              } catch (err) {
                console.error('Error in loadScripts setTimeout fallback:', err)
              }
            }, 2000)
          }
        } catch (err) {
          console.error('Error in loadDeferredJS:', err)
        }
      }

      const loadScripts = () => {
        // This is where we would load non-critical scripts
        // For example, analytics, social media widgets, etc.
        
        // This is just a placeholder - no actual scripts are loaded here
        console.log('Non-critical scripts loaded')
      }

      // Start loading process after component mounts
      if (typeof window !== 'undefined') {
        try {
          window.addEventListener('load', loadDeferredJS)
          
          return () => {
            window.removeEventListener('load', loadDeferredJS)
          }
        } catch (err) {
          console.error('Error adding/removing event listener:', err)
        }
      }
    } catch (err) {
      console.error('Error in DeferNonCriticalJS:', err)
    }
  }, [])

  // Component doesn't render anything visible
  return null
} 