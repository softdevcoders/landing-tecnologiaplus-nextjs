"use client";

import Link from "next/link";
import ArrowDown from "@/components/ui/icons/arrow-down";
import styles from "./DropdownMenuMobile.module.scss";

const DropdownMenuMobile = ({ links = [], title = "", isOpen = false, handleDropDownMobileOpen = () => {} }) => {
  const handleTitleClick = () => {
    handleDropDownMobileOpen(title, !isOpen);
  };

  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={styles.dropdownMenu__title} data-attribute="dropdown-menu-title" onClick={handleTitleClick}>
        <span>{title}</span>
        <ArrowDown className={`${styles.dropdownMenu__arrow} ${isOpen ? styles.dropdownMenu__arrowVisible : ''}`} />
      </div>
      <div className={`${styles.dropdownMenu__items} ${isOpen ? styles.dropdownMenu__itemsVisible : ''}`}>
        {links.map((link, index) => (
          <div key={index} className={styles.dropdownMenu__item}>
            <Link href={link.href}>{link.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenuMobile; 