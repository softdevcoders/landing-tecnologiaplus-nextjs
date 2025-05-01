"use client";

import { useEffect, useState } from 'react';

/**
 * Helper hook to ensure Swiper is initialized only on the client side
 * to prevent hydration mismatches with NextJS
 * 
 * @returns {boolean} isClient - Whether the component is running on the client
 */
export function useClientSwiperFix() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
} 