import LinkNext from "next/link"
import style from './link.module.scss';

const Link = ({ children, href, classNames, title, size }) => {
  return (
    <LinkNext href={href} className={style.link + ' ' + classNames  + ' ' + style[size]} title={title}>
      { children }
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
    </LinkNext>
  )
}

export default Link