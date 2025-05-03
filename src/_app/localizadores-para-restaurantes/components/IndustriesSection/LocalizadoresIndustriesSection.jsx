import style from "./LocalizadoresIndustriesSection.module.scss";

function LocalizadoresIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        Nuestros localizadores de clientes se adaptan a distintos sectores y
        necesidades.
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694400/restaurantes_2x-8_lpqdzj.webp"
            alt="icono de Restaurantes"
          />
          <p>
            Zona de comidas
            <br />
            autoservicio
          </p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738692286/salud_2x-8_anq348.webp"
            alt="icono de Sector salud"
          />
          <p>Salud</p>
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

export default LocalizadoresIndustriesSection;
