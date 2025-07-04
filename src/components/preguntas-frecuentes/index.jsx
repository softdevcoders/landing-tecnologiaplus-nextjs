'use client';

import { useState } from 'react';
import styles from './preguntas-frecuentes.module.scss';

function PreguntasFrecuentes({ preguntasFrecuentes = [] }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const initialQuestionsCount = 5;
  const hasMoreQuestions = preguntasFrecuentes.length > initialQuestionsCount;

  return (
    <section className={styles.s}>
      <h2>Preguntas Frecuentes</h2>
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
              <span>{openAccordion === index ? '-' : '+'}</span>
            </button>
            <div data-open={index === openAccordion}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      {hasMoreQuestions && (
        <button onClick={() => setShowAllQuestions(!showAllQuestions)}>
          {showAllQuestions ? 'Ver menos preguntas' : `Ver ${preguntasFrecuentes.length - initialQuestionsCount} preguntas más`}
        </button>
      )}
    </section>
  );
}

export default PreguntasFrecuentes; 