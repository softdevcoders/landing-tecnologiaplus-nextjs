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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/2_4x-8_1_qcs5ym.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476842/Frame_1_10_gjnhca.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640914/Frame_1_67_xia2au.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476255/Frame_1_6_ao3mbn.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476562/Frame_1_9_gvix9n.webp",
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
            <h1>
              PANTALLA T<span>1</span>-B
            </h1>
            <p>Muestra 1 llamado en pantalla, hasta 15 en cola.</p>
          </div>

          <div className={styles.container__contact__info}>
            <TinesPreguntasButton styles={styles} />
          </div>

          <p>
            Pantalla para visualizar llamados del timbre hospitalario. Facilita
            la atención al ser visible por varias enfermeras al mismo tiempo.
            Ideal para hospitales y hogares geriátricos en áreas con menos de 15
            pacientes.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740065235/2_4x-8_1_qcs5ym.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741640914/Frame_1_67_xia2au.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476255/Frame_1_6_ao3mbn.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476562/Frame_1_9_gvix9n.webp",
                alt: "Imagen 5",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476562/Frame_1_9_gvix9n.webp",
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
