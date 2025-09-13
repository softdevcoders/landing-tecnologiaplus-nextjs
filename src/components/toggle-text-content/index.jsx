"use client";

import style from "./toggle-text-content.module.scss";
import { useState } from "react";
import ArrowDownIcon from "@/components/ui/icons/arrow-down";

function ToggleTextContent({ children, showToggleButtonInDesktop = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.description__section}>
      <div className={`${style.description__section__text} ${isOpen ? style.open : ""}`}>
        {children}
      </div>
      <button
        className={`${style.toggle__label} ${showToggleButtonInDesktop ? style.show__toggle__button__in__desktop : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      > 
        <span>{isOpen ? "Leer menos" : "Leer más"}</span>
        <ArrowDownIcon className={`${style.toggle__icon} ${isOpen ? style.rotate : ""}`} size={16} />
      </button>
    </div>
  );
}

export default ToggleTextContent;