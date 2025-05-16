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

export default {
  default: defaultMetadata,
  blog: {
    root: blog,
    'localizadores-para-restaurantes': localizadoresParaRestaurantes,
    'llamadores-de-meseros': llamadoresDeMeseros,
    'llamado-de-enfermeria-cuidamaster': llamadoDeEnfermeriaCuidamaster,
    'sistema-de-turnos-turnomaster': sistemasDeTurnosTurnomaster,
    'turnero-turnoexpress': turneroTurnoexpress,
    'dispensador-de-tickets': dispensadorDeTickets,
    'rollos-de-fichos-para-turnos': rollosDeFichosParaTurnos,
    'rollos-de-papel-termico': rollosDePapelTermico,
    'calificador-de-servicio-al-cliente-opinamaster': calificadorDeServicioAlClienteOpinamaster,
    'encuesta-virtual-opinamaster': encuestaVirtualOpinamaster
  }
};