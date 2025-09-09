'use client';

import { useState, useRef } from 'react';
import styles from './preguntas-frecuentes.module.scss';
import ArrowUp from "@/components/ui/icons/arrow-up";

function PreguntasFrecuentes({ 
  preguntasFrecuentes = [], 
  title = "Preguntas frecuentes",
  headingLevel = "h2"
}) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const titleRef = useRef(null);

  const initialQuestionsCount = 5;
  const hasMoreQuestions = preguntasFrecuentes.length > initialQuestionsCount;

  const handleToggleQuestions = () => {
    setShowAllQuestions(!showAllQuestions);
    if (showAllQuestions) {
      const yOffset = -100;
      const element = titleRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
        duration: 2000
      });
    }
  };

  const handleAccordionToggle = (index, isOpen) => {
    setOpenAccordion(isOpen ? index : (openAccordion === index ? null : openAccordion));
  };

  return (
    <section 
      data-nosnippet
      className={styles.container} 
      aria-label="Preguntas Frecuentes"
    >
      {headingLevel === "h2" && (
        <h2 ref={titleRef} className={styles.title}>{title}</h2>         
      )}
      {headingLevel === "h3" && (
        <h3 ref={titleRef} className={styles.title}>{title}</h3>         
      )}
      <div 
        className={styles.faq__container} 
        data-show={showAllQuestions}
      >
        {preguntasFrecuentes.map((faq, index) => (
          <details
            key={index}
            className={styles.faq__item}
            data-hidden={index >= initialQuestionsCount}
            open={index === openAccordion}
            onToggle={(e) => handleAccordionToggle(index, e.target.open)}
          >
            <summary 
              className={styles.faq__question}
              onClick={(e) => {
                e.preventDefault();
                handleAccordionToggle(index, index !== openAccordion);
              }}
            >
              {headingLevel === "h2" && (
                <h3 className={styles.faq__question__title} dangerouslySetInnerHTML={{ __html: faq.question }} /> 
              )}
              {headingLevel === "h3" && (
                <h4 className={styles.faq__question__title} dangerouslySetInnerHTML={{ __html: faq.question }} /> 
              )}
              <ArrowUp aria-hidden="true" size={16} />
            </summary>
            <div 
              className={styles.faq__answer}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </details>
        ))}
      </div>
      
      {hasMoreQuestions && (
        <button 
          onClick={handleToggleQuestions}
          className={styles.toggleButton}
          aria-expanded={showAllQuestions}
          aria-controls="faq-container"
        >
          <span>
            {showAllQuestions ? 'Menos preguntas' : 'Más preguntas'}
          </span>
          <ArrowUp className={styles.arrow} size={16} />
        </button>
      )}
    </section>
  );
}

export default PreguntasFrecuentes; 