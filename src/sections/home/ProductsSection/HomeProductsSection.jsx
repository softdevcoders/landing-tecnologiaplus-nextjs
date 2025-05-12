import style from "./HomeProductsSection.module.scss";
import { routes } from "@/config/routes";
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "@/components/ui/link";

const products = [
  {
    title: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    imageSrc: "v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
    altText: "imagen de TurnoExpress",
    link: routes.landings.turneroTurnoexpress.url,
  }, 
  {
    title: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    imageSrc: "v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74.webp",
    altText: "imagen de TurnoMaster",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
  }, 
  {
    title: "Localizadores",
    description: "Lleva el autoservicio a otro nivel.",
    imageSrc: "v1741708165/NUEVA_etp9mi.webp",
    altText: "imagen de Localizadores",
    link: routes.landings.localizadoresParaRestaurantes.url,
  },
  {
    title: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    imageSrc: "v1743107327/NUEVA_4x-8_1_wyooar.webp",
    altText: "imagen de Llamadores de meseros",
    link: routes.landings.llamadoresDeMeseros.url,
  }, 
  {
    title: "Llamado de enfermería",
    description: "Facilita la comunicación paciente - enfermera. ",
    imageSrc: "v1738596111/cuidamaster_2x-8_dlawzx.webp",
    altText: "imagen de Llamado de enfermería",
    link: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
  }, 
  {
    title: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    imageSrc: "v1738607994/calificador_de_servicios_2x-8_pjnvol.webp",
    altText: "imagen de Calificador de servicios",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
  }, 
  {
    title: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    imageSrc: "v1738685536/Opinamaster_2x-8_sg1wyy.webp",
    altText: "imagen de OpinaMaster",
  }, 
  {
    title: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    imageSrc: "v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp",
    altText: "imagen de Dispensador de tiquetes",
    link: routes.landings.dispensadorDeTickets.url,
  }, 
  {
    title: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    imageSrc: "v1745247230/Frame_1_35_vku1gs.webp",
    altText: "imagen de Rollos de turnos",
    link: routes.landings.rollosDeFichosParaTurnos.url,
  }, 
  {
    title: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    imageSrc: "v1738349920/image-1_1_ljyxis_qdsmdq.webp",
    altText: "imagen de Rollos térmicos",
    link: routes.landings.rollosDePapelTermico.url,
  },
  {
    title: "Desarrollo de software",
    description: "Ajustado a tus necesidades.",
    imageSrc: "v1738945022/11_2x-8_lb72ht.webp",
    altText: "imagen de Desarrollo de software",
  }, 
  {
    title: "Soporte Técnico",
    description: "Maximiza la vida útil y el rendimiento de tu inversión.",
    imageSrc: "v1738945024/12_2x-8_nnlbla.webp",
    altText: "imagen de Soporte Técnico",
  }
]

function HomeProductsSection() {
  return (
    <section className={style.productsSection__container}>
      <h2 className={style.productsSection__tittle}>Productos</h2>
      <div className={style.productsSection__content}>
        {products.map((product, index) => (
          <div key={index} className={style.productsSection__card}>
            <h3 className={style.productsSection__cardTitle}>{product.title}</h3>
            <p className={style.productsSection__cardDescription}>{product.description}</p>
            <ResponsiveImage 
              image={{
                src: product.imageSrc,
                alt: product.altText,
                sizes: [
                  { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
                  { imageWidth: 500, mediaQuery: "(min-width: 700px)" }, 
                ],
              }}
              src={product.imageSrc}
              alt={product.altText}
              className={style.productsSection__cardImage}
            />
            {product.link && (
              <div className={style.productsSection__cardBtn}>
                <Link className={style.productsSection__cardBtn} href={product.link} size="big">
                  Ver más
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className={style.productsSection__description}>
        En Tecnología Plus, somos fabricantes especializados en rollos térmicos de alta calidad, diseñados para satisfacer las necesidades de impresión de todo tipo de negocios. Nuestros productos destacan por su precisión, durabilidad y compatibilidad con las principales impresoras del mercado. Nos comprometemos a brindar soluciones confiables que optimicen tus procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología Plus y experimenta la diferencia que solo los expertos pueden ofrecer. ¡Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en impresión térmica!
      </p>
    </section>
  );
}

export default HomeProductsSection;
