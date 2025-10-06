"use client";

import { useState, useCallback } from "react";
import styles from "./3d-viewer.module.scss";
import { buildEmbedUrl } from "./3dViewerConfig";

const View3DIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const Viewer3D = ({ 
  modelID, 
  title = "Modelo 3D", 
  onLoad = () => {},
  onError = () => {},
  config = {},
  preset = 'minimal',
  isMobile = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determinar el preset a usar basado en el dispositivo
  const effectivePreset = isMobile ? 'mobile' : preset;
  
  // Construir la URL del embed de Sketchfab usando la configuración
  const embedUrl = buildEmbedUrl(modelID, config, effectivePreset);

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
    <div className={`${styles.viewer3d}`}>
      {/* {isLoading && (
        <div className={styles.viewer3d__loading}>
          <div className={styles.viewer3d__spinner}></div>
          <p>Cargando modelo 3D...</p>
        </div>
      )} */}
      
      <div className={styles.viewer3d__coverTop}></div>
      <div className={styles.viewer3d__coverBottom}></div>

      <iframe
        src={embedUrl}
        className={styles.viewer3d__iframe}
        title={title}
        allow="autoplay; fullscreen; xr-spatial-tracking"
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
