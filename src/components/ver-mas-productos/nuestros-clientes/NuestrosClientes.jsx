import globalStyles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";
import styles from "./nuestros-clientes.module.scss";
import InfiniteSlider from "@/components/nuestros-clientes/inifinite-slider";

const NuestrosClientes = ({ logos, title = "Algunos clientes", headingLevel = "h2" }) => {
  return (
    <section className={globalStyles.container}>
      {headingLevel === "h2" && (
        <h2>{title}</h2>
      )}
      {headingLevel === "h3" && (
        <h3>{title}</h3>
      )}
      <div className={styles.nuestros__clientes__container}>
        <div className={styles.nuestros__clientes__background_gradient_left}></div>
        <InfiniteSlider logos={logos}/>
        <div className={styles.nuestros__clientes__background_gradient_right}></div>
      </div>  
    </section>
  );
};

export default NuestrosClientes;
