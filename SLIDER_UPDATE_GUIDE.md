# InfiniteSlider2 Component Update Guide

## New Features Added

The InfiniteSlider2 component has been enhanced with several new features:

1. **Fixed SVG "breathing" issue**: 
   - Special handling for SVG logos, especially the Los Olivos logo
   - Optimized rendering for all SVG images

2. **New `stopOnFocus` prop** (default: false):
   - Controls whether the slider stops on hover
   - Set to `false` by client request to keep animation running always

3. **New `speedPreset` prop**:
   - Options: `"slow"`, `"normal"`, `"fast"`
   - `"slow"` mimics the Platzi.com homepage slider speed
   - Automatically calculates optimal duration based on item count
   - Ensures consistent visual speed regardless of logo quantity

## How to Update Your Components

### Step 1: Find All Components Using InfiniteSlider2

Update all components that use InfiniteSlider2 with the new props:

```jsx
// FROM:
<InfiniteSlider2 
  logos={logosArray} 
  duration={40} 
/>

// OR:
<InfiniteSlider2 
  logos={logosArray} 
  activeDefaultSpeed={true} 
/>

// TO:
<InfiniteSlider2 
  logos={logosArray} 
  speedPreset="slow"
  stopOnFocus={false}
/>
```

### Step 2: Files That Need Updates

The following components should be updated to use the new props:

- `src/app/ver-mas/**/LogosSection.jsx` files
- `src/app/**/ClientsSection/*.jsx` files
- Any other component that uses InfiniteSlider2

### Step 3: Testing After Updates

After updating the components:

1. Test the slider in both development and production builds
2. Verify the Los Olivos logo no longer "breathes" or flickers
3. Check that animation speed is consistent across different sections
4. Ensure the animation continues to run when hovering over logos

## Available Speed Presets

Choose the appropriate speed preset based on the section's needs:

- `speedPreset="slow"`: Similar to Platzi.com - slow, smooth movement
- `speedPreset="normal"`: Standard speed, good for most sections
- `speedPreset="fast"`: Faster movement, for sections that need more energy

## Example Usage

```jsx
// Standard usage with slow speed (like Platzi.com)
<InfiniteSlider2 
  logos={logosArray} 
  speedPreset="slow"
  stopOnFocus={false}
/>

// For sections needing faster movement
<InfiniteSlider2 
  logos={logosArray} 
  speedPreset="normal"
  stopOnFocus={false}
/>
``` 