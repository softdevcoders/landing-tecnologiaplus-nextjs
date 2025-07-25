import styles from "@/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740430514/16_4x-8_b4bgx4.webp"
            alt="imagen de cliente presionando el botón de llamado"
          />
          <p>
            1. El cliente presiona el botón{" "}
            <br className={styles.hide__on__mobile} />
            para llamar al mesero
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740430513/15_4x-8_upshss.webp"
            alt="imagen de mesero recibiendo el llamado en la pantalla"
          />
          <p>2. El mesero recibe el llamado en la pantalla.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740430513/17_4x-8_yrhocp.webp"
            alt="imagen de cliente escuchando la pantalla sonar y reclamando su pedido"
          />
          <p>
            3. El mesero atiende el llamado y presiona{" "}
            <br className={styles.hide__on__mobile} />
            la tecla CANCELAR para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
