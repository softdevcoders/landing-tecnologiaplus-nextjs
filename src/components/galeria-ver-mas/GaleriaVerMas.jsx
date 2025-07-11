"use client";

import styles from "./galeria-ver-mas.module.scss";
import ImageGallery from "./ImageGallery";

const defaultProps = {
  title: "",
  description: "",
  images: []
};

const GaleriaVerMas = ({ verMasInformacion = defaultProps }) => {
  const { title, description, images } = verMasInformacion;

  if (!images || images.length === 0) {
    return (
      <div className={styles["galeria-ver-mas"]}>
        <p>No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <section className={styles["galeria-ver-mas"]}>
      {/* Galería de imágenes */}
      <div className={styles["gallery-wrapper"]}>
        <ImageGallery 
          images={images}
          enableKeyboardNavigation={true}
          showImageCounter={true}
          showThumbnails={true}
        />
      </div>

      {/* Información del producto */}
      <div className={styles["info-container"]}>
        {title && <h2 className={styles["info-title"]}>{title}</h2>}
        {description && <p className={styles["info-description"]}>{description}</p>}
      </div>
    </section>
  );
};

export default GaleriaVerMas; 