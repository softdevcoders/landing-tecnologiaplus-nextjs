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

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481332/Frame_1_13_pdmf7w.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481174/Frame_1_12_hhtcp2.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481453/Frame_1_14_dlksjz.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742652616/Frame_1_3_c5bdho.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/1_4x-8_ehyify.webp",
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
    <section className={styles.hero}>


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
            <h1>Pantalla T6</h1>
            <p>Muestra 6 llamados al mismo tiempo.</p>
          </div>

          <div className={styles.container__contact__info}>
            <TinesPreguntasButton styles={styles} />
          </div>

          <p>
            Pantalla alfanumérica compatible con timbre para enfermos, muestra
            los números de habitaciones o el área que requiere la atención.
            Visible para varias enfermeras.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481332/Frame_1_13_pdmf7w.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481174/Frame_1_12_hhtcp2.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481453/Frame_1_14_dlksjz.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742652616/Frame_1_3_c5bdho.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740186399/1_4x-8_ehyify.webp",
                alt: "Imagen 5",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742652616/Frame_1_3_c5bdho.webp",
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
