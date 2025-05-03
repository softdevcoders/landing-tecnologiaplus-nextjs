import style from "./EncuestaVirtualIndustriesSection.module.scss";

function EncuestaVirtualIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        Un sistema de encuestas versátil a cualquier sector para mejorar la
        atención al cliente.
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738615986/oficinas_2x-8_ybubhb.webp"
            alt="icono de oficina"
          />
          <p>Oficinas</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/comercio_2x-8_wrjczj.webp"
            alt="icono de carrito de compras"
          />
          <p>Comercio</p>
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

export default EncuestaVirtualIndustriesSection;
