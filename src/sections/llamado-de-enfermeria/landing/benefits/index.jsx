import Benefits from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_1_2x-8_1_yqr37o",
    title: "Resiste derrames de agua",
    width: 183,
    height: 183,
    alt: "icono de gota de agua",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685528/icono_2_2x-8_1_kjdmh4",
    title: "Batería de larga duración",
    width: 155,
    height: 154,
    alt: "icono de batería de carga",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl",
    title: "Señal de largo alcance",
    width: 155,
    height: 155,
    alt: "icono de señal de largo alcance",
  }
];

function LlamadoDeEnfermeriaBenefitsSection() {
  return (
    <Benefits 
      benefits={benefits} 
      title="BENEFICIOS DEL LLAMADOR DE ENFERMERÍA"
    />
  );
}

export default LlamadoDeEnfermeriaBenefitsSection;