"use client";

import { useState, memo } from "react";
import styles from "./YouTubePlayer.module.css";

/**
 * Privacy-focused YouTube embed component
 * Uses a two-step approach to prevent third-party cookies:
 * 1. Shows a static thumbnail with play button (no YouTube cookies)
 * 2. Only loads YouTube iframe after explicit user consent
 */
const YouTubePlayer = ({ videoId, title }) => {
  const [consent, setConsent] = useState(false);

  // Extract video ID if a full URL was provided
  const extractedVideoId =
    videoId.includes("youtube.com") || videoId.includes("youtu.be")
      ? videoId.split(/[\/=]/g).pop()
      : videoId;

  // Privacy-enhanced embed URL with additional parameters for better appearance
  const embedUrl = `https://www.youtube-nocookie.com/embed/${extractedVideoId}?rel=0&modestbranding=1&showinfo=0&enablejsapi=0`;

  const handleConsent = () => {
    setConsent(true);
  };

  return (
    <div className={styles.youtubeContainer}>
      {!consent ? (
        <div className={styles.thumbnailContainer} onClick={handleConsent}>
          <picture>
            <source
              srcSet={`https://i.ytimg.com/vi/${extractedVideoId}/maxresdefault.jpg`}
              type="image/jpeg"
            />
            <img
              src={`https://i.ytimg.com/vi/${extractedVideoId}/hqdefault.jpg`}
              alt="Vista previa del video"
              className={styles.thumbnail}
              loading="lazy"
              width="660"
              height="344"
            />
          </picture>
          <div className={styles.playButton} aria-hidden="true">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path
                className={styles.playButtonBg}
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              ></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
          <div className={styles.consentMessage}>
            {/* <p >Haz clic para reproducir</p> */}
          </div>
        </div>
      ) : (
        <iframe
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
