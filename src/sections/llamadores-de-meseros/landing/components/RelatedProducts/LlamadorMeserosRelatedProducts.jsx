import RelatedProducts from "@/components/related-products";
import { routes } from "@/config/routes";

function LlamadorMeserosRelatedProducts() {
  const products = [
    {
      name: "Localizadores para restaurantes",
      description: "Lleva el autoservicio a otro nivel.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1741708165/NUEVA_etp9mi.webp",
      sold: "8.527 vendidos",
      link: routes.landings.localizadoresParaRestaurantes.url,
    },
    {
      name: "TurnoExpress",
      description: "Rapidez y agilidad para tus filas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
      sold: "692 vendidos",
      link: routes.landings.turneroTurnoexpress.url,
    },
    {
      name: "CuidaMaster",
      description: "Transforma opiniones en acciones estratégicas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738596111/cuidamaster_2x-8_dlawzx.webp",
      sold: "9.825 vendidos",
      link: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
    },
  ];

  return (
    <RelatedProducts products={products} />
  )
}

export default LlamadorMeserosRelatedProducts;
