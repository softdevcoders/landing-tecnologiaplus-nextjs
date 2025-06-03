// import ImageCloudinary from "@/components/ui/image-cloudinary";
// import style from "./TurnoExpressIndustriesSection.module.scss";

// function TurnoExpressIndustriesSection() {
//   return (
//     <section className={style.industries__section}>
//       <h2>Nuestro Turnero Digital se adapta a Todos los sectores</h2>
//       <ul>
//         <li>
//           <ImageCloudinary
//             width={150}
//             height={130}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
//             alt="icono de salud"
//           />
//           <p>Sector salud</p>
//         </li>
//         <li>
//           <ImageCloudinary
//             width={150}
//             height={130}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738446073/Sala_de_espera_2x-8_vb2upo.webp"
//             alt="icono de sala de espera"
//           />
//           <p>Sala de espera</p>
//         </li>
//         <li>
//           <ImageCloudinary
//             width={150}
//             height={130}
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
//             alt="icono de otras industrias"
//           />
//           <p>Otras industrias</p>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default TurnoExpressIndustriesSection;

// import style from "./LlamadorMeserosBenefitsSection.module.scss";
// import YouTubePlayer from "@/components/YouTubePlayer";

// function LlamadorMeserosBenefitsSection() {
//   return (
//     <div className={style.video__benefits__container}>
//       <section className={style.video__section}>
//         <YouTubePlayer 
//           videoId="XGGhLks0iVc" 
//           title="Llamador de Meseros - Tecnología Plus"
//         />
//       </section>
//       <section className={style.benefits__section}>
//         <h2 className={style.benefits__title}>
//           BENEFICIOS
//           <br />
//           DESTACADOS
//         </h2>
//         <ul>
//           <li>
//             <img
//               loading="lazy"
//               src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024065/15_4x-8_xfnlus.webp"
//               alt="Icono de notificación"
//             />
//             Empleados más alertas.
//           </li>
//           <li>
//             <img
//               loading="lazy"
//               src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024067/14_4x-8_fmpqd8.webp"
//               alt="icono de reducción de tiempo"
//             />
//             Reduce tiempos de espera.
//           </li>
//           <li>
//             <img
//               loading="lazy"
//               src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024062/13_4x-8_iqmqcf.webp"
//               alt="icono de aumento de ventas"
//             />
//             Aumenta ventas al facilitar
//             <br />
//             pedidos adicionales.
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default LlamadorMeserosBenefitsSection;
import style from "./TurnoExpressIndustriesSection.module.scss";
import Image from "next/image";

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



