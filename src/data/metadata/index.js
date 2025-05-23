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
import { metadata as llamadoDeEnfermeriaCuidamasterAlarmaDeLuzLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/alarma-de-luz';
import { metadata as localizadoresParaRestaurantesLanding } from '@/data/metadata/data/landings/localizadores-para-restaurantes/root';
import { metadata as localizadoresParaRestaurantesLandingLocalizadoresRecV3 } from '@/data/metadata/data/landings/localizadores-para-restaurantes/localizadores-rec-v3';
import { metadata as localizadoresParaRestaurantesLandingLocalizadoresCirC2 } from '@/data/metadata/data/landings/localizadores-para-restaurantes/localizadores-cir-c2';
import { metadata as rollosDeFichosParaTurnosLanding } from '@/data/metadata/data/landings/rollos-de-fichos-para-turnos/root';
import { metadata as dispensadorDeTicketsLanding } from '@/data/metadata/data/landings/dispensador-de-tickets/root';
import { metadata as llamadoresDeMeserosLanding } from '@/data/metadata/data/landings/llamadores-de-meseros/root';
import { metadata as sistemasDeTurnosTurnomasterLanding } from '@/data/metadata/data/landings/sistema-de-turnos-turnomaster/root';
import { metadata as encuestaVirtualOpinamasterLanding } from '@/data/metadata/data/landings/encuesta-virtual-opinamaster/root';
import { metadata as llamadoDeEnfermeriaCuidamasterLlamadorE1ParaCuelloLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello';
import { metadata as llamadoDeEnfermeriaCuidamasterLlamadorE2BlancoLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco';
import { metadata as llamadoDeEnfermeriaCuidamasterLlamadorEx1Landing } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/llamador-ex1';
import { metadata as llamadoDeEnfermeriaCuidamasterPantallaT1BLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/pantalla-t1-b';
import { metadata as llamadoDeEnfermeriaCuidamasterPantallaT6Landing } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/pantalla-t6';
import { metadata as llamadoDeEnfermeriaCuidamasterRelojReceptorDeLlamadosLanding } from '@/data/metadata/data/landings/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados';
import { metadata as rollosDePapelTermicoLandingRollosTermicos } from '@/data/metadata/data/landings/rollos-de-papel-termico/rollos-termicos';
import { metadata as dispensadorDeTicketsLandingDispensadorDeTicketsCaracol } from '@/data/metadata/data/landings/dispensador-de-tickets/dispensador-de-tickets-caracol';
import { metadata as turneroTurnoexpressLandingTurneroFilaUnicaSupermercados } from '@/data/metadata/data/landings/turnero-turnoexpress/turnero-fila-unica-supermercados';
import { metadata as turneroTurnoexpressLandingTurneroT1B } from '@/data/metadata/data/landings/turnero-turnoexpress/turnero-t1-b';
import { metadata as turneroTurnoexpressLandingTurneroT1N } from '@/data/metadata/data/landings/turnero-turnoexpress/turnero-t1-n';
import { metadata as turneroTurnoexpressLandingTurneroT3ModuloTurno } from '@/data/metadata/data/landings/turnero-turnoexpress/turnero-t3-modulo-turno';
import { metadata as turneroTurnoexpressLandingTurneroTransformer } from '@/data/metadata/data/landings/turnero-turnoexpress/turnero-transformer';
import { metadata as calificadorDeServicioAlClienteOpinamasterLandingCalificadorDeServicio } from '@/data/metadata/data/landings/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio';
import { metadata as calificadorDeServicioAlClienteOpinamasterLandingAvisoDeParedParaCalificarServicio } from '@/data/metadata/data/landings/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio';
import { metadata as llamadoresDeMeserosLandingHabladorDeMesa } from '@/data/metadata/data/landings/llamadores-de-meseros/hablador-de-mesa';
import { metadata as llamadoresDeMeserosLandingControlNumerico } from '@/data/metadata/data/landings/llamadores-de-meseros/control-numerico';
import { metadata as llamadoresDeMeserosLandingRelojReceptorDeLlamados } from '@/data/metadata/data/landings/llamadores-de-meseros/reloj-receptor-de-llamados';
import { metadata as llamadoresDeMeserosLandingPantallaT1BLanding } from '@/data/metadata/data/landings/llamadores-de-meseros/pantalla-t1-b';
import { metadata as llamadoresDeMeserosLandingPantallaT6Landing } from '@/data/metadata/data/landings/llamadores-de-meseros/pantalla-t6';
import { metadata as llamadoresDeMeserosLandingLlamadorDeMeserosE2BLanding } from '@/data/metadata/data/landings/llamadores-de-meseros/llamador-de-meseros-e2-b';
import { metadata as llamadoresDeMeserosLandingLlamadorDeMeserosE2NConTeclaPagarLanding } from '@/data/metadata/data/landings/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar';
  
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
      'turnero-fila-unica-supermercados': turneroTurnoexpressLandingTurneroFilaUnicaSupermercados,
      'turnero-t1-b': turneroTurnoexpressLandingTurneroT1B,
      'turnero-t1-n': turneroTurnoexpressLandingTurneroT1N,
      'turnero-t3-modulo-turno': turneroTurnoexpressLandingTurneroT3ModuloTurno,
      'turnero-transformer': turneroTurnoexpressLandingTurneroTransformer,
    },
    'rollos-de-papel-termico': {
      root: rollosDePapelTermicoLanding,
      'rollos-termicos': rollosDePapelTermicoLandingRollosTermicos, 
    },
    'calificador-de-servicio-al-cliente-opinamaster': {
      root: calificadorDeServicioAlClienteOpinamasterLanding,
      'calificador-de-servicio': calificadorDeServicioAlClienteOpinamasterLandingCalificadorDeServicio,
      'aviso-de-pared-para-calificar-servicio': calificadorDeServicioAlClienteOpinamasterLandingAvisoDeParedParaCalificarServicio,
    },
    'llamado-de-enfermeria-cuidamaster': {
      root: llamadoDeEnfermeriaCuidamasterLanding,
      'alarma-de-luz': llamadoDeEnfermeriaCuidamasterAlarmaDeLuzLanding,
      'llamador-e1-para-cuello': llamadoDeEnfermeriaCuidamasterLlamadorE1ParaCuelloLanding,
      'llamador-e2-blanco': llamadoDeEnfermeriaCuidamasterLlamadorE2BlancoLanding,
      'llamador-ex1': llamadoDeEnfermeriaCuidamasterLlamadorEx1Landing,
      'pantalla-t1-b': llamadoDeEnfermeriaCuidamasterPantallaT1BLanding,
      'pantalla-t6': llamadoDeEnfermeriaCuidamasterPantallaT6Landing,
      'reloj-receptor-de-llamados': llamadoDeEnfermeriaCuidamasterRelojReceptorDeLlamadosLanding,   
    },
    'localizadores-para-restaurantes': {
      root: localizadoresParaRestaurantesLanding,
      'localizadores-rec-v3': localizadoresParaRestaurantesLandingLocalizadoresRecV3,
      'localizadores-cir-c2': localizadoresParaRestaurantesLandingLocalizadoresCirC2,
    },
    'rollos-de-fichos-para-turnos': {
      root: rollosDeFichosParaTurnosLanding,
    },
    'dispensador-de-tickets': {
      root: dispensadorDeTicketsLanding,
      'dispensador-de-tickets-caracol': dispensadorDeTicketsLandingDispensadorDeTicketsCaracol,
    },
    'llamadores-de-meseros': {
      root: llamadoresDeMeserosLanding,
    },
    'sistema-de-turnos-turnomaster': {
      root: sistemasDeTurnosTurnomasterLanding,
    },
    'encuesta-virtual-opinamaster': {
      root: encuestaVirtualOpinamasterLanding,
    },
    'llamadores-de-meseros': {
      root: llamadoresDeMeserosLanding,
      'hablador-de-mesa': llamadoresDeMeserosLandingHabladorDeMesa,
      'control-numerico': llamadoresDeMeserosLandingControlNumerico,
      'reloj-receptor-de-llamados': llamadoresDeMeserosLandingRelojReceptorDeLlamados,
      'pantalla-t1-b': llamadoresDeMeserosLandingPantallaT1BLanding,
      'pantalla-t6': llamadoresDeMeserosLandingPantallaT6Landing,
      'llamador-de-meseros-e2-b': llamadoresDeMeserosLandingLlamadorDeMeserosE2BLanding,
      'llamador-de-meseros-e2-n-con-tecla-pagar': llamadoresDeMeserosLandingLlamadorDeMeserosE2NConTeclaPagarLanding,
    }
  }
};