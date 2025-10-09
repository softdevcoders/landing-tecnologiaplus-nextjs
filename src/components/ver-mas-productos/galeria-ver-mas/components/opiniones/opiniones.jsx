"use client";

import { useState } from "react";
import styles from "./opiniones.module.scss";
import ArrowDownIcon from "@/components/ui/icons/arrow-down";

const Opiniones = ({ opiniones }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // En desktop siempre mostrar todas, en mobile usar la lógica de colapso
  const opinionesVisibles = opiniones; // Siempre pasar todas las opiniones
  const hayMasOpiniones = opiniones.length > 1;

  const handleToggle = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    
    // Si se está colapsando, hacer scroll al top de la sección
    if (!newExpandedState) {
      setTimeout(() => {
        const opinionesElement = document.querySelector('[data-opiniones-section]');
        if (opinionesElement) {
          const elementPosition = opinionesElement.offsetTop;
          const offsetPosition = elementPosition - 150; // 20px más arriba para ver el título
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200); // Pequeño delay para que la transición CSS termine
    }
  };

  return (
    <div className={styles.opiniones} data-opiniones-section>
      <span className={styles.opiniones__title}>Opiniones</span>
      <div className={`${styles.opiniones__content} ${isExpanded ? styles.expanded : ''}`}>
        {opinionesVisibles.map((opinion, index) => {
          const isFirstOpinion = index === 0;
          const shouldCollapse = !isExpanded && isFirstOpinion;
          
          return (
            <div 
              className={`${styles.opinion} ${
                shouldCollapse ? styles.opinion__collapsed : styles.opinion__expanded
              }`} 
              key={index}
            >
              <p className={styles.opinion__text}>{opinion.opinion}</p>
              <span className={styles.opinion__nombre}>{opinion.nombre}</span>
              <span className={styles.opinion__sector}>Sector: {opinion.sector}</span>
            </div>
          );
        })}
      </div>
      {hayMasOpiniones && (
        <button 
          className={styles.opiniones__toggle}
          onClick={handleToggle}
        >
          {isExpanded ? 'Ocultar opiniones' : `Ver más`}
          <ArrowDownIcon className={`${styles.toggle__icon} ${isExpanded ? styles.rotate : ""}`} size={16} />
        </button>
      )}
    </div>
  );
};

export default Opiniones;