
import styles from "./YouTubePlayer.module.css"; // Aquí puedes añadir tus estilos

/**
 * Componente que muestra un video de YouTube con una imagen de vista previa
 * Al hacer clic sobre la imagen, el video se carga directamente.
 */
const YouTubePlayer = ({ videoId, title }) => {
  const extractedVideoId =
    videoId.includes("youtube.com") || videoId.includes("youtu.be")
      ? videoId.split(/[\/=]/g).pop()
      : videoId;

  // URL del iframe para el video de YouTube
  const embedUrl = `https://www.youtube-nocookie.com/embed/${extractedVideoId}?rel=0&modestbranding=1&showinfo=0&enablejsapi=0`;

  return (
    <div className={styles.youtubeContainer}>
      <iframe
        className={styles.youtubeIframe}
        width="660"
        height="344"
        src={embedUrl}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="no-referrer"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
