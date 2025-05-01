import styles from "../../../../styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/14_4x-8_1_nfpyrv.webp"
            alt="Usuario presionando el llamador de meseros"
          />
          <p>
            1. El cliente presiona el botón: tecla{" "}
            <br className={styles.hide__on__mobile} />
            para llamar al mesero o tecla para pagar
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/15_4x-8_1_otbk7u.webp"
            alt="Mesero recibiendo el llamado en el reloj recepto o pantallas de turno"
          />
          <p>
            2. El mesero recibe el llamado en{" "}
            <br className={styles.hide__on__mobile} />
            alguna de las pantallas o en el reloj
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/16_4x-8_2_ej3v5o.webp"
            alt="Usuario siendo atendida por el mesero"
          />
          <p>
            3. El mesero atiende el llamado y presiona la{" "}
            <br className={styles.hide__on__mobile} />
            tecla CANCELAR para borrar el llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
