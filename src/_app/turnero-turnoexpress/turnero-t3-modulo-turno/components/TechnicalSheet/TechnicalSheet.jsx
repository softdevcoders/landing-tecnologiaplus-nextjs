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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021763/16_4x-8_6_kqosgs.webp"
            alt="icono de 9-99"
          />
          <p>
            Registra hasta <br className={styles.hide__on__mobile} />9 módulos y
            99 turnos
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741021763/14_4x-8_7_hshabf.webp"
            alt="Icono de números de turno blanco"
          />
          <p>
            Pantalla de <br className={styles.hide__on__mobile} />
            dígitos tipo display.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076255/icono_4x-8_2_tqnirp.webp"
            alt="Icono sala de espera"
          />
          <p>
            Tipos de uso <br className={styles.hide__on__mobile} />
            Área de espera.
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
