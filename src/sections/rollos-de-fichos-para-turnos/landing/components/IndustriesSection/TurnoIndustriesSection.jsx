import style from "./TurnoIndustriesSection.module.scss";
import Image from "next/image";

function TurnoIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <div className={style.industries__section__background}>
        <Image
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/nisgh2gbe0ginddnsrko_opkrn1.webp"
          alt="background de la sección de industrias"
          width={300}
          height={300}
          className={style.industries__section__background__image}
        />
      </div>
      <div className={style.industries__section__container}>
        <h2 className={style.industries__section__title}>
          Nuestros Rollos De Tiquetes funcionan en todos Los Sectores
        </h2>
        <ul className={style.industries__section__list}>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
                alt="icono de Restaurantes"
                width={300}
                height={300}
              />
            </div>
            <p className={style.industries__section__list__item__text}>
              Sector salud
            </p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
                alt="icono de Sector salud"
                width={300}
                height={300}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Oficinas</p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
                alt="icono de otras industrias"
                width={300}
                height={300}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Otras industrias</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TurnoIndustriesSection;

