"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./back-button.module.scss";
import { ArrowBack } from "@/components/ui/icons";

export default function BackButton({ className }) {
  const pathname = usePathname();
  
  // Obtener el path de la categoría (primer segmento)
  const segments = pathname.split("/").filter(Boolean);
  const categoryPath = segments.length >= 1 ? `/${segments[0]}` : "/";

  return (
    <Link 
      href={categoryPath}
      className={`${styles.back_button} ${className || ""}`}
    >
      <ArrowBack className={styles.icon__back} size={16} />
      Volver
    </Link>
  );
} 