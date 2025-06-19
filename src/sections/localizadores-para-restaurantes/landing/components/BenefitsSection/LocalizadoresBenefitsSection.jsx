import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./LocalizadoresBenefitsSection.module.scss";

function LocalizadoresBenefitsSection() {
  return (
    <BenefitsSection overlayWhite>
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
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/4_rwyfvi.png"
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
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/3_i6btxr.png"
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
