import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import { llamadoresEnfermeriaPreguntasFrecuentes } from "@/config/preguntas-frecuentes"

const LlamadoDeEnfermeriaFQASection = () => {
  return (
    <PreguntasFrecuentes  
      preguntasFrecuentes={llamadoresEnfermeriaPreguntasFrecuentes}
      title="Preguntas frecuentes sobre el llamador de enfermería"
    />
  )
}

export default LlamadoDeEnfermeriaFQASection;