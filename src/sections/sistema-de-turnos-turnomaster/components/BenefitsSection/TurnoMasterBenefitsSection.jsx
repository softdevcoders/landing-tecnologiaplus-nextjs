import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./TurnoMasterBenefitsSection.module.scss";

function TurnoMasterBenefitsSection() {
  return (
    <BenefitsSection overlayWhite noPaddingTop marginTopOverlay>
      <div className={style.benefits__container}>
        <div className={style.text__container}>
          <div className={style.benefits__title_container}>
            <h2 className={style.benefits__title}>
              VENTAJAS DE NUESTRO <br /> SISTEMA DE TURNOS
            </h2>
          </div>
        </div>
        <ul className={style.benefits__container_list}>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860473/icono_1_2x-8_2_ahx7d0.webp"
                alt="Icono de controles"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Personaliza según colores <br /> y necesidades de tu marca.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860472/icono_2_2x-8_2_kjq13k.webp"
                alt="Reportes gráficos para mejor toma de decisiones"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Datos y estadísticas para evaluar <br /> y controlar la calidad del servicio.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860471/icono_3_2x-8_2_fzlqej.webp"
                alt="Agrega funciones extra según tus necesidades"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Agrega funciones extra <br /> según tus necesidades.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default TurnoMasterBenefitsSection;
