import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431751/icono_1_2x-8_zw5neg",
    title: "Sonido para anunciar el turno.",
    width: 154,
    height: 154,
    alt: "icono de sonido",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl",
    title: "Cero cables, conexión inalámbrica entre pantalla y controles.",
    width: 154,
    height: 155,
    alt: "icono de conexión inalámbrica",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431752/icono_3_2x-8_ypc1eu",
    title: "Visibilidad clara desde cualquier ángulo, sin reflejos molestos.",
    width: 154,
    height: 155,
    alt: "Icono de Garantía",
  }
];

function TurnoExpressBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="BENEFICIOS<br />DESTACADOS"
    />
  );
}

export default TurnoExpressBenefitsSection;

