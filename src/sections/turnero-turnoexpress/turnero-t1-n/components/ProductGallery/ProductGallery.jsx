"use client";

import { useState } from "react";
import styles from "@/app/ver-mas/styles/ProductGallery.module.scss";
import altStyles from "@/app/components/Header/HeaderAlt.module.scss";
import useDisableRightClick from "../../../../../../hooks/useDisableRightClick";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741621668/Frame_1_30_dndw16.webp",
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

  useDisableRightClick();

  return (
    <section className={styles.hero}>
      <Header
        customStyles={{
          header: altStyles.altHeader,
          phoneBtn: altStyles.altPhoneBtn,
          searchIcon: altStyles.altSearchIcon,
        }}
      />

      <div className={styles.action__nav}>
        <button onClick={() => window.history.back()}>
          <IoIosArrowBack className={styles.icon__back} /> Volver
        </button>
      </div>

      <div className={styles.container__product__gallery}>
        <div className={styles.container__product__selectorImg}>
          {/* Miniaturas */}
          <div className={styles.container__thumbnails}>
            {showScrollButtons && scrollPosition > 0 && (
              <IoIosArrowUp
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
              <IoIosArrowDown
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
            <IoIosArrowBack
              className={styles.icon__prev}
              onClick={handlePrevImage}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img loading="lazy" src={selectedImage} alt="Imagen seleccionada" />
            <IoIosArrowForward
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
              Tunero T<span>1</span>-N
            </h1>
            <p>Turnos organizados en una pantalla que refleja tu marca.</p>
          </div>

          <div className={styles.container__contact__info}>
            <a
              href="https://wa.me/573164682034"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className={styles.icon__wpp} />
            </a>
            <h3>¿Tienes preguntas?</h3>
          </div>

          <p>
            Turnero digital T1N con pantalla personalizable que permite
            proyectar la imagen corporativa mientras se hace el llamado de
            turnos. Uso frecuente en sector salud, gastronomía y oficinas de
            servicio. Este llamador de turnos es inalámbrica y compatible con
            varias opciones de controles, lo cual permite adaptarse a distintas
            formas de gestionar filas.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619121/Frame_1_26_fqmq3t.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619456/Frame_1_28_cygi5b.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619634/Frame_1_29_l8n9ct.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741621668/Frame_1_30_dndw16.webp",
                alt: "Imagen 6",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741621668/Frame_1_30_dndw16.webp",
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
