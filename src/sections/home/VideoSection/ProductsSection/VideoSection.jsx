import { routes } from "@/config/routes";
import style from "./VideoSection.module.scss";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";

// // Dynamic import for YouTubePlayer with SSR enabled and a loading placeholder
// const YouTubePlayer = dynamic(
//   () => import("@/components/YouTubePlayer"),
//   {
//     ssr: true,
//     loading: () => <VideoPlaceholder />,
//   }
// );

// // Placeholder component for video loading
// const VideoPlaceholder = () => (
//   <div className={style.video__placeholder}>
//     <span>Cargando video...</span>
//   </div>
// );

// const VideoSection = () => (
//   <section className={style.video__section}>
//     <VideoContainer />
//     <TextContainer />
//   </section>
// );

// const VideoContainer = () => (
//   <div className={style.video__container}>
//     <YouTubePlayer
//       videoId="XGGhLks0iVc"
//       title="Llamadores de Meseros - Tecnología Plus"
//     />
//   </div>
// );

// const TextContainer = () => (
//   <div className={style.text__container}>
//     <h2 className={style.benefits__title}>SOMOS FABRICANTES</h2>
//     <p>
//       Reproduce el video y conoce la calidad de nuestros llamadores de meseros
//     </p>
//     <Link
//       className={style.card__btn}
//       href={routes.landings.llamadoresDeMeseros.url}
//     >
//       Ver más
//     </Link>
//   </div>
// );

// export default VideoSection;

const VideoSection = () => {
  return (
    <section className={style.video__section}>
      <div className={style.video__text_container}>
        <h2 className={style.video__title}>SOMOS FABRICANTES</h2>
        <p className={style.video__subtitle}>
          Reproduce el video y conoce la calidad de nuestros llamadores de meseros
        </p>
        <Link
          className={style.video__btn}
          href={routes.landings.llamadoresDeMeseros.url}
        >
          Ver más
        </Link>
      </div>
      <div className={style.video__container}>
        <YouTubePlayer
          videoId="XGGhLks0iVc"
          title="Llamadores de Meseros - Tecnología Plus"
          className={style.video__player}
        />
      </div>
    </section>
  );
};

export default VideoSection;
