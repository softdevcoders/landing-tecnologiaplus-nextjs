"use client";
import React from "react";
import style from "./HomeClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function HomeClientsSection() {
  const { logosHome } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Empresas que confían en Tecnología Plus para mejorar la atención al
        cliente.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider2 
          logos={logosHome} 
          speedPreset="slow"
          stopOnFocus={false}
        />
      </div>
    </section>
  );
}

export default HomeClientsSection;
