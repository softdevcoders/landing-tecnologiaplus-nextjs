import style from "./CalificadorBenefitsSection.module.scss";

function CalificadorBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/Icono_1_2x-8_1_ddkdtv.webp"
            alt="Recibe alertas por email"
          />
          Alerta de calificación <br className={style.hide__on__mobile} />
          negativa al correo.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_2_2x-8_1_vcthy7.webp"
            alt="Preguntas personalizadas"
          />
          Personaliza tus preguntas.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596138/Icono_3_2x-8_1_ebqi7y.webp"
            alt="Reportes graficos para mejor toma de decisiones"
          />
          Estadísticas en internet.
        </li>
      </ul>
    </section>
  );
}

export default CalificadorBenefitsSection;
