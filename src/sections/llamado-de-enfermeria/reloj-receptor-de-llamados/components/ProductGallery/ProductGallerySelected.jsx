"use client";
import { useState, useEffect } from "react";
import MobileProductGallery from "./MobileProductGallery";
import ProductGallery from "./ProductGallery";

export default function ProductGallerySelected() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileProductGallery /> : <ProductGallery />;
}
