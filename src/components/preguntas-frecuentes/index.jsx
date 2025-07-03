'use client';
import { useState } from 'react';

import styles from './preguntas-frecuentes.module.scss';
// import Accordion from '@/components/ui/accordion';  

function PreguntasFrecuentes({ preguntasFrecuentes = [] }) {

  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <section className={styles.faq__section}>
      <h2 className={styles.faq__title}>Preguntas Frecuentes</h2>
      <div className={styles.faq__list}>
        {preguntasFrecuentes.map((faq, index) => (
          <div className={styles.accordion} key={index}>
            <button
              className={`${styles.accordion__header} ${index === openAccordion ? styles.open : ''}`}
              onClick={() => {
                setOpenAccordion(openAccordion === index ? null : index);
              }}
            >
              <h3 className={styles.accordion__title}>{faq.question}</h3>
              <span className={styles.accordion__icon}>{openAccordion === index ? '-' : '+'}</span>
            </button>
              <div className={`${styles.accordion__content} ${openAccordion === index ? styles.open : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PreguntasFrecuentes; 