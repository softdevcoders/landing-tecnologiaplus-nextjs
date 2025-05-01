"use client";

import { useState, useEffect } from "react";
import styles from "./ServerFirstImage.module.scss";

/**
 * ServerFirstImage component that prioritizes server rendering to avoid hydration mismatches
 * This component renders the image without any client-side modifications at first,
 * then optionally upgrades it after hydration is complete.
 */
const ServerFirstImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  priority = false,
  sizes,
  style,
  objectFit = "contain",
  optimizeAfterHydration = true,
  ...props
}) => {
  // Track if component is hydrated
  const [isHydrated, setIsHydrated] = useState(false);
  // Start with the original src to match server rendering
  const [imgSrc, setImgSrc] = useState(src);

  // Mark component as hydrated after mount
  useEffect(() => {
    setIsHydrated(true);

    // If this is a priority image, preload it immediately on client side
    // This improves LCP and addresses preload warning
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.fetchPriority = "high";
      document.head.appendChild(link);

      // Clean up
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority, src]);

  // Apply optimization after hydration if enabled - without using setTimeout
  useEffect(() => {
    if (
      isHydrated &&
      optimizeAfterHydration &&
      src &&
      src.includes("res.cloudinary.com") &&
      !src.includes("/f_auto,q_auto")
    ) {
      // Remove the setTimeout delay - it can cause hydration issues
      const optimizedSrc = src.replace(
        /\/upload\//,
        "/upload/f_auto,q_auto/"
      );
      setImgSrc(optimizedSrc);
    }
  }, [isHydrated, optimizeAfterHydration, src]);

  // Calculate aspect ratio without altering the format compared to server rendering
  const aspectRatioStr = width && height ? `${width} / ${height}` : undefined;

  // Determine appropriate loading strategy
  const imgLoading = priority ? "eager" : loading;
  const imgFetchPriority = priority ? "high" : "auto";

  return (
    <img
      src={imgSrc}
      alt={alt || ""}
      width={width}
      height={height}
      className={className}
      loading={imgLoading}
      fetchPriority={imgFetchPriority}
      sizes={
        sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      }
      style={{
        ...(style || {}),
        aspectRatio: aspectRatioStr,
        objectFit: objectFit,
      }}
      {...props}
    />
  );
};

export default ServerFirstImage;
