"use client";

import { useState } from "react";
import styles from "./ProductGallery.module.scss";
import altStyles from "../../../../components/Header/HeaderAlt.module.scss";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import Popup from "@/app/components/PopUp/Popup";
import useDisableRightClick from "../../../../../../hooks/useDisableRightClick";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743562353/Frame_1_10_amnnfc.webp",
  ];

  const alternativeImages = [
    {
      name: "Blanco",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828999/Frame_1_32_tg1wjk.webp",
    },
    {
      name: "Verde",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_31_mxuqgk.webp",
    },
    {
      name: "Rosa",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_33_t0xzlo.webp",
    },
    {
      name: "Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828459/Frame_1_30_rfuvow.webp",
    },
    {
      name: "Azul",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_34_trumlj.webp",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAltIndex, setSelectedAltIndex] = useState(0);
  const [isAlternative, setIsAlternative] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(images.length > 5);

  const handleScrollDown = () => {
    setScrollPosition((prev) => Math.min(prev + 1, images.length - 5));
  };

  const handleScrollUp = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const selectedImage = isAlternative
    ? alternativeImages[selectedAltIndex].url
    : images[selectedIndex];
  const selectedVariantName = isAlternative
    ? alternativeImages[selectedAltIndex].name
    : "Colores";

  const handleNextImage = () => {
    if (isAlternative) {
      setSelectedAltIndex(
        (prevIndex) => (prevIndex + 1) % alternativeImages.length
      );
    } else {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (isAlternative) {
      setSelectedAltIndex((prevIndex) =>
        prevIndex === 0 ? alternativeImages.length - 1 : prevIndex - 1
      );
    } else {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleSelectAlternative = (img, index) => {
    setSelectedAltIndex(index);
    setIsAlternative(true);
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
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => {
                    setIsAlternative(false);
                    setSelectedIndex(scrollPosition + index);
                  }}
                  className={selectedImage === img ? styles.active : ""}
                  style={{ cursor: "pointer" }}
                />
              ))}
            {showScrollButtons && scrollPosition < images.length - 5 && (
              <IoIosArrowDown
                className={styles.scrollDown}
                onClick={handleScrollDown}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}{" "}
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
              {(isAlternative ? alternativeImages : images).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${
                    index === (isAlternative ? selectedAltIndex : selectedIndex)
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() =>
                    isAlternative
                      ? setSelectedAltIndex(index)
                      : setSelectedIndex(index)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>ROLLOS DE TURNOS</h1>
            <p>Varias opciones y colores, numeración clara y corte preciso.</p>
          </div>

          {/* Alternativas */}
          <div className={styles.container__products__alternatives}>
            <h2>Elige color</h2>

            {selectedVariantName && (
              <h3 className={styles.variantName}>{selectedVariantName}</h3>
            )}

            <div className={styles.alternative__images}>
              {alternativeImages.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.alternative__item} ${
                    selectedAltIndex === index && isAlternative
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => handleSelectAlternative(img, index)}
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className={styles.thumbnail}
                  />
                </div>
              ))}
            </div>
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
            Rollos de tickets numerados para uso de Dispensador tipo Caracol,
            elimina las filas y facilita el llamado de turnos de forma ordenada.
            Perfectos para zonas de espera en sector salud y servicios. Producto
            de bajo costo con un alto beneficio.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743562353/Frame_1_10_amnnfc.webp",
                alt: "Imagen de medidas",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743562353/Frame_1_10_amnnfc.webp",
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
