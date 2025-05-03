"use client";
import React, { useState, useEffect } from "react";
import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";

function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      className={`${style.secondary__header} ${isVisible ? style.visible : ""}`}
    >
      <a
        className={style.inicio__mobile}
        href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/"
      >
        Inicio
      </a>
      <div className={`${style.nav__links} ${menuOpen ? style.showMenu : ""}`}>
        <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/">
          Inicio
        </a>
        {/* Dropdown Productos */}
        <div className={style.dropdown}>
          <a
            href="#"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                toggleDropdown("productos");
              }
            }}
          >
            Productos <IoIosArrowDown className={style.arrow__icon} />
          </a>
          <ul
            className={`${style.dropdownMenu} ${
              dropdownOpen["productos"] ? style.show : ""
            }`}
          >
            <li>
              <a href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/localizadores-para-restaurantes">
                Localizadores autoservicio
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamadores-de-meseros">
                Llamadores de meseros
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/turnoexpress">
                Turnero TurnoExpress
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/sistema-de-turnos/turnomaster">
                Sistema de turnos
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-fichos-para-turnos">
                Rollos para turnos
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico">
                Rollos térmicos
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets">
                Dispensador de tickets
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/cuidamaster">
                Llamado de enfermería
              </a>
            </li>
            <li>
              <a href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicio-al-cliente/opinamaster">
                Calificador de servicio
              </a>
            </li>
            <li>
              <a href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/encuesta-virtual/opinamaster">
                Encuesta virtual
              </a>
            </li>
          </ul>
        </div>
        <a
          className={style.btn__mobile}
          href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/blog"
        >
          Blog
        </a>
        <a
          className={style.btn__mobile}
          href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/contacto"
        >
          Contacto
        </a>
      </div>

      <div className={style.phone__container}>
        <HiPhone />
        <a href="tel:+573164682034">316 468 2034</a>
      </div>

      <div
        className={`${style.menu__icon} ${menuOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default SecondaryHeader;
