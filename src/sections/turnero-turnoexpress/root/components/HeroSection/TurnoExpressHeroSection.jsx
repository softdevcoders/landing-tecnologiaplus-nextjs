import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const TurnoExpressHeroSection = () => {
  const values = {
    title: "Turnero digital",
    description: "Adiós a las filas. Agilidad y orden en cada turno.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
      alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default TurnoExpressHeroSection;