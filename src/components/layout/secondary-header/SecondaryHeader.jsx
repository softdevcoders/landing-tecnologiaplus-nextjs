"use client";
import React, { useState, useEffect } from "react";
import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";
import { routes } from "@/config/routes";

const productLinks = [
  { href: routes.landings.localizadoresParaRestaurantes.url, text: routes.landings.localizadoresParaRestaurantes.label },
  { href: routes.landings.llamadoresDeMeseros.url, text: routes.landings.llamadoresDeMeseros.label },
  { href: routes.landings.turneroTurnoexpress.url, text: routes.landings.turneroTurnoexpress.label },
  { href: routes.landings.sistemasDeTurnosTurnomaster.url, text: routes.landings.sistemasDeTurnosTurnomaster.label },
  { href: routes.landings.rollosDeFichosParaTurnos.url, text: routes.landings.rollosDeFichosParaTurnos.label },
  { href: routes.landings.rollosDePapelTermico.url, text: routes.landings.rollosDePapelTermico.label },
  { href: routes.landings.dispensadorDeTickets.url, text: routes.landings.dispensadorDeTickets.label },
  { href: routes.landings.llamadoDeEnfermeriaCuidamaster.url, text: routes.landings.llamadoDeEnfermeriaCuidamaster.label },
  { href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url, text: routes.landings.calificadorDeServicioAlClienteOpinamaster.label },
  { href: routes.landings.encuestaVirtual.url, text: routes.landings.encuestaVirtual.label },
];

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
        href={routes.home.url}
      >
        Inicio
      </a>
      <div className={`${style.nav__links} ${menuOpen ? style.showMenu : ""}`}>
        <a href={routes.home.url}>
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
            {productLinks.map(({ href, text }) => (
              <li key={href}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={routes.blog.url}
        >
          Blog
        </a>
        <a
          className={style.btn__mobile}
          href={routes.contact.url}
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
