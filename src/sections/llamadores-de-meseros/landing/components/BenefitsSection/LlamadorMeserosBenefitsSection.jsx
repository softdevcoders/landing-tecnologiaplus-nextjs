import style from "./LlamadorMeserosBenefitsSection.module.scss";
import BenefitsSection from "@/components/benefits";
import YouTubePlayer from "@/components/YouTubePlayer";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const benefits = [
  {
    icon: getOptimizedImageUrl({ url: "v1743024065/15_4x-8_xfnlus", quality: 80, width: 100 }),
    title: "Empleados más alertas.",
    width: 70,
    height: 70, 
    alt: "icono de sonido",
  },
  {
    icon: getOptimizedImageUrl({ url: "v1743024067/14_4x-8_fmpqd8", quality: 80, width: 100 }),
    title: "Reduce tiempos de espera.",
    width: 70,
    height: 70,
    alt: "icono de reducción de tiempo",
  },
  {
    icon: getOptimizedImageUrl({ url: "v1743024062/13_4x-8_iqmqcf", quality: 80, width: 100 }),
    title: "Aumenta ventas al facilitar pedidos adicionales.",
    width: 70,
    height: 70,
    alt: "icono de aumento de ventas",
  },
];

function LlamadorMeserosBenefitsSection() {
  return (
    <section className={style.benefits__section_container} data-nosnippet>
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
