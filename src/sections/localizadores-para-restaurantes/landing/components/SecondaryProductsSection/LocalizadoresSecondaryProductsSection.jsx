import Link from "next/link";
import style from "./LocalizadoresSecondaryProductsSection.module.scss";
import YouTubePlayer from "@/components/YouTubePlayer";
import { routes } from "@/config/routes";
import Image from "next/image";

function LocalizadoresSecondaryProductsSection() {
  return (
    <>
      <section className={style.secondary__products__section} data-nosnippet>
        <div className={style.secondary__products__container}>
          <h2 className={style.secondary__products__title}>Localizadores para restaurantes autoservicio</h2>
          <div
            className={style.secondary__products__card__container}
          >
            <div className={style.secondary__products__card}>
              <div className={style.secondary__products__card__content}>
                <h3 className={style.secondary__products__card__title}>Localizadores <br /> REC V3</h3>
                <Link
                  className={style.secondary__products__card__btn}
                  href={routes.landings.localizadoresParaRestaurantes.children.rec_v3.url}
                >
                  Ver más
                </Link>
                <p className={style.secondary__products__card__text}>2.595 vendidos</p>
              </div>
              <div className={style.secondary__products__card__image__container}>
                <Image
                  width={800}
                  height={595}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_800/v1758563425/localizador_restaurantes_rec_v3_base_carga"
                  alt="Localizador para restaurantes modelo REC V3 con base de carga incluida"
                  title="Localizador REC V3 para restaurantes con base de carga"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className={style.secondary__products__separator__container}>
              <Image
                width={5}
                height={350}
                className={style.secondary__products__separator}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_5/v1738851946/linea_2x-8_n80wv9.webp"
                alt="Separador"
                unoptimized={true}
              />
            </div>
            <div className={style.secondary__products__card}>
              <div className={style.secondary__products__card__content}>
                <h3 className={style.secondary__products__card__title}>Localizadores <br /> CIR C2</h3>
                <Link
                  className={style.secondary__products__card__btn}
                  href={routes.landings.localizadoresParaRestaurantes.children.rec_c2.url}
                >
                  Ver más
                </Link>
                <p className={style.secondary__products__card__text}>1.630 vendidos</p>
              </div>
              <div className={style.secondary__products__card__image__container}>
                <Image
                  width={800}
                  height={595}
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_800/v1758563427/localizador_clientes_cir_c2_base_carga"
                  alt="Localizador para clientes modelo CIR C2 junto a su base de carga"
                  title="Localizador CIR C2 para clientes con base de carga"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
          <p className={style.secondary__products__description}>
            <strong>Localizador de clientes con señal de largo alcance y material resistente a golpes o caídas.</strong>
          </p>
        </div>
      </section>
      <section className={style.video__section} data-nosnippet>
        <div className={style.video__container}>
          <h2 className={style.video__title}>Veamos funcionar nuestros Localizadores para restaurantes</h2>
          <div
            className={style.video__card__container}
          >
            <div className={style.video__card}>
              <h3 className={style.video__card__title}>Rec V3 - Localizadores para restaurantes</h3>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="aB7FLAPCCJ8"
                  title="Rec V3 - Localizadores para restaurantes"
                  imageCover="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758563424/localizador_rec_v3_personalizable_logo_base_carga"
                  imageCoverAlt="Localizador REC V3 en su base de carga con opción de personalizar el logo del restaurante"
                  imageCoverTitle="Localizador REC V3 personalizable con logo en la base de carga"
                />
              </div>

            </div>

            <div className={style.video__card}>
              <h3 className={style.video__card__title}>Cir C2 - Localizadores para restaurantes</h3>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="b2nlu7sOlcI"
                  title="Cir C2 - Localizadores para restaurantes"
                  imageCover="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1758563425/localizadores_redondos_cir_c2_con_control_numerico"
                  imageCoverAlt="Localizadores redondos modelo CIR C2 acompañados de su control numérico"
                  imageCoverTitle="Localizadores redondos CIR C2 junto al control numérico"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocalizadoresSecondaryProductsSection;
