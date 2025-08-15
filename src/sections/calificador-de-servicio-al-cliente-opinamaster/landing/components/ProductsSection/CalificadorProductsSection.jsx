import Link from "next/link";
import style from "./CalificadorProductsSection.module.scss";
import { routes } from "@/config/routes";
import ToggleTextContent from "@/components/toggle-text-content";
import Image from "next/image";

const products = [
  {
    id: 1,
    images: {
      mobile: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742992729/6_4x-8_fqosbn",
        width: 1502,
        height: 1670,
      },
      desktop: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741104598/nuevo_4x-8_qbdidq",
        width: 3647,
        height: 2708,
      }
    },
    alt: "Calificador de Servicio",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url,
    sellingCounter: "472 vendidos",
  },
  {
    id: 2,
    images: {
      mobile: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742992730/7_4x-8_nuhjlt",
        width: 1238,
        height: 1869,
      },
      desktop: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738678296/Group_2_fpyzaa",
        width: 633,
        height: 577,
      }
    },
    alt: "Aviso de pared con calificador de servicio al cliente",
    link: routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url,
    sellingCounter: "38 vendidos",
  },
];  

function CalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        {products.map((product) => (
          <div className={style.product__item} key={product.id}>
            <Image
              className={style.image__mobile}
              src={product.images.mobile.url}
              alt={product.alt}
              width={product.images.mobile.width}
              height={product.images.mobile.height}
              sizes="(max-width: 1250px) 100vw, 0vw"
            />
            <Image
              className={style.image__desktop}
              src={product.images.desktop.url}
              alt={product.alt}
              width={product.images.desktop.width}
              height={product.images.desktop.height}
              sizes="(max-width: 1250px) 50vw, 30vw"
            />
            <div className={style.btn__container}>
              <p>{product.sellingCounter}</p> 
              <Link href={product.link}>
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ToggleTextContent>
        <p>
          En Tecnología Plus, entendemos que la satisfacción del cliente es clave
          para el éxito de cualquier negocio. Por eso, hemos desarrollado
          OpinaMaster, un sistema avanzado que permite recopilar opiniones en
          tiempo real y transformar cada experiencia en una oportunidad de mejora.
          Con nuestro Calificador de Servicio, los clientes pueden evaluar su
          atención de forma rápida, permitiéndote recibir alertas automáticas en
          caso de calificaciones negativas, personalizar preguntas según tus
          necesidades y acceder a estadísticas en línea para analizar tendencias y
          tomar decisiones estratégicas. Somos fabricantes, lo que nos permite
          ofrecer soluciones personalizadas, adaptadas a distintos sectores como
          restaurantes, clínicas, hoteles y más.
        </p>
      </ToggleTextContent>
    </section>
  );
}

export default CalificadorProductsSection;
