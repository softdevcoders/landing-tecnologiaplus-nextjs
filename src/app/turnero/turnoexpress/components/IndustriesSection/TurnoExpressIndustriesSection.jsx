import style from "./TurnoExpressIndustriesSection.module.scss";

function TurnoExpressIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>Nuestro Turnero Digital se adapta a Todos los sectores</h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350027/Salud_2x-8_vg4jxo_dyuifd.webp"
            alt="icono de salud"
          />
          <p>Sector salud</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738446073/Sala_de_espera_2x-8_vb2upo.webp"
            alt="icono de sala de espera"
          />
          <p>Sala de espera</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/otras_indistrias_2x-8_bvq8fo_s2xoyg.webp"
            alt="icono de otras industrias"
          />
          <p>Otras industrias</p>
        </li>
      </ul>
    </section>
  );
}

export default TurnoExpressIndustriesSection;
