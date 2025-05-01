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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392283/ICONO_1_ctsg4n.svg"
            alt="icono de color morado"
          />
          <p>Color: blanco</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558125/8_4x-8_aex4cu.webp"
            alt="icono de llamadores de enfermería"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743518103/REMPLAZAR_1_4x-8_1_xi2h5p.webp"
            alt="icono de llamadores de enfermería"
            className={styles.img__mobile}
          />
          <p>
            Cada alarma <br className={styles.hide__on__mobile} />
            funciona hasta <br className={styles.hide__on__mobile} />
            con 8 llamadores.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558126/5_4x-8_utywac.webp"
            alt="icono de alarma de luz"
          />
          <p>
            Se cuelga afuera de la <br className={styles.hide__on__mobile} />
            habitación y alumbra <br className={styles.hide__on__mobile} />
            hasta que atienden el <br className={styles.hide__on__mobile} />
            llamado.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            Recibe llamados de forma <br className={styles.hide__on__mobile} />{" "}
            inalámbrica, largo Alcance,{" "}
            <br className={styles.hide__on__mobile} /> 50 metros o más con{" "}
            <br className={styles.hide__on__mobile} /> amplificador de señal.
          </p>
        </div>

        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741558128/9_4x-8_syembx.webp"
            alt="icono de modo de aviso en la larma de luz"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743518198/REEMPLAZAR_2_4x-8_osa8s3.webp"
            alt="icono de modo de aviso en la larma de luz"
            className={styles.img__mobile}
          />
          <p>
            Modo de aviso: suena y <br className={styles.hide__on__mobile} />
            alumbra, opción de <br className={styles.hide__on__mobile} />
            graduar el volumen.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740161084/9_4x-8_l5gvik.webp"
            alt="icono de compatibilidad"
          />
          <p>
            Compatible con: Equipos <br className={styles.hide__on__mobile} />
            de Tecnología Plus.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065557/ICONO_1_4x-8_1_xmpmcr.webp"
            alt="icono Tecnología Plus"
          />
          <p>Marca</p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
