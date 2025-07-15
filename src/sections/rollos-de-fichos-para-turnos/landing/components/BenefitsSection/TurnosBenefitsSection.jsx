import BenefitsSection from "@/components/benefits";
import style from "./TurnosBenefitsSection.module.scss";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_1_2x-8_qhtpsh_s64dlx",
    title: "Evita el desperdicio - Corte limpio y preciso para aprovechar cada ticket.",
    width: 154,
    height: 154,
    alt: "Evita el desperdicio - Corte limpio y preciso para aprovechar cada ticket.",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_2_2x-8_q5lixj_n0jsyy",
    title: "Múltiples estilos de numeración. Opción de fabricar según la  necesidad.",
    width: 154,
    height: 337,
    alt: "Múltiples estilos de numeración. Opción de fabricar según la  necesidad.",
  }
];

function TurnosBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="¿POR QUÉ CONFIAR<br />EN NUESTROS ROLLOS<br />DE TURNOS?"
      className={style.benefits__container_list}
    />
  );
}

export default TurnosBenefitsSection;


