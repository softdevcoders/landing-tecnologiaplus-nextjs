import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740498991/13_4x-8_uupi68.webp"
            alt="paciente presionando botón de llamado de enfermería"
          />
          <p>
            1. Presiona el botón para <br className={styles.hide__on__mobile} />
            llamar la enfermera
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740498992/11_4x-8_mkfm30.webp"
            alt="enfermera recibiendo llamado de paciente en el reloj receptor"
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740498991/12_4x-8_y6cste.webp"
            alt="enfermera atendiendo llamado del paciente"
          />
          <p>3. La enfermera atiende el llamado</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
