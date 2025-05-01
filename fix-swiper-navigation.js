/**
 * Instructions for fixing Swiper navigation issues:
 * 
 * For all MobileProductGallery components:
 * 
 * 1. Add navigation={true} property to all Swiper components
 * 
 * 2. Fix duplicate keys in loops by using unique identifiers instead of array indices:
 *    Change: key={index}
 *    To: key={`slide-${img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'))}`}
 * 
 * 3. Remove any preloadImages prop from Swiper components
 * 
 * 4. Make sure all Swiper components have the proper module imports:
 *    import { Navigation, Pagination, Thumbs } from "swiper/modules";
 * 
 * 5. Make sure all CSS imports are included:
 *    import "swiper/css";
 *    import "swiper/css/navigation";
 *    import "swiper/css/pagination";
 * 
 * Example implementation for a Swiper component:
 * 
 * <Swiper
 *   modules={[Navigation, Pagination]}
 *   pagination={{ clickable: true }}
 *   navigation={true}
 *   loop={true}
 *   className={styles.mainSwiper}
 * >
 *   {images.map((img, index) => (
 *     <SwiperSlide key={`slide-${img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'))}`}>
 *       <img
 *         src={img}
 *         alt={`Imagen ${index + 1}`}
 *         className={styles.mainImage}
 *       />
 *     </SwiperSlide>
 *   ))}
 * </Swiper>
 */ 