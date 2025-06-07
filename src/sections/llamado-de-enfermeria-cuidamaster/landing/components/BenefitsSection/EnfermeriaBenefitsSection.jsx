// import style from "./EnfermeriaBenefitsSection.module.scss";

// function EnfermeriaBenefitsSection() {
//   return (
//     <section className={style.benefits__section}>
//       <h2 className={style.benefits__title}>
//         BENEFICIOS
//         <br />
//         DESTACADOS
//       </h2>
//       <ul>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o.webp"
//             alt="icono de gota de agua"
//           />
//           <div>
//             <div>
//               Resiste derrames de agua.
//               <span className={style.hide__on__mobile}>*</span>
//             </div>
//             <span>*Referencia seleccionada</span>
//           </div>
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4.webp"
//             alt="icono de batería de carga"
//           />
//           Batería de larga duración.
//         </li>
//         <li>
//           <img
//             loading="lazy"
//             src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
//             alt="icono de conectividad y largo alcance"
//           />
//           Señal de largo alcance.
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default EnfermeriaBenefitsSection;

import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./EnfermeriaBenefitsSection.module.scss";

function EnfermeriaBenefitsSection() {
  return (
    <BenefitsSection overlayWhite noPaddingTop marginTopOverlay>
      <div className={style.benefits__container}>
        <div className={style.text__container}>
          <div className={style.benefits__title_container}>
            <h2 className={style.benefits__title}>
              BENEFICIOS
              <br />
              DESTACADOS  
            </h2>
          </div>
        </div>
        <ul className={style.benefits__container_list}>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o.webp"
                alt="icono de gota de agua" 
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span className={style.benefits__icon_container_text__title}>Resiste derrames de agua.</span>
              <span className={style.benefits__icon_container_text__subtitle}>* Referencia seleccionada</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4.webp"
                alt="icono de batería de carga"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span className={style.benefits__icon_container_text__title}>Batería de larga duración.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
                alt="icono de señal de largo alcance"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span className={style.benefits__icon_container_text__title}>Señal de largo alcance.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default EnfermeriaBenefitsSection;



