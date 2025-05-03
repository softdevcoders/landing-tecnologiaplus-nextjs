import styles from "./HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671517/12_4x-8_2_qo19se.webp"
            alt="Paciente presiona el botón para llamar al personal de salud"
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671518/13_4x-8_4_snqnmr.webp"
            alt="El personal de salud visualiza el llamado del paciente por medio de la pantalla T6"
          />
          <p>
            2. La pantalla muestra el número de{" "}
            <br className={styles.hide__on__mobile} />
            la habitación o del baño
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740671518/11_4x-8_2_asd27h.webp"
            alt="Paciente recibiendo atención gracias al llamado"
          />
          <p>
            3. Se atiende el llamado y presiona la tecla{" "}
            <br className={styles.hide__on__mobile} />
            "CANCEL" para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
