import { routes } from "@/config/routes";
import { controlNumerico } from "@/config/productos-galeria-ver-mas/llamadores-meseros/control-numerico";
import { habladorDeMesa } from "@/config/productos-galeria-ver-mas/llamadores-meseros/hablador-de-mesa";
import { relojReceptorDeLlamados } from "@/config/productos-galeria-ver-mas/llamadores-meseros/reloj-receptor-de-llamados";
import { pantallaT1B } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t1-b";
import { pantallaT6 } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t6";

// Inverntar un cambio

const mainImage = {
  src: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
  alt: 'Llamador de meseros E2-B negro y rojo con 2 teclas para restaurante.',
  title: 'Llamador de meseros E2-B negro y rojo de 2 teclas.'
};

export const llamadorDeMeserosE2B = {
  id: "llamador-de-meseros-e2-b",
  title: "LLAMADOR DE MESEROS E2-B",
  description: "Permite llamar al mesero y borrar el llamado al ser atendido.",
  url: routes.landings.llamadoresDeMeseros.children.e2_b.url,
  mainImage,
  colors: [
    {
      id: "negro_rojo",
      name: "Negro y Rojo",
      thumbnail: mainImage,
      media: [
        {
          type: 'image',
          ...mainImage,
        },
        {
          type: '3d',
          modelID: '7f65ca693d5d41ce933a2b3f113ad4b7',
          thumbnail: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
          preview: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338389/medidas_timbre_inalambrico_restaurantes_e2b_2teclas_negro_rojo',     
          alt: 'Medidas de timbre inalámbrico para restaurantes E2-B de dos teclas en color negro y rojo.',
          title: 'Medidas timbre inalámbrico para restaurantes E2-B 2 teclas negro y rojo.',
        },
        {
          type: 'image',
          src: 'v1757338391/timbre_de_restaurante_e2b_2teclas_negro_rojo_en_uso', 
          alt: 'Timbre de restaurante E2-B negro y rojo de dos teclas en uso en restaurante con clientes.',
          title: 'Timbre de restaurante E2-B negro y rojo en uso con clientes.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/llamadores_para_restaurantes_e2b_2teclas_negro_rojo_diferentes_sectores',
          alt: 'Llamadores para restaurantes E2-B en color negro y rojo, ideales para gimnasios, gastrobares y sector salud.',
          title: 'Llamadores para restaurantes E2-B negro y rojo ideales para diferentes sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338391/timbres_para_mesas_restaurantes_e2b_2teclas_negro_rojo_comparacion',  
          alt: 'Timbres para mesas de restaurantes E2-B negro y rojo comparados con otros modelos, diseño moderno y batería de larga duración.',
          title: 'Timbres para mesas de restaurantes E2-B comparados con otros modelos.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338389/llamadores_de_meseros_e2B_negro_rojo_fijacion_hablador_adhesivo',  
          alt: 'Llamadores de meseros E2-B negro y rojo fijados en mesa con hablador publicitario y adhesivo extra fuerte.',
          title: 'Llamadores de meseros E2-B negro y rojo con hablador y adhesivo extra fuerte.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338391/timbre_de_mesa_e2_b_negro_rojo_resistente_agua',    
          alt: 'Timbre de mesa E2-B negro rojo resistente a derrames de agua para restaurantes.',
          title: 'Timbre de mesa E2-B negro rojo resistente al agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/timbres_para_restaurantes_e2_b_negro_rojo_receptores',    
          alt: 'Timbres para restaurantes E2-B negro rojo compatibles con reloj receptor y pantallas de llamados.',
          title: 'Timbres para restaurantes E2-B negro rojo con receptores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/llamadores_de_mesa_e2_b_negro_rojo_rompemuros',    
          alt: 'Llamadores de mesa E2-B negro rojo con señal rompemuros para restaurantes.',
          title: 'Llamadores de mesa E2-B negro rojo rompemuros.',
          darkBackground: true
        },
        // {
        //   type: 'video',
        //   src: 'v1757338405/timbre_de_restaurante_modelo_e2b_video.mp4',
        //   alt: 'Demostración de timbre de restaurante modelo E2-B en funcionamiento.',
        //   title: 'Timbre de restaurante modelo E2-B.',
        //   thumbnail: 'so_0/v1754070602/llamador_e2_b_de_2_teclas_negro_rojo_2_pffe7w', 
        //   darkBackground: true
        // },
      ]
    },
    {
      id: "negro_amarillo",
      name: "Negro y Amarillo",
      thumbnail: {
        src: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',  
        alt: 'Timbre para mesa de restaurante modelo E2-B en color negro y amarillo con diseño moderno.',
        title: 'Timbre para mesa de restaurante E2-B negro amarillo.'
      },
      media: [
        {
          type: 'image',
          src: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo', 
          alt: 'Timbre para mesa de restaurante modelo E2-B en color negro y amarillo con diseño moderno.',
          title: 'Timbre para mesa de restaurante E2-B negro amarillo.'
        },
        {
          type: '3d',
          modelID: 'a9eaa5b55b94451798ed570eeece63da',
          thumbnail: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
          preview: 'v1757338385/timbre_para_mesa_de_restaurante_e2b_negro_amarillo',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338385/timbres_inalambricos_para_restaurantes_medidas_e2b_negro_amarillo',
          alt: 'Medidas de timbre inalámbrico para restaurantes modelo E2-B en color negro y amarillo sobre fondo blanco.',
          title: 'Timbres inalámbricos para restaurantes E2-B negro amarillo.' 
        },
        {
          type: 'image',
          src: 'v1757338385/timbre_restaurante_e2b_uso_real_negro_amarillo', 
          alt: 'Timbre restaurante modelo E2-B en color negro y amarillo, mesero oprimiendo botón cancelar mientras atiende a dos clientas en un bar.',
          title: 'Timbre restaurante E2-B negro amarillo en uso real.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338386/timbre_para_restaurante_e2b_multisector_negro_amarillo',
          alt: 'Timbre para restaurante modelo E2-B en color negro y amarillo, ideal para restaurantes, bares y otros sectores de atención al cliente.', 
          title: 'Timbre para restaurante E2-B negro amarillo multisector.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338386/llamador_de_personal_e2b_comparativa_negro_amarillo',
          alt: 'Llamador de personal modelo E2-B en color negro y amarillo comparado frente a productos de la competencia en restaurantes.',
          title: 'Llamador de personal E2-B negro amarillo comparativa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338385/beeper_para_restaurantes_e2b_fijacion_mesa_negro_amarillo', 
          alt: 'Beeper para restaurantes modelo E2-B en color negro y amarillo con dos opciones de fijación a la mesa y hablador incluido',
          title: 'Beeper para restaurantes E2-B negro amarillo fijación mesa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338385/viper_para_restaurante_e2b_resistente_agua_negro_amarillo',
          alt: 'Viper para restaurante modelo E2-B en color negro y amarillo resistente a derrames de agua accidentales sobre la mesa.',
          title: 'Viper para restaurante E2-B negro amarillo resistente a agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338385/sistema_de_llamado_para_meseros_e2b_receptores_negro_amarillo',
          alt: 'Sistema de llamado para meseros modelo E2-B en color negro y amarillo compatible con reloj receptor y pantalla numérica receptora.',
          title: 'Sistema de llamado para meseros E2-B negro amarillo receptores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338386/llamadores_de_meseros_e2b_rompemuros_negro_amarillo',
          alt: 'Llamadores de meseros modelo E2-B en color negro y amarillo con señal rompemuros, columnas y aglomeraciones.',
          title: 'Llamadores de meseros E2-B negro amarillo rompemuros.',
          darkBackground: true
        },
      ]
    },
    {
      id: "negro_negro",
      name: "Negro y Negro",
      thumbnail: {
        src: 'v1757338391/llamador_de_meseros_e2b_negro_negro',  
        alt: 'Llamador de meseros modelo E2-B en color negro elegante y moderno para mesas de restaurante',
        title: 'Llamador de meseros E2-B negro elegante',
      },
      media: [
        {
          type: 'image',
          src: 'v1757338391/llamador_de_meseros_e2b_negro_negro', 
          alt: 'Llamador de meseros modelo E2-B en color negro elegante y moderno para mesas de restaurante',
          title: 'Llamador de meseros E2-B negro elegante',
        },
        {
          type: '3d',
          modelID: 'bcb6d9771ab34f918e3ec8330fc0549d',
          thumbnail: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
          preview: 'v1757338391/llamador_de_meseros_e2b_negro_negro',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338395/llamadores_para_restaurantes_e2b_negro_negro_medidas',   
          alt: 'Medidas de llamadores para restaurantes modelo E2-B en color negro', 
          title: 'Llamadores para restaurantes E2-B negro con medidas',
        },
        {
          type: 'image',
          src: 'v1757338393/timbre_de_restaurante_e2b_negro_negro_en_uso', 
          alt: 'Timbre de restaurante modelo E2-B en negro usado por mesero para atender a clientes en un bar.',
          title: 'Timbre de restaurante E2-B negro en funcionamiento.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338393/timbre_de_mesa_e2b_negro_negro_usos_multiples',
          alt: 'Timbre de mesa negro modelo E2-B ideal para restaurantes, hoteles, bares y otros sectores de atención al cliente.',
          title: 'Timbre de mesa E2-B negro para diferentes sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338394/timbre_inalambrico_para_restaurantes_e2b_negro_negro_comparativa', 
          alt: 'Timbre inalámbrico para restaurantes E2-B negro-negro comparado con modelos de baja calidad.',
          title: 'Timbre inalámbrico para restaurantes E2-B negro-negro comparativa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338393/timbres_para_restaurantes_e2b_negro_negro_con_hablador', 
          alt: 'Timbres para restaurantes E2-B negro con dos opciones de fijación en mesa y hablador incluido.',
          title: 'Timbres para restaurantes E2-B con fijación en mesa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338392/llamadores_de_mesa_e2b_negro_negro_resistentes_al_agua',
          alt: 'Llamadores de mesa resistentes a derrames de agua accidentales en color negro.',
          title: 'Llamadores de mesa E2-B resistentes a agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338393/timbres_para_mesas_de_restaurantes_e2b_negro_negro_con_receptores',
          alt: 'Timbres para mesas de restaurantes en negro compatibles con reloj receptor y pantallas de llamados.',
          title: 'Timbres para mesas de restaurantes con receptores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338391/llamador_de_personal_e2b_negro_negro_alcance_rompemuros',
          alt: 'Llamador de personal en negro con amplio alcance rompemuros para restaurantes y bares.',
          title: 'Llamador de personal con alcance rompemuros.',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_rojo",
      name: "Blanco y Rojo",
      thumbnail: {
        src: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',  
        alt: 'Llamador de meseros modelo E2-B en color blanco con botón rojo ideal para restaurantes.',
        title: 'Llamador de meseros E2-B blanco con rojo.'
      },
      media: [
        {
          type: 'image',
          src: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo', 
          alt: 'Llamador de meseros modelo E2-B en color blanco con botón rojo ideal para restaurantes.', 
          title: 'Llamador de meseros E2-B blanco con rojo.',
        },
        {
          type: '3d',
          modelID: 'b271ce6e9af044809cda4173953f98ac',
          thumbnail: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
          preview: 'v1757338396/llamador_de_meseros_e2b_blanco_rojo',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338394/medidas_llamador_de_meseros_e2b_blanco_rojo',   
          alt: 'Medidas del llamador de meseros modelo E2-B en color blanco con rojo para restaurantes.', 
          title: 'Medidas llamador de meseros E2-B blanco con rojo.',
        },
        {
          type: 'image',
          src: 'v1757338395/llamadores_para_restaurantes_e2b_blanco_rojo_uso', 
          alt: 'Llamadores para restaurantes modelo E2-B blanco con rojo en uso por mesero atendiendo clientes.', 
          title: 'Llamadores para restaurantes E2-B blanco con rojo en uso.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338396/timbre_de_restaurante_e2b_blanco_rojo_diferentes_sectores',
          alt: 'Timbre de restaurante modelo E2-B blanco con rojo ideal para diferentes sectores y negocios.', 
          title: 'Timbre de restaurante E2-B blanco con rojo para varios sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338400/timbre_de_mesa_e2b_blanco_rojo_comparativa', 
          alt: 'Timbre de mesa para restaurante modelo E2-B en color blanco con rojo comparado con la competencia.',
          title: 'Timbre de mesa E2-B blanco con rojo comparativa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757351828/timbre_inalambrico_para_restaurantes_e2b_blanco_rojo_formas_fijacion', 
          alt: 'Timbre inalámbrico para restaurantes modelo E2-B blanco con rojo con dos formas de fijación a la mesa y hablador incluido.',
          title: 'Timbre inalámbrico para restaurantes E2-B blanco con rojo.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338399/timbre_inalambrico_para_restaurantes_e2b_blanco_rojo_prueba_agua',
          alt: 'Timbre inalámbrico E2-B blanco con rojo para restaurantes, resistente a derrames de agua accidentales.',
          title: 'Timbre inalámbrico para restaurantes E2-B blanco con rojo, a prueba de derrames de agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338395/llamador_de_personal_e2b_2_teclas_blanco_rojo',
          alt: 'lamador de personal E2-B blanco con rojo, compatible con reloj receptor y pantalla receptora de llamados para meseros.',
          title: 'Llamador de personal E2-B blanco con rojo compatible con reloj y pantalla receptora.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338396/llamadores_para_restaurantes_e2b_2_teclas_blanco_rojo_rompemuros',
          alt: 'Llamadores para restaurantes E2-B blanco con rojo con alcance rompemuros que atraviesa muros, columnas y aglomeraciones.',
          title: 'Llamadores para restaurantes E2-B blanco con rojo con señal rompemuros.',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_amarillo",
      name: "Blanco y Amarillo",
      thumbnail: {
        src: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',  
        alt: 'Llamador de meseros E2-B blanco con amarillo para restaurantes moderno.',
        title: 'Llamador de meseros E2-B blanco con amarillo moderno para restaurantes.'
      },
      media: [
        {
          type: 'image',
          src: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo', 
          alt: 'Llamador de meseros E2-B blanco con amarillo para restaurantes moderno.',
          title: 'Llamador de meseros E2-B blanco con amarillo moderno para restaurantes.',
        },
        {
          type: '3d',
          modelID: 'f309cdec26f44f28a21de01aa90eea1d',
          thumbnail: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
          preview: 'v1757338387/llamador_de_meseros_e2b_2_teclas_blanco_amarillo',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338386/timbre_de_mesa_e2b_2teclas_blanco_amarillo_medidas',   
          alt: 'Timbre de mesa E2-B blanco con amarillo con medidas detalladas sobre fondo blanco.', 
          title: 'Medidas llamador de meseros E2-B blanco con amarillo.',
        },
        {
          type: 'image',
          src: 'v1757338388/llamadores_para_restaurantes_e2b_blanco_amarillo_uso', 
          alt: 'Llamadores para restaurantes en blanco utilizados por comensales en grupo.',
          title: 'Llamadores para restaurantes E2-B blanco con amarillo en uso.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338388/timbre_para_restaurante_e2b_2teclas_blanco_amarillo_sectores',
          alt: 'Timbre para restaurante E2-B blanco con amarillo con aplicaciones en hoteles, cafeterías y diferentes sectores.',
          title: 'Timbre para restaurante E2-B blanco con amarillo para múltiples sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338388/timbres_inalambricos_para_restaurantes_e2b_comparacion', 
          alt: 'Timbres inalámbricos para restaurantes modelo E2-B blanco con amarillo comparado con equipos de la competencia.',
          title: 'Timbres inalámbricos para restaurantes E2-B comparado con la competencia.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338387/timbre_para_mesa_de_restaurante_e2b_blanco_amarillo_fijacion', 
          alt: 'Timbre para mesa de restaurante E2-B blanco con amarillo con dos formas de fijación práctica.',
          title: 'Timbre para mesa de restaurante E2-B blanco con amarillo con dos tipos de fijación.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338388/llamador_de_personal_e2b_blanco_amarillo_resistencia_agua',
          alt: 'Llamador de personal E2-B blanco con amarillo resistencia a derrames accidentales de agua.',
          title: 'Llamador de personal E2-B blanco con amarillo resistencia a derrames de agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338387/llamadores_de_mesa_e2b_2_teclas_blanco_amarillo_compatibilidad',
          alt: 'Llamadores de mesa E2-B blanco con amarillo compatibles con dispositivos receptores de llamados de meseros.',
          title: 'Llamadores de mesa E2-B blanco con amarillo compatibles con receptores de llamados.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338387/llamadores_para_restaurantes_e2b_blanco_amarillo_alcance_rompemuros',
          alt: 'Llamadores para restaurantes E2-B blanco con amarillo con señal de largo alcance rompemuros que atraviesa muros y columnas.',
          title: 'Llamadores para restaurantes E2-B blanco con amarillo con señal rompemuros de largo alcance.',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_negro",
      name: "Blanco y Negro",
      thumbnail: {
        src: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',  
        alt: 'Llamador de meseros modelo E2-B en color blanco y negro, práctico para restaurantes.',
        title: 'Llamador de meseros E2-B blanco y negro práctico.'
      },
      media: [
        {
          type: 'image',
          src: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo', 
          alt: 'Llamador de meseros modelo E2-B en color blanco y negro, práctico para restaurantes.',
          title: 'Llamador de meseros E2-B blanco y negro práctico.',
        },
        {
          type: '3d',
          modelID: '16e8d01891ca4913b7b9b5027828d85e',
          thumbnail: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
          preview: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_modelo',
          alt: 'Llamador de meseros E2-B: un toque, cero esperas'
        },
        {
          type: 'image',
          src: 'v1757338398/medidas_llamador_de_meseros_e2b_blanco_negro',   
          alt: 'Medidas del llamador de meseros modelo E2-B en color blanco con negro para restaurantes y bares.', 
          title: 'Medidas llamador de meseros E2-B blanco y negro.',
        },
        {
          type: 'image',
          src: 'v1757338396/boton_para_llamar_al_mesero_e2b_blanco_negro_en_uso', 
          alt: 'Botón para llamar al mesero modelo E2-B en blanco y negro, usado en restaurante por comensales atendidos por el personal.',
          title: 'Botón para llamar al mesero E2-B blanco y negro en uso.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338399/timbre_para_restaurantes_e2b_blanco_negro_sectores',
          alt: 'Timbre para restaurantes modelo E2-B en blanco y negro ideal para diferentes sectores como bares, cafés y clubes.',
          title: 'Timbre para restaurantes E2-B blanco y negro en sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338397/timbre_de_mesa_e2b_blanco_negro_comparativa', 
          alt: 'Timbre de mesa para restaurantes modelo E2-B en blanco y negro comparado con otros dispositivos, resaltando tu marca.',
          title: 'Timbre de mesa E2-B blanco y negro comparativa.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338398/timbre_inalambrico_para_restaurantes_e2b_blanco_negro_opciones_fijacion', 
          alt: 'Timbre inalámbrico para restaurantes modelo E2-B en blanco y negro con dos opciones de fijación a la mesa y complemento hablador.',
          title: 'Timbre inalámbrico para restaurantes E2-B blanco y negro opciones de fijación.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338400/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro',
          alt: 'Llamador de meseros modelo E2-B en blanco y negro resistente a derrames de agua accidentales en mesas de restaurante',
          title: 'Llamador de meseros E2-B blanco y negro resistente al agua',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338397/llamador_de_meseros_e2b_blanco_negro_resistente_agua',
          alt: 'Llamadores de mesa E2-B blanco y negro compatibles con dispositivos receptores de llamados de meseros.',
          title: 'Llamadores de mesa E2-B blanco y negro compatibles con receptores de llamados.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338398/llamador_de_meseros_e2b_blanco_negro_rompemuros',
          alt: 'Llamador de meseros modelo E2-B en blanco y negro con señal rompemuros que atraviesa muros y aglomeraciones.',
          title: 'Llamador de meseros E2-B blanco y negro rompemuros.',
          darkBackground: true
        },

      ]
    },
  ],
  defaultColor: "negro_rojo",
  hasColors: true,
  compatibleConProducts: [
    habladorDeMesa,
    relojReceptorDeLlamados,
    pantallaT1B,
    pantallaT6, 
    controlNumerico,
  ]
};