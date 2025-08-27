import PreguntasFrecuentes from "@/components/preguntas-frecuentes";
import { 
  llamadoresDeMeserosPreguntasFrecuentes, 
  localizadoresDeRestaurantesPreguntasFrecuentes,
  llamadoresEnfermeriaPreguntasFrecuentes
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
    case routes.blog.children.llamadoDeEnfermeriaCuidamaster.category_key:
      preguntasFrecuentes = llamadoresEnfermeriaPreguntasFrecuentes;
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