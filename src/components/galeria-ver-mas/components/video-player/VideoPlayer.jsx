"use client";

import { useRef, useEffect } from "react";
import styles from "./video-player.module.scss";

const VideoPlayer = ({ video, isActive = true }) => {
  const videoRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Pausar el video cuando no está activo
  useEffect(() => {
    if (videoRef.current) {
      if (!isActive) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className={styles.cloudinaryPlayer}>
      <video
        ref={videoRef}
        controls
        preload="metadata"
        poster={video.thumbnail}
        className={styles.videoElement}
        playsInline
        disablePictureInPicture
        onContextMenu={handleContextMenu}
      >
        <source src={video.url} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoPlayer; 