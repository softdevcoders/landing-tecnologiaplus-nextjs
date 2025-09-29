import Image from "next/image";
import style from "./styles.module.scss";

const steps = [
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689242/8_4x-8_2_twguhd",
    title: "Usuario toma un número de turno en el dispensador tipo caracol.",
    alt: "",
    title_attribute: "",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689241/9_4x-8_2_cldmeo",
    title: "Usuario espera que lo llamen en la pantalla.",
    alt: "",
    title_attribute: "",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740689243/7_4x-8_1_ek8a7o",
    title: "Cuando llaman el turno, se dirige a la ventanilla o módulo de atención.",
    alt: "",
    title_attribute: "",
  },
];

function StepsSection() {
  return (
    <section data-nosnippet className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona el llamado de enfermeras?</h2>  

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
