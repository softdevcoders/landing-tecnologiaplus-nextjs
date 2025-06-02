// import Link from "next/link";
// import style from "./LlamadorMeserosSecondaryProductsSection.module.scss";
// import YouTubePlayer from "@/components/YouTubePlayer";
// import { routes } from "@/config/routes";
// import ImageCloudinary from "@/components/ui/image-cloudinary";

// function LlamadorMeserosSecondaryProductsSection() {
//   return (
//     <>
//       <section className={`${style.products__section} ${style.bg__section}`}>
//         <div className={style.products__container}>
//           <h2>Opciones para llamar al mesero</h2>
//           <div
//             className={`${style.products__card__container} ${style.products__card__container__variant}`}
//           >
//             <div className={style.card}>
//               <div>
//                 <h3>
//                   Llamador E2-N
//                   <br />
//                   de 3 teclas
//                 </h3>
//                 <Link
//                   className={style.card__btn}
//                   href={routes.landings.llamadoresDeMeseros.children.e2_n.url}
//                 >
//                   Ver más
//                 </Link>
//                 <p>4.987 vendidos</p>
//               </div>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742395037/Boto%CC%81n_3_teclas_4x-8_buaiyg.webp"
//                 alt="Llamador de meseros V2N de 3 teclas"
//               />
//             </div>
//             <div className={style.card}>
//               <div>
//                 <h3>
//                   Llamador E2-B
//                   <br />
//                   de 2 teclas
//                 </h3>
//                 <Link
//                   className={style.card__btn}
//                   href={routes.landings.llamadoresDeMeseros.children.e2_b.url}
//                 >
//                   Ver más
//                 </Link>
//                 <p>4.193 vendidos</p>
//               </div>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694394/2_2x-8_1_yojp4b.webp"
//                 alt="Llamador de meseros V2B"
//               />
//             </div>
//             <div className={style.card}>
//               <div>
//                 <h3>
//                   Hablador
//                   <br />
//                   para mesa
//                 </h3>
//                 <Link
//                   className={style.card__btn}
//                   href={routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url}
//                 >
//                   Ver más
//                 </Link>
//                 <p>2.175 vendidos</p>
//               </div>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694393/3_2x-8_igijiu.webp"
//                 alt="Hablador de mesa"
//               />
//             </div>
//             <div className={style.card}>
//               <div>
//                 <h3>
//                   Control numérico
//                   <br />
//                   para cocina
//                 </h3>
//                 <Link
//                   className={style.card__btn}
//                   href={routes.landings.llamadoresDeMeseros.children.controlNumerico.url}
//                 >
//                   Ver más
//                 </Link>
//                 <p>198 vendidos</p>
//               </div>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/4_2x-8_mioq3p.webp"
//                 alt="Control numérico"
//               />
//             </div>
//           </div>
//           <h2>Opciones para recibir llamados</h2>
//           <div className={style.products__card__container}>
//             <div className={style.card}>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp"
//                 alt=" Reloj de llamado al personal"
//               />
//               <h3>Reloj receptor de llamados</h3>
//               <p>2.276 vendidos</p>
//               <Link
//                 className={style.card__btn}
//                 href={routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url}
//               >
//                 Ver más
//               </Link>
//             </div>
//             <div className={style.card}>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp"
//                 alt="Turnero T1-B"
//               />
//               <h3>
//                 Pantalla T<span>1</span>B de <span>1</span> llamado
//               </h3>
//               <p>886 vendidos</p>
//               <Link
//                 className={style.card__btn}
//                 href={routes.landings.llamadoresDeMeseros.children.t1_b.url}
//               >
//                 Ver más
//               </Link>
//             </div>
//             <div className={style.card}>
//               <ImageCloudinary
//                 width={250}
//                 height={250}
//                 loading="lazy"
//                 src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/6_llamados_2x-8_wppkb6.webp"
//                 alt="Pantalla para turnos de 6 llamados"
//               />
//               <h3>Pantalla T6 de 6 llamados</h3>
//               <p>942 vendidos</p>
//               <Link
//                 className={style.card__btn}
//                 href={routes.landings.llamadoresDeMeseros.children.t6.url}
//               >
//                 Ver más
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={style.products__section}>
//         <div className={style.products__container}>
//           <h2>Dale play para verlos funcionar</h2>
//           <div
//             className={`${style.products__card__container} ${style.video__container}`}
//           >
//             <div className={style.card__video}>
//               <p>Así de fácil es mejorar la atención en tu restaurante.</p>
//               <YouTubePlayer
//                 videoId="uXfDzZuoym4"
//                 title="Así de fácil es mejorar la atención en tu restaurante"
//               />
//             </div>

//             <div className={style.card__video}>
//               <p>
//                 Personal más alerta, facilita el llamado de meseros desde la
//                 cocina.
//               </p>
//               <YouTubePlayer
//                 videoId="XevVCpp6Drc"
//                 imageCover="https://i.ytimg.com/vi_webp/XevVCpp6Drc/sddefault.webp"
//                 title="Personal más alerta, facilita el llamado de meseros desde la cocina"
//               />
//             </div>

//             <div className={style.card__video}>
//               <p>Un solo toque y el número de mesa aparece en pantalla.</p>
//               <YouTubePlayer
//                 videoId="9CPZ2QoFyqM"
//                 title="Un solo toque y el número de mesa aparece en pantalla"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default LlamadorMeserosSecondaryProductsSection;

import { routes } from "@/config/routes";
import style from "./LlamadorMeserosVerMasSection.module.scss";
import Image from "next/image";
import Link from "next/link";

function LlamadorMeserosVerMasSection() {

  const products = [
    {
      title: "Llamador E2-N de 3 teclas",
      description: "4.987 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742395037/Boto%CC%81n_3_teclas_4x-8_buaiyg.webp",
      link: routes.landings.llamadoresDeMeseros.children.e2_n.url,
      type: "llamador_mesero",
    },
    {
      title: "Llamador E2-B de 2 teclas",
      description: "4.193 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694394/2_2x-8_1_yojp4b.webp",
      link: routes.landings.llamadoresDeMeseros.children.e2_b.url,
      type: "llamador_mesero",
    },
    {
      title: "Hablador de mesa",
      description: "2.175 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694393/3_2x-8_igijiu.webp",
      link: routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url,
      type: "llamador_mesero",
    },
    {
      title: "Control numérico para cocina",
      description: "198 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/4_2x-8_mioq3p.webp",
      link: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
      type: "llamador_mesero",
    },
    {
      title: "Reloj receptor de llamados",
      description: "2.276 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738685534/reloj_receptor_digital_2x-8_adfgxj.webp",
      link: routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T1-B de 1 llamado",
      description: "886 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1739197744/Turnero_T1B_2x-8_1_1_opvowd.webp",
      link: routes.landings.llamadoresDeMeseros.children.t1_b.url,
      type: "recibir_llamados",
    },
    {
      title: "Pantalla T6 de 6 llamados",
      description: "942 vendidos",
      image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738694391/6_llamados_2x-8_wppkb6.webp",
      link: routes.landings.llamadoresDeMeseros.children.t6.url,
      type: "recibir_llamados",
    },
  ];

  return (
    <section className={style.ver__mas__section}>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para llamar al mesero
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "llamador_mesero").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className={style.ver__mas__section__container__card__image__img}
                />
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <h3>{product.title}</h3>
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.ver__mas__section__container}>
        <h2 className={style.ver__mas__section__title}>
          Opciones para recibir llamados
        </h2>
        <div className={style.ver__mas__section__container__cards}>
          {products.filter((product) => product.type === "recibir_llamados").map((product, index) => (
            <div key={index} className={style.ver__mas__section__container__card}>
              <div className={style.ver__mas__section__container__card__image}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className={style.ver__mas__section__container__card__image__img}
                />
              </div>
              <div className={style.ver__mas__section__container__card__content}>
                <h3>{product.title}</h3> 
                
                <Link
                  className={style.ver__mas__section__container__card__content__btn}
                  href={product.link}
                >
                  Ver más
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LlamadorMeserosVerMasSection;

