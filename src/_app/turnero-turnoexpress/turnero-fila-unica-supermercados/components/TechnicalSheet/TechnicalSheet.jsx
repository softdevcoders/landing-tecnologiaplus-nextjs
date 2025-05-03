import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_6_4x-8_bmmdoa.webp"
            alt="icono de enchufe"
          />
          <p>Conexión eléctrica.</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998014/icono_4_4x-8_leto92.webp"
            alt="icono de 99"
          />
          <p>Registra hasta 99</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_2_4x-8_q91g57.webp"
            alt="icono de 05"
          />
          <p>
            Dos dígitos visibles <br className={styles.hide__on__mobile} />
            en pantalla.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_4x-8_rtz4i6.webp"
            alt="icono de personas"
          />
          <p>
            Agilizar filas en supermercados{" "}
            <br className={styles.hide__on__mobile} />y espacios similares.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            La comunicación con <br className={styles.hide__on__mobile} />
            el control es inalámbrica.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998011/icono_5_4x-8_datajh.webp"
            alt="icono de sonido"
          />
          <p>
            Alerta con sonido y <br className={styles.hide__on__mobile} />
            número en pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_1_4x-8_zo6qki.webp"
            alt="icono de control de Tecnología Plus"
          />
          <p>
            Compatible con: <br className={styles.hide__on__mobile} />
            controles que indique <br className={styles.hide__on__mobile} />
            Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998007/icono_3_4x-8_voj476.webp"
            alt="icono de ojo"
          />
          <p>
            Visibilidad: <br className={styles.hide__on__mobile} />1 a 50
            metros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
