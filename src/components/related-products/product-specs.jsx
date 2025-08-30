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
            src={getOptimizedImageUrl({ url: "v1738349925/xcbtnf1wh1en4taujsdx_avnfkj", width: 50, quality: 80 })}
            alt="icono pulgar arriba"
            unoptimized={true}
          />
          <p>Precios Justos</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src={getOptimizedImageUrl({ url: "v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl", width: 50, quality: 80 })}
            unoptimized={true}
            alt="icono de seguridad"
          />
          <p>Protección al comprador</p>
        </li>
        <li>
            <Image
              width={30}
              height={34}
              src={getOptimizedImageUrl({ url: "v1738349921/jg3stajnopybox4xxdkd_favvxk", width: 50, quality: 80 })}
              unoptimized={true}
              alt="icono de excelencia"
            />
          <p>Garantía superior</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src={getOptimizedImageUrl({ url: "v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0", width: 50, quality: 80 })}
            unoptimized={true}
            alt="icono de Envíos en Colombia y Latinoamérica"
          />
          <p>Envíos en Colombia y Latinoamérica</p>
        </li>
      </ul>
    </div>
  );
} 