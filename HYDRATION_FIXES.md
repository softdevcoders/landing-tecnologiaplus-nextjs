# Fixing Hydration Issues and Optimizing the Website

This guide contains solutions for the errors you're experiencing with the website.

## 1. Fixed Issues

We've already fixed the following issues:

1. **InfiniteSlider2 Flickering**: Fixed by standardizing logo image sizes and adding hardware acceleration
2. **Referrer Policy Warnings**: Updated the `Referrer-Policy` header to `strict-origin-when-cross-origin` in `next.config.mjs`
3. **Swiper Loop Warning**: Fixed by conditionally enabling loop mode on the client side only

## 2. Manually Update InfiniteSlider2 Usage

Find all components that use the `InfiniteSlider2` component and update them to use the new `activeDefaultSpeed` parameter.

Look for patterns like these:
```jsx
<InfiniteSlider2 logos={logosName} duration={40} />
```
or
```jsx
<InfiniteSlider2 logos={logosName} speed={5000} />
```

Replace them with:
```jsx
<InfiniteSlider2 
  logos={logosName} 
  activeDefaultSpeed={true} 
/>
```

### Key Files to Update:

- `src/app/ver-mas/**/LogosSection.jsx` files
- `src/app/**/ClientsSection/*.jsx` files

## 3. Fix Source Map Errors

These errors don't affect functionality - they're just development warnings. 
If you still want to fix them, update your Next.js webpack config with:

```js
// In next.config.mjs
webpack: (config, { dev }) => {
  // Only apply in dev mode
  if (dev) {
    config.devtool = 'eval-source-map';
  }
  // ... your existing webpack config
  return config;
}
```

## 4. Fix Remaining Hydration Issues

For any component still showing hydration issues:

1. Make sure all dynamic logic is client-side only:
   ```jsx
   // BAD: Different result on server vs client
   const value = Math.random();
   
   // GOOD: Only run on client
   const [value, setValue] = useState(0);
   useEffect(() => {
     setValue(Math.random());
   }, []);
   ```

2. Use the `useEffect` hook to initialize state that depends on browser APIs:
   ```jsx
   // Initialize on client only
   const [windowWidth, setWindowWidth] = useState(0);
   useEffect(() => {
     setWindowWidth(window.innerWidth);
   }, []);
   ```

3. For conditional client/server rendering:
   ```jsx
   const [isClient, setIsClient] = useState(false);
   useEffect(() => {
     setIsClient(true);
   }, []);
   
   return (
     <div>
       {isClient ? 
         <ClientComponent /> :
         <ServerFallback />
       }
     </div>
   );
   ```

## 5. Testing Your Fixes

After making these changes:

1. Clear your browser cache
2. Run `npm run build && npm start` to test in production mode
3. Check the console for remaining errors
4. Verify that sliders work as expected and logos don't flicker 