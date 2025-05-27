"use client";

import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "@/components/layout/header/DropdownMenu";
import styles from "./Header.module.scss";
import { routes } from "@/config/routes";
import { useEffect, useState } from "react";
import { HiPhone } from "react-icons/hi2";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const productLinks = Object.values(routes.landings).map((child) => ({
    href: child.url,
    text: child.label,
  }));

  const blogLinks = Object.values(routes.blog.children).map((child) => ({
    href: child.url,
    text: child.label,
  }));

    return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.header__container}>
        <div className={styles.header__navlinks_left}>
          <Link href={routes.home.url} className={styles.header__navlinks_link}>{routes.home.label}</Link>
          <DropdownMenu links={productLinks} title="Productos" />
          <DropdownMenu links={blogLinks} title="Blog" />
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
          {/* <DropdownMenu links={productLinks} title="Productos" />
          <DropdownMenu links={blogLinks} title="Blog" /> */}
          <Link href={routes.contact.url} className={styles.header__navlinks_link}>{routes.contact.label}</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
