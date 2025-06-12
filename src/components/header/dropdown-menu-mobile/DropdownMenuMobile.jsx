"use client";

import Link from "next/link";
import ArrowDown from "@/components/ui/icons/arrow-down";
import styles from "./DropdownMenuMobile.module.scss";
import { usePathname } from 'next/navigation';

const DropdownMenuMobile = ({ links = [], title = "", isOpen = false, handleDropDownMobileOpen = () => {}, active = false }) => {
  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleTitleClick = () => {
    handleDropDownMobileOpen(title, !isOpen);
  };

  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={`${styles.dropdownMenu__title} ${active ? styles.active : ''}`} data-attribute="dropdown-menu-title" onClick={handleTitleClick}>
        <span>{title}</span>
        <ArrowDown className={`${styles.dropdownMenu__arrow} ${isOpen ? styles.dropdownMenu__arrowVisible : ''}`} size={12} />
      </div>
      <div className={`${styles.dropdownMenu__items} ${isOpen ? styles.dropdownMenu__itemsVisible : ''}`}>
        {links.map((link, index) => {
          const linkActive = isLinkActive(link.href);
          return (
            <div key={index} className={`${styles.dropdownMenu__item} ${linkActive ? styles.activeItem : ''}`}>
              <Link href={link.href}>{link.text}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenuMobile; 