import style from "./SecondaryEncuestaVirtualProductsSection.module.scss";

function SecondaryEncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>
              Gráficos para
              <br />
              tomar decisiones
            </h2>
            <p>
              Convierte opiniones en
              <br />
              gráficos que reflejan la
              <br />
              percepción real de tus clientes.
            </p>
          </div>
          <div className={style.card}>
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

export default SecondaryEncuestaVirtualProductsSection;
