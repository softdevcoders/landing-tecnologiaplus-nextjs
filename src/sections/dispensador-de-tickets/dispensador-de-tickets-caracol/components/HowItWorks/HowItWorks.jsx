import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689242/8_4x-8_2_twguhd.webp"
            alt=" usuario tomando su turno con el dispensador de tiquetes"
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689241/9_4x-8_2_cldmeo.webp"
            alt="usuario esperando ser llamado por una pantalla de turnos"
          />
          <p>2. Usuario espera que lo llamen en la pantalla.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689243/7_4x-8_1_ek8a7o.webp"
            alt="usuario siendo atendido de manera correcta y en orden"
          />
          <p>
            3. Cuando llaman el turno, se dirige a la{" "}
            <br className={styles.hide__on__mobile} />
            ventanilla o módulo de atención.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
