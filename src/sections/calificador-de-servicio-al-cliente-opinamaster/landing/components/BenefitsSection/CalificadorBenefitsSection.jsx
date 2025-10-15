import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/Icono_1_2x-8_1_ddkdtv",
    title: "Alerta de calificación negativa al correo.",
    width: 213,
    height: 155,
    alt: "icono de alerta",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_2_2x-8_1_vcthy7",
    title: "Personaliza tus preguntas.",
    width: 213,
    height: 155,
    alt: "icono de personalización",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_3_2x-8_1_ebqi7y",
    title: "Estadísticas en internet.",
    width: 213,
    height: 155,
    alt: "icono de estadísticas",
  },
];

function CalificadorBenefitsSection() { 
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Beneficios<br />destacados"
    />
  );
}

export default CalificadorBenefitsSection;
