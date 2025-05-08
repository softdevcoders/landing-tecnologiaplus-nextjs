import LandingHero from "@/components/layout/landing-hero";

function EnfermeriaHeroSection() {
  return (
    <LandingHero
      title="Numeración clara y corte preciso"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/Imagen_principal_2x-8_1_cnekrr.webp",
        alt: "Llamado de enfermería presionando un botón",
        image_text_column: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
          alt: "Logo Cuida master",
        }
      }}
      description="Facilita el contacto entre el paciente y personal de salud."
      priority={true}
      fetchPriority="high"
    />
  );
}

export default EnfermeriaHeroSection;
