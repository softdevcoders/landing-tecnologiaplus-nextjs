import styles from "@/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740670192/17_4x-8_1_peyzbj.webp"
            alt="Mano oprimiendo el llamador de enfermería"
          />
          <p>
            1. Presiona el botón para <br className={styles.hide__on__mobile} />
            llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740683059/20_4x-8_tutk0n.webp"
            alt="Personal de salud recibiendo el llamado por medio del reloj receptor"
          />
          <p>
            2. La enfermera recibe el llamado en la{" "}
            <br className={styles.hide__on__mobile} />
            pantalla o en el reloj receptor
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041523/19_4x-8_eldrap.webp"
            alt="Paciente recibiendo atención gracias al llamado del reloj receptor"
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
