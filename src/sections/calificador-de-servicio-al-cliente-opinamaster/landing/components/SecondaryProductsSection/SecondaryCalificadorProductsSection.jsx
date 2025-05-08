import style from "./SecondaryCalificadorProductsSection.module.scss";

function SecondaryCalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Alertas en tiempo real.</h2>
            <p>Agiliza la toma de decisiones.</p>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596112/Alertas_cel_2x-8_tfsbg1.webp"
              alt="Recibe alertas moviles"
            />
          </div>
          <div className={style.card}>
            <h2>Métricas precisas.</h2>
            <p>Identifica como mejorar tu negocio.</p>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596106/Estadi%CC%81sticas_2x-8_dlqi3u.webp"
              alt="Estadísticas en base a los resultados del calificador de servicio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryCalificadorProductsSection;
