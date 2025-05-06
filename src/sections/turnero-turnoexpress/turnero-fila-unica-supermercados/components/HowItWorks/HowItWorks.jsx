import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_4x-8_fug49b.webp"
            alt="Usarios esperando su turno siendo organizados por un turnero fila unica en un supermercado"
          />
          <p>
            1. El usuario hace la fila y se dirige al{" "}
            <br className={styles.hide__on__mobile} />
            número de caja que muestra la pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_1_4x-8_ikcgrd.webp"
            alt="Usuario siendo atendido tras el llamado del turnero"
          />
          <p>
            2. El usuario es atendido en la{" "}
            <br className={styles.hide__on__mobile} />
            caja
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739997885/como_funciona_2_4x-8_vjoxua.webp"
            alt="Asesor realizando el siguiente llamado en el control"
          />
          <p>
            3. Cada cajera tiene 1 control para{" "}
            <br className={styles.hide__on__mobile} />
            indicar cuando quedan libres.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
