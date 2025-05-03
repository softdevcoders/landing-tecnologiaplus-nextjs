"use client";

import { useEffect, useState } from "react";
import style from "./VideoSection.module.scss";
import dynamic from "next/dynamic";

// Import YouTubePlayer with dynamic import to improve initial load time
const YouTubePlayer = dynamic(
  () => import("../../../../components/YouTubePlayer"),
  {
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
  // State to track mounting of component
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={style.video__section}>
      <div className={style.video__container}>
        {isMounted && (
          <YouTubePlayer
            videoId="XGGhLks0iVc"
            title="Llamadores de Meseros - Tecnología Plus"
          />
        )}
        {!isMounted && <VideoPlaceholder />}
      </div>

      <div className={style.text__container}>
        <h2 className={style.benefits__title}>SOMOS FABRICANTES</h2>
        <p>
          Reproduce el video y conoce la calidad de nuestros llamadores de
          meseros
        </p>
        <a
          className={style.card__btn}
          href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamadores-de-meseros"
        >
          Ver más
        </a>
      </div>
    </section>
  );
}

export default VideoSection;
