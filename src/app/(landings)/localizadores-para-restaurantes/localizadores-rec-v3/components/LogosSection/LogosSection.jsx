import NuestrosClientes from "@/components/layout/nuestros-clientes";
import styles from "@/styles/LogosSection.module.scss";
import { logosLocalizadores } from "@/config/client-logos";

function LogosSection() {

  return (
    <section className={styles.logossection__container}>
      <div className={styles.header}>
        <h2>Algunos clientes</h2>
      </div>
      <div className={styles.content}>
        <NuestrosClientes 
          logos={logosLocalizadores}
        />
      </div>
    </section>
  );
}

export default LogosSection;
