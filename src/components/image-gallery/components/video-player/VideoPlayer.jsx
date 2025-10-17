"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./video-player.module.scss";
import { getOptimizedVideoUrl, getOptimizedImageUrl } from "../../../../../lib/imageUtils";

const VideoPlayer = ({ video, isActive = true }) => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hideControlsTimeoutRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Manejar inicio de toque
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
    touchMoveRef.current = false;
  };

  // Manejar movimiento de toque
  const handleTouchMove = (e) => {
    if (!isMobile || !touchStartRef.current) return;
    
    const deltaX = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
    
    // Si el movimiento es significativo (más de 10px), marcar como movimiento
    if (deltaX > 10 || deltaY > 10) {
      touchMoveRef.current = true;
    }
  };

  // Manejar fin de toque
  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    // Solo activar controles si NO hubo movimiento significativo
    if (!touchMoveRef.current && touchStartRef.current) {
      const touchDuration = Date.now() - touchStartRef.current.time;
      
      // Solo si fue un tap rápido (menos de 300ms) y sin movimiento
      if (touchDuration < 300) {
        activateControls();
      }
    }
    
    // Limpiar referencias
    touchStartRef.current = null;
    touchMoveRef.current = false;
  };

  // Función para activar controles y reproducción
  const activateControls = () => {
    // Intentar reproducir el video si no se está reproduciendo
    if (videoRef.current && videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Error manejado silenciosamente
        });
      }
    }
    
    // Mostrar controles en móvil
    if (isMobile) {
      setShowControls(true);
      
      // Limpiar timeout anterior
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
      
      // Ocultar controles después de 3 segundos
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  // Manejar clic en desktop
  const handleClick = () => {
    if (!isMobile) {
      activateControls();
    }
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);

  // Manejar reproducción automática y estado activo
  useEffect(() => {
    if (videoRef.current) {
      if (!isActive) {
        videoRef.current.pause();
      } else {
        // Intentar reproducir automáticamente
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay exitoso
            })
            .catch((error) => {
              // Autoplay falló (típico en móviles)
              // En este caso, el video se iniciará cuando el usuario toque la pantalla
            });
        }
      }
    }
  }, [isActive]);

  // Efecto adicional para autoplay cuando el componente se monta
  useEffect(() => {
    if (videoRef.current && isActive) {
      // Pequeño delay para asegurar que el video esté listo
      const timer = setTimeout(() => {
        const playPromise = videoRef.current?.play();
        
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Autoplay inicial falló, se manejará con la interacción del usuario
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div 
      className={styles.cloudinaryPlayer}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={videoRef}
        controls={!isMobile || showControls} // Mostrar controles solo en desktop o cuando se toque en móvil
        preload="auto" // Cambiar a "auto" para mejor autoplay
        poster={getOptimizedImageUrl({url: video.thumbnail, width: 1600, quality: 80, type: 'video'})}
        className={`${styles.videoElement} ${isMobile && !showControls ? styles.hiddenControls : ''}`}
        playsInline
        disablePictureInPicture
        onContextMenu={handleContextMenu}
        autoPlay
        muted // Requerido para autoplay en la mayoría de navegadores
        loop
      >
        <source src={getOptimizedVideoUrl({ url: video.src })} type="video/mp4" />   
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoPlayer; 