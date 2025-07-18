import styles from "./galeria-ver-mas.module.scss";
import GalleryWrapper from "./components/gallery-wrapper";
import InfoContainer from "./components/info-container";
import { ProductColorProvider } from "@/contexts/ProductColorContext";

const defaultProps = {
  title: "",
  description: "",
  media: [], // Para productos sin colores
  colors: [], // Lista de colores, cada uno con su propia colección de media
  defaultColor: null
};

const GaleriaVerMas = ({ verMasInformacion = defaultProps }) => {
  const { title, description, media, colors, defaultColor } = verMasInformacion;
  const hasColors = colors && colors.length > 0;

  if (!media && !hasColors) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>No hay contenido disponible</p>
      </div>
    );
  }

  const content = (
    <section className={styles.container}>
      <GalleryWrapper 
        media={media}
        colors={colors}
        hasColors={hasColors}
        productTitle={title}
      />

      <InfoContainer 
        title={title}
        description={description}
      />
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