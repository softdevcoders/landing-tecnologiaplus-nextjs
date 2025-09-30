import Image from "next/image";
import style from "./styles.module.scss";

const steps = [
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1759249531/dispensador_de_tickets_para_turnos_tomar_numero",
    title: "Usuario toma un número de turno en el dispensador tipo caracol.",
    alt: "Usuario toma su turno en el dispensador de tickets para turnos color rojo",
    title_attribute: "Cómo funciona un dispensador de tickets para turnos: tomar el número",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1759249530/dispensador_de_numeros_para_atencion_espera",
    title: "Usuario espera que lo llamen en la pantalla.",
    alt: "Cliente espera su turno en pantalla tras recibir número en dispensador de números para atención",
    title_attribute: "Espera organizada con dispensador de números para atención al cliente",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1759249530/dispensador_de_turnos_cliente_atendido",
    title: "Cuando llaman el turno, se dirige a la ventanilla o módulo de atención.",
    alt: "Cliente es atendido tras ser llamado mediante el dispensador de turnos",
    title_attribute: "Atención al cliente tras recibir llamado con dispensador de turnos",
  },
];

function StepsSection() {
  return (
    <section data-nosnippet className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona el dispensador de turnos?</h2>  

      <div className={style.cards__container}>
        {steps.map((step, index) => (
          <div className={style.card__container} key={index}>
            <div className={style.card__image__container}>
              <Image
                src={step.image}  
                alt={step.alt}
                title={step.title_attribute}
                width={550}
                height={550}
                className={style.card__image}
                unoptimized={true}
              />
            </div>
            <div className={style.card__text__container}>
              <p className={style.card__text__container__text}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
