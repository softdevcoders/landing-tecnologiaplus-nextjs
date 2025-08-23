import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const SistemaDeTurnosTurnoMasterHeroSection = () => {
  const values = {
    title: "Sistema de turnos de espera",
    description: "TurnoMaster lleva tu sala de espera al siguiente nivel.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/13_adjkab",
      alt: "Imagen de Sistema de Turnos de espera Turnomaster - Tecnología Plus.",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default SistemaDeTurnosTurnoMasterHeroSection;