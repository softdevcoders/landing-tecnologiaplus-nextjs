import style from "./DispensadorTiquetesProductsSection.module.scss";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Dispensador de rollos de turnos</h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/dispensador_2x-8_dwru2g.webp"
          alt="Colores de tickets y dispensador de turnos rojo"
        />
        <a
          className={style.card__btn}
          href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol"
        >
          Ver más
        </a>
      </div>
      <input
        type="checkbox"
        id="toggleText"
        className={style.toggle__checkbox}
      />
      <p>
        Elimina las filas y agiliza el flujo de atención, nuestro dispensador de
        turnos ayuda a reducir el desorden y mejora la experiencia de espera,
        asegurando que cada cliente sea atendido en el momento adecuado y sin
        confusiones.
      </p>
      <label htmlFor="toggleText" className={style.toggle__label}></label>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
