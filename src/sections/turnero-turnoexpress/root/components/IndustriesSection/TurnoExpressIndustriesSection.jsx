import Image from "next/image";
import style from "./TurnoExpressIndustriesSection.module.scss";

function TurnoExpressIndustriesSection() {
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
          Nuestro Turnero Digital se adapta a Todos los sectores
        </h2>
        <ul className={style.industries__section__list}>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
                alt="icono de salud"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>
              Sector salud
            </p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738446073/Sala_de_espera_2x-8_vb2upo.webp"
                alt="icono de sala de espera"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Sala de espera</p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
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

export default TurnoExpressIndustriesSection;



