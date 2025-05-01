"use client";
import React from "react";
import style from "./CalificadorClientsSection.module.scss";
import { useLogos } from "../../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function CalificadorClientsSection() {
  const { logosCalificador } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Empresas que toman decisiones con el calificador de servicio al cliente
        de OpinaMaster
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider2
          logos={logosCalificador}
          speedPreset="slow"
          stopOnFocus={false}
        />
      </div>
    </section>
  );
}

export default CalificadorClientsSection;
