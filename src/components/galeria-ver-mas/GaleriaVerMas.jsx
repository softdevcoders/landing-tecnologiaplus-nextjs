"use client";

import styles from "./galeria-ver-mas.module.scss";
import ImageGallery from "./ImageGallery";
import { ProductColorProvider } from "@/contexts/ProductColorContext";
import ColorSelector from "@/components/color-selector";

const defaultProps = {
  title: "",
  description: "",
  images: [],
  colors: [],
  defaultColor: null
};

const GaleriaVerMas = ({ verMasInformacion = defaultProps }) => {
  const { title, description, images, colors, defaultColor } = verMasInformacion;

  if ((!images || images.length === 0) && (!colors || colors.length === 0)) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>No hay imágenes disponibles</p>
      </div>
    );
  }

  const content = (
    <section className={styles.container}>
      <div className={styles.galleryWrapper}>
        <ImageGallery 
          images={images}
          fallbackImages={images}
        />
      </div>

      <div className={styles.infoContainer}>
        {title && <h2 className={styles.title}>{title}</h2>}
        
        <ColorSelector 
          title="Colores disponibles"
          showColorName={true}
          size="medium"
        />
        
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );

  if (colors && colors.length > 0) {
    return (
      <ProductColorProvider 
        colors={colors} 
        defaultColor={defaultColor}
      >
        {content}
      </ProductColorProvider>
    );
  }

  return content;
};

export default GaleriaVerMas; 