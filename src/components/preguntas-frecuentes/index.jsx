'use client';

import { useState, useRef } from 'react';
import styles from './preguntas-frecuentes.module.scss';

function PreguntasFrecuentes({ preguntasFrecuentes = [] }) {
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
      className={styles.s} 
      aria-label="Preguntas Frecuentes"
    >
      <h2 ref={titleRef} itemProp="name">Preguntas Frecuentes</h2>        
      <div 
        className={styles.faqContainer} 
        data-show={showAllQuestions}
      >
        {preguntasFrecuentes.map((faq, index) => (
          <details
            key={index}
            className={styles.faqItem}
            data-hidden={index >= initialQuestionsCount}
            open={index === openAccordion}
            onToggle={(e) => handleAccordionToggle(index, e.target.open)}
          >
            <summary 
              className={styles.faqQuestion}
              onClick={(e) => {
                e.preventDefault();
                handleAccordionToggle(index, index !== openAccordion);
              }}
            >
              <h3 dangerouslySetInnerHTML={{ __html: faq.question }} />
              <span aria-hidden="true">⌃</span>
            </summary>
            <div 
              className={styles.faqAnswer}
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
          <span aria-hidden="true" className={styles.arrow}>
            ⌃
          </span>
        </button>
      )}
    </section>
  );
}

export default PreguntasFrecuentes; 