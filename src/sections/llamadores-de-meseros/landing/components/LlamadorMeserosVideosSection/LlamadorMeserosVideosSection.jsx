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

import style from "./LlamadorMeserosVideosSection.module.scss";
import YouTubePlayer from "@/components/YouTubePlayer";

function LlamadorMeserosVideosSection() {
  return (
    <>
      <section className={style.video__section}>
        <div className={style.video__container}>
          <h2 className={style.video__title}>Dale play para verlos funcionar</h2>
          <div
            className={style.video__card__container}
          >
            <div className={style.video__card}>
              <p className={style.video__card__title}>Así de fácil es mejorar la atención en tu restaurante.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="uXfDzZuoym4"
                  title="Así de fácil es mejorar la atención en tu restaurante"
                  imageCover="https://i.ytimg.com/vi_webp/uXfDzZuoym4/maxresdefault.webp"
                />
              </div>

            </div>
            <div className={style.video__card}>
              <p className={style.video__card__title}>Personal más alerta, facilita el llamado de meseros desde la cocina.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="XevVCpp6Drc"
                  title="Personal más alerta, facilita el llamado de meseros desde la cocina"
                  imageCover="https://i.ytimg.com/vi_webp/XevVCpp6Drc/sddefault.webp"
                />
              </div>
            </div>
            <div className={style.video__card}>
              <p className={style.video__card__title}>Un solo toque y el número de mesa aparece en pantalla.</p>
              <div className={style.video__card__player__container}>
                <YouTubePlayer
                  videoId="b2nlu7sOlcI"
                  title="Un solo toque y el número de mesa aparece en pantalla"
                  imageCover="https://i.ytimg.com/vi_webp/9CPZ2QoFyqM/sddefault.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LlamadorMeserosVideosSection;

