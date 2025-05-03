import style from "./EnfermeriaIndustriesSection.module.scss";

function EnfermeriaIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        Llamador de Personal:
        <br />
        ideal para hospitales,
        <br />
        clínicas y más
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685529/Geria%CC%81tricos_2x-8_djctos.webp"
            alt="Acompañamiento geriátrico"
          />
          <p>Geriátricos</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738692286/salud_2x-8_anq348.webp"
            alt="icono de Sector salud"
          />
          <p>Sector salud</p>
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

export default EnfermeriaIndustriesSection;
