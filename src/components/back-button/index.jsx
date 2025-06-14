"use client";

import { useRouter } from "next/navigation";
import styles from "./back-button.module.scss";
import { ArrowBack } from "@/components/ui/icons";

export default function BackButton({ className }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className={`${styles.back_button} ${className || ""}`}
    >
      <ArrowBack className={styles.icon__back} size={16} />
      Volver
    </button>
  );
} 