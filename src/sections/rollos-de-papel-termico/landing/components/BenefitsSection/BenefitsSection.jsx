import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350355/5_ozfta1",
    title: "Variedad en tamaños y medidas:",
    description: "perfectos para tickets, recibos y más",
    width: 183,
    height: 183,
    alt: "Icono de Garantía",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/rijkjjxwhpa9hbvnj8ga_i2qgeg",
    title: "Alta calidad de impresión:",
    description: "Textos y gráficos claros en cada ticket",
    width: 155,
    height: 154,
    alt: "Icono de Garantía",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/u2v3b0ngu177bi5byxcv_yckaaq",
    title: "Compatibilidad:",
    description: "Con impresoras térmicas multimarcas",
    width: 155,
    height: 155,
    alt: "Icono de Garantía",
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

