import LandingHero from "@/components/layout/landing-hero";

function TurnoMasterHeroSection() {
  return (
    <LandingHero
      title="Sistema de turnos de espera"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860875/imagen_ppal_2x-8_1_cpkvb2.webp",
        alt: "Software de feedback de clientes con pantalla de turnos",
      }}
      description="Lleva tu sala de espera al siguiente nivel"
      priority={true}
      fetchPriority="high"
    />
  );
}

export default TurnoMasterHeroSection;
