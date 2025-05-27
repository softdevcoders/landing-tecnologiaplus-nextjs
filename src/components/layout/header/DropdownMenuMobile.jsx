"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./DropdownMenuMobile.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenuMobile = ({ links = [], title = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={styles.dropdownMenu__title} data-attribute="dropdown-menu-title" onClick={handleTitleClick}>
        <span>{title}</span>
        <IoIosArrowDown className={`${styles.dropdownMenu__arrow} ${isOpen ? styles.dropdownMenu__arrowVisible : ''}`} />
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