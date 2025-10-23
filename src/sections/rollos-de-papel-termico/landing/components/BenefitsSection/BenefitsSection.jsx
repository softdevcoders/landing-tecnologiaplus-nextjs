import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80,f_webp/v1761239492/icono_medidas_rollo_papel_termico",
    title: "Variedad en tamaños y medidas:",
    description: "perfectos para tickets, recibos y más",
    width: 183,
    height: 183,
    alt: "Ícono de medidas para rollo papel térmico con ancho y diámetro",
    title_attribute: "Medidas para rollo papel térmico con ancho y diámetro",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80,f_webp/v1761239491/icono_garantia_rollos_y_etiquetas",
    title: "Alta calidad de impresión:",
    description: "Textos y gráficos claros en cada ticket",
    width: 155,
    height: 154,
    alt: "Ícono de garantía para rollos y etiquetas de impresión de alta calidad",
    title_attribute: "Garantía de calidad en rollos y etiquetas para impresión",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80,f_webp/v1761239491/icono_compatibilidad_papel_termico",
    title: "Compatibilidad:",
    description: "Con impresoras térmicas multimarcas",
    width: 155,
    height: 155,
    alt: "Ícono de compatibilidad con impresoras para papel térmico",
    title_attribute: "Compatibilidad garantizada para papel térmico",
  }
];

function RollosTermicosBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Beneficios de nuestro papel térmico para impresoras" 
    />
  );
}

export default RollosTermicosBenefitsSection;

