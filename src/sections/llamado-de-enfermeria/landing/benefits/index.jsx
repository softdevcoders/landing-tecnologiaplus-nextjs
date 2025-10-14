import Benefits from "@/components/benefits";

const benefits = [
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757697968/icono_gota_a_prueba_de_agua",
    title: "Resiste derrames de agua",
    description: "* Según modelo",
    width: 183,
    height: 183,
    alt: "icono de gota a prueba de agua",
    title_attribute: "Gota a prueba de agua",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757697967/icono_bateria_de_carga",
    title: "Batería de larga duración",
    width: 155,
    height: 154,
    alt: "icono de batería de carga",
    title_attribute: "Batería de carga",
  },
  {
    icon: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757697970/icono_senal_de_largo_alcance",
    title: "Señal de largo alcance",
    width: 155,
    height: 155,
    alt: "icono de señal de largo alcance",
    title_attribute: "Señal de largo alcance",
  }
];

function LlamadoDeEnfermeriaBenefitsSection() {
  return (
    <Benefits 
      benefits={benefits} 
      title="Beneficios del Llamador de Enfermería" 
    />
  );
}

export default LlamadoDeEnfermeriaBenefitsSection;