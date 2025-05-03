/**
 * Utility functions for mobile gallery components
 */

/**
 * Generate a unique key from an image URL
 * @param {string} url - The image URL 
 * @param {number} index - Fallback index in case URL isn't available
 * @returns {string} A unique key for React components
 */
export const generateImageKey = (url, index) => {
  if (!url) return `img-${index}`;
  return `img-${url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))}`;
};

/**
 * Helper function to safely access properties with optional chaining
 * @param {object} obj - The object to access 
 * @param {string} path - Dot notation path (e.g., 'user.profile.name')
 * @param {*} defaultValue - Default value if path doesn't exist
 * @returns {*} The value at the path or defaultValue
 */
export const safeGet = (obj, path, defaultValue = null) => {
  if (!obj || !path) return defaultValue;
  
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined) return defaultValue;
    result = result[key];
  }
  
  return result !== undefined ? result : defaultValue;
};

/**
 * Ensure all color variant images have unique IDs
 * @param {Array} images - Array of color images 
 * @returns {Array} Array with guaranteed unique IDs
 */
export const ensureUniqueColorIds = (images) => {
  if (!Array.isArray(images)) return [];
  
  return images.map((img, index) => ({
    ...img,
    id: img.id || `color-${index}-${img.name || 'unknown'}`
  }));
};

/**
 * Create a swiper slide component with standardized props
 * This is a pattern reference for your own implementations
 */
export const createGallerySwiperExample = () => {
  /* Example usage:
  <Swiper
    ref={mainSwiperRef}
    modules={[Navigation, Pagination]}
    pagination={{ clickable: true }}
    navigation={true}
    loop={true}
    className={styles.mainSwiper}
    onSlideChange={(swiper) => {
      if (!isSwitchingImagesRef.current) {
        setCurrentIndex(swiper.realIndex);
      }
    }}
  >
    {images.map((img, index) => {
      const imgSrc = typeof img === "string" ? img : img.url;
      return (
        <SwiperSlide key={generateImageKey(imgSrc, index)}>
          <img
            src={imgSrc}
            alt={`Imagen ${index + 1}`}
            className={styles.mainImage}
          />
        </SwiperSlide>
      );
    })}
  </Swiper>
  */
}; 