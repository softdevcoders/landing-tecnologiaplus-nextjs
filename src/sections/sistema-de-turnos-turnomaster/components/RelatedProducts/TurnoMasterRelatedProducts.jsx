import RelatedProducts from "@/components/related-products";
import { routes } from "@/config/routes";

function TurnoMasterRelatedProducts() {

  const products = [
    {
      name: "Rollos térmicos",
      description: "Perfectos para tickets, facturas y más.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp",
      sold: "14.485 vendidos",
      link: routes.landings.rollosDePapelTermico.url,
    },
    {
      name: "TurnoExpress",
      description: "Rapidez y agilidad para tus filas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
      sold: "692 vendidos",
      link: routes.landings.turneroTurnoexpress.url,
    },
    {
      name: "Rollos de turnos",
      description: "Organiza y mejora el servicio.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745436638/Frame_1_35_vku1gs_746c0e.webp",
      sold: "8.527 vendidos",
      link: routes.landings.rollosDeFichosParaTurnos.url,
    },
  ];
  return (
    <RelatedProducts products={products} />
  )
}

  export default TurnoMasterRelatedProducts;

