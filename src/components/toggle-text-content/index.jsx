"use client";

import style from "./toggle-text-content.module.scss";
import { useState } from "react";

function ToggleTextContent({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.description__section}>
      <p className={`${style.description__section__text} ${isOpen ? style.open : ""}`}>
        {children}
      </p>
      <button
        className={style.toggle__label}
        onClick={() => setIsOpen(!isOpen)}
      > 
        {isOpen ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}

export default ToggleTextContent;