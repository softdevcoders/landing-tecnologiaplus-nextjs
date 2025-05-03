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
          <p>
            Registra hasta 99 turnos <br className={styles.hide__on__mobile} />
            en cada pantalla
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740069836/Recurso_17_4x-8_o84p1k.webp"
            alt="icono de area de espera"
          />
          <p>
            Tipos de uso: Áreas de <br className={styles.hide__on__mobile} />
            espera en general. <br className={styles.hide__on__mobile} />
            Restaurantes autoservicio
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            Recibe llamados de forma <br className={styles.hide__on__mobile} />
            inalámbrica.
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
            Compatible con: <br className={styles.hide__on__mobile} />
            Equipos de <br className={styles.hide__on__mobile} />
            Tecnología Plus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
