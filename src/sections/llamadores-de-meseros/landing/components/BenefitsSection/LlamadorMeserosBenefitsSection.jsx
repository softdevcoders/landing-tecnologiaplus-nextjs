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


import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./LlamadorMeserosBenefitsSection.module.scss";
import YouTubePlayer from "@/components/YouTubePlayer";

function LlamadorMeserosBenefitsSection() {
  return (
    <section className={style.benefits__section_container}>
      <div className={style.video__container}>
        <YouTubePlayer
          videoId="XGGhLks0iVc" 
          title="Llamador de Meseros - Tecnología Plus"
        />
      </div>
      <div className={style.benefits__container_list}>
        <BenefitsSection paddingInline={false}>
          <div className={style.benefits__container}>
            <div className={style.benefits__title_container}>
              <h2 className={style.benefits__title}>
                BENEFICIOS <br /> DESTACADOS
              </h2>
            </div>
            <ul className={style.benefits__container_list}>
              <li className={style.benefits__item}>
                <div className={style.benefits__icon_container}>
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024065/15_4x-8_xfnlus.webp"
                    alt="icono de notificación"
                    className={style.benefits__icon}
                  />
                </div>
                <div className={style.benefits__icon_container_text}>
                  <span>Empleados más alertas.</span>
                </div>
              </li>
              <li className={style.benefits__item}>
                <div className={style.benefits__icon_container}>
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024067/14_4x-8_fmpqd8.webp"
                    alt="icono de reducción de tiempo"
                    className={style.benefits__icon}
                  />
                </div>
                <div className={style.benefits__icon_container_text}>
                  <span>Reduce tiempos de espera.</span>
                </div>
              </li>
              <li className={style.benefits__item}>
                <div className={style.benefits__icon_container}>
                  <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024062/13_4x-8_iqmqcf.webp"
                    alt="icono de aumento de ventas"
                    className={style.benefits__icon}
                  />
                </div>
                <div className={style.benefits__icon_container_text}>
                  <span>Aumenta ventas al facilitar pedidos adicionales.</span>
                </div>
              </li>
            </ul>
          </div>
        </BenefitsSection>
      </div>
    </section>
  );
}

export default LlamadorMeserosBenefitsSection; 
