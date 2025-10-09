"use client";

import style from "./toggle-text-content.module.scss";
import { useState } from "react";
import ArrowDownIcon from "@/components/ui/icons/arrow-down";

function ToggleTextContent({ children, showToggleButtonInDesktop = false, addWhiteSpace = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    
    // Si se está colapsando, hacer scroll al top de la sección
    if (!newOpenState) {
      setTimeout(() => {
        const toggleElement = document.querySelector('[data-toggle-text-section]');
        if (toggleElement) {
          const elementPosition = toggleElement.offsetTop;
          const offsetPosition = elementPosition - 150; // 150px más arriba para ver el título
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 200); // Pequeño delay para que la transición CSS termine
    }
  };

  return (
    <div 
      className={`${style.description__section} ${addWhiteSpace ? "" : style['description__section__text--no-white-space']}`}
      data-toggle-text-section
    >
      <div className={`${style.description__section__text} ${isOpen ? style.open : ""}`}>
        {children}
      </div>
      <button
        className={`${style.toggle__label} ${showToggleButtonInDesktop ? style.show__toggle__button__in__desktop : ""}`}
        onClick={handleToggle}
      > 
        <span>{isOpen ? "Leer menos" : "Leer más"}</span>
        <ArrowDownIcon className={`${style.toggle__icon} ${isOpen ? style.rotate : ""}`} size={16} />
      </button>
    </div>
  );
}

export default ToggleTextContent;