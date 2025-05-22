import { metadata as defaultMetadata } from '@/data/metadata/data/default';
import { metadata as blog } from '@/data/metadata/data/blog/root';
import { metadata as calificadorDeServicioAlClienteOpinamaster } from '@/data/metadata/data/blog/calificador-de-servicio-al-cliente-opinamaster';
import { metadata as dispensadorDeTickets } from '@/data/metadata/data/blog/dispensador-de-tickets';
import { metadata as encuestaVirtualOpinamaster } from '@/data/metadata/data/blog/encuesta-virtual-opinamaster';
import { metadata as llamadoDeEnfermeriaCuidamaster } from '@/data/metadata/data/blog/llamado-de-enfermeria-cuidamaster';
import { metadata as llamadoresDeMeseros } from '@/data/metadata/data/blog/llamadores-de-meseros';
import { metadata as localizadoresParaRestaurantes } from '@/data/metadata/data/blog/localizadores-para-restaurantes';
import { metadata as rollosDeFichosParaTurnos } from '@/data/metadata/data/blog/rollos-de-fichos-para-turnos';
import { metadata as rollosDePapelTermico } from '@/data/metadata/data/blog/rollos-de-papel-termico';
import { metadata as sistemasDeTurnosTurnomaster } from '@/data/metadata/data/blog/sistema-de-turnos-turnomaster';
import { metadata as turneroTurnoexpress } from '@/data/metadata/data/blog/turnero-turnoexpress';
import { metadata as contact } from '@/data/metadata/data/contacto';
import { metadata as home } from '@/data/metadata/data/home';
import { metadata as turneroTurnoexpressLanding } from '@/data/metadata/data/landings/turnero-turnoexpress/root';
import { metadata as rollosDePapelTermicoLanding } from '@/data/metadata/data/landings/rollos-de-papel-termico/root';
import { metadata as calificadorDeServicioAlClienteOpinamasterLanding } from '@/data/metadata/data/landings/calificador-de-servicio-al-cliente-opinamaster/root';
import { metadata as llamadoDeEnfermeriaCuidamasterLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/root';
import { metadata as localizadoresParaRestaurantesLanding } from '@/data/metadata/data/landings/localizadores-para-restaurantes/root';
import { metadata as rollosDeFichosParaTurnosLanding } from '@/data/metadata/data/landings/rollos-de-fichos-para-turnos/root';
import { metadata as dispensadorDeTicketsLanding } from '@/data/metadata/data/landings/dispensador-de-tickets/root';
import { metadata as llamadoresDeMeserosLanding } from '@/data/metadata/data/landings/llamadores-de-meseros/root';
import { metadata as sistemasDeTurnosTurnomasterLanding } from '@/data/metadata/data/landings/sistema-de-turnos-turnomaster/root';
import { metadata as encuestaVirtualOpinamasterLanding } from '@/data/metadata/data/landings/encuesta-virtual-opinamaster/root';
  
export default {  
  default: defaultMetadata,
  home,
  contact,
  blog: {
    root: blog,
    'localizadores-para-restaurantes': localizadoresParaRestaurantes,
    'llamadores-de-meseros': llamadoresDeMeseros,
    'llamado-de-enfermeria': llamadoDeEnfermeriaCuidamaster,
    'sistema-de-turnos': sistemasDeTurnosTurnomaster,
    'turnero': turneroTurnoexpress,
    'dispensador-de-tickets': dispensadorDeTickets,
    'rollos-de-fichos-para-turnos': rollosDeFichosParaTurnos,
    'rollos-de-papel-termico': rollosDePapelTermico,
    'calificador-de-servicio-al-cliente': calificadorDeServicioAlClienteOpinamaster,
    'encuesta-virtual': encuestaVirtualOpinamaster
  },
  landings: {
    'turnero-turnoexpress': {
      root: turneroTurnoexpressLanding,
    },
    'rollos-de-papel-termico': {
      root: rollosDePapelTermicoLanding,
    },
    'calificador-de-servicio-al-cliente-opinamaster': {
      root: calificadorDeServicioAlClienteOpinamasterLanding,
    },
    'llamado-de-enfermeria-cuidamaster': {
      root: llamadoDeEnfermeriaCuidamasterLanding,
    },
    'localizadores-para-restaurantes': {
      root: localizadoresParaRestaurantesLanding,
    },
    'rollos-de-fichos-para-turnos': {
      root: rollosDeFichosParaTurnosLanding,
    },
    'dispensador-de-tickets': {
      root: dispensadorDeTicketsLanding,
    },
    'llamadores-de-meseros': {
      root: llamadoresDeMeserosLanding,
    },
    'sistema-de-turnos-turnomaster': {
      root: sistemasDeTurnosTurnomasterLanding,
    },
    'encuesta-virtual-opinamaster': {
      root: encuestaVirtualOpinamasterLanding,
    }
  }
};