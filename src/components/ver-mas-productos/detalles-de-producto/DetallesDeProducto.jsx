import styles from "../styles/ver-mas-productos-global-style.module.scss";

const DetallesDeProducto = ({ children }) => {
  return (
    <section className={styles.container}> 
      <h2>Detalles del producto</h2>
      <div className={styles.content__container}>
        {children}
      </div>
    </section>
  );
};

export default DetallesDeProducto;  