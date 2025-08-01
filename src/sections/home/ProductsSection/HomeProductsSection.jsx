import style from "./HomeProductsSection.module.scss";
import { routes } from "@/config/routes";
import LinkCard from "@/components/ui/link";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738350028/TurnoExpress_2x-8_ri7zqh_xjz8bw",
    altText: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
    link: routes.landings.turneroTurnoexpress.url,
  }, 
  {
    title: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738349924/TurnoMaster_2x-8_1_t4wh3f_ooru74",
    altText: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
  }, 
  {
    title: "Localizadores",
    description: "Lleva el autoservicio a otro nivel.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1741708165/NUEVA_etp9mi",
    altText: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
    link: routes.landings.localizadoresParaRestaurantes.url,
  },
  {
    title: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1743107327/NUEVA_4x-8_1_wyooar",
    altText: "Imagen de Llamadores de Meseros - TecnologíaPlus",
    link: routes.landings.llamadoresDeMeseros.url,
  }, 
  {
    title: "Llamado de enfermería",
    description: "Facilita la comunicación paciente - enfermera. ",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738596111/cuidamaster_2x-8_dlawzx",
    altText: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
    link: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
  }, 
  {
    title: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738607994/calificador_de_servicios_2x-8_pjnvol",
    altText: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
  }, 
  {
    title: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738685536/Opinamaster_2x-8_sg1wyy",
    altText: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
    link: routes.landings.encuestaVirtual.url,
  }, 
  {
    title: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738349966/dispensador_de_tiquetes_2x-8_qusuqr_fuxs8k",
    altText: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
    link: routes.landings.dispensadorDeTickets.url,
  }, 
  {
    title: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1745247230/Frame_1_35_vku1gs",
    altText: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
    link: routes.landings.rollosDeFichosParaTurnos.url,
  }, 
  {
    title: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738349920/image-1_1_ljyxis_qdsmdq",
    altText: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
    link: routes.landings.rollosDePapelTermico.url,
  },
  {
    title: "Desarrollo de software",
    description: "Ajustado a tus necesidades.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738945022/11_2x-8_lb72ht",
    altText: "Imagen de Desarrollo de Software - TecnologíaPlus",
  }, 
  {
    title: "Soporte Técnico",
    description: "Maximiza la vida útil y el rendimiento de tu inversión.",
    imageSrc: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_440/v1738945024/12_2x-8_nnlbla",
    altText: "Imagen de Soporte Técnico - TecnologíaPlus",
  }
]

function CardContent({ product }) {
  return (
    <>
      <h3 className={style.productsSection__cardTitle}>{product.title}</h3>
      <p className={style.productsSection__cardDescription}>{product.description}</p>
      <Image
        src={product.imageSrc}
        alt={product.altText}
        width={436}
        height={350}
        className={style.productsSection__cardImage}
        unoptimized={true}
      />
    </>
  )
} 

function HomeProductsSection() {
  return (
    <section className={style.productsSection__container}>
      <h2 className={style.productsSection__tittle}>Productos</h2>
      <div className={style.productsSection__content}>
        {products.map((product, index) => (
          <div key={index} className={style.productsSection__card}>
            {product.link ? (
              <>
                <Link 
                  href={product.link}
                  className={style.productsSection__cardLink}
                  title={`Ver más sobre ${product.title}`}
                  aria-label={`Ver más información sobre ${product.title}: ${product.description}`}
                >
                  <CardContent product={product} />
                </Link>
                <div className={style.productsSection__cardBtn}>
                  <LinkCard className={style.productsSection__cardBtn} href={product.link} size="big">
                    Ver más
                  </LinkCard>
                </div>
              </>
            ) : (
              <div className={style.productsSection__cardContent}>
                <CardContent product={product} />
              </div>

            )}
          </div>
        ))}
      </div>

      <p className={style.productsSection__description}>
        En Tecnología Plus, nos especializamos en la fabricación de productos tecnológicos para la atención al cliente confiables, diseñados para ofrecer soluciones duraderas a nuestros clientes. Nuestra amplia experiencia como fabricantes nos ha permitido desarrollar productos que no solo cumplen con las expectativas, sino que las superan. Cada tecnología que fabricamos está pensada para adaptarse perfectamente a las necesidades de cada cliente, brindando resultados eficientes y consistentes. Nos aseguramos de que nuestros productos sean una inversión segura y confiable, que impulse el éxito de las empresas a largo plazo.
      </p>
    </section>
  );
}

export default HomeProductsSection;
