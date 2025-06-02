import style from "./StepsSectionLlamadorMeseros.module.scss";

function StepsSectionLlamadorMeseros() {
  return (
    <section className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card__desktop}>
          <div className={style.card__desktop__card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226220/COMO_FUNCIONA_NUEVA_4x-8_x1l4zi.webp"
              alt="imagen de instrucciones para utilizar el llamador de meseros"
              className={style.card__desktop__card__image}
            />
          </div>
        </div>
        <div className={style.card__mobile}>
          <div className={style.card__mobile__card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226558/COMO_FUNCIONA_CEL_2_4x-8_rsu66r.webp"
              alt="El cliente oprime el botón para llamar mesero"
              className={style.card__mobile__card__image}
            />
          </div>
          <div className={style.card__mobile__card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226576/COMO_FUNCIONA_CEL_1_4x-8_q0x4n9.webp"
              alt="El mesero recibe por medio de vibración la notificación en su pantalla"
              className={style.card__mobile__card__image}
            />
          </div>
          <div className={style.card__mobile__card}>
            <img
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226590/COMO_FUNCIONA_CEL_4x-8_qspcoa.webp"
              alt="El cliente recibe la atención requerida"
              className={style.card__mobile__card__image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionLlamadorMeseros;
