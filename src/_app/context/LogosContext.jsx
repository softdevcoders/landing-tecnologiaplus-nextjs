"use client";
import { createContext, useContext, useState } from "react";

const LogosContext = createContext();

export const useLogos = () => {
  return useContext(LogosContext);
};

export const LogosProvider = ({ children }) => {
  const [logosTermicos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
  ]);

  const [logosTurnos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
  ]);

  const [logosTurnoExpress] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_hbvz1s.svg",
      alt: "Logo Alkomprar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_15_f4mmaj.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_16_jyibxe.svg",
      alt: "Logo Comfacundi",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_hbvz1s.svg",
      alt: "Logo Alkomprar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_15_f4mmaj.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_16_jyibxe.svg",
      alt: "Logo Comfacundi",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_hbvz1s.svg",
      alt: "Logo Alkomprar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_15_f4mmaj.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_16_jyibxe.svg",
      alt: "Logo Comfacundi",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_hbvz1s.svg",
      alt: "Logo Alkomprar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_15_f4mmaj.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_16_jyibxe.svg",
      alt: "Logo Comfacundi",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_5_wuz5jm.svg",
      alt: "Logo Mundo Mujer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_8_tscicy.svg",
      alt: "Logo Tuya",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_hbvz1s.svg",
      alt: "Logo Alkomprar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_15_f4mmaj.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_16_jyibxe.svg",
      alt: "Logo Comfacundi",
    },
  ]);

  const [logosTurnoMaster] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_21_qhkjqf.svg",
      alt: "Logo Clinaltec",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542458/Mesa_de_trabajo_22_4x_b8gbeq.webp",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542409/Mesa_de_trabajo_26_4x_hu0kue.webp",
      alt: "Logo Confa",
    },
  ]);

  const [logosCalificador] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh.svg",
      alt: "Logo Heroica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh.svg",
      alt: "Logo Heroica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh.svg",
      alt: "Logo Heroica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh.svg",
      alt: "Logo Heroica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_14_copia_2_pk6rfh.svg",
      alt: "Logo Heroica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_6_cwxydi.svg",
      alt: "Logo Disfarma",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_18_qgekb6.svg",
      alt: "Logo Ramédicas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_19_kdsynx.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_11_nkxgvv.svg",
      alt: "Logo Cruz Roja",
    },
  ]);

  const [logosEnfermeria] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_32_eboyvp.svg",
      alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563263/Mesa_de_trabajo_27_zztk9z.svg",
      alt: "Logo Clinica Nuestra",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563264/Mesa_de_trabajo_28_kchdw2.svg",
      alt: "Logo Kairos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_29_rxzjkf.svg",
      alt: "Logo Hombres Hermanos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_30_f2oqkp.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_32_eboyvp.svg",
      alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563263/Mesa_de_trabajo_27_zztk9z.svg",
      alt: "Logo Clinica Nuestra",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563264/Mesa_de_trabajo_28_kchdw2.svg",
      alt: "Logo Kairos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_29_rxzjkf.svg",
      alt: "Logo Hombres Hermanos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_30_f2oqkp.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_32_eboyvp.svg",
      alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563263/Mesa_de_trabajo_27_zztk9z.svg",
      alt: "Logo Clinica Nuestra",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563264/Mesa_de_trabajo_28_kchdw2.svg",
      alt: "Logo Kairos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_29_rxzjkf.svg",
      alt: "Logo Hombres Hermanos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_30_f2oqkp.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_32_eboyvp.svg",
      alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563263/Mesa_de_trabajo_27_zztk9z.svg",
      alt: "Logo Clinica Nuestra",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563264/Mesa_de_trabajo_28_kchdw2.svg",
      alt: "Logo Kairos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_29_rxzjkf.svg",
      alt: "Logo Hombres Hermanos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_30_f2oqkp.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563278/Mesa_de_trabajo_14_copia_3_sacylb.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_32_eboyvp.svg",
      alt: "Logo ESE Hospital Nuestra Señora del Carmen",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563263/Mesa_de_trabajo_27_zztk9z.svg",
      alt: "Logo Clinica Nuestra",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563264/Mesa_de_trabajo_28_kchdw2.svg",
      alt: "Logo Kairos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_29_rxzjkf.svg",
      alt: "Logo Hombres Hermanos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563265/Mesa_de_trabajo_30_f2oqkp.svg",
      alt: "Logo El Bosque",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563259/Mesa_de_trabajo_14_copia_qdrcjd.svg",
      alt: "Logo Hospital San Rafael",
    },
  ]);

  const [logosLlamadorMeseros] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743126933/F4C07E32B458FF3E_hpjknp.webp",
      alt: "Logo Estelar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127595/F4C8E93F6E675389_xuanu0.webp",
      alt: "Logo Club Campestre",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563266/Mesa_de_trabajo_36_abflwi.svg",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_38_uajfyi.svg",
      alt: "Logo Jumbo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743126933/F4C07E32B458FF3E_hpjknp.webp",
      alt: "Logo Estelar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127595/F4C8E93F6E675389_xuanu0.webp",
      alt: "Logo Club Campestre",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563266/Mesa_de_trabajo_36_abflwi.svg",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_38_uajfyi.svg",
      alt: "Logo Jumbo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743126933/F4C07E32B458FF3E_hpjknp.webp",
      alt: "Logo Estelar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127595/F4C8E93F6E675389_xuanu0.webp",
      alt: "Logo Club Campestre",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563266/Mesa_de_trabajo_36_abflwi.svg",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_38_uajfyi.svg",
      alt: "Logo Jumbo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743126933/F4C07E32B458FF3E_hpjknp.webp",
      alt: "Logo Estelar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127595/F4C8E93F6E675389_xuanu0.webp",
      alt: "Logo Club Campestre",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563266/Mesa_de_trabajo_36_abflwi.svg",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_38_uajfyi.svg",
      alt: "Logo Jumbo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743126933/F4C07E32B458FF3E_hpjknp.webp",
      alt: "Logo Estelar",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127595/F4C8E93F6E675389_xuanu0.webp",
      alt: "Logo Club Campestre",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563266/Mesa_de_trabajo_36_abflwi.svg",
      alt: "Logo Hoteles Cosmos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542350/Mesa_de_trabajo_37_4x_n1ksz9.webp",
      alt: "Logo Club El Nogal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563267/Mesa_de_trabajo_38_uajfyi.svg",
      alt: "Logo Jumbo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
  ]);

  const [logosLocalizadores] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542309/Mesa_de_trabajo_39_4x_szfdyq.webp",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563268/Mesa_de_trabajo_40_bjtiqo.svg",
      alt: "Logo Home",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563279/Mesa_de_trabajo_14_copia_5_iyoins.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563269/Mesa_de_trabajo_43_s6hdzr.svg",
      alt: "Logo Montolvo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563270/Mesa_de_trabajo_44_ircfaa.svg",
      alt: "Logo Peru Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127235/F5CDDFC9F623885E_odq2pa.webp",
      alt: "Logo Sr. Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542141/Mesa_de_trabajo_46_4x_azluws.webp",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542051/Mesa_de_trabajo_47_4x_jtxvmh.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542309/Mesa_de_trabajo_39_4x_szfdyq.webp",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563268/Mesa_de_trabajo_40_bjtiqo.svg",
      alt: "Logo Home",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563279/Mesa_de_trabajo_14_copia_5_iyoins.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563269/Mesa_de_trabajo_43_s6hdzr.svg",
      alt: "Logo Montolvo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563270/Mesa_de_trabajo_44_ircfaa.svg",
      alt: "Logo Peru Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127235/F5CDDFC9F623885E_odq2pa.webp",
      alt: "Logo Sr. Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542141/Mesa_de_trabajo_46_4x_azluws.webp",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542051/Mesa_de_trabajo_47_4x_jtxvmh.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542309/Mesa_de_trabajo_39_4x_szfdyq.webp",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563268/Mesa_de_trabajo_40_bjtiqo.svg",
      alt: "Logo Home",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563279/Mesa_de_trabajo_14_copia_5_iyoins.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563269/Mesa_de_trabajo_43_s6hdzr.svg",
      alt: "Logo Montolvo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563270/Mesa_de_trabajo_44_ircfaa.svg",
      alt: "Logo Peru Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127235/F5CDDFC9F623885E_odq2pa.webp",
      alt: "Logo Sr. Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542141/Mesa_de_trabajo_46_4x_azluws.webp",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542051/Mesa_de_trabajo_47_4x_jtxvmh.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542309/Mesa_de_trabajo_39_4x_szfdyq.webp",
      alt: "Logo Qbano",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563268/Mesa_de_trabajo_40_bjtiqo.svg",
      alt: "Logo Home",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563279/Mesa_de_trabajo_14_copia_5_iyoins.svg",
      alt: "Logo Don Jediondo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563269/Mesa_de_trabajo_43_s6hdzr.svg",
      alt: "Logo Montolvo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563270/Mesa_de_trabajo_44_ircfaa.svg",
      alt: "Logo Peru Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127235/F5CDDFC9F623885E_odq2pa.webp",
      alt: "Logo Sr. Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542141/Mesa_de_trabajo_46_4x_azluws.webp",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542051/Mesa_de_trabajo_47_4x_jtxvmh.webp",
      alt: "Logo Wok",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
  ]);

  const [logosHome] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127351/5B599FD4888E366F_uin9m3.webp",
      alt: "Logo Smartfit",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542268/Mesa_de_trabajo_41_4x_lktbou.webp",
      alt: "Logo Frisby",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563273/Mesa_de_trabajo_5_copia_exd62o.svg",
      alt: "Logo Alkosto",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563260/Mesa_de_trabajo_14_copia_6_cdovre.svg",
      alt: "Logo Juan Valdez",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563277/Mesa_de_trabajo_10_lkpkxn.svg",
      alt: "Logo Liga Colombiana Contra el Cáncer",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743542005/Mesa_de_trabajo_49_4x_jlptaw.webp",
      alt: "Logo Crepes & Waffles",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563272/Mesa_de_trabajo_62_w7ggme.svg",
      alt: "Logo Loreal",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563262/Mesa_de_trabajo_20_o1drqb.svg",
      alt: "Logo Los Olivos",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743127480/1222A6C85C9B6BB9_putlpy.webp",
      alt: "Logo Domino's Pizza",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563276/Mesa_de_trabajo_9_egrpk3.svg",
      alt: "Logo Comfenalco Antioquia",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742563274/Mesa_de_trabajo_7_awxms5.svg",
      alt: "Logo Colmedica",
    },
  ]);

  return (
    <LogosContext.Provider
      value={{
        logosTermicos,
        logosTurnos,
        logosTurnoExpress,
        logosCalificador,
        logosEnfermeria,
        logosLlamadorMeseros,
        logosLocalizadores,
        logosTurnoMaster,
        logosHome,
      }}
    >
      {children}
    </LogosContext.Provider>
  );
};
