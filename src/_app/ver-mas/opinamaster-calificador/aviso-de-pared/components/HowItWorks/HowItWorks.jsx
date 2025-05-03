import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432239/9_4x-8_1_vtqhow.webp"
            alt="Usuario escaneando el aviso de pared para dar su calificación del servicio"
          />
          <p>
            1. El usuario se acerca al aviso para{" "}
            <br className={styles.hide__on__mobile} />
            escanear el código QR.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432238/10_4x-8_1_vco8n7.webp"
            alt="Opción de recomendación por el servicio recibido"
          />
          <p>
            2. Opción amigable con diferentes{" "}
            <br className={styles.hide__on__mobile} />
            tipos de preguntas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740432236/11_4x-8_1_cylads.webp"
            alt="Estadistica donde muestra el porcentaje de calificaciones recibidas."
          />
          <p>
            3. La información queda registrada en el{" "}
            <br className={styles.hide__on__mobile} />
            sistema para revisar estadísticas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
