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

  return (
    <section className={styles.s}>
      <h2 ref={titleRef}>Preguntas Frecuentes</h2>
      <div data-show={showAllQuestions}>
        {preguntasFrecuentes.map((faq, index) => (
          <div 
            key={index}
            data-hidden={index >= initialQuestionsCount}
          >
            <button
              data-open={index === openAccordion}
              onClick={() => {
                setOpenAccordion(openAccordion === index ? null : index);
              }}
            >
              <h3>{faq.question}</h3>
              <span>⌃</span>
            </button>
            <div data-open={index === openAccordion}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      {hasMoreQuestions && (
        <button onClick={handleToggleQuestions}>
          {showAllQuestions ? 'Menos preguntas' : 'Más preguntas'}
        </button>
      )}
    </section>
  );
}

export default PreguntasFrecuentes; 