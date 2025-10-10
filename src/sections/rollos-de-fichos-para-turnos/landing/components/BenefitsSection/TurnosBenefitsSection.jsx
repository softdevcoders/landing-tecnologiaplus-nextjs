import BenefitsSection from "@/components/benefits";
import style from "./TurnosBenefitsSection.module.scss";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130296/rollo_de_turnos_icono_corte_limpio",
    title: "Evita el desperdicio - Corte limpio y preciso para aprovechar cada ticket",
    width: 154,
    height: 154,
    alt: "Corte limpio del rollo de turnos para evitar desperdicio y aprovechar cada ticket",
    title_attribute: "Rollo de turnos con corte preciso que optimiza el uso del papel",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1760130295/rollo_de_numeros_para_turnos_icono_personalizado",
    title: "Múltiples estilos de numeración. Opción de fabricar según la necesidad",
    width: 154,
    height: 337,
    alt: "Rollo de números para turnos con diferentes estilos y numeración personalizada según necesidad",
    title_attribute: "Rollo de números para turnos con numeración adaptable",
  }
];

function TurnosBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="¿POR QUÉ CONFIAR EN NUESTROS ROLLOS DE TURNOS?"
      className={style.benefits__container_list}
    />
  );
}

export default TurnosBenefitsSection;


