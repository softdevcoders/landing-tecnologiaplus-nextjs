"use client";

import { useState, useCallback } from "react";
import styles from "./3d-viewer.module.scss";

const View3DIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
  </svg>
);

const Viewer3D = ({ 
  modelID, 
  title = "Modelo 3D", 
  onLoad = () => {},
  onError = () => {}
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Construir la URL del embed de Sketchfab
  const embedUrl = modelID ? `https://sketchfab.com/models/${modelID}/embed?autostart=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_watermark=0&ui_stop=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0` : null;

  // Handlers declarativos
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad();
  }, [onLoad]);

  const handleIframeError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onError("Error al cargar el modelo 3D");
  }, [onError]);

  // Validación del modelo
  if (!modelID) {
    return (
      <div className={styles.viewer3d}>
        <div className={styles.viewer3d__error}>
          <View3DIcon />
          <p>ID de modelo 3D no válido</p>
        </div>
      </div>
    );
  }

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  if (hasError) {
    return (
      <div className={styles.viewer3d}>
        <div className={styles.viewer3d__error}>
          <View3DIcon />
          <p>Error al cargar el modelo 3D</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.viewer3d} ${isFullscreen ? styles.viewer3d__fullscreen : ''}`}>
      {/* {isLoading && (
        <div className={styles.viewer3d__loading}>
          <div className={styles.viewer3d__spinner}></div>
          <p>Cargando modelo 3D...</p>
        </div>
      )} */}
      
      <div className={styles.viewer3d__controls}>
        <button
          className={styles.viewer3d__controlButton}
          onClick={handleFullscreen}
          title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          type="button"
        >
          {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
        </button>
      </div>

      <iframe
        src={embedUrl}
        className={styles.viewer3d__iframe}
        title={title}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
    </div>
  );
};

export default Viewer3D;
