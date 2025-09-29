import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350354/2_wtupum",
    title: "Control total de los turnos.",
    description: "Permite a tu equipo ofrecer mejor servicio",
    width: 183,
    height: 183,
    alt: "Icono de Control total de los turnos",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750350353/1_fgaw9h",
    title: "Elimina filas evitando largas esperas",
    description: "Mejorando la organización del servicio",
    width: 155,
    height: 154,
    alt: "Icono de Elimina filas evitando largas esperas",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424675/icono_3_2x-8_qsgnsv",
    title: "Mejor experiencia de servicio",
    description: "Porque tus clientes lo merecen",
    width: 155,
    height: 155,
    alt: "icono de tipos de cara feliz", 
  }
];

function DispensadorTiquetesBenefitsSection() {
  return (
    <BenefitsSection benefits={benefits} title="Beneficios del dispensador de tickets y turnos" />
  );
}

export default DispensadorTiquetesBenefitsSection;