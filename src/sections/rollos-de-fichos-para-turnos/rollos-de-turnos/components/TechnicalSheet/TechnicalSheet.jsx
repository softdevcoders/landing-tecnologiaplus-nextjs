import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762760/2_4x-8_5_k1yidc.webp"
            alt="icono tiquete de turnos"
          />
          <p>
            Material: <br className={styles.hide__on__mobile} />
            papel bond
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689273/5_4x-8_2_hycuha.webp"
            alt="icono de personas"
          />
          <p>
            Es la opción más sencilla <br className={styles.hide__on__mobile} />
            de organizar filas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689274/4_4x-8_3_qytmzj.webp"
            alt="icono de ficho para turnos"
          />
          <p>
            Asigna turnos en <br className={styles.hide__on__mobile} />
            orden de llegada.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689276/3_4x-8_3_hdezke.webp"
            alt="icono de sala de espera"
          />
          <p>
            Tipos de uso: <br className={styles.hide__on__mobile} />
            Áreas de espera general donde{" "}
            <br className={styles.hide__on__mobile} />
            hay una o varias filas de espera.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689277/2_4x-8_4_otmwfs.webp"
            alt="icono de numero"
          />
          <p>
            Agiliza el llamado de turnos{" "}
            <br className={styles.hide__on__mobile} />
            de manera ordenada.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762760/1_4x-8_5_pbgbpq.webp"
            alt="icono varias opciones de numeración"
          />
          <p>
            Varias opciones <br className={styles.hide__on__mobile} />
            de numeración
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
