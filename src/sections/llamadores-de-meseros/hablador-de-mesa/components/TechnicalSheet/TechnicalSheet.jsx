import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono Tecnología Plus"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono de compatibilidad"
            className={styles.img__mobile}
          />
          <p>
            Compatible con <br className={styles.hide__on__mobile} />
            llamadores de <br className={styles.hide__on__mobile} />
            Tecnología Plus
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740174266/9_4x-8_1_qsscxv.webp"
            alt="Icono de calidad certificada"
          />
          <p>Material: Acrílico</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/7_4x-8_1_ptxtfo.webp"
            alt="icono de resistencia al agua"
          />
          <p>
            Resiste derrames <br className={styles.hide__on__mobile} />
            de agua
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/6_4x-8_3_xfwxvq.webp"
            alt="icono de mesa"
          />
          <p>
            Para ponerlo <br className={styles.hide__on__mobile} />
            sobre las mesas
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
