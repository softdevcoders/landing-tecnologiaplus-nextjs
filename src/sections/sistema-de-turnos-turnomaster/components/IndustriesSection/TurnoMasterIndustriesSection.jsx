// import style from "./TurnoMasterIndustriesSection.module.scss";

// function TurnoMasterIndustriesSection() {
//   return (
//     <section className={style.industries__section}>
//       <h2>
//         TurnoMaster se adapta <br className={style.hide__on__mobile} />
//         a distintos sectores para <br className={style.hide__on__mobile} />
//         organizar las filas
//       </h2>
//       <ul>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
//             alt="icono de salud"
//           />
//           <p>Sector salud</p>
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
//             alt="icono de oficina"
//           />
//           <p>Oficinas</p>
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
//             alt="icono de otras industrias"
//           />
//           <p>Otras industrias</p>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default TurnoMasterIndustriesSection;


import Image from "next/image";
import style from "./TurnoMasterIndustriesSection.module.scss";

function TurnoMasterIndustriesSection() {
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
          TurnoMaster se adapta a distintos sectores para organizar las filas 
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
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
                alt="icono de oficina"
                width={100}
                height={100}
              />
            </div>
            <p className={style.industries__section__list__item__text}>Oficinas</p>
          </li>
          <li className={style.industries__section__list__item}>
            <div className={style.industries__section__list__item__icon_container}>
              <Image
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
                alt="icono de salud"
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

export default TurnoMasterIndustriesSection;



