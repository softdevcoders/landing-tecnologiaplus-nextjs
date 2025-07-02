"use client";
import { useState } from 'react';
import styles from './Accordion.module.scss';

function Accordion({ title, children, isOpen: defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordion__header} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={styles.accordion__title}>{title}</h3>
        <span className={styles.accordion__icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`${styles.accordion__content} ${isOpen ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion; 