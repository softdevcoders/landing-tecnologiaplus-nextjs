import style from "./StepsSectionCalificador.module.scss";
import Image from "next/image";

const steps = [
  {
    number: 1,
    text: "Al terminar la asesoría, el asesor invita al cliente a calificar la atención.",
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/1_2x-8_uapzf4",
    alt: "Asesor guiando a un usuario como calificar el servicio al cliente",
    width: 826,
    height: 911,
  },
  {
    number: 2,
    text: "El cliente elige entre 4 niveles de calificación.",
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/2_2x-8_uiwi6q",
    alt: "Modelo de encuestas de satisfacción",
    width: 826,
    height: 910,
  },
  {
    number: 3,
    text: "El sistema guarda los datos para generar estadísticas.",
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/3_2x-8_x3j9tc",
    alt: "Medición grafica del total de datos recopilados con un calificador de atencion al cliente",
    width: 826,
    height: 911,
  },
];

function StepsSectionCalificador() {
  return (
    <section className={style.steps__section}>
      <h2>¿Cómo Funciona el Calificador de Servicio al Cliente?</h2>

      <div className={style.cards__container}>
        {steps.map((step) => (
          <div className={style.card} key={step.number}>
            <Image
              src={step.image}
              alt={step.alt}
              width={step.width}
              height={step.height}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={style.text__container}>
              <span>{step.number}</span>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSectionCalificador;
