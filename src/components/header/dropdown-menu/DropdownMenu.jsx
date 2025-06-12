"use client";

import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import ArrowDown from "@/components/ui/icons/arrow-down";
import { usePathname } from 'next/navigation';

const DropdownMenu = ({ links = [], title = "", active = false }) => {
  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={`${styles.dropdownMenu__title} ${active ? styles.active : ''}`} data-attribute="dropdown-menu-title">
        {typeof title === 'string' ? <span>{title}</span> : <Link href={title.href}>{title.text}</Link>}
        <ArrowDown className={styles.dropdownMenu__arrow} size={12} />
      </div>
      <div className={styles.dropdownMenu__items}>
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

export default DropdownMenu; 