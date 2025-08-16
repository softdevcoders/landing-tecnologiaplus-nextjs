import globalStyles from "@/components/ver-mas-productos/styles/ver-mas-productos-global-style.module.scss";
import styles from "./nuestros-clientes.module.scss";
import InfiniteSlider from "@/components/nuestros-clientes/inifinite-slider";

const NuestrosClientes = ({ logos }) => {
  return (
    <section className={globalStyles.container}>
      <h2>Algunos clientes</h2>
      <div className={styles.nuestros__clientes__container}>
        <div className={styles.nuestros__clientes__background_gradient_left}></div>
        <InfiniteSlider logos={logos}/>
        <div className={styles.nuestros__clientes__background_gradient_right}></div>
      </div>  
    </section>
  );
};

export default NuestrosClientes;
