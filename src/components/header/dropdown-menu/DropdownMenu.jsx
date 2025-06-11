import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import ArrowDown from "@/components/ui/icons/arrow-down";

const DropdownMenu = ({ links = [], title = "" }) => {
  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={styles.dropdownMenu__title} data-attribute="dropdown-menu-title">
        {typeof title === 'string' ? <span>{title}</span> : <Link href={title.href}>{title.text}</Link>}
        <ArrowDown className={styles.dropdownMenu__arrow} />
      </div>
      <div className={styles.dropdownMenu__items}>
        {links.map((link, index) => (
          <div key={index} className={styles.dropdownMenu__item}>
            <Link href={link.href}>{link.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu; 