import styles from "./ver-mas-wrapper.module.scss";

const VerMasWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default VerMasWrapper;