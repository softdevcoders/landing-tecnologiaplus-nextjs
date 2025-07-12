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

  // Si no hay imágenes ni colores disponibles, mostrar mensaje
  if ((!images || images.length === 0) && (!colors || colors.length === 0)) {
    return (
      <div className={styles["galeria-ver-mas"]}>
        <p>No hay imágenes disponibles</p>
      </div>
    );
  }

  // Contenido del componente
  const content = (
    <section className={styles["galeria-ver-mas"]}>
      {/* Galería de imágenes */}
      <div className={styles["gallery-wrapper"]}>
        <ImageGallery 
          images={images}
          fallbackImages={images}
        />
      </div>

      {/* Información del producto */}
      <div className={styles["info-container"]}>
        {title && <h2 className={styles["info-title"]}>{title}</h2>}
        
        {/* Selector de colores */}
        <ColorSelector 
          title="Colores disponibles"
          showColorName={true}
          size="medium"
        />
        
        {description && <p className={styles["info-description"]}>{description}</p>}
      </div>
    </section>
  );

  // Si hay colores disponibles, envolver con el ProductColorProvider
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

  // Si no hay colores, devolver el contenido directamente
  return content;
};

export default GaleriaVerMas; 