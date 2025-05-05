import LandingHero from "@/components/layout/landing-hero";

function LocalizadoresHeroSection() {
  return (
    <LandingHero
      title="Localizadores para restaurantes"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744781254/Imagen_portada_4x-8_dfrjjg_1_1_lvtv17.webp",
        alt: "Localizadores para clientes",
      }}
      description="Tus clientes disfrutan el tiempo sin temor de perder el turno."
      priority={true}
      fetchPriority="high"
    />
  )
}

export default LocalizadoresHeroSection;
