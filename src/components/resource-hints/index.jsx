/**
 * ResourceHints component for early resource loading optimizations
 * This component ensures preconnect hints are processed early to reduce critical path latency
 */
export default function ResourceHints() {
  return (
    <>
      {/* Critical preconnect hints - highest priority */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for additional performance */}
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Font preload will be handled automatically by Next.js font optimization */}
    </>
  );
} 