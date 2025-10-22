import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { 
  llamadoresDeMeserosPreguntasFrecuentes, 
  localizadoresDeRestaurantesPreguntasFrecuentes,
  llamadoresEnfermeriaPreguntasFrecuentes,
  turneroTurnoexpressPreguntasFrecuentes,
  sistemasDeTurnosTurnomasterPreguntasFrecuentes,
  dispensadorDeTicketsPreguntasFrecuentes,
  rollosDeFichosParaTurnosPreguntasFrecuentes,
  rollosTermicosPreguntasFrecuentes
} from "@/config/preguntas-frecuentes";
import { routes } from "@/config/routes";

const PreguntasFrecuentesBlog = ({ categoryKey }) => { 
  let preguntasFrecuentes;
  let title;

  switch (categoryKey) {
    case routes.blog.children.llamadoresDeMeseros.category_key:
      preguntasFrecuentes = llamadoresDeMeserosPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre llamadores de meseros";
      break;
    case routes.blog.children.localizadoresParaRestaurantes.category_key:
      preguntasFrecuentes = localizadoresDeRestaurantesPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre el avisador de pedidos";
      break;
    case routes.blog.children.llamadoDeEnfermeria.category_key:
      preguntasFrecuentes = llamadoresEnfermeriaPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre el llamador de enfermería";
      break;
    case routes.blog.children.turneroTurnoexpress.category_key:
      preguntasFrecuentes = turneroTurnoexpressPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre el Turnero Digital Digiturno";
      break;
    case routes.blog.children.sistemasDeTurnosTurnomaster.category_key:
      preguntasFrecuentes = sistemasDeTurnosTurnomasterPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre Sistema de turnos de espera";
      break;
    case routes.blog.children.dispensadorDeTickets.category_key:
      preguntasFrecuentes = dispensadorDeTicketsPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre el dispensador de turnos";
      break;
    case routes.blog.children.rollosDeFichosParaTurnos.category_key:
      preguntasFrecuentes = rollosDeFichosParaTurnosPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre rollos de fichos para turnos";
      break;
    case routes.blog.children.rollosDePapelTermico.category_key:
      preguntasFrecuentes = rollosTermicosPreguntasFrecuentes;
      title = "Preguntas frecuentes sobre rollos de papel térmico";
      break;
    default:  
      preguntasFrecuentes = null;
  }

  if (!preguntasFrecuentes) return null;

  return (
    <PreguntasFrecuentes 
      preguntasFrecuentes={preguntasFrecuentes || []} 
      title={title} 
    />
  )
}

export default PreguntasFrecuentesBlog;