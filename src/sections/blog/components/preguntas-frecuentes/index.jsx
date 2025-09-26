import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { 
  llamadoresDeMeserosPreguntasFrecuentes, 
  localizadoresDeRestaurantesPreguntasFrecuentes,
  llamadoresEnfermeriaPreguntasFrecuentes,
  turneroTurnoexpressPreguntasFrecuentes,
  sistemasDeTurnosTurnomasterPreguntasFrecuentes
} from "@/config/preguntas-frecuentes";
import { routes } from "@/config/routes";

const PreguntasFrecuentesBlog = ({ categoryKey }) => { 
  let preguntasFrecuentes;

  switch (categoryKey) {
    case routes.blog.children.llamadoresDeMeseros.category_key:
      preguntasFrecuentes = llamadoresDeMeserosPreguntasFrecuentes;
      break;
    case routes.blog.children.localizadoresParaRestaurantes.category_key:
      preguntasFrecuentes = localizadoresDeRestaurantesPreguntasFrecuentes;
      break;
    case routes.blog.children.llamadoDeEnfermeria.category_key:
      preguntasFrecuentes = llamadoresEnfermeriaPreguntasFrecuentes;
      break;
    case routes.blog.children.turneroTurnoexpress.category_key:
      preguntasFrecuentes = turneroTurnoexpressPreguntasFrecuentes;
      break;
    case routes.blog.children.sistemasDeTurnosTurnomaster.category_key:
      preguntasFrecuentes = sistemasDeTurnosTurnomasterPreguntasFrecuentes;
      break;
    default:  
      preguntasFrecuentes = null;
  }

  if (!preguntasFrecuentes) return null;

  return (
    <PreguntasFrecuentes preguntasFrecuentes={preguntasFrecuentes || []} />
  )
}

export default PreguntasFrecuentesBlog;