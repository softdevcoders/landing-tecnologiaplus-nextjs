import BenefitsSection from "@/components/benefits";
import Image from "next/image";
import style from "./TurnosBenefitsSection.module.scss";

function TurnosBenefitsSection() {
  return (
    <BenefitsSection overlayWhite noPaddingTop marginTopOverlay>
      <div className={style.benefits__container}>
        <div className={style.text__container}>
          <div className={style.benefits__title_container}>
            <h2 className={style.benefits__title}>
              ¿POR QUÉ CONFIAR
              <br />
              EN NUESTROS ROLLOS
              <br />
              DE TURNOS?  
            </h2>
          </div>
        </div>
        <ul className={style.benefits__container_list}>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738349967/Icono_1_2x-8_qhtpsh_s64dlx.webp"
                alt="icono de desperdicio" 
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Evita el desperdicio - Corte limpio y preciso para aprovechar cada ticket.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738349967/Icono_2_2x-8_q5lixj_n0jsyy.webp"
                alt="icono de numeración"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Múltiples estilos de numeración. Opción de fabricar según la  necesidad.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default TurnosBenefitsSection;


