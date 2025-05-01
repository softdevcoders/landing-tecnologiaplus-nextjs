"use client";
import React from "react";
import style from "./TurnosClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function TurnosClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Grandes y pequeñas empresas confían en nuestros fichos de turnos para
        ordenar la atención al cliente.
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

export default TurnosClientsSection;
