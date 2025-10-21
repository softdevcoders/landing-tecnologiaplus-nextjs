import style from "./LlamadorMeserosBenefitsSection.module.scss";
import BenefitsSection from "@/components/benefits";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const benefits = [
  {
    icon: getOptimizedImageUrl({ url: "v1758214575/icono_sonido_timbre_de_mesa", quality: 80, width: 100 }),
    title: "Empleados más alertas",
    width: 70,
    height: 70, 
    alt: "Icono de sonido del timbre de mesa inalámbrico",
    title_attribute: "Icono timbre de mesa sonido",
  },
  {
    icon: getOptimizedImageUrl({ url: "v1758214574/icono_tiempo_timbres_para_restaurantes", quality: 80, width: 100 }),
    title: "Reduce tiempos de espera",
    width: 70,
    height: 70,
    alt: "Icono reducción de tiempo con timbres para restaurantes",
    title_attribute: "Timbres para restaurantes reducción de tiempo",
  },
  {
    icon: getOptimizedImageUrl({ url: "v1758214573/icono_ventas_timbre_para_restaurante", quality: 80, width: 100 }),
    title: "Aumenta ventas al facilitar pedidos adicionales",
    width: 70,
    height: 70,
    alt: "Icono de aumento de ventas con timbre para restaurante",
    title_attribute: "Timbre para restaurante aumento de ventas",
  },
];

function LlamadorMeserosBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Beneficios del Llamador de Meseros"
      className={style.benefits__container_list}
    />
  );
}

export default LlamadorMeserosBenefitsSection; 
