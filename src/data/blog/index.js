import { articulos as calificadorDeServicioAlClienteOpinamaster } from "./calificador-de-servicio-al-cliente";
import { articulos as dispensadorDeTickets } from "./dispensador-de-tickets";
import { articulos as encuestaVirtualOpinamaster } from "./encuesta-virtual";
import { articulos as llamadoDeEnfermeriaCuidamaster } from "./llamado-de-enfermeria-cuidamaster";
import { articulos as llamadoresDeMeseros } from "./llamadores-de-meseros";
import { articulos as localizadoresParaRestaurantes } from "./localizadores-para-restaurantes";
import { articulos as rollosDeFichosParaTurnos } from "./rollos-de-fichos-para-turnos";
import { articulos as rollosDePapelTermico } from "./rollos-de-papel-termico";
import { articulos as turneroTurnoexpress } from "./turnero-turnoexpress";
import { articulos as turneroTurnomaster } from "./turnero-turnomaster";

export const posts = [
  ...calificadorDeServicioAlClienteOpinamaster,
  ...dispensadorDeTickets,
  ...encuestaVirtualOpinamaster,
  ...llamadoDeEnfermeriaCuidamaster,
  ...llamadoresDeMeseros,
  ...localizadoresParaRestaurantes,
  ...rollosDeFichosParaTurnos,
  ...rollosDePapelTermico,
  ...turneroTurnoexpress,
  ...turneroTurnomaster
];