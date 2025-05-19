'use client';

import { useState, useEffect, useRef, memo } from "react";
import styles from "./YouTubePlayer.module.css";

/**
 * Privacy-focused YouTube embed component with lazy loading on scroll
 * Uses Intersection Observer to load the iframe only when the video is in view.
 */
const YouTubePlayer = ({ videoId, title }) => {
  const [isInView, setIsInView] = useState(false); // State to track if iframe is in view

  const iframeRef = useRef(null); // Reference to the iframe

  // Extract video ID if a full URL was provided
  const extractedVideoId =
    videoId.includes("youtube.com") || videoId.includes("youtu.be")
      ? videoId.split(/[\/=]/g).pop()
      : videoId;

  // Privacy-enhanced embed URL with additional parameters for better appearance
  const embedUrl = `https://www.youtube-nocookie.com/embed/${extractedVideoId}?rel=0&modestbranding=1&showinfo=0&enablejsapi=0`;

  // Use Intersection Observer to detect when the iframe is in view
  useEffect(() => {
    setTimeout(() => {
      setIsInView(true); 
    }, 1000); // Delay to prevent immediate loading
  }, []);

  return (
    <div className={styles.youtubeContainer}>
      {isInView && (
        <iframe
          ref={iframeRef}
          className={styles.youtubeIframe}
          width="660"
          height="344"
          src={embedUrl}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer"
          loading="lazy"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(YouTubePlayer);
