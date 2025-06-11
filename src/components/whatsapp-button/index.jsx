'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import style from "./whatsapp-button.module.scss";
import { Whatsapp } from "@/components/ui/icons";

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsVisible(scrolled > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/573102105256"
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.wpp__btn} ${isVisible ? style.visible : ""}`}
    >
      <Whatsapp />
    </a>
  );
};

export default WhatsappButton;


