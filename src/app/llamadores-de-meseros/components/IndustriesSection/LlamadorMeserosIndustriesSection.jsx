import style from "./LlamadorMeserosIndustriesSection.module.scss";

function LlamadorMeserosIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        LLAMADOR DE PERSONAL
        <br />
        ADAPTABLE A TODOS
        <br />
        LOS SECTORES
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/restaurantes_2x-8_lpqdzj.webp"
            alt="icono de Restaurantes"
          />
          <p>Restaurantes</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694403/hoteles_2x-8_odgal8.webp"
            alt="icono de Hoteles"
          />
          <p>Hoteles</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615995/otras_industrias_2x-8_jwvjrm.webp"
            alt="icono de otras industrias"
          />
          <p>Otras industrias</p>
        </li>
      </ul>
    </section>
  );
}

export default LlamadorMeserosIndustriesSection;
