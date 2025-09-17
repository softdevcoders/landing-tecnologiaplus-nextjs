import styles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";
import ToggleTextContent from "@/components/toggle-text-content";

const DetallesDeProducto = ({ children, title = "Detalles del producto" }) => {
  return (
    <section className={styles.container} data-nosnippet> 
      <h2>{title}</h2>
      <div className={styles.content__container}>
        <ToggleTextContent showToggleButtonInDesktop={true} addWhiteSpace={false}>{children}</ToggleTextContent>
      </div>
    </section>
  );
};

export default DetallesDeProducto;  