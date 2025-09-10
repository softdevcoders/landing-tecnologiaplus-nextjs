import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { llamadoresEnfermeriaPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoresEnfermeriaPreguntasFrecuentes = () => {
  return (
    <PreguntasFrecuentes preguntasFrecuentes={llamadoresEnfermeriaPreguntasFrecuentes} />
  )
}

export default LlamadoresEnfermeriaPreguntasFrecuentes;