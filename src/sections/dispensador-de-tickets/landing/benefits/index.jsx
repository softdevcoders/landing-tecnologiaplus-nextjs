import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249530/icono_ticket_de_turno",
    title: "Control total de los turnos.",
    description: "Permite a tu equipo ofrecer mejor servicio",
    width: 183,
    height: 183,
    alt: "Icono de ticket de turno",
    title_attribute: "Ticket de turno",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249531/icono_personas",
    title: "Elimina filas evitando largas esperas",
    description: "Mejorando la organización del servicio",
    width: 155,
    height: 154,
    alt: "Icono de personas",
    title_attribute: "Personas en espera",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1759249532/icono_cara_feliz",
    title: "Mejor experiencia de servicio",
    description: "Porque tus clientes lo merecen",
    width: 155,
    height: 155,
    alt: "Icono de tipos de cara feliz", 
    title_attribute: "Icono de caras feliz",
  }
];

function DispensadorTiquetesBenefitsSection() {
  return (
    <BenefitsSection benefits={benefits} title="Beneficios del Dispensador de Tickets y Turnos" />
  );
}

export default DispensadorTiquetesBenefitsSection;