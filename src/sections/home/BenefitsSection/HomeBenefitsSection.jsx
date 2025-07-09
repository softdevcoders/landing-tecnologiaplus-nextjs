import Image from "next/image";
import style from "./HomeBenefitsSection.module.scss";
import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944984/icono_1_2x-8_3_fvtagl",
    title: "Asesoría según tu sector para decisiones clave.",
    width: 183,
    height: 183,
    alt: "Asesoría según tu sector para decisiones clave.",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944983/icono_2_2x-8_3_zzggy6",
    title: "Más de 10 años ayudando a las empresas a mejorar el servicio.",
    width: 155,
    height: 154,
    alt: "Más de 10 años ayudando a las empresas a mejorar el servicio.",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_100/v1738944981/icono_3_2x-8_3_emxtsn",
    title: "Soporte Técnico preventivo y correctivo para proteger tu inversión.",
    width: 155,
    height: 155,
    alt: "Soporte Técnico preventivo y correctivo para proteger tu inversión.",
  }
];

function HomeBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="¿POR QUÉ<br />NOS ELIGEN"
      isHome={true}
      className={style.benefits__container}
    />
  );
}

export default HomeBenefitsSection;



