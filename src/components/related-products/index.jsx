import { routes } from "@/config/routes";
import { categories } from "@/config/categories";
import RelatedProductsCarousel from './related-products-client';
import ProductSpecs from './product-specs';
import style from './related-products.module.scss';

const defaultProducts = [
  {
    name: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    img: "v1754420149/rollos_de_fichos_para_turnos_turnoexpress_scqobh",
    altText: "Imagen de Rollos de Turnos TurnoExpress - Tecnología Plus",
    sold: "8.527 vendidos",
    link: routes.landings.rollosDeFichosParaTurnos.url,
    category_key: categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
  },
  {
    name: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    img: "v1754420146/rollos_de_papel_termico_jnusbb",
    altText: "Imagen de Rollos de Papel Térmico - Tecnología Plus",
    sold: "14.485 vendidos",
    link: routes.landings.rollosDePapelTermico.url,
    category_key: categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
  },
  {
    name: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    img: "v1757697842/turnero_digital_turnoexpress",
    altText: "Turnero Digiturno Digital TurnoExpress de Tecnología Plus",
    title_attribute: "Turnero digiturno TurnoExpress",
    sold: "692 vendidos",
    link: routes.landings.turneroTurnoexpress.url,
    category_key: categories.TURNERO_TURNOEXPRESS.category_key,
  },
  {
    name: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    img: "v1757697841/sistema_de_turnos_turnomaster",
    altText: "Sistema de Turnos de Espera TurnoMaster de Tecnología Plus",
    title_attribute: "Sistema de turnos TurnoMaster",
    sold: "194 vendidos",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
    category_key: categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
  },
  {
    name: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    img: "v1754420143/dispensador_de_tiquetes_turnoexpress_r5nx3b",
    altText: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    sold: "2.686 vendidos",
    link: routes.landings.dispensadorDeTickets.url,
    category_key: categories.DISPENSADOR_DE_TICKETS.category_key,
  },
  {
    name: "Localizadores para restaurantes",
    description: "Lleva el autoservicio a otro nivel.",
    img: "v1758214645/localizadores_restaurantes_tecnologia_plus",
    altText: "Imagen de Localizadores para Restaurantes de Tecnología Plus",
    title_attribute: "Localizadores para Restaurantes",
    sold: "4.225 vendidos",
    link: routes.landings.localizadoresParaRestaurantes.url,
    category_key: categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
  },
  {
    name: "CuidaMaster",
    description: "Facilita la comunicación paciente - enfermera.",
    img: "v1758214644/llamado_enfermeria_cuidamaster_tecnologia_plus",
    altText: "Imagen de Llamado de Enfermería Cuidamaster de Tecnología Plus",
    title_attribute: "Llamado de Enfermería Cuidamaster",
    sold: "9.825 vendidos",
    link: routes.landings.llamadoDeEnfermeria.url,
    category_key: categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
  },
  {
    name: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    img: "v1757697842/encuesta_virtual_opinamaster",
    altText: "Encuesta Virtual OpinaMaster para calificación de servicio a cliente en Tecnología Plus",
    title_attribute: "Encuesta virtual OpinaMaster",
    sold: "18 vendidos",
    link: routes.landings.encuestaVirtual.url,
    category_key: categories.ENCUESTA_VIRTUAL_OPINAMASTER.category_key,
  },
  {
    name: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    img: "v1754420542/calificador_de_servicios_opinamaster_gwnjgp",
    altText: "Imagen de Calificador de Servicio OpinaMaster - Tecnología Plus",
    sold: "490 vendidos",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
    category_key: categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
  },
  {
    name: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    img: "v1754420144/llamadores_de_meseros_hfsfxc",
    altText: "Imagen de Llamador de meseros - Tecnología Plus",
    sold: "8.426 vendidos",
    link: routes.landings.llamadoresDeMeseros.url,
    category_key: categories.LLAMADORES_DE_MESEROS.category_key,
  },
];

export default function RelatedProducts({ 
  productsKeys = [], isVerMasView = false, addMarginBottom = true, isVerMasVersionNueva = false,
  title = "Productos similares",
}) {
  const filteredProducts = productsKeys.map((key) => 
    defaultProducts.find((product) => product.category_key === key)
  );

  return (
    <section data-nosnippet className={`${style.related__products} ${addMarginBottom ? style.addMarginBottom : ''}`}>
      <h2 className={style.related__products__title} data-is-ver-mas={isVerMasView}>{title}</h2>
      <RelatedProductsCarousel
        isVerMasVersionNueva={isVerMasVersionNueva}
        products={filteredProducts} 
      />
      <ProductSpecs />
    </section>
  );
}