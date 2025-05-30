import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./LocalizadoresBenefitsSection.module.scss";

function LocalizadoresBenefitsSection() {
  // return (
  //   <section className={style.benefits__section}>
  //     <h2 className={style.benefits__title}>
  //       BENEFICIOS
  //       <br />
  //       DESTACADOS
  //     </h2>
  //     <ul>
  //       <li>
  //         <img
  //           loading="lazy"
  //           src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431751/icono_1_2x-8_zw5neg.webp"
  //           alt="icono de sonido"
  //         />
  //         Vibran, suenan y alumbran.
  //       </li>
  //       <li>
  //         <img
  //           loading="lazy"
  //           src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
  //           alt="icono de conectividad y largo alcance"
  //         />
  //         Largo Alcance, más de
  //         <br />
  //         200 metros a la redonda.
  //       </li>
  //       <li>
  //         <img
  //           loading="lazy"
  //           src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738851894/icono_3_2x-8_1_nftdzj.webp"
  //           alt="icono de medalla de excelencia"
  //         />
  //         Material resistente
  //         <br />a golpes y caídas.
  //       </li>
  //     </ul>
  //   </section>
  // );
  return (
    <BenefitsSection>
      <div className={style.benefits__container}>
        <div className={style.text__container}>
          <div className={style.benefits__title_container}>
            <h2 className={style.benefits__title}>
              BENEFICIOS <br /> DESTACADOS
            </h2>
          </div>
        </div>
        <ul className={style.benefits__container_list}>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431751/icono_1_2x-8_zw5neg.webp"
                alt="icono de sonido"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Vibran, suenan y alumbran.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
                alt="icono de auriculares"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Largo Alcance, más de 200 metros a la redonda.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944981/icono_3_2x-8_3_emxtsn.webp"
                alt="icono de auriculares"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Material resistente a golpes y caídas.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default LocalizadoresBenefitsSection;
