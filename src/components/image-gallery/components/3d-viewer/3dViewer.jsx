"use client";

import { useState, useCallback, useEffect } from "react";
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
  isMobile = false,
  enableZoom = false, // Nueva prop para habilitar zoom
  zoomLevel = 0, // Nivel de zoom inicial (0 = automático)
  enableControls = false // Habilitar controles de UI
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [embedUrl, setEmbedUrl] = useState(null);

  // Determinar el preset a usar basado en las props y dispositivo
  const getEffectivePreset = () => {
    if (isMobile) return 'mobile';
    if (enableZoom && enableControls) return 'zoomEnabled';
    if (enableZoom) return 'zoomLimited';
    return preset;
  };
  
  const effectivePreset = getEffectivePreset();
  
  // Crear configuración personalizada basada en las props
  const customConfig = {
    ...config,
    ...(enableZoom && {
      camera: 1 // Habilitar controles de cámara
    }),
    ...(enableControls && {
      ui_controls: 1
    })
  };

  // Efecto para manejar la hidratación del lado del cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Efecto para construir la URL del embed cuando el componente esté montado
  useEffect(() => {
    if (isMounted && modelID) {
      const url = buildEmbedUrl(modelID, customConfig, effectivePreset);
      setEmbedUrl(url);
    }
  }, [isMounted, modelID, customConfig, effectivePreset]);

  // Efecto para reiniciar el estado cuando cambia el modelID
  useEffect(() => {
    if (modelID) {
      setIsLoading(true);
      setHasError(false);
      setRetryCount(0);
    }
  }, [modelID]);

  // Handlers declarativos
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
    onLoad();
  }, [onLoad]);

  const handleIframeError = useCallback(() => {
    if (retryCount < 3) {
      // Reintentar cargar el iframe
      setRetryCount(prev => prev + 1);
      setTimeout(() => {
        // Forzar recarga del iframe cambiando la URL
        const url = buildEmbedUrl(modelID, customConfig, effectivePreset);
        setEmbedUrl(url + `&retry=${retryCount + 1}`);
      }, 1000 * (retryCount + 1)); // Delay incremental
    } else {
      setHasError(true);
      setIsLoading(false);
      onError("Error al cargar el modelo 3D después de varios intentos");
    }
  }, [onError, retryCount, modelID, config, effectivePreset]);

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

  // Mostrar loading mientras no esté montado o no haya URL
  if (!isMounted || !embedUrl) {
    return (
      <div className={styles.viewer3d}>
        <div className={styles.viewer3d__loading}>
          <div className={styles.viewer3d__spinner}></div>
          <p>Cargando modelo 3D...</p>
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
          {retryCount > 0 && (
            <p className={styles.viewer3d__retryInfo}>
              Intentos realizados: {retryCount}/3
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.viewer3d}`}>
      {isLoading && (
        <div className={styles.viewer3d__loading}>
          <div className={styles.viewer3d__spinner}></div>
          <p>Cargando modelo 3D...</p>
          {retryCount > 0 && (
            <p className={styles.viewer3d__retryInfo}>
              Reintentando... ({retryCount}/3)
            </p>
          )}
        </div>
      )}
      
      <div className={styles.viewer3d__coverTop}></div>
      <div className={styles.viewer3d__coverBottom}></div>

      <iframe
        key={`${modelID}-${retryCount}`} // Forzar re-render cuando cambie el retry
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
