import { routes } from "@/config/routes";
import style from "./VideoSection.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";

// Import YouTubePlayer with dynamic import to improve initial load time
const YouTubePlayer = dynamic(
  () => import("../../../../components/YouTubePlayer"),
  {
    ssr: true, // Habilitar SSR para este componente dinámico
    loading: () => <VideoPlaceholder />,
  }
);

// Responsive loading placeholder component
function VideoPlaceholder() {
  return (
    <div className={style.video__placeholder}>
      <span>Cargando video...</span>
    </div>
  );
}

function VideoSection() {
  return (
    <section className={style.video__section}>
      <div className={style.video__container}>
        <YouTubePlayer
          videoId="XGGhLks0iVc"
          title="Llamadores de Meseros - Tecnología Plus"
        />
      </div>

      <div className={style.text__container}>
        <h2 className={style.benefits__title}>SOMOS FABRICANTES</h2>
        <p>
          Reproduce el video y conoce la calidad de nuestros llamadores de
          meseros
        </p>
        <Link
          className={style.card__btn}
          href={routes.landings.llamadoresDeMeseros.url}
        >
          Ver más
        </Link>
      </div>
    </section>
  );
}

export default VideoSection;
