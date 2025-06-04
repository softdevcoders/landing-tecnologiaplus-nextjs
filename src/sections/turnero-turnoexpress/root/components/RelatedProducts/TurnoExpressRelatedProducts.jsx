import RelatedProducts from "@/components/related-products";
import { routes } from "@/config/routes";

function TurnoExpressRelatedProducts() {
  const products = [
    {
      name: "TurnoMaster",
      description: "Digitaliza la gestión de turnos.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp",
      sold: "194 vendidos",
      link: routes.landings.sistemasDeTurnosTurnomaster.url,
    },
    {
      name: "Rollos térmicos",
      description: "Perfectos para tickets, facturas y más.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp",
      sold: "14.485 vendidos",
      link: routes.landings.rollosDePapelTermico.url,
    },
    {
      name: "Localizadores para restaurantes",
      description: "Lleva el autoservicio a otro nivel.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741708165/NUEVA_etp9mi.webp",
      sold: "4.225 vendidos",
      link: routes.landings.localizadoresParaRestaurantes.url,
    },
  ];

  return (
    <RelatedProducts products={products} />
  )
}

export default TurnoExpressRelatedProducts;

