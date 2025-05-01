"use client";
import React from "react";
import style from "./ClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function ClientsSection() {
  const { logosTermicos } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Nuestra calidad en rollos térmicos respalda a grandes empresas.</p>
      <div className={style.clients__container}>
        <InfiniteSlider2
          logos={logosTermicos}
          speedPreset="slow"
          stopOnFocus={false}
        />
      </div>
    </section>
  );
}

export default ClientsSection;
