import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011162/4_4x-8_4_uxxrur.webp"
            alt="icono de vibrar, sonar y alumbra"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743518434/NUEVO_1_4x-8_v5vvlt.webp"
            alt="icono de vibrar, sonar y alumbra"
            className={styles.img__mobile}
          />
          <p>Vibra, suena y alumbra</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            Largo Alcance, más de <br className={styles.hide__on__mobile} />
            200 metros a la redonda
          </p>
        </div>

        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740174266/9_4x-8_1_qsscxv.webp"
            alt="Icono de calidad certificada"
          />
          <p>
            Material: Termoplástico <br className={styles.hide__on__mobile} />
            (resistente a golpes)
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011162/1_4x-8_6_aj3hcn.webp"
            alt="icono compatibilidad"
          />
          <p>
            Capacidad: <br className={styles.hide__on__mobile} />
            La cantidad es según la <br className={styles.hide__on__mobile} />
            necesidad. Pueden tener <br className={styles.hide__on__mobile} />
            varias bases de recarga.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono de negocio"
          />
          <p>
            Tipos de USO: <br className={styles.hide__on__mobile} />
            Áreas de espera y <br className={styles.hide__on__mobile} />
            zonas de comidas.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_6_4x-8_bmmdoa.webp"
            alt="icono de enchufe"
          />
          <p>
            Requerimiento: <br className={styles.hide__on__mobile} />
            Conexión eléctrica
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254431/16_4x-8_pcbsng.webp"
            alt="icono batería"
          />
          <p>
            Duración de la batería: <br className={styles.hide__on__mobile} />
            Más de 3 horas por fuera <br className={styles.hide__on__mobile} />
            de la base de recarga.
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
