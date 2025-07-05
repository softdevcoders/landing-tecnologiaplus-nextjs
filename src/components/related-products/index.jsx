import { routes } from "@/config/routes";
import { categories } from "@/config/categories";
import RelatedProductsCarousel from './related-products-client';
import ProductSpecs from './product-specs';
import style from './related-products.module.scss';

const defaultProducts = [
  {
    name: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1745436638/Frame_1_35_vku1gs_746c0e.webp",
    sold: "8.527 vendidos",
    link: routes.landings.rollosDeFichosParaTurnos.url,
    category_key: categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
  },
  {
    name: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349920/image-1_1_ljyxis_qdsmdq.webp",
    sold: "14.485 vendidos",
    link: routes.landings.rollosDePapelTermico.url,
    category_key: categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
  },
  {
    name: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
    sold: "692 vendidos",
    link: routes.landings.turneroTurnoexpress.url,
    category_key: categories.TURNERO_TURNOEXPRESS.category_key,
  },
  {
    name: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp",
    sold: "194 vendidos",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
    category_key: categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
    customClass: style.turnomaster__img__custom,
  },
  {
    name: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k.webp",
    sold: "2.686 vendidos",
    link: routes.landings.dispensadorDeTickets.url,
    category_key: categories.DISPENSADOR_DE_TICKETS.category_key,
  },
  {
    name: "Localizadores para restaurantes",
    description: "Lleva el autoservicio a otro nivel.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1741708165/NUEVA_etp9mi.webp",
    sold: "4.225 vendidos",
    link: routes.landings.localizadoresParaRestaurantes.url,
    category_key: categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
  },
  {
    name: "CuidaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738596111/cuidamaster_2x-8_dlawzx.webp",
    sold: "9.825 vendidos",
    link: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
    category_key: categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
  },
  {
    name: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738685536/Opinamaster_2x-8_sg1wyy.webp",
    sold: "18 vendidos",
    link: routes.landings.encuestaVirtual.url,
    category_key: categories.ENCUESTA_VIRTUAL_OPINAMASTER.category_key,
  },
  {
    name: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738607994/calificador_de_servicios_2x-8_pjnvol.webp",
    sold: "490 vendidos",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
    category_key: categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
  },
  {
    name: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1743107327/NUEVA_4x-8_1_wyooar.webp",
    sold: "8.426 vendidos",
    link: routes.landings.llamadoresDeMeseros.url,
    category_key: categories.LLAMADORES_DE_MESEROS.category_key,
    customClass: style.llamadores__img__custom,
  },
];

export default function RelatedProducts({ productsKeys = [], isVerMasView = false }) {
  const filteredProducts = productsKeys.map((key) => 
    defaultProducts.find((product) => product.category_key === key)
  );

  return (
    <section className={style.related__products}>
      <h2 data-is-ver-mas={isVerMasView}>
        Productos similares
      </h2>
      <RelatedProductsCarousel products={filteredProducts} />
      <ProductSpecs />
    </section>
  );
}