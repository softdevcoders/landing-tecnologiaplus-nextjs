"use client";
import React from "react";
import style from "./EncuestaVirtualClientsSection.module.scss";
import { useLogos } from "../../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function EncuestaVirtualClientsSection() {
  const { logosCalificador } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Marcas que utilizan la encuesta virtual y mejoran la experiencia de sus
        clientes.
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

export default EncuestaVirtualClientsSection;
