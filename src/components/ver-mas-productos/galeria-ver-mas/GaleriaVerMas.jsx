import styles from "./galeria-ver-mas.module.scss";
import globalStyles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";
import GalleryWrapper from "./components/gallery-wrapper";
import InfoContainer from "./components/info-container";
import { ProductColorProvider } from "@/components/image-gallery/contexts/ProductColorContext";
import BackButton from "@/components/back-button";

const GaleriaVerMas = ({ verMasInformacion }) => {
  const { title, description, media, colors, defaultColor, hasColors = false, compatibleConProducts = [], opiniones = [] } = verMasInformacion;

  if (!media && !hasColors) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>No hay contenido disponible</p>
      </div>
    );
  }

  const content = (
    <section className={`${styles.container} ${globalStyles.container}`}>
      <div className={styles.backButton__container}>
        <BackButton />
      </div>
      <div className={styles.gallery__container}>
        <GalleryWrapper 
          media={media}
          colors={colors}
          hasColors={hasColors}
          productTitle={title}
        />

        <InfoContainer 
          title={title}
          description={description}
          hasColors={hasColors}
          compatibleConProducts={compatibleConProducts}
          opiniones={opiniones}
        />
      </div>
    </section>
  );

  if (hasColors) {
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