import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./TurnoExpressBenefitsSection.module.scss";

function TurnoExpressBenefitsSection() {
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
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738431751/icono_1_2x-8_zw5neg.webp"
                alt="icono de sonido" 
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Sonido para anunciar el turno.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738431754/icono_2_2x-8_vktxnl.webp"
                alt="icono de conexión inalámbrica"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Cero cables, conexión inalámbrica entre pantalla y controles.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738431752/icono_3_2x-8_ypc1eu.webp"
                alt="icono de pantalla anti reflejo"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Visibilidad clara desde cualquier ángulo, sin reflejos molestos.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default TurnoExpressBenefitsSection;

