import RelatedProducts from "@/components/related-products";
import { routes } from "@/config/routes";

function LocalizadoresRelatedProducts() {
  const products = [
    {
      name: "Rollos de turnos",
      description: "Organiza y mejora el servicio.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1745436638/Frame_1_35_vku1gs_746c0e.webp",
      sold: "8.527 vendidos",
      link: routes.landings.rollosDeFichosParaTurnos.url,
    },
    {
      name: "TurnoExpress",
      description: "Rapidez y agilidad para tus filas.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw.webp",
      sold: "692 vendidos",
      link: routes.landings.turneroTurnoexpress.url,
    },
    {
      name: "TurnoMaster",
      description: "Digitaliza la gestión de turnos.",
      img: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp",
      sold: "194 vendidos",
      link: routes.landings.sistemasDeTurnosTurnomaster.url,
    },
  ];

  return (
    <RelatedProducts products={products} />
  )
}

export default LocalizadoresRelatedProducts;
