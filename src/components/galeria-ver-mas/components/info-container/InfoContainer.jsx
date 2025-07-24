import ColorSelector from "../color-selector";
import WhatsappButton from "../whatsapp-button";
import CompatibleCon from "../compatible-con";
import styles from "./info-container.module.scss";

const InfoContainer = ({ title, description, hasColors, compatibleConProducts }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoContainer__content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {hasColors && <ColorSelector />}  
      <WhatsappButton />
      <CompatibleCon compatibleConProducts={compatibleConProducts} />
    </div>
  );
};

export default InfoContainer; 