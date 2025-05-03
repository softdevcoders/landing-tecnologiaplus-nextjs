import styles from "./ControlsOptions.module.scss";

function ControlsOptions() {
  return (
    <section className={styles.ControlsOptions__container}>
      <h2>Opciones de controles</h2>
      <div className={styles.items__container}>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076453/control_1_4x-8_irysjd.webp"
            alt="Control de 1 tecla"
          />
          <div>
            <h3>Control de 1 tecla</h3>
            <p>
              Solo permite avanzar en orden.{" "}
              <br className={styles.hide__on__mobile} />
              Medidas: 5cm x 3cm x 8cm.{" "}
              <br className={styles.hide__on__mobile} />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076445/contro_4x-8_esbfwc.webp"
            alt="Control de 2 teclas"
          />
          <div>
            <h3>Control de 2 teclas</h3>
            <p>
              Teclas: Avanzar y retroceder.{" "}
              <br className={styles.hide__on__mobile} />
              Medidas: 5cm x 3cm x 8cm.{" "}
              <br className={styles.hide__on__mobile} />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740076454/control_4x-8_xsgy4z.webp"
            alt="Control de números con visualización del turno"
          />
          <div>
            <h3>Control con números</h3>
            <p>
              Permite avanzar, repetir,{" "}
              <br className={styles.hide__on__mobile} />y llamar cualquier
              número. <br className={styles.hide__on__mobile} />
              Medidas: 6cm x 3.5cm x 12.5cm.{" "}
              <br className={styles.hide__on__mobile} />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774372/control_industrial_4x-8_shia0y.webp"
            alt="Botón de llamado de turno"
          />
          <div>
            <h3>Control industrial</h3>
            <p>
              Mayor resistencia para uso industrial.
              <br className={styles.hide__on__mobile} />
              Medidas: 7cm x 7.5cm x 6.5cm.
              <br className={styles.hide__on__mobile} />
              Tecnología inalámbrica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlsOptions;
