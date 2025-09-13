import Image from "next/image";
import Link from "next/link";
import { routes } from "@/config/routes";
import style from "./styles.module.scss";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

function LlamadoDeEnfermeriaProductsSecondarySection() {

  const products = [
    {
      title: "Llamador E2 Blanco", 
      description: "4.193 vendidos", 
      image: "v1757698101/sistema_de_timbres_para_habitaciones_e2_blanco",
      alt: "Sistema de timbres para habitaciones hospitalarias con botón de llamado y cancelación E2 Blanco",
      title_attribute: "Sistema de Timbres para Habitaciones E2 Blanco",
      link: routes.landings.llamadoDeEnfermeria.children.llamadorE2NBlanco.url,
      type: "llamador_enfermera",
    },
    {
      title: "Llamador con <br> extensor EX<span>1</span>",
      description: "3.852 vendidos",
      image: "v1757698094/sistema_de_llamado_de_enfermeras_en_colombia_ex1",
      alt: "Sistema de llamado de enfermeras en Colombia con control y extensor EX1",
      title_attribute: "Sistema de Llamado de Enfermeras en Colombia EX1",
      link: routes.landings.llamadoDeEnfermeria.children.llamadorEx1.url,
      type: "llamador_enfermera",
    },
    {
      title: "Llamador E<span>1</span> <br> para colgar en cuello",
      description: "568 vendidos",
      image: "v1757698099/timbre_hospitalario_e1_colgante_cuello",
      alt: "Timbre Hospitalario E1 diseñado para colgar en el cuello de pacientes",
      title_attribute: "Timbre Hospitalario E1 colgante para cuello",
      link: routes.landings.llamadoDeEnfermeria.children.llamadorE1ParaCuello.url,
      type: "llamador_enfermera",
    },
    {
      title: "Pantalla T<span>1</span>B de <span>1</span> llamado",
      description: "886 vendidos",
      image: "v1757698104/pantalla_receptora_t1b_timbre_hospitalario",
      alt: "Pantalla receptora T1B para gestionar timbre hospitalario en habitaciones",
      title_attribute: "Pantalla T1B receptora para timbre hospitalario",
      link: routes.landings.llamadoDeEnfermeria.children.pantallaT1B.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T6 de 6 llamados",
      description: "942 vendidos",
      image: "v1757698102/pantalla_receptora_t6_sistema_de_llamado_de_pacientes",
      alt: "Pantalla receptora T6 para sistema de llamado de pacientes en hospitales",
      title_attribute: "Pantalla T6 receptora para sistema de llamado de pacientes",
      link: routes.landings.llamadoDeEnfermeria.children.pantallaT6.url,
      type: "recibir_llamados",
    },
    {
      title: "Alarma de luz",
      description: "2.649 vendidos",
      image: "v1757698096/alarma_de_luz_llamador_de_enfermeria",
      alt: "Alarma de luz para llamador de enfermería inalámbrico",
      title_attribute: "Alarma de luz para llamador de enfermería",
      link: routes.landings.llamadoDeEnfermeria.children.alarmaDeLuz.url,
      type: "recibir_llamados",
    },
    {
      title: "Reloj receptor de llamados",
      description: "2.276 vendidos",
      image: "v1757698098/reloj_receptor_digital_llamador_enfermeria",
      alt: "Reloj receptor digital para llamados de enfermería en hospitales",
      title_attribute: "Reloj receptor digital de llamador de enfermería",
      link: routes.landings.llamadoDeEnfermeria.children.relojReceptorDeLlamados.url,
      type: "recibir_llamados",
    },
  ];

  return (
    <section data-nosnippet className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para llamar a la enfermera en hospitales y clínicas
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "llamador_enfermera").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Link href={product.link}> 
                  <Image
                    src={getOptimizedImageUrl({ url: product.image, width: 600, quality: 80 })}
                    alt={product.alt}
                    title={product.title_attribute}
                    width={500}
                    height={500}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}> 
                  <h3 dangerouslySetInnerHTML={{ __html: product.title }} />
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
          Opciones para mostrar llamados de pacientes
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
                    width={500}
                    height={500}
                    className={style.ver__mas__section__container__card__image__img}
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <Link href={product.link}> 
                  <h3 dangerouslySetInnerHTML={{ __html: product.title }} /> 
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

export default LlamadoDeEnfermeriaProductsSecondarySection;