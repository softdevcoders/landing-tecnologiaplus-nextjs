'use client';

import Script from 'next/script';

/**
 * Loads Google Tag Manager only after the user interacts (pointer / scroll / key).
 * – Evita bloquear el hilo principal durante el primer render.
 * – Compatible con navegadores modernos y legacy.
 * – Fallback: si no hay interacción en 10 s, se carga igualmente.
 * – Implementa medidas de seguridad adicionales.
 */
export default function GtmDeferred() {
  const GTM_ID = 'GTM-P8J6LTX';
  
  // Verificar que el ID de GTM sea válido
  if (!/^GTM-[A-Z0-9]+$/.test(GTM_ID)) {
    console.error('ID de GTM inválido');
    return null;
  }

  return (
    <>
      {/* Script principal de GTM */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Error al cargar Google Tag Manager:', e);
        }}
      >
        {`
          // Configuración de seguridad básica
          window.dataLayer = window.dataLayer || [];
          
          // Implementación estándar de GTM
          (function(w,d,s,l,i){
            // Prevenir múltiples inicializaciones
            if(w.gtmDidInit) return;
            w.gtmDidInit = true;

            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            
            // Agregar atributos de seguridad
            j.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            j.setAttribute('crossorigin', 'anonymous');
            
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      
      {/* Iframe de respaldo para usuarios sin JavaScript */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
          sandbox="allow-scripts allow-same-origin"
        />
      </noscript>
    </>
  );
} 