import Image from 'next/image';
import { getOptimizedImageUrl } from "@/lib/imageUtils";

export default function ProductSpecs() {
  return (
    <div data-specs="true">
      <ul>
        <li>
          <Image
            width={30}
            height={34}
            src={getOptimizedImageUrl({ url: "v1757702111/icono_precios_justos", width: 50, quality: 80 })}
            alt="Icono de precios justos representado con un pulgar arriba en color destacado"
            title="Icono precios justos"
            unoptimized={true}
          />
          <p>Precios Justos</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src={getOptimizedImageUrl({ url: "v1757702119/icono_proteccion_al_comprador", width: 50, quality: 80 })}
            unoptimized={true}
            alt="Icono de protección al comprador representado con un escudo y candado"
            title="Icono de protección al comprador"
          />
          <p>Protección al comprador</p>
        </li>
        <li>
            <Image
              width={30}
              height={34}
              src={getOptimizedImageUrl({ url: "v1757702115/icono_garantia_superior", width: 50, quality: 80 })}
              unoptimized={true}
              alt="Icono de garantía superior representado con con medalla y estrella"
              title="Icono de garantía superior"
            />
          <p>Garantía superior</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src={getOptimizedImageUrl({ url: "v1757702107/icono_envios_colombia_latinoamerica", width: 50, quality: 80 })}
            unoptimized={true}
            alt="Icono de Envíos en Colombia y Latinoamérica"
            title="Icono de envíos para Colombia y Latinoamérica"
          />
          <p>Envíos en Colombia y Latinoamérica</p>
        </li>
      </ul>
    </div>
  );
} 