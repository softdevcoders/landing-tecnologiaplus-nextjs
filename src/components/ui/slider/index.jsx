'use client';

import React, { useState, useEffect, useRef } from 'react';
import './slider.module.scss';

const Slider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const sliderRef = useRef(null);

  // Función para actualizar la cantidad de cards a mostrar dependiendo del tamaño de la pantalla
  const updateCardsToShow = () => {
    const sliderWidth = sliderRef.current ? sliderRef.current.clientWidth : 0;

    if (sliderWidth >= 768) {
      setCardsToShow(3); // Mostrar 3 cards en pantallas grandes
    } else if (sliderWidth >= 480) {
      setCardsToShow(2); // Mostrar 2 cards en pantallas medianas
    } else {
      setCardsToShow(1); // Mostrar 1 card en pantallas pequeñas
    }
  };

  // Manejar el cambio de tamaño de la ventana
  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  // Función para mover el slider
  const moveSlide = (step) => {
    const totalSlides = cards.length;
    let newSlide = currentSlide + step;

    if (newSlide < 0) newSlide = totalSlides - 1;
    if (newSlide >= totalSlides) newSlide = 0;

    setCurrentSlide(newSlide);
  };

  // Calcular el desplazamiento del slider
  const sliderOffset = -(currentSlide * (100 / Math.min(cards.length, cardsToShow)));

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef} style={{ transform: `translateX(${sliderOffset}%)` }}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {card}
          </div>
        ))}
      </div>
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  );
};

export default Slider;
