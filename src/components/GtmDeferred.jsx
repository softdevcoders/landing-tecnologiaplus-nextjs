'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Loads Google Tag Manager only after the user interacts (pointer / scroll / key).
 * – Evita bloquear el hilo principal durante el primer render.
 * – Compatible con navegadores modernos y legacy (usa mousedown / touchstart / keydown).
 * – Fallback: si no hay interacción en 10 s, se carga igualmente.
 */
export default function GtmDeferred() {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  // In dev, avisa si falta la variable de entorno
  if (process.env.NODE_ENV !== 'production' && !gtmId) {
    // eslint-disable-next-line no-console
    console.warn('[GtmDeferred] Falta NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, GTM no cargará.');
  }

  useEffect(() => {
    if (!gtmId) return;

    const loadGtm = () => {
      if (window.__gtmLoaded) return; // evita duplicados
      window.__gtmLoaded = true;

      const s = document.createElement('script');
      s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      s.async = true;
      document.head.appendChild(s);

      removeListeners();
    };

    const removeListeners = () => {
      ['click','pointerdown','mousedown','touchstart','keydown','scroll'].forEach((evt)=>{
        window.removeEventListener(evt, loadGtm);
      });
    };

    ['click','pointerdown','mousedown','touchstart'].forEach((evt)=>{
      window.addEventListener(evt, loadGtm, { once:true, passive:true });
    });
    window.addEventListener('keydown', loadGtm, { once:true });
    window.addEventListener('scroll', loadGtm, { once:true, passive:true });

    // Fallback: carga tras 10 s si no hay interacción
    const timeoutId = setTimeout(loadGtm, 10000);

    return () => {
      clearTimeout(timeoutId);
      removeListeners();
    };
  }, []);

  // Bootstrap del dataLayer (imprescindible antes de cargar gtm.js)
  return (
    <Script id="gtm-datalayer" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];`}
    </Script>
  );
} 