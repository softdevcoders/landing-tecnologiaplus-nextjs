import styles from "./HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558155/12_4x-8_jjwfr1.webp"
            alt="imagen de paciente presionando botón de llamado de enfermería"
          />
          <p>
            1. El paciente presiona el botón{" "}
            <br className={styles.hide__on__mobile} />
            para llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558157/12_1_4x-8_n0vuyi.webp"
            alt="imagen de la enfermera recibiendo llamado del paciente"
          />
          <p>
            2. La alarma suena y alumbra hasta que la{" "}
            <br className={styles.hide__on__mobile} />
            enfermera atiende el paciente y presiona la{" "}
            <br className={styles.hide__on__mobile} />
            tecla "CANCEL" para detener la alarma
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
