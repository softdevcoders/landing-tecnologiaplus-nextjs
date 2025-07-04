import Image from 'next/image';
import style from './related-products.module.scss';

export default function ProductSpecs() {
  return (
    <div className={style.related__products__specs}>
      <ul className={style.related__products__specs__list}>
        <li className={style.related__products__specs__list__item}>
          <div className={style.related__products__specs__list__item__icon}>
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
              alt="icono pulgar arriba"
              className={style.related__products__specs__list__item__icon__img}
            />
          </div>
          <p className={style.related__products__specs__list__item__text}>Precios Justos</p>
        </li>
        <li className={style.related__products__specs__list__item}>
          <div className={style.related__products__specs__list__item__icon}>
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
              alt="icono de seguridad"
              className={style.related__products__specs__list__item__icon__img}
            />
          </div>
          <p className={style.related__products__specs__list__item__text}>Protección al comprador</p>
        </li>
        <li className={style.related__products__specs__list__item}>
          <div className={style.related__products__specs__list__item__icon}>
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
              alt="icono de excelencia"
              className={style.related__products__specs__list__item__icon__img}
            />
          </div>
          <p className={style.related__products__specs__list__item__text}>Garantía superior</p>
        </li>
        <li className={style.related__products__specs__list__item}>
          <div className={style.related__products__specs__list__item__icon}>
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_500/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
              alt="icono de Envíos en Colombia y Latinoamérica"
              className={style.related__products__specs__list__item__icon__img}
            />
          </div>
          <p className={style.related__products__specs__list__item__text}>Envíos en Colombia y Latinoamérica</p>
        </li>
      </ul>
    </div>
  );
} 