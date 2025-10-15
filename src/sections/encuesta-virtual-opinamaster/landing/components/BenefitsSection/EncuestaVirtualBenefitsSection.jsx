import BenefitsSection from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607995/Tablet_2x-8_yfzeko",
    title: "Tablet o celular.",
    width: 505,
    height: 346,
    alt: "icono de tablet",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607999/Link_por_mail_o_RS_2x-8_gfs8zq",
    title: "Link por email <br /> ó redes sociales.",
    width: 194,
    height: 388,
    alt: "icono de link",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607998/pantalla_tactil_2x-8_brnroa",
    title: "Pantalla táctil.",
    width: 541,
    height: 424,
    alt: "icono de pantalla táctil",
  },
];

function EncuestaVirtualBenefitsSection() {
  return (
    <BenefitsSection 
      benefits={benefits} 
      title="Crea Encuestas Virtuales adaptadas a tu negocio"
      isEncuestaVirtual={true}
    />
  );
}

export default EncuestaVirtualBenefitsSection;

