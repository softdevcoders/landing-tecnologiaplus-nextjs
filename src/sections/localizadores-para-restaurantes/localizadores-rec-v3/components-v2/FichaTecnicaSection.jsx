import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1757338400/boton_para_llamar_al_mesero_doble_funcion_llamar_cancelar",  
        alt: "Botón para llamar al mesero con doble función: Llamar y Cancelar.",
        title: "Botón para llamar al mesero con doble función.",
      },
      descripcion: "Doble función:<br> Llamar y Cancelar",
    },
    {
      imagen: {
        src: "v1757338401/llamador_de_personal_dc12v_bateria_23a12v",
        alt: " Llamador de personal con voltaje DC12V y batería 23A12V instalada.",
        title: "Llamador de personal con batería 23A12V.",
      },
      descripcion: "Voltaje: DC12V.<br> Batería 23A12V.",
    },
    {
      imagen: {
        src: "v1757338400/llamador_de_personal_rango_100m_frecuencia_433mhz",
        alt: "Llamador de personal con rango de hasta 100m y frecuencia 433MHz",
        title: "Llamador de personal con rango de 100m",
      },
      descripcion: "Rango: hasta 100m o más con amplificador de señal.<br> Frecuencia: 433MHz",
    },
    {
      imagen: {
        src: "v1757338400/timbre_de_restaurante_resistente_a_derrames",  
        alt: "Timbre de restaurante resistente a derrames accidentales de agua.",
        title: "Timbre de restaurante resistente a derrames.",
      },
      descripcion: "Resiste derrames<br> accidentales de agua.",
    },
    {
      imagen: {
        src: "v1757338401/llamador_de_meseros_compatible_con_receptores",  
        alt: "Llamador de meseros compatible con receptores inalámbricos de Tecnología Plus.",
        title: "Llamador de meseros compatible con receptores.",
      },
      descripcion: "Compatible con receptores<br> inalámbricos de Tecnología Plus.", 
    },
    {
      imagen: {
        src: "v1757338400/timbres_para_restaurantes_usos",  
        alt: "Timbres para restaurantes usados en lugares para llamar al mesero o empleados.",
        title: "Timbres para restaurantes en diferentes usos.",
      },
      descripcion: "Uso: en lugares para llamar<br> al mesero o empleados",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
    title="Ficha técnica del localizador REC V3"
  />;
};

export default FichaTecnicaSection;