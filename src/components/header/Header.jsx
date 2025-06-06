"use client";

import Link from "next/link";
import Image from "next/image";
import { routes } from "@/config/routes";
import { useEffect, useState, useCallback } from "react";
import DropdownMenu from "@/components/header/dropdown-menu/DropdownMenu";
import DropdownMenuMobile from "@/components/header/dropdown-menu-mobile/DropdownMenuMobile"; 
import { HiPhone } from "react-icons/hi2";
import styles from "./Header.module.scss";

function Header({ headerAlt = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDownMobileOpen, setDropDownMobileOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropDownMobileOpen = useCallback((title) => {
    setDropDownMobileOpen(title === dropDownMobileOpen ? null : title);
  }, [dropDownMobileOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    setDropDownMobileOpen(null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // window.scrollTo(0, 0);

    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen || dropDownMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen, dropDownMobileOpen]);

  const productLinks = Object.values(routes.landings).map((child) => ({
    href: child.url,
    text: child.label,
  }));

  const blogLinks = Object.values(routes.blog.children).map((child) => ({
    href: child.url,
    text: child.label,
  }));

  blogLinks.unshift({
    href: routes.blog.url,
    text: "Todos los posts",
  });

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${headerAlt ? styles.headerAlt : ""}`}>
      <div className={styles.header__container}>
        <div className={styles.header__navlinks_left}>
          <Link href={routes.home.url} className={styles.header__navlinks_link}>{routes.home.label}</Link>
          <DropdownMenu links={productLinks} title="Productos" />
          <DropdownMenu links={blogLinks} title={{ href: routes.blog.url, text: "Blog" }} />
        </div>
        <div className={styles.header__logo_image_container}>
          <div className={styles.header__logo_image_container_mobile}>
            <Link href={routes.home.url}>
              <Image
                loading="eager"
                priority
                fetchPriority="high"
                className={styles.header__logo_image}
                width={137}
                height={27}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp/c_scale/w_300/website-v2/zyl0ca6woqgk2ehlynem"
                alt="logo Tecnología plus"
              />
            </Link>
          </div>
          <div className={styles.header__logo_image_container_desktop}>
            <Link href={routes.home.url}>
              <Image
                loading="eager"
                priority
                fetchPriority="high"
                className={styles.header__logo_image}
                width={320}
                height={64}
                src="https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp/c_scale/w_600/website-v2/zyl0ca6woqgk2ehlynem"
                alt="logo Tecnología plus"
              />
            </Link>
          </div>
        </div>
        <div className={styles.header__navlinks_right}>
          <Link href={routes.contact.url} className={styles.header__navlinks_link}>{routes.contact.label}</Link>
          <a href={routes.contact_media.phones[0].url} className={styles.header__navlinks_phone}>
            <HiPhone className={styles.phone__icon} />
            <span className={styles.phone__label}>{routes.contact_media.phones[0].label}</span>
          </a>
          <button onClick={toggleMenu} className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <Link href={routes.home.url} className={styles.header__navlinks_link}>{routes.home.label}</Link>  
          <DropdownMenuMobile links={productLinks} title="Productos" isOpen={dropDownMobileOpen === "Productos"} handleDropDownMobileOpen={handleDropDownMobileOpen} />
          <DropdownMenuMobile links={blogLinks} title="Blog" isOpen={dropDownMobileOpen === "Blog"} handleDropDownMobileOpen={handleDropDownMobileOpen} />
          <Link href={routes.contact.url} className={styles.header__navlinks_link}>{routes.contact.label}</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
