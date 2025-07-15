import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/4_rwyfvi",
    title: "Vibran, suenan y alumbran.",
    width: 183,
    height: 183,
    alt: "icono de sonido",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl",
    title: "Largo Alcance, más de 200 metros a la redonda.",
    width: 154,
    height: 155,
    alt: "icono de alcance",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/3_i6btxr",
    title: "Material resistente a golpes y caídas.",
    width: 183,
    height: 183,
    alt: "icono de resistencia",
  },
];

function LocalizadoresBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="BENEFICIOS<br />DESTACADOS"
    />
  );
}

export default LocalizadoresBenefitsSection;
