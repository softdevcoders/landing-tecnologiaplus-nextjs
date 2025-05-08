import LandingHero from "@/components/layout/landing-hero";

function CalificadorHeroSection() {
  return (
    <LandingHero
      title="OpinaMaster: El calificador de servicio"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596299/Imagen_principal_2x-8_xvqvel.webp",
        alt: "Rollos de fichos para turnos imagen principal",
      }}
      description="Para crecer con la voz de tus clientes."
      priority={true}
      fetchPriority="high"
    />
  );
}

export default CalificadorHeroSection;
