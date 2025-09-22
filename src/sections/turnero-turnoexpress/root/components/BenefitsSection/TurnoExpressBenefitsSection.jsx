import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758571669/icono_de_sonido_turnero_turnoexpress",
    title: "Sonido para anunciar el turno",
    width: 154,
    height: 154,
    alt: "Icono de sonido",
    title_attribute: "Icono de sonido",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758571663/icono_de_conexion_inalambrica_turnero_turnoexpress",
    title: "Cero cables, conexión inalámbrica entre pantalla y controles",
    width: 154,
    height: 155,
    alt: "Icono conexión inalámbrica",
    title_attribute: "Icono conexión inalámbrica",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758571665/icono_de_garantia_turnero_turnoexpress",
    title: "Visibilidad clara desde cualquier ángulo, sin reflejos molestos",
    width: 154,
    height: 155,
    alt: "Icono de garantía",
    title_attribute: "Icono de garantía",
  }
];

function TurnoExpressBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Beneficios destacados de los Turneros Digiturno"
    />
  );
}

export default TurnoExpressBenefitsSection;

