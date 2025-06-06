import Image from "next/image";
import style from "./StepsSectionEnfermeria.module.scss";

const steps = [
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685532/1_2x-8_kqzcjp.webp",
    title: "1. Presiona el botón para llamar la enfermera",
    alt: "Imagen de un paciente usando el botón para llamar enfermeras",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685531/2_2x-8_vdyfcr.webp",
    title: "2. La enfermera recibe el llamado en la pantalla o en el reloj receptor",
    alt: "Imagen de un personal de la salud recibiendo la señal del llamador",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685531/2_1_2x-8_yz4xzc.webp",
    title: "3. Se atiende el llamado y presiona la tecla “CANCEL” para borrar el llamado",
    alt: "Imagen de un paciente presionando el botón de CANCELAR en el llamador de enfermería",
  },
];

function StepsSectionEnfermeria() {
  return (
    <section className={style.steps__section}>
      <h2 className={style.steps__section__title}>¿Cómo funciona?</h2>  

      <div className={style.cards__container}>
        {steps.map((step, index) => (
          <div className={style.card__container} key={index}>
            <div className={style.card__image__container}>
              <Image
                src={step.image}  
                alt={step.alt}
                width={550}
                height={550}
                className={style.card__image}
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

export default StepsSectionEnfermeria;
