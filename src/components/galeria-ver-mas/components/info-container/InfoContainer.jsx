import ColorSelector from "../color-selector";
import styles from "./info-container.module.scss";

const InfoContainer = ({ title, description, hasColors }) => {
  return (
    <div className={styles.infoContainer}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <p className={styles.description}>{description}</p>}
      {hasColors && <ColorSelector />}
    </div>
  );
};

export default InfoContainer; 