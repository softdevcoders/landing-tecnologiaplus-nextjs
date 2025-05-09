import LandingHero from "@/components/layout/landing-hero";

function EncuestaVirtualHeroSection() {
  return (
    <LandingHero
      title="Encuesta virtual: Detecta los puntos fuertes"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738607993/Imagen_principal_2x-8_pc1qfd.webp",
        alt: "Software de encuestas en línea",
      }}
      description="y como mejorar tu negocio."
      priority={true}
      fetchPriority="high"
    />
  );
}

export default EncuestaVirtualHeroSection;
