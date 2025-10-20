import { routes } from "@/config/routes";
import style from "./LlamadorMeserosVerMasSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function LlamadorMeserosVerMasSection() {

  const products = [
    {
      title: "Llamador E2-N de 3 teclas",
      description: "4.987 vendidos",
      image: "v1758214317/llamador_de_meseros_e2n_tres_teclas",
      alt: "Llamador de meseros E2-N de tres teclas",
      title_attribute: "Llamador de meseros E2-N",
      link: routes.landings.llamadoresDeMeseros.children.e2_n.url,
      type: "llamador_mesero",
    },
    {
      title: "Llamador E2-B de 2 teclas",
      description: "4.193 vendidos",
      image: "v1760979499/llamador_de_meseros_e2b_dos__teclas",
      alt: "Llamador de meseros E2-B de dos teclas compacto",
      title_attribute: "Llamador de meseros E2-B",
      link: routes.landings.llamadoresDeMeseros.children.e2_b.url,
      type: "llamador_mesero",
    },
    {
      title: "Hablador para mesa",
      description: "2.175 vendidos",
      image: "v1758724542/hablador_para_mesa_timbres_para__restaurantes",
      alt: "Hablador para mesa compatible con timbres para restaurantes",
      title_attribute: "Hablador para mesa timbres para restaurantes",
      link: routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url,
      type: "llamador_mesero",
    },
    {
      title: "Control numérico para cocina",
      description: "198 vendidos",
      image: "v1758214320/control_numerico_timbres_para_mesas_de_restaurantes",
      alt: "Control numérico de cocina para timbres de mesas de restaurantes",
      title_attribute: "Timbres para mesas de restaurantes control numérico",
      link: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
      type: "llamador_mesero",
    },
    {
      title: "Reloj receptor de llamados",
      description: "2.276 vendidos",
      image: "v1758214316/reloj_receptor_timbre_de_mesa",
      alt: "Reloj receptor digital para gestionar timbre de mesa",
      title_attribute: "Timbre de mesa reloj receptor",
      link: routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T<span>1</span>-B de <span>1</span> llamado",
      description: "886 vendidos",
      image: "v1758214566/pantalla_t1b_timbre_restaurante",
      alt: "Pantalla T1-B para gestión de timbre restaurante",
      title_attribute: "Pantalla T1-B timbre restaurante",
      link: routes.landings.llamadoresDeMeseros.children.t1_b.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T6 de 6 llamados",
      description: "942 vendidos",
      image: "v1758214567/pantalla_t6_timbres_para_restaurantes",
      alt: "Pantalla T6 de seis llamados con timbres para restaurantes",
      title_attribute: "Pantalla T6 timbres para restaurantes",
      link: routes.landings.llamadoresDeMeseros.children.t6.url,
      type: "recibir_llamados",
    },
  ];

  return (
    <section data-nosnippet className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones de timbres inalámbricos para llamar al mesero
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "llamador_mesero").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={getOptimizedImageUrl({ url: product.image, width: 600, quality: 80 })}
                    alt={product.alt}
                    title={product.title_attribute}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}>  
                  <h3
                    dangerouslySetInnerHTML={{ __html: product.title }}   
                  />
                </Link>
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para recibir llamados de clientes 
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "recibir_llamados").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}>  
                  <Image
                    src={getOptimizedImageUrl({ url: product.image, width: 600, quality: 80 })}
                    alt={product.alt}
                    title={product.title_attribute}
                    width={250}
                    height={250}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}>  
                  <h3
                    dangerouslySetInnerHTML={{ __html: product.title }}   
                  />
                </Link>
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LlamadorMeserosVerMasSection;

