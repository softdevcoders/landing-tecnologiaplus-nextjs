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
          <div
            className={style.secondary__products__card__container}
          >
            <div className={style.secondary__products__card}>
              <div className={style.secondary__products__card__content}>
                <h3 className={style.secondary__products__card__title}>REC V3</h3>
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
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_800/v1738855044/rec_v3_1_2x-8_ctzrqp.webp"
                  alt="Localizador para restaurantes REC V3 junto a su base de carga"
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
                <h3 className={style.secondary__products__card__title}>CIR C2</h3>
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
                  src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_800/v1738851948/cir_c2_1_2x-8_lb8ufb.webp"
                  alt="Localizadores para clientes CIR C2 junto a su base de carga"
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
              <p className={style.video__card__title}>Rec V3 - Localizadores para restaurantes</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="aB7FLAPCCJ8"
                  title="Rec V3 - Localizadores para restaurantes"
                  imageCover="https://i.ytimg.com/vi_webp/aB7FLAPCCJ8/maxresdefault.webp"
                  unoptimized={true}
                />
              </div>

            </div>

            <div className={style.video__card}>
              <p className={style.video__card__title}>Cir C2 - Localizadores para restaurantes</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="b2nlu7sOlcI"
                  title="Cir C2 - Localizadores para restaurantes"
                  imageCover="https://i.ytimg.com/vi_webp/b2nlu7sOlcI/sddefault.webp"
                  unoptimized={true}
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
