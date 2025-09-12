import Image from "next/image";
import style from "./styles.module.scss";

const steps = [
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698081/paciente_usando_boton_llamador_enfermeria",
    title: "1. Presiona el botón para llamar la enfermera",
    alt: "Imagen de un paciente usando el botón para llamar enfermeras",
    title_attribute: "Imagen de un paciente usando el botón para llamar enfermeras",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698086/personal_salud_recibiendo_llamado_pacientes",
    title: "2. La enfermera recibe el llamado en la pantalla o en el reloj receptor",
    alt: "Imagen de un personal de la salud recibiendo la señal del llamador",
    title_attribute: "Imagen de un personal de la salud recibiendo la señal del llamador",
  },
  {
    image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/q_80/v1757698083/enfermera_cancelando_llamado_enfermeria",
    title: "3. Se atiende el llamado y presiona la tecla “CANCEL” para borrar el llamado",
    alt: "Imagen de un paciente presionando el botón de CANCELAR en el llamador de enfermería",
    title_attribute: "Imagen de un paciente presionando el botón de CANCELAR en el llamador de enfermería",
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
