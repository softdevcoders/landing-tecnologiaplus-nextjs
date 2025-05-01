/**
 * Utility functions for image optimization
 */

/**
 * Extract dimensions from Cloudinary URL
 * This helps determine the natural dimensions of images from their URLs
 * 
 * @param {string} url - Cloudinary image URL
 * @returns {Object} width and height if found, or null values if not
 */
export function extractDimensionsFromUrl(url) {
  if (!url || typeof url !== 'string') return { width: null, height: null };
  
  // Check for common dimension patterns in filenames
  const dimensionPatterns = [
    /(\d+)x(\d+)/i,           // matches 600x400
    /(\d+)[_-](\d+)/i,        // matches 600_400 or 600-400
    /w(\d+)h(\d+)/i           // matches w600h400
  ];
  
  for (const pattern of dimensionPatterns) {
    
    const match = url.match(pattern);
    if (match && match.length >= 3) {
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);
      
      if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
        return { width, height };
      }
    }
  }
  
  return { width: null, height: null };
}

/**
 * Get optimal size for image based on its container and device
 * This helps ensure we serve appropriately sized images
 * 
 * @param {Object} options - Configuration options
 * @returns {Object} width and height for optimal display
 */
export function getOptimalImageSize({ 
  containerWidth = null, 
  deviceWidth = null, 
  aspectRatio = null,
  defaultWidth = 800,
  defaultHeight = 600,
  maxWidth = 1200
}) {
  // Default to reasonable values if no inputs provided
  const width = Math.min(
    containerWidth || deviceWidth || defaultWidth,
    maxWidth
  );
  
  // Calculate height based on aspect ratio if provided
  let height;
  if (aspectRatio) {
    height = Math.round(width / aspectRatio);
  } else {
    height = defaultHeight;
  }
  
  return { width, height };
}

/**
 * Add Cloudinary optimization parameters to URL
 * 
 * @param {string} url - Original Cloudinary URL
 * @param {number|null} width - Desired width (null for auto)
 * @param {number|null} height - Desired height (null for auto) 
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(url, width = null, height = null, quality = 80) {
  if (!url || !url.includes('cloudinary.com')) return url;
  
  // Don't re-optimize if already optimized
  if (url.includes('/f_auto,q_')) return url;
  
  // Base transformation parameters
  const params = ['f_auto', `q_${quality}`];
  
  // Add width if specified
  if (width) params.push(`w_${width}`);
  
  // Add height if specified
  if (height) params.push(`h_${height}`);
  
  // Add transformations to the URL
  return url.replace(/\/upload\//, `/upload/${params.join(',')}/`);
}

/**
 * Get image dimensions based on browser viewport
 * 
 * @returns {Object} viewport dimensions
 */
export function getViewportDimensions() {
  if (typeof window === 'undefined') {
    return { width: 1200, height: 800 };
  }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

/**
 * Calculate aspect ratio from width and height
 * 
 * @param {number} width 
 * @param {number} height 
 * @returns {number|null} calculated aspect ratio
 */
export function calculateAspectRatio(width, height) {
  if (!width || !height || width <= 0 || height <= 0) return null;
  return width / height;
} 