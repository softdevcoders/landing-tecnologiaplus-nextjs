import style from "./TurnoMasterProductsSection.module.scss";
import ServerFirstImage from "../../../../components/ServerFirstImage/ServerFirstImage";

function TurnoMasterProductsSection() {
  return (
    <section className={style.products__section}>
      <h2>Dos formas de solicitar el turno</h2>
      <a
        className={style.card__btn}
        href="https://wa.me/573164682034"
        target="_blank"
        rel="noreferrer"
      >
        ¡Quiero más información!
      </a>
      <div className={style.products__container}>
        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860442/turno_en_casa_2x-8_szazfa.webp"
          alt="Solicitar turno desde casa"
          className={style.img__desktop}
          width={620}
          height={300}
        />
        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994791/8_4x-8_xto11r.webp"
          alt="Solicitar turno desde casa"
          className={style.img__mobile}
          width={375}
          height={400}
        />
        <a
          className={style.card__btn__mobile}
          href="https://wa.me/573164682034"
          target="_blank"
          rel="noreferrer"
        >
          ¡Quiero más información!
        </a>

        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742994790/9_4x-8_zejb3t.webp"
          alt="Solicitar turno de manera presencial"
          className={style.img__mobile}
          width={450}
          height={400}
          objectFit={"cover"}
          style={{ marginTop: "2rem" }}
        />

        <ServerFirstImage
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860441/pedestal_2x-8_eurzvd.webp"
          alt="Solicitar turno de manera presencial"
          className={style.img__desktop}
          width={650}
          height={300}
        />
      </div>
    </section>
  );
}

export default TurnoMasterProductsSection;
