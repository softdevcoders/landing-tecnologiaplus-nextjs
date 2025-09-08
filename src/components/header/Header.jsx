"use client";

import Link from "next/link";
import Image from "next/image";
import { routes } from "@/config/routes";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from 'next/navigation';
import DropdownMenu from "@/components/header/dropdown-menu/DropdownMenu";
import DropdownMenuMobile from "@/components/header/dropdown-menu-mobile/DropdownMenuMobile";
import styles from "./Header.module.scss";
import Phone2 from "@/components/ui/icons/phone-2";
import { GOOGLE_TAG_EVENTS } from "@/config/google-tag-events";

function Header({ headerAlt = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDownMobileOpen, setDropDownMobileOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isLinkActive = useCallback((href) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }, [pathname]);

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
    text: "Todos los artículos",
  });

  // Determinar activos
  const homeActive = isLinkActive(routes.home.url);
  const contactActive = isLinkActive(routes.contact.url);
  const productActive = productLinks.some((link) => isLinkActive(link.href));
  const blogActive = isLinkActive(routes.blog.url) || blogLinks.some((link) => isLinkActive(link.href));

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${headerAlt ? styles.headerAlt : ""}`}>
      <div className={styles.header__container}>
        <div className={styles.header__navlinks_left}>
          <Link href={routes.home.url} className={`${styles.header__navlinks_link} ${homeActive ? styles.active : ''}`}>{routes.home.label}</Link>
          <DropdownMenu links={productLinks} title="Productos" active={productActive} />
          <DropdownMenu links={blogLinks} title={{ href: routes.blog.url, text: "Blog" }} active={blogActive} />
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
                unoptimized={true}
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
                unoptimized={true}
              />
            </Link>
          </div>
        </div>
        <div className={styles.header__navlinks_right}>
          <Link 
            href={routes.contact.url} 
            className={`${styles.header__navlinks_link} ${contactActive ? styles.active : ''}`}
            id={GOOGLE_TAG_EVENTS.MENU_CONTACT.id}
          >{routes.contact.label}</Link>
          <a 
            href={routes.contact_media.phones[0].url} 
            className={styles.header__navlinks_phone}
            id={GOOGLE_TAG_EVENTS.PHONE_HEADER.id}
          >
            <Phone2 className={styles.phone__icon} size={19} />
            <span className={styles.phone__label}>{routes.contact_media.phones[0].label}</span>
          </a>
          <button aria-label="Abrir menú" onClick={toggleMenu} className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <Link href={routes.home.url} className={`${styles.header__navlinks_link} ${homeActive ? styles.active : ''}`}>{routes.home.label}</Link>  
          <DropdownMenuMobile links={productLinks} title="Productos" isOpen={dropDownMobileOpen === "Productos"} handleDropDownMobileOpen={handleDropDownMobileOpen} active={productActive} />
          <DropdownMenuMobile links={blogLinks} title="Blog" isOpen={dropDownMobileOpen === "Blog"} handleDropDownMobileOpen={handleDropDownMobileOpen} active={blogActive} />
          <Link href={routes.contact.url} className={`${styles.header__navlinks_link} ${contactActive ? styles.active : ''}`}>{routes.contact.label}</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
