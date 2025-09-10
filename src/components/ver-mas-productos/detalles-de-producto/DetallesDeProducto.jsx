import styles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";

const DetallesDeProducto = ({ children, title = "Detalles del producto" }) => {
  return (
    <section className={styles.container} data-nosnippet> 
      <h2>{title}</h2>
      <div className={styles.content__container}>
        {children}
      </div>
    </section>
  );
};

export default DetallesDeProducto;  