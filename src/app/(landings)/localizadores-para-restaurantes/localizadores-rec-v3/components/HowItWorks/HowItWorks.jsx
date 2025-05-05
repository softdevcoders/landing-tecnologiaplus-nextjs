import styles from "@/app/ver-mas/styles/HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section id="clients-section" className={styles.HowItWorks__container}>
      <h2>¿Cómo funciona?</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016959/14_4x-8_6_xofupb.webp"
            alt="El asesor entrega al cliente un localizador para restaurantes"
          />
          <p>
            1. El cliente hace el pedido y{" "}
            <br className={styles.hide__on__mobile} />
            le entregan un localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016958/15_4x-8_6_sfwzly.webp"
            alt="El asesor presiona el botón para llamar al cliente"
          />
          <p>
            2. Cuando el pedido está listo, digita{" "}
            <br className={styles.hide__on__mobile} />
            en el control el número del localizador
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741016957/16_4x-8_5_gfceng.webp"
            alt="El cliente recibe el aviso en el localizador alumbrando vibrando y sonando"
          />
          <p>
            3. El localizador vibra, alumbra y suena,{" "}
            <br className={styles.hide__on__mobile} />
            notificando al cliente del llamado
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
