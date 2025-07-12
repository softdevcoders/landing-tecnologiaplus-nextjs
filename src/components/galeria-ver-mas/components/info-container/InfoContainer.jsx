import ColorSelector from "../color-selector";
import styles from "./info-container.module.scss";

const InfoContainer = ({ title, description }) => {
  return (
    <div className={styles.infoContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}
      
      <ColorSelector 
        title="Colores disponibles"
        showColorName={true}
        size="medium"
      />
      
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default InfoContainer; 