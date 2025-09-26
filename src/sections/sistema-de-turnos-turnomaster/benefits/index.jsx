import BenefitsSection from "@/components/benefits";
import style from "./styles.module.scss";  

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860473/icono_1_2x-8_2_ahx7d0",
    title: "Personaliza según colores y necesidades de tu marca",
    width: 183,
    height: 183,
    alt: "Personaliza según colores y necesidades de tu marca.",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860472/icono_2_2x-8_2_kjq13k",
    title: "Datos y estadísticas para evaluar y controlar la calidad del servicio",
    width: 155,
    height: 154,
    alt: "Reportes gráficos para mejor toma de decisiones",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860471/icono_3_2x-8_2_fzlqej",
    title: "Agrega funciones extra según tus necesidades",
    width: 155,
    height: 155,
    alt: "Agrega funciones extra según tus necesidades",
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
