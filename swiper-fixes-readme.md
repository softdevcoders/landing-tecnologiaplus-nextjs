# Swiper and Font Optimization Guide

## Swiper Component Fixes

The following improvements have been implemented to ensure Swiper components work correctly across all devices:

### 1. Navigation Arrows Fix

All Swiper components now include proper navigation arrows with the following enhancements:

- Added `navigation={true}` prop to all Swiper components
- Enhanced CSS with higher specificity and !important flags to ensure visibility
- Ensured proper module imports for Navigation
- Added consistent styling for arrows across desktop and mobile

### 2. Duplicate Keys Fix

All map functions now use unique keys based on image URLs instead of array indices:

```jsx
// Old approach - causes React warnings
<SwiperSlide key={index}>

// New approach - unique keys based on image filenames
<SwiperSlide key={`slide-${img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.'))}`}>
```

### 3. Preload Images Handling

Removed the problematic `preloadImages` prop and replaced with proper preloading technique:

```jsx
// Instead of using preloadImages prop (which causes warnings),
// manually preload images in useEffect:
useEffect(() => {
  if (images && images.length > 0) {
    images.forEach(img => {
      const preloadImg = new Image();
      preloadImg.src = img;
    });
  }
}, [images]);
```

## Font Optimization

Improved font handling with the following enhancements:

1. Used Next.js font optimization with proper font variables:
   ```jsx
   // in layout.js
   const montserrat = Montserrat({
     subsets: ['latin'],
     display: 'swap',
     variable: '--font-montserrat',
     weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
   });
   ```

2. Created a responsive typography system with proper CSS variables:
   ```scss
   // in _typography.scss
   :root {
     --font-primary: var(--font-montserrat, 'Montserrat', sans-serif);
     --font-secondary: var(--font-bebas-neue, 'Bebas Neue', sans-serif);
     --fs-xs: clamp(0.75rem, 2vw, 0.875rem);
     --fs-sm: clamp(0.875rem, 2.5vw, 1rem);
     // ...more sizes
   }
   ```

3. Added mobile-specific optimizations to ensure fonts display correctly on all devices

## Batch Fixing Components

If you need to update more components in the future, you can use the provided script:

```bash
node fix-mobile-gallery.js
```

This will automatically:
- Add navigation={true} property to all Swiper components
- Fix key issues in map functions
- Ensure proper imports are included
- Remove problematic preloadImages props
- Replace thumb references if not used

## OptimizedImage Component

A new `OptimizedImage` component has been added to improve image performance:

- Automatically optimizes Cloudinary images
- Maintains proper width/height to prevent layout shifts
- Handles fallbacks and lazy loading
- Improves Core Web Vitals (CLS, LCP)

Example usage:
```jsx
<OptimizedImage
  src="https://res.cloudinary.com/your-cloud/image/upload/example.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true} // For above-the-fold critical images
/>
```

## Styling Consistency

- Use CSS variables for fonts and colors
- Use clamp() for responsive sizing
- Add !important flags only when required for overriding third-party styles
- Maintain consistent structure across components 