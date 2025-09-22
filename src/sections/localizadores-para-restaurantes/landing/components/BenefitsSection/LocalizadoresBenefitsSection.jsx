import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758563428/icono_sonido",
    title: "Vibran, suenan y alumbran",
    width: 183,
    height: 183,
    alt: "Icono de sonido",
    title_attribute: "Icono de sonido",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758563429/icono_alcance",
    title: "Largo Alcance, más de 200 metros a la redonda",
    width: 154,
    height: 155,
    alt: "Icono de alcance",
    title_attribute: "Icono de alcance",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758563427/icono_resistencia",
    title: "Material resistente a golpes y caídas",
    width: 183,
    height: 183,
    alt: "Icono de resistencia",
    title_attribute: "Icono de resistencia",
  },
];

function LocalizadoresBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Beneficios de los LRS para autoservicio en restaurantes"
    />
  );
}

export default LocalizadoresBenefitsSection;
