import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_4x-8_1_kq1e3m.webp"
            alt="Usuario recibiendo el turno por parte del asesor de un restaurante"
          />
          <p>
            1. El cliente recibe el número{" "}
            <br className={styles.hide__on__mobile} />
            de turno para su pedido
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_1_4x-8_1_mnux8l.webp"
            alt="Asesor realizando el llamado del usuario por medio del control numérico y el turnero"
          />
          <p>
            2. Cuando el pedido está listo, digita{" "}
            <br className={styles.hide__on__mobile} />
            en el control el número del turno
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/COMO_FUNCIONA_2_4x-8_1_t1wkij.webp"
            alt="Cliente recibiendo su pedido gracias al turnero manual y al control numérico"
          />
          <p>
            3. La pantalla suena <br className={styles.hide__on__mobile} />
            notificando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
