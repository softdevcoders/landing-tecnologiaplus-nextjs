import ColorSelector from "../color-selector";
import WhatsappButton from "../whatsapp-button";
import CompatibleCon from "../compatible-con";
import styles from "./info-container.module.scss";
import Opiniones from "../opiniones";

const InfoContainer = ({ title, description, hasColors, compatibleConProducts, opiniones }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoContainer__content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {hasColors && <ColorSelector />}  
      <WhatsappButton />
      {compatibleConProducts.length > 0 && (
        <CompatibleCon compatibleConProducts={compatibleConProducts} />
      )}
      {compatibleConProducts.length === 0 && opiniones.length > 0 && (
        <Opiniones opiniones={opiniones} />
      )}
    </div>
  );
};

export default InfoContainer; 