import Image from 'next/image';
import style from './related-products.module.scss';

export default function ProductSpecs() {
  return (
    <div data-specs="true">
      <ul>
        <li>
          <Image
            width={30}
            height={34}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
            alt="icono pulgar arriba"
          />
          <p>Precios Justos</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
            alt="icono de seguridad"
          />
          <p>Protección al comprador</p>
        </li>
        <li>
            <Image
              width={30}
              height={34}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
              alt="icono de excelencia"
            />
          <p>Garantía superior</p>
        </li>
        <li>
          <Image
            width={30}
            height={34}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
            alt="icono de Envíos en Colombia y Latinoamérica"
          />
          <p>Envíos en Colombia y Latinoamérica</p>
        </li>
      </ul>
    </div>
  );
} 