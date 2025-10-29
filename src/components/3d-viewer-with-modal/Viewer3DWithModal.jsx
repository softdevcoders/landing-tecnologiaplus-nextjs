'use client';
import { useState } from 'react';
import Viewer3D from '@/components/image-gallery/components/3d-viewer/3dViewer';
import VideoModal from '@/components/image-gallery/components/video-modal/VideoModal';
import styles from './Viewer3DWithModal.module.scss';
import Arrows360 from '@/components/ui/icons/arrows-360';

const Viewer3DWithModal = ({ 
  modelID, 
  title = "Modelo 3D", 
  preset = 'ecommerce',
  isMobile = false,
  enableZoom = true,
  enableControls = true,
  showIconArrastrarParaRotar = false,
  show360Button = true, // Nueva prop para mostrar/ocultar el botón 360°
  buttonPosition = 'bottom-right', // Posición del botón: 'bottom-right', 'top-right', 'center'
  buttonSize = 'medium' // Tamaño del botón: 'small', 'medium', 'large'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Crear el objeto de media para el modal
  const mediaItem = {
    type: '3d',
    modelID: modelID,
    title: title
  };

  return (
    <div className={styles.viewer3dWithModal}>
      {/* Visualizador 3D principal */}
      <Viewer3D
        modelID={modelID}
        title={title}
        preset={preset}
        isMobile={isMobile}
        enableZoom={enableZoom}
        enableControls={enableControls}
        showIconArrastrarParaRotar={showIconArrastrarParaRotar}
        coverPaddingInline={0}
      />
      
      {/* Botón 360° */}
      {show360Button && (
        <button
          className={`${styles.button360} ${styles[buttonPosition]} ${styles[buttonSize]}`}
          onClick={() => setIsModalOpen(true)}
          type="button"
          aria-label="Ver modelo 3D 360°"
        >
          <Arrows360 color="#333" />
          <span className={styles.buttonText}>360°</span>
        </button>
      )}

      {/* Modal 360° */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mediaItems={[mediaItem]}
        productTitle={title}
        selectedColor=""
      />
    </div>
  );
};

export default Viewer3DWithModal;
