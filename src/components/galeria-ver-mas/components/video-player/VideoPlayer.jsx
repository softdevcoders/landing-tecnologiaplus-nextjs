"use client";

import styles from "./video-player.module.scss";

const VideoPlayer = ({ video }) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.cloudinaryPlayer}>
      <video
        controls
        preload="metadata"
        poster={video.thumbnail}
        className={styles.videoElement}
        playsInline
        controlsList="nodownload"
        onContextMenu={handleContextMenu}
      >
        <source src={video.url} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoPlayer; 