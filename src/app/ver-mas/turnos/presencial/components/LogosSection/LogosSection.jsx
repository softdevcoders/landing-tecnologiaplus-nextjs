"use client";
import styles from "../../../../styles/LogosSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useLogos } from "../../../../../context/LogosContext";
import InfiniteSlider2 from "@/app/components/sliders/InfiniteSlider2";

function LogosSection() {
  const { logosTurnosPresencial } = useLogos();
  
 
  return (
    <section className={styles.logossection__container}>
      <div className={styles.header}>
        <h2>Algunos clientes</h2>
      </div>
      <div className={styles.content}>
        <InfiniteSlider2 logos={logosTurnosPresencial} speed={5000} />
      </div>
    </section>
  );
}

export default LogosSection; 