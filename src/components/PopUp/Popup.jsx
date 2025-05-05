"use client";
import { useState } from "react";
import styles from "./Popup.module.scss";

export default function Popup({
  isOpen,
  setIsOpen,
  tabs = [
    { key: "multimedia", label: "Galería", images: [] },
    { key: "medidas", label: "Medidas", images: [] },
  ],
}) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setIsOpen(false)}>
          ✖
        </button>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={activeTab === tab.key ? styles.active : ""}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <div className={styles.content}>
          {activeTabData?.images.length === 1 ? (
            <img
              loading="lazy"
              className={styles.singleImage}
              src={activeTabData.images[0].src}
              alt={activeTabData.images[0].alt || "Imagen"}
            />
          ) : (
            <div className={styles.grid}>
              {activeTabData?.images.map((image, index) => (
                <img
                  key={index}
                  loading="lazy"
                  className={styles.image}
                  src={image.src}
                  alt={image.alt || `Imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
