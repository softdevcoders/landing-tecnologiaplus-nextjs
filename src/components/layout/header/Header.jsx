"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Header.module.scss";
import { HiPhone } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { routes } from "@/config/routes";
import { CldImage } from "next-cloudinary";

function Header({ customStyles = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef(null);
  const phoneRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.position = menuOpen && isMobile ? "fixed" : "";
    document.body.style.width = menuOpen && isMobile ? "100%" : "";
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (searchRef.current) searchRef.current.setAttribute("aria-label", "Buscar en el sitio");
    if (phoneRef.current) phoneRef.current.setAttribute("aria-label", "Llamar al teléfono 316 468 2034");
    if (menuRef.current) {
      menuRef.current.setAttribute("aria-label", menuOpen ? "Cerrar menú" : "Abrir menú");
      menuRef.current.setAttribute("aria-expanded", menuOpen);
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = (key) => setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const renderDropdown = (key, label, links) => (
    <div className={styles.dropdown}>
      <Link
        href="#"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            toggleDropdown(key);
          }
        }}
      >
        {label} <IoIosArrowDown className={styles.arrow__icon} />
      </Link>
      <ul className={`${styles.dropdownMenu} ${dropdownOpen[key] ? styles.show : ""}`}>
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

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

  return (
    <header className={`${styles.header} ${customStyles.header || ""}`}>
      <div
        className={`${styles.nav__links} ${menuOpen ? styles.showMenu : ""} ${
          customStyles.navLinks || ""
        }`}
      >
        <Link href={routes.home.url}>{routes.home.label}</Link>
        {renderDropdown("productos", "Productos", productLinks)}
        <Link href={routes.blog.url}>{routes.blog.label}</Link>
        <Link href={routes.contact.url} className={styles.contactoMobile}>
          {routes.contact.label}
        </Link>
      </div>
      <Link
        href={routes.home.url}
        className={`${styles.logo__container} ${customStyles.logoContainer || ""}`}
      >
        <CldImage
          loading="lazy"
          className={`${styles.logo} ${customStyles.logo || ""}`}
          width={320}
          height={100}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/Logo_Tecnolog%C3%ADa_Plus_2024_cyahos_cgz5gx.svg"
          alt="logo Tecnología plus"
        />
      </Link>
      <div
        className={`${styles.header__right} ${customStyles.headerRight || ""}`}
      >
        <Link href={routes.contact.url} className={styles.contactoDesktop}>
          {routes.contact.label}
        </Link>
        <Link
          href={routes.contact_media.phones[0].url}
          className={`${styles.phone__btn} ${customStyles.phoneBtn || ""}`}
          ref={phoneRef}
        >
          <HiPhone
            className={`${styles.phone__icon} ${customStyles.phoneIcon || ""}`}
          />
          {routes.contact_media.phones[0].label}
        </Link>
        <div
          className={`${styles.menu__icon} ${menuOpen ? styles.open : ""} ${
            customStyles.menuIcon || ""
          }`}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          ref={menuRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
