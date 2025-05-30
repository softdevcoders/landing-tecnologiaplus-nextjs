import Image from "next/image";
import style from "./HomeBenefitsSection.module.scss";
import BenefitsSection from "@/components/benefits";

function HomeBenefitsSection() {
  return (
    <BenefitsSection>
      <div className={style.benefits__container}>
        <div className={style.text__container}>
          <div className={style.benefits__title_container}>
            <h2 className={style.benefits__title}>
              ¿POR QUÉ <br /> NOS ELIGEN
            </h2>
          </div>
          <div className={style.benefits__image_container}>
            <Image
              width={500}
              height={50}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_500/v1738960600/texto_2x-8_sklhxz"
              alt="imagen que dice Nuestros clientes"
              className={style.benefits__image}
            />
          </div>
        </div>
        <ul className={style.benefits__container_list}>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944984/icono_1_2x-8_3_fvtagl.webp"
                alt="imagen que dice Nuestros clientes"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Asesoría según tu sector para decisiones clave.</span>
            </div>
          </li>
          <li className={style.benefits__item}>
            <div className={style.benefits__icon_container}>
              <Image
                width={100}
                height={100}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944983/icono_2_2x-8_3_zzggy6.webp"
                alt="icono de auriculares"
                className={style.benefits__icon}
              />
            </div>
            <div className={style.benefits__icon_container_text}>
              <span>Más de 10 años ayudando a las empresas a mejorar el servicio.</span>
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
              <span>Soporte Técnico preventivo y correctivo para proteger tu inversión.</span>
            </div>
          </li>
        </ul>
      </div>
    </BenefitsSection>
  );
}

export default HomeBenefitsSection;



