'use client'

import { useEffect } from 'react'

export default function PreloadResources() {
  useEffect(() => {
    // Preload critical images on component mount
    const imagesToPreload = [
      '/images/logo-tecnologia-plus.jpg',
      // Add other critical images here
    ]

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    // Preload critical scripts
    const preloadScripts = () => {
      // This will preload any script you might need later
      const scripts = []
      scripts.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'script'
        link.href = src
        document.head.appendChild(link)
      })
    }

    preloadScripts()
  }, [])

  return null
} 