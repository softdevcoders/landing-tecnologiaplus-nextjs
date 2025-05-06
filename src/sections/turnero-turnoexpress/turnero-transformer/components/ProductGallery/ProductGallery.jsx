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
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704871/Frame_1_74_a9sxmd.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741705063/Frame_1_76_arw9zm.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742650842/Frame_1_2_gstdv0.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704706/Frame_1_73_q4yt1c.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745435101/Frame_1_37_zb9elr.webp",
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
            <h1>Turnero Transformer</h1>
            <p>Personalizados según la necesidad.</p>
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
            El Turnero transformer se fabrica según la necesidad, permite
            asignar un consecutivo de turnos diferente para cada producto o
            servicio. Puede funcionar en el sector gastronómico para atender
            autoservicio o en oficinas donde tienen una fila para cada tipo de
            servicio. Este tipo de turnero es ideal para negocios que desean
            mejorar el llamado de turnos sin alterar su forma de trabajar.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704871/Frame_1_74_a9sxmd.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741705063/Frame_1_76_arw9zm.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742650842/Frame_1_2_gstdv0.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704706/Frame_1_73_q4yt1c.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745435101/Frame_1_37_zb9elr.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743774378/6_4x-8_2_ytxttp.webp",
                alt: "Imagen 6",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745435101/Frame_1_37_zb9elr.webp",
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
