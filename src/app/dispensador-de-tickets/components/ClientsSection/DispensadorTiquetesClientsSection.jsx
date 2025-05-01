"use client";
import React from "react";
import style from "./DispensadorTiquetesClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider from "../../../components/sliders/InfiniteSlider";
import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function DispensadorTiquetesClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes y pequeños negocios eliminan filas con nuestro dispensador de
        turnos.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider2 
          logos={logosTurnos} 
          speedPreset="slow"
          stopOnFocus={false}
        />
      </div>
    </section>
  );
}

export default DispensadorTiquetesClientsSection;
