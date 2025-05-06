import style from "./LlamadorMeserosBenefitsSection.module.scss";
import YouTubePlayer from "../../../../components/YouTubePlayer";

function LlamadorMeserosBenefitsSection() {
  return (
    <div className={style.video__benefits__container}>
      <section className={style.video__section}>
        <YouTubePlayer 
          videoId="XGGhLks0iVc" 
          title="Llamador de Meseros - Tecnología Plus"
        />
      </section>
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
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024065/15_4x-8_xfnlus.webp"
              alt="Icono de notificación"
            />
            Empleados más alertas.
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024067/14_4x-8_fmpqd8.webp"
              alt="icono de reducción de tiempo"
            />
            Reduce tiempos de espera.
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743024062/13_4x-8_iqmqcf.webp"
              alt="icono de aumento de ventas"
            />
            Aumenta ventas al facilitar
            <br />
            pedidos adicionales.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default LlamadorMeserosBenefitsSection;
