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
  const [isVideoSelected, setIsVideoSelected] = useState(false);
  const videoData = {
    thumbnail:
      "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743115272/Frame_1_11_v59cqa.webp",
    videoUrl:
      "https://res.cloudinary.com/ddqh0mkx9/video/upload/v1750185556/website-v2/images/landings/llamadores-de-meseros/ver-mas/llamadores-de-meseros/llamador-de-meseros-e2-b/videos/zm7deogzrlnnfj6hznbv.mp4",
  };

  const images = [
    videoData.thumbnail, // Miniatura del video
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/20_4x-8_onyawh.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/19_4x-8_jxofor.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/21_4x-8_1_zysjdc.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/17_4x-8_1_bykczq.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632153/Frame_1_41_whqmii.webp",
    "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743026399/16_4x-8_h030co.webp",
  ];

  const alternativeImages = [
    {
      name: "Blanco - Rojo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420351/6_4x-8_kmcnhe.webp",
    },
    {
      name: "Blanco - Negro",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420352/5_4x-8_v44nuq.webp",
    },
    {
      name: "Blanco - Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420351/7_4x-8_dfcqqq.webp",
    },
    {
      name: "Negro",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741631974/Frame_2_1_fzhnq5.webp",
    },
    {
      name: "Negro - Rojo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420369/3_4x-8_xhyiqi.webp",
    },
    {
      name: "Negro - Amarillo",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740420353/2_4x-8_iyjgk9.webp",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAltIndex, setSelectedAltIndex] = useState(0);
  const [isAlternative, setIsAlternative] = useState(true);

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
    : "Opciones";

  const handleNextImage = () => {
    if (isAlternative) {
      setSelectedAltIndex(
        (prevIndex) => (prevIndex + 1) % alternativeImages.length
      );
    } else {
      const newIndex = (selectedIndex + 1) % images.length;
      setSelectedIndex(newIndex);
      setIsVideoSelected(images[newIndex] === videoData.thumbnail); // Verificar si el nuevo index es el video
    }
  };

  const handlePrevImage = () => {
    if (isAlternative) {
      setSelectedAltIndex((prevIndex) =>
        prevIndex === 0 ? alternativeImages.length - 1 : prevIndex - 1
      );
    } else {
      const newIndex =
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
      setSelectedIndex(newIndex);
      setIsVideoSelected(images[newIndex] === videoData.thumbnail); // Verificar si el nuevo index es el video
    }
  };

  const handlePaginationClick = (index) => {
    if (isAlternative) {
      setSelectedAltIndex(index);
    } else {
      setSelectedIndex(index);
    }
  };

  const handleSelectAlternative = (img, index) => {
    setIsAlternative(true);
    setSelectedAltIndex(index);
    setIsVideoSelected(false); // Asegurar que el video se deseleccione
  };

  const handleSelectImage = (index) => {
    setIsAlternative(false);
    setSelectedIndex(index);
    setIsVideoSelected(images[index] === videoData.thumbnail); // Si es el video, lo seleccionamos
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
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleSelectImage(scrollPosition + index)}
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
            )}{" "}
            <button
              onClick={() => setIsOpen(true)}
              className={styles.btn__multimedia}
            >
              Galería
            </button>
          </div>

          {/* Imagen Principal */}
          <div
            className={`${styles.container__product__selected} ${
              isVideoSelected ? styles.videoBackground : ""
            }`}
          >
            <ArrowBack
              className={styles.icon__prev}
              onClick={handlePrevImage}
              onMouseDown={(e) => e.preventDefault()}
            />
            {isVideoSelected ? (
              <video controls autoPlay className={styles.videoPlayer}>
                <source src={videoData.videoUrl} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            ) : (
              <img
                loading="lazy"
                src={selectedImage}
                alt="Imagen seleccionada"
              />
            )}
            <ArrowForward
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
                  onClick={() => handlePaginationClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className={styles.container__info__products}>
          <div className={styles.container__titles}>
            <h1>LLAMADOR DE MESEROS E2-B</h1>
            <p>Permite llamar al mesero y borrar el llamado al ser atendido.</p>
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
              <div className={styles.info__colors}>
                Se puede
                <br />
                personalizar
                <br />
                eI color
              </div>
            </div>
          </div>

          <div className={styles.container__contact__info}>
            <TinesPreguntasButton styles={styles} />
          </div>

          <p>
            Llamado de meseros con diseño ergonómico y alta resistencia para
            mejorar la atención en el sector gastronómico, ideal para
            restaurantes, bares y clubes. Solución práctica que agiliza la
            atención y brinda mayor comodidad a los clientes.
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
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/20_4x-8_onyawh.webp",
                alt: "Imagen 1",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/19_4x-8_jxofor.webp",
                alt: "Imagen 2",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/21_4x-8_1_zysjdc.webp",
                alt: "Imagen 3",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/17_4x-8_1_bykczq.webp",
                alt: "Imagen 4",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632153/Frame_1_41_whqmii.webp",
                alt: "Imagen 5",
              },
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743026399/16_4x-8_h030co.webp",
                alt: "Imagen 6",
              },
            ],
          },
          {
            key: "medidas",
            label: "Medidas",
            images: [
              {
                src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632153/Frame_1_41_whqmii.webp",
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
