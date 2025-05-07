import styles from "./TechnicalSheet.module.scss";

function TechnicalSheet() {
  return (
    <section className={styles.technicalsheet__container}>
      <h2>Ficha técnica</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254431/16_4x-8_pcbsng.webp"
            alt="icono batería"
          />
          <p>
            Batería: Se recarga tipo <br className={styles.hide__on__mobile} />
            celular, duración entre 1 y{" "}
            <br className={styles.hide__on__mobile} />3 días. Incluye cargador.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254435/8_4x-8_ppgjyp.webp"
            alt="icono de alfanumérica"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743521161/NUEVO_4_4x-8_b40dgi.webp"
            alt="icono de alfanumérica"
            className={styles.img__mobile}
          />
          <p>Alfanumérica</p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254424/14_4x-8_1_n708uh.webp"
            alt="icono de enchufe"
          />
          <p>
            Incluye adaptador y <br className={styles.hide__on__mobile} />
            cable de conexión <br className={styles.hide__on__mobile} />
            eléctrica.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254425/13_4x-8_1_jgjmcq.webp"
            alt="icono reloj"
          />
          <p>
            Ideal para llamar <br className={styles.hide__on__mobile} />
            empleados
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740411505/nuevo_4x-8_nqits1.webp"
            alt="icono de diferentes tipos de aviso"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743520975/NUEVO_5_4x-8_eer7ax.webp"
            alt="icono de diferentes tipos de aviso"
            className={styles.img__mobile}
          />
          <p>
            Tipo de aviso: <br className={styles.hide__on__mobile} />
            vibración, sonido y luz
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739998010/icono_7_4x-8_gkqxdl.webp"
            alt="icono de conectividad y largo alcance"
          />
          <p>
            Recibe los llamados <br className={styles.hide__on__mobile} />
            de forma inalámbrica.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740172482/7_4x-8_1_ptxtfo.webp"
            alt="icono de resistencia al agua"
          />
          <p>
            Resiste derrames <br className={styles.hide__on__mobile} />
            accidentales de agua.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254426/11_4x-8_tfnsac.webp"
            alt="icono de negocio"
          />
          <p>
            Uso: espacios para llamar <br className={styles.hide__on__mobile} />
            meseros o empleados.
          </p>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740254433/9_4x-8_y7wpo5.webp"
            alt="icono de 4 llamados visibles"
            className={styles.img__desktop}
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743519166/NUEVO_3_4x-8_f7s4h6.webp"
            alt="icono de 4 llamados visibles"
            className={styles.img__mobile}
          />
          <p>
            4 llamados visibles <br className={styles.hide__on__mobile} />
            en pantalla
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSheet;
