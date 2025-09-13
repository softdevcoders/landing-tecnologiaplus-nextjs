import style from "./HomeProductsSection.module.scss";
import { routes } from "@/config/routes";
import LinkCard from "@/components/ui/link";
import Image from "next/image";
import Link from "next/link";
import { getOptimizedImageUrl } from "@/lib/imageUtils";

const products = [
  {
    title: "TurnoExpress",
    description: "Rapidez y agilidad para tus filas.",
    imageSrc: "v1757697842/turnero_digital_turnoexpress",
    altText: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
    link: routes.landings.turneroTurnoexpress.url,
  }, 
  {
    title: "TurnoMaster",
    description: "Digitaliza la gestión de turnos.",
    imageSrc: "v1757697841/sistema_de_turnos_turnomaster",
    altText: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
    link: routes.landings.sistemasDeTurnosTurnomaster.url,
  }, 
  {
    title: "Localizadores",
    description: "Lleva el autoservicio a otro nivel.",
    imageSrc: "v1754420152/localizadores_para_restaurantes_za7yhv", 
    altText: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
    link: routes.landings.localizadoresParaRestaurantes.url,
  },
  {
    title: "Llamadores de meseros",
    description: "El botón que eleva la calidad del servicio.",
    imageSrc: "v1754420144/llamadores_de_meseros_hfsfxc",
    altText: "Imagen de Llamadores de Meseros - TecnologíaPlus",
    link: routes.landings.llamadoresDeMeseros.url,
  }, 
  {
    title: "Llamado de enfermería",
    description: "Facilita la comunicación paciente - enfermera. ",
    imageSrc: "v1754420142/llamado_de_enfermeri%CC%81a_cuidamaster_gctjus",
    altText: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
    link: routes.landings.llamadoDeEnfermeria.url,
  }, 
  {
    title: "Calificador de servicios",
    description: "Toma decisiones con la opinión de tus clientes",
    imageSrc: "v1754420542/calificador_de_servicios_opinamaster_gwnjgp",
    altText: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
  }, 
  {
    title: "OpinaMaster",
    description: "Transforma opiniones en acciones estratégicas.",
    imageSrc: "v1757697842/encuesta_virtual_opinamaster",
    altText: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
    link: routes.landings.encuestaVirtual.url,
  }, 
  {
    title: "Dispensador de tiquetes",
    description: "Complemento práctico para tomar el turno.",
    imageSrc: "v1754420143/dispensador_de_tiquetes_turnoexpress_r5nx3b",
    altText: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
    link: routes.landings.dispensadorDeTickets.url,
  }, 
  {
    title: "Rollos de turnos",
    description: "Organiza y mejora el servicio.",
    imageSrc: "v1754420149/rollos_de_fichos_para_turnos_turnoexpress_scqobh",
    altText: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
    link: routes.landings.rollosDeFichosParaTurnos.url,
  }, 
  {
    title: "Rollos térmicos",
    description: "Perfectos para tickets, facturas y más.",
    imageSrc: "v1754420146/rollos_de_papel_termico_jnusbb",
    altText: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
    link: routes.landings.rollosDePapelTermico.url,
  },
  {
    title: "Desarrollo de software",
    description: "Ajustado a tus necesidades.",
    imageSrc: "v1754420729/desarrollo_de_software_yp7see",
    altText: "Imagen de Desarrollo de Software - TecnologíaPlus",
  }, 
  {
    title: "Soporte Técnico",
    description: "Maximiza la vida útil y el rendimiento de tu inversión.",
    imageSrc: "v1756137326/soporte_te%CC%81cnico_v2_fbj9vi",
    altText: "Imagen de Soporte Técnico - TecnologíaPlus",
  }
]

function CardContent({ product }) {
  return (
    <>
      <h3 className={style.productsSection__cardTitle}>{product.title}</h3>
      <p className={style.productsSection__cardDescription}>{product.description}</p>
      <Image
        src={getOptimizedImageUrl({ url: product.imageSrc, width: 600, quality: 80 })}
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
