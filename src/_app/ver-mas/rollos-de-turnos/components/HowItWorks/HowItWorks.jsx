import styles from "../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762873/18_4x-8_2_kb3s8t.webp"
            alt="usuario tomando su torno en el dispensador de turnos"
          />
          <p>
            1. Usuario toma un número de turno
            <br />
            en el dispensador tipo caracol.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762873/19_4x-8_ragcet.webp"
            alt="Turnero con logo mostrando el turno en una sala de espera con asesores"
          />
          <p>2. Usuario espera que lo llamen en la pantalla.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762873/17_4x-8_3_ohropa.webp"
            alt="Turnero con logo haciendo el llamado del turno en una sala de espera con asesores"
          />
          <p>
            3. Cuando llaman el turno, se dirige a la
            <br />
            ventanilla o módulo de atención.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
