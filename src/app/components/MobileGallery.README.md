# MobileGallery Pattern Guide

This guide explains how to implement best practices for MobileGallery components across the site.

## Common Issues Addressed

1. Using `useState` unnecessarily for values that don't trigger re-renders
2. Lack of unique keys for list items 
3. Optional chaining issues causing errors
4. No safeguards for null/undefined values

## Implementation Steps

### 1. Import utility functions

```javascript
import { generateImageKey, safeGet, ensureUniqueColorIds } from '@/app/utils/galleryHelpers';
```

### 2. Use useRef for values that don't need to cause re-renders

```javascript
// Bad - causes unnecessary re-renders
const [isSwitchingImages, setIsSwitchingImages] = useState(false);

// Good - doesn't cause re-renders
const isSwitchingImagesRef = useRef(false);
```

### 3. Generate proper unique keys

```javascript
// Bad - using index as key
{images.map((img, index) => (
  <SwiperSlide key={index}>
    {/* ... */}
  </SwiperSlide>
))}

// Good - generating unique keys from URL
{images.map((img, index) => {
  const imgSrc = typeof img === "string" ? img : img.url;
  return (
    <SwiperSlide key={generateImageKey(imgSrc, index)}>
      {/* ... */}
    </SwiperSlide>
  );
})}
```

### 4. Add proper null checks

```javascript
// Bad - may cause errors if alternativeImages[currentIndex] is undefined
<h3>{alternativeImages[currentIndex]?.name}</h3>

// Good - only renders if value exists
{isAlternative && alternativeImages[currentIndex] ? (
  <div className={styles.colorNameContainer}>
    <h3>{alternativeImages[currentIndex].name}</h3>
    {/* ... */}
  </div>
) : null}
```

### 5. Ensure color images have unique IDs

```javascript
// Add IDs to your alternativeImages array
const alternativeImages = [
  {
    name: "Negro",
    url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743683761/Frame_1_21_bdcoxu.webp",
    id: "black-v2n"  // Add unique ID
  },
  // ...
];

// Or use the utility function to ensure IDs:
const processedAlternativeImages = ensureUniqueColorIds(alternativeImages);
```

## Gallery with Colors Example

For components that need color variants:

```jsx
function MobileProductGallery() {
  const mainSwiperRef = useRef(null);
  const [currentImages, setCurrentImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAlternative = alternativeImages.some(
    (img) => img.url === currentImages[0]
  );
  const isGallery = currentImages === images;
  const isSwitchingImagesRef = useRef(false);

  const handleThumbnailClick = (imageSet, index) => {
    setCurrentImages(imageSet);
    isSwitchingImagesRef.current = true;
    setTimeout(() => {
      setCurrentIndex(index);
      if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
        mainSwiperRef.current.swiper.slideTo(index, 0);
      }
      isSwitchingImagesRef.current = false;
    }, 10);
  };

  // Rest of your component...
}
```

## Simple Gallery Example

For components without color variants:

```jsx
function MobileProductGallery() {
  // For simple galleries without color switching, you can use useRef
  const swiperRef = useRef(null);
  const currentIndexRef = useRef(0);

  // Rest of your component...
  
  <Swiper
    ref={swiperRef}
    modules={[Navigation, Pagination]}
    pagination={{ clickable: true }}
    loop={true}
    className={styles.mainSwiper}
    onSlideChange={(swiper) => {
      currentIndexRef.current = swiper.realIndex;
    }}
  >
    {/* Map your images here */}
  </Swiper>
}
```

## Checking Existing Implementation

To verify your implementation is following best practices:

1. Make sure all list items have unique keys
2. Use useRef instead of useState when the value doesn't trigger UI changes
3. Add null checks before accessing object properties
4. Add error handling for all user interactions 