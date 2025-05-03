import style from "./StepsSectionEnfermeria.module.scss";

function StepsSectionEnfermeria() {
  return (
    <section className={style.steps__section}>
      <h2>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685532/1_2x-8_kqzcjp.webp"
            alt="Paciente usando el botón para llamar enfermeras"
          />
          <div className={style.text__container}>
            <p>
              1. Presiona el botón para{" "}
              <br className={style.hide__on__mobile} />
              llamar la enfermera
            </p>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685531/2_2x-8_vdyfcr.webp"
            alt="imagen de personal de la salud recibiendo la señal del llamador"
          />
          <div className={style.text__container}>
            <p>
              2. La enfermera recibe el llamado en la{" "}
              <br className={style.hide__on__mobile} />
              pantalla o en el reloj receptor
            </p>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685531/2_1_2x-8_yz4xzc.webp"
            alt=" paciente presionando el botón de CANCELAR en el llamador de enfermería"
          />
          <div className={style.text__container}>
            <p>
              3. Se atiende el llamado y presiona{" "}
              <br className={style.hide__on__mobile} />
              la tecla “CANCEL” para borrar el llamado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionEnfermeria;
