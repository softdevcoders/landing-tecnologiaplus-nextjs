import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021819/10_4x-8_6_wenqh9.webp"
            alt="usuario tomando su torno en el dispensador de turnos"
          />
          <p>
            1. Usuario toma un número de turno{" "}
            <br className={styles.hide__on__mobile} />
            en el dispensador tipo caracol.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021837/11_4x-8_7_vnj3jv.webp"
            alt="Turnero con logo mostrando el turno en una sala de espera con asesores"
          />
          <p>
            2. Usuario espera que lo llamen en la pantalla.{" "}
            <br className={styles.hide__on__mobile} />
            Cada asesor tiene un control inalámbrico para llamar turnos.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021837/12_4x-8_6_zwcaxj.webp"
            alt="Turnero con logo haciendo el llamado del turno en una sala de espera con asesores"
          />
          <p>
            3. Muestra el número del turno y el módulo a donde{" "}
            <br className={styles.hide__on__mobile} />
            debe dirigirse el cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
