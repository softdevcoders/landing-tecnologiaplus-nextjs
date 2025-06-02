import style from "./LlamadorMeserosIndustriesSection.module.scss";
import Image from "next/image";

function LlamadorMeserosIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <div className={style.industries__section__background}>
        <Image
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/nisgh2gbe0ginddnsrko_opkrn1.webp"
          alt="background de la sección de industrias"
          width={100}
          height={100}
          className={style.industries__section__background__image}
        />
      </div>
      <div className={style.industries__section__container}>
        <h2 className={style.industries__section__title}>
          LLAMADOR DE PERSONAL
          <br />
          ADAPTABLE A TODOS
          <br />
          LOS SECTORES
        </h2>
        <ul className={style.industries__section__list}>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/restaurantes_2x-8_lpqdzj.webp"
                alt="icono de Restaurantes"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>
              Restaurantes
            </p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694403/hoteles_2x-8_odgal8.webp"
                alt="icono de Sector salud"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Hoteles</p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615995/otras_industrias_2x-8_jwvjrm.webp"
                alt="icono de otras industrias"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Otras industrias</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LlamadorMeserosIndustriesSection;

