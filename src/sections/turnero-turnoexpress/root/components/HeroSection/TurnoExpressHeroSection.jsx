import LandingHero from "@/components/layout/landing-hero";

function TurnoExpressHeroSection() {
  return (
    <LandingHero
      title="Turnero digital: Adiós a las filas"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Imagen_bannerprincipal_2x-8_daisi3.webp",
        alt: "Turnero digital",
      }}
      description="Agilidad y orden en cada turno."
      priority={true}
      fetchPriority="high"
    />
  )
}

export default TurnoExpressHeroSection;
