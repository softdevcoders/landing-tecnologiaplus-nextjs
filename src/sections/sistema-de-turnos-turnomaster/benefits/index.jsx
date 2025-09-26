import BenefitsSection from "@/components/benefits";
import style from "./styles.module.scss";  

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902038/sistema_de_turnos_personalizable",
    title: "Personaliza según colores y necesidades de tu marca",
    width: 183,
    height: 183,
    alt: "Sistema de turnos personalizable con colores y logo de la empresa",
    title_attribute: "Personaliza tu sistema de turnos y adáptalo a tu marca",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902038/software_de_turnos_con_reportes",
    title: "Datos y estadísticas para evaluar y controlar la calidad del servicio",
    width: 155,
    height: 154,
    alt: "Software de turnos con reportes gráficos para análisis de gestión",
    title_attribute: "Mejora decisiones con software de turnos y reportes inteligentes",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758902039/sistema_de_turnos_flexible",
    title: "Agrega funciones extra según tus necesidades",
    width: 155,
    height: 155,
    alt: "Sistema de turnos flexible con funciones adicionales",
    title_attribute: "Escoge un sistema de turnos adaptable a tus necesidades",
  }
];

function TurnoMasterBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Ventajas de nuestro Software para Turnos Médicos y Filas"
      className={style.benefits__container_list}
    />
  );
}

export default TurnoMasterBenefitsSection;
