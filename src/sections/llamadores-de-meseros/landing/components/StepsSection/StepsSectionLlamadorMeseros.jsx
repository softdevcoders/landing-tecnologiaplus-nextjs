import style from "./StepsSectionLlamadorMeseros.module.scss";
import Image from "next/image";

function StepsSectionLlamadorMeseros() {
  return (
    <section data-nosnippet className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona?</h2>

      <div className={style.cards__container}>
        <div className={style.card__desktop}>
          <div className={style.card__desktop__card}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750348408/NUEVO_COMO_FUNCIONA_3x-100_ui5x3d.jpg"
              alt="imagen de instrucciones para utilizar el llamador de meseros"
              className={style.card__desktop__card__image}
              width={1840}
              height={690}
            />
          </div>
        </div>
        <div className={style.card__mobile}>
          <div className={style.card__mobile__card}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742226558/COMO_FUNCIONA_CEL_2_4x-8_rsu66r.webp"
              alt="El cliente oprime el botón para llamar mesero"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
            />
          </div>
          <div className={style.card__mobile__card}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750348275/2_vmqr9i.jpg"
              alt="El mesero recibe por medio de vibración la notificación en su pantalla"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
            />
          </div>
          <div className={style.card__mobile__card}>
            <Image
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750348278/1_oktzgj.jpg"
              alt="El cliente recibe la atención requerida"
              className={style.card__mobile__card__image}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSectionLlamadorMeseros;
