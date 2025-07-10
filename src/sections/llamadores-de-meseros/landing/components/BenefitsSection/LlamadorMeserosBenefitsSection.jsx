import style from "./LlamadorMeserosBenefitsSection.module.scss";
import BenefitsSection from "@/components/benefits";
import YouTubePlayer from "@/components/YouTubePlayer";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024065/15_4x-8_xfnlus",
    title: "Empleados más alertas.",
    width: 399,
    height: 399,
    alt: "icono de sonido",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024067/14_4x-8_fmpqd8",
    title: "Reduce tiempos de espera.",
    width: 399,
    height: 399,
    alt: "icono de reducción de tiempo",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024062/13_4x-8_iqmqcf",
    title: "Aumenta ventas al facilitar pedidos adicionales.",
    width: 399,
    height: 399,
    alt: "icono de aumento de ventas",
  },
];

function LlamadorMeserosBenefitsSection() {
  return (
    <section className={style.benefits__section_container}>
      <div className={style.video__container}>
        <YouTubePlayer
          videoId="XGGhLks0iVc" 
          title="Llamador de Meseros - Tecnología Plus"
        />
      </div>
      <BenefitsSection 
        benefits={benefits} 
        title="BENEFICIOS<br />DESTACADOS"
        className={style.benefits__container_list}
      />
    </section>
  );
}

export default LlamadorMeserosBenefitsSection; 
