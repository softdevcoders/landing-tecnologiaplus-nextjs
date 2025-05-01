"use client";
import React from "react";
import style from "./LlamadorMeserosClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";

import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function LlamadorMeserosClientsSection() {
  const { logosLlamadorMeseros } = useLogos();

  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>
        Negocios que agilizan su atención al cliente con nuestro sistema de
        Llamador de Meseros.
      </p>
      <div className={style.clients__container}>
        <InfiniteSlider2 
          logos={logosLlamadorMeseros} 
          speedPreset="slow"
          stopOnFocus={false}
        />
      </div>
    </section>
  );
}

export default LlamadorMeserosClientsSection;
