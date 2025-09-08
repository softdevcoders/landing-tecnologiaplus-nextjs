import style from "./industries-section.module.scss";
import Image from "next/image";

export const IndustriesSection = ({ children, className = "" }) => {
  return (
    <section data-nosnippet className={`${style.industries__section} ${className}`}>
      <div className={style.industries__section__background}>
        <Image
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/nisgh2gbe0ginddnsrko_opkrn1.webp"
          alt="background de la sección de industrias"
          width={300}
          height={300}
          className={style.industries__section__background__image}
          unoptimized={true}
        />
      </div>
      {children}
    </section>
  );
};

export const IndustriesSectionContainer = ({ children, className = "" }) => {
  return (
    <div className={`${style.industries__section__container} ${className}`}>
      {children}
    </div>
  );
};

export const IndustriesSectionTitle = ({ title, className = "" }) => {
  return (
    <h2 
      className={`${style.industries__section__title} ${className}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export const IndustriesSectionList = ({ children, className = "" }) => {
  return (
    <ul className={`${style.industries__section__list} ${className}`}>
      {children}
    </ul>
  );
};

export const IndustriesSectionListItem = ({ children, className = "" }) => {
  return (
    <li className={`${style.industries__section__list__item} ${className}`}>
      {children}
    </li>
  );
};

export const IndustriesSectionListItemIconContainer = ({ children, className = "" }) => {
  return (
    <div className={`${style.industries__section__list__item__icon_container} ${className}`}>
      {children}
    </div>
  );
};

export const IndustriesSectionListItemIcon = ({ src, alt, width = 300, height = 300, className = "" }) => {
  return (
    <Image 
      src={src}  
      alt={alt} 
      width={width} 
      height={height} 
      className={className} 
      unoptimized={true} />
  );
};

export const IndustriesSectionListItemText = ({ text, className = "" }) => {
  return (
    <p 
      className={`${style.industries__section__list__item__text} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

