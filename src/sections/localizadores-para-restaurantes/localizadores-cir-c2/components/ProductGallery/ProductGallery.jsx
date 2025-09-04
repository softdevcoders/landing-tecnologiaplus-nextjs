"use client";

import { useState } from "react";
import styles from "@/styles/ProductGallery.module.scss"; 

import {
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ArrowUp
} from "@/components/ui/icons";
import TinesPreguntasButton from "@/components/tines-preguntas-button";
import Popup from "@/components/ui/pop-up";
import BackButton from "@/components/back-button";
import Link from "next/link";
import { routes } from "@/config/routes";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750866698/localizadores_cir_c2_25_06_2024_sk4gqn.jpg",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(images.length > 5);

  const handleScrollDown = () => {
    setScrollPosition((prev) => Math.min(prev + 1, images.length - 5));
  };

  const handleScrollUp = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  return (
    <section className={styles.hero} data-nosnippet>
      <div className={styles.action__nav}>
        <BackButton /> 
      </div>

      <div className={styles.container__product__gallery}>
        <div className={styles.container__product__selectorImg}>
          {/* Miniaturas */}
          <div className={styles.container__thumbnails}>
            {showScrollButtons && scrollPosition > 0 && (
              <ArrowUp
                className={styles.scrollUp}
                onClick={handleScrollUp}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            {images
              .slice(scrollPosition, scrollPosition + 5)
              .map((img, index) => (
                <img
                  key={scrollPosition + index} // Usamos un índice único para evitar problemas de key
                  src={img}
                  alt={`Thumbnail ${scrollPosition + index + 1}`}
                  onClick={() => {
                    setSelectedIndex(scrollPosition + index);
                  }}
                  className={
                    selectedIndex === scrollPosition + index
                      ? styles.active
                      : ""
                  }
                  style={{ cursor: "pointer" }}
                />
              ))}
            {showScrollButtons && scrollPosition < images.length - 5 && (
              <ArrowDown
                className={styles.scrollDown}
                onClick={handleScrollDown}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            <button
              onClick={() => setIsOpen(true)}
              className={styles.btn__multimedia}
            >
              Galería
            </button>
          </div>

          {/* Imagen Principal */}
          <div className={styles.container__product__selected}>
            <ArrowBack
              className={styles.icon__prev}
              onClick={handlePrevImage}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />
            <ArrowForward
              className={styles.icon__next}
              onClick={handleNextImage}
              onMouseDown={(e) => e.preventDefault()}
            />

            <div className={styles.pagination}>
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${
                    selectedIndex === index ? styles.activeDot : ""
                  }`}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>Localizadores para restaurantes CIR-C2</h1>
            <p>Ideal para autoservicio, sin temor de perder el turno.</p>
          </div>

          <div className={styles.container__contact__info}>
            <TinesPreguntasButton styles={styles} />
          </div>

          <p>
            Los Localizadores para restaurantes Cir C2 mantienen las ventajas
            del modelo <Link href={routes.landings.localizadoresParaRestaurantes.children.rec_v3.url} className={styles.related__link_to_other_product}>Rec V3</Link> y además funciona con un control separado de los
            localizadores. Ideal para locales de comida que entregan el
            localizador en un punto distinto al de llamado.
          </p>
        </div>
      </div>

      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tabs={[
          {
            key: "multimedia",
            label: "Galería",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750866698/localizadores_cir_c2_25_06_2024_sk4gqn.jpg",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741566057/Frame_1_24_n6ekz0.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/8_4x-8_4_okujsy.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741011138/11_4x-8_5_yhlqcs.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
                alt: "Imagen 5",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741565927/Frame_1_23_gv9w1g.webp",
                alt: "Imagen de medidas",
              },
            ],
          },
        ]}
      />
    </section>
  );
}

export default ProductGallery;
