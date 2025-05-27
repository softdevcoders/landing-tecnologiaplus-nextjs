import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenu = ({ links = [], title = "" }) => {
  return (
    <div className={styles.dropdownMenu__container} data-attribute="dropdown-menu">  
      <div className={styles.dropdownMenu__title} data-attribute="dropdown-menu-title">
        {typeof title === 'string' ? <span>{title}</span> : <Link href={title.href}>{title.text}</Link>}
        <IoIosArrowDown className={styles.dropdownMenu__arrow} />
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