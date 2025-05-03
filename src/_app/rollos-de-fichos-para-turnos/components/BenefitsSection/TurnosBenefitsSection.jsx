import style from "./TurnosBenefitsSection.module.scss";

function TurnosBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        ¿POR QUÉ CONFIAR
        <br />
        EN NUESTROS ROLLOS
        <br />
        DE TURNOS?
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_1_2x-8_qhtpsh_s64dlx.webp"
            alt="icono de ticket blanco"
          />
          <p>
            Evita el desperdicio
            <span className={style.span__desktop}> - </span>
            <span className={style.span__mobile}>. </span>Corte limpio y preciso
            para aprovechar cada ticket.
          </p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349967/Icono_2_2x-8_q5lixj_n0jsyy.webp"
            alt="icono de ejemplo numérico de ticket blanco"
          />
          Múltiples estilos de numeración. Opción de fabricar según la
          necesidad.
        </li>
      </ul>
    </section>
  );
}

export default TurnosBenefitsSection;
