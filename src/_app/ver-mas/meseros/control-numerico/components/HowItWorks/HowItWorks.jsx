import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743772811/NUEVA_CONTROL_4x-8_uuumyj.webp"
            alt="El chef presiona el control numérico para llamar al mesero y recoger el pedido"
          />
          <p>
            1. Desde cocina digitan el número asignado a cada{" "}
            <br className={styles.hide__on__mobile} />
            mesero para avisarle que la orden está lista.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743041698/21_4x-8_lmx89i.webp"
            alt="El mesero recibe el llamado por medio del reloj receptor o las pantallas turneras"
          />
          <p>
            2. El mesero recibe la alerta en{" "}
            <br className={styles.hide__on__mobile} />
            el reloj o en la pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740160659/13_4x-8_ofe2yc.webp"
            alt="El chef entrega el pedido de alimentos gracias al llamado"
          />
          <p>3. El mesero va a la cocina</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
