import styles from "./galeria-ver-mas.module.scss";
import GalleryWrapper from "./components/gallery-wrapper";
import InfoContainer from "./components/info-container";
import { ProductColorProvider } from "@/contexts/ProductColorContext";

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
      <GalleryWrapper 
        images={images}
        fallbackImages={images}
        productTitle={title}
      />

      <InfoContainer 
        title={title}
        description={description}
      />
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