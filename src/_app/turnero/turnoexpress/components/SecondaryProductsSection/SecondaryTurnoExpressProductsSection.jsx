import style from "./SecondaryTurnoExpressProductsSection.module.scss";

function SecondaryTurnoExpressProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <h2>Dispensador de tiquetes</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738789798/Dispensador_2x-8_soj9hp.webp"
              alt="Dispensador de turnos caracol rojo"
            />
            <p>2.686 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol"
            >
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <h2>Rollos de turnos</h2>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738448114/Rollos_de_turnos_2x-8_ovbwlu.webp"
              alt="Rollos de turnos personalizados"
            />
            <p>8.527 vendidos</p>
            <a
              className={style.card__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/ver-mas/rollos-de-turnos"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryTurnoExpressProductsSection;
