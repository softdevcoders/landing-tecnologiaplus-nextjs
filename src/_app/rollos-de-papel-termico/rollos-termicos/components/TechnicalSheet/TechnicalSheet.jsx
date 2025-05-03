import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392284/ICONO_5_z4dhr8.svg"
            alt="icono de papel"
          />
          <p>
            Material: <br className={styles.hide__on__mobile} />
            Papel térmico
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392284/ICONO_4_hctj7d.svg"
            alt="icono de rollos"
          />
          <p>
            Distintos <br className={styles.hide__on__mobile} />
            tamaños
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392284/ICONO_3_zoivd7.svg"
            alt="icono de impresora"
          />
          <p>
            Tipo de uso: para <br className={styles.hide__on__mobile} />
            impresora térmica
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392283/ICONO_2_fqr5sl.svg"
            alt="icono de check"
          />
          <p>
            Compatible con la mayoría <br className={styles.hide__on__mobile} />
            de impresoras térmicas.
          </p>
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739392283/ICONO_fdyhsa.svg"
            alt="icono de rollo con medidas"
          />
          <p>
            Medidas según <br className={styles.hide__on__mobile} />
            necesidad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
