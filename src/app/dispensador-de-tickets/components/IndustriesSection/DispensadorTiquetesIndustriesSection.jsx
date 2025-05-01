import style from "./DispensadorTiquetesIndustriesSection.module.scss";

function DispensadorTiquetesIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        Nuestros Dispensadores de tunos funcionan en todos los sectores, desde
        el sector salud hasta oficinas y comercios.
      </h2>
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
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349970/Oficinas_2x-8_xzhwcw_jumnnh.webp"
            alt="icono de oficina"
          />
          <p>Oficinas</p>
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

export default DispensadorTiquetesIndustriesSection;
