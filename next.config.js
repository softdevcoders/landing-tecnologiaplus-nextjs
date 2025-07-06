const path = require('path');
// Bundle analyzer (only when ANALYZE env var is set)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com', 'i.ytimg.com', '31.97.14.208', 'tecnologiaplus.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '31.97.14.208',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tecnologiaplus.com',
        pathname: '**',
      }
    ],
    // unoptimized: process.env.NODE_ENV === 'production',
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones específicas para Swiper
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000, // Increased to reduce CSS chunking
          cacheGroups: {
            // Combine all CSS into fewer chunks
            styles: {
              name: 'styles',
              test: /\.(css|scss|sass)$/,
              chunks: 'all',
              enforce: true,
              priority: 30,
            },
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'swiper',
              priority: 10,
              enforce: true,
            },
            swiperModules: {
              test: /[\\/]node_modules[\\/]swiper[\\/]modules[\\/]/,
              name: 'swiper-modules',
              priority: 20,
              enforce: true,
            },
          },
        },
      };
    }

    // Alias Swiper to dynamic client-only wrapper to reduce bundle size
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'swiper/react': path.resolve(__dirname, 'src/components/ui/SwiperDynamic'),
    };

    // Optimize CSS loading in production - Next.js handles this automatically
    // Additional CSS optimization is handled by the splitChunks configuration above

    // You can customize webpack configuration here
    return config;
  },
  async redirects() {
    return [
      // Redirigir HTTP a HTTPS de manera segura
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        permanent: true,
        destination: 'https://tecnologiaplus.com/:path*',
        basePath: false
      },
      // Redirigir www a non-www de manera segura
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tecnologiaplus.com'
          }
        ],
        permanent: true,
        destination: 'https://tecnologiaplus.com/:path*',
        basePath: false
      },
      // { source: '/calificadores-de-servicio', destination: '/calificador-de-servicio-al-cliente-opinamaster', permanent: true },
      // { source: '/software-de-turnos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/integrar-sistema-de-espera-inteligente-con-software-de-gestion', destination: '/blog/sistema-de-turnos/integrar-sistema-espera-software-gestion-facturacion', permanent: true },
      // { source: '/sabes-como-escoger-el-localizador-para-restaurantes-ideal-para-tus-clientes-de-bogota', destination: '/blog/localizadores-para-restaurantes/escoger-localizador-ideal-restaurante-bogota', permanent: true },
      // { source: '/como-mejorar-un-hogar-geriatrico-o-gerontologico', destination: '/blog/llamado-de-enfermeria/como-mejorar-servicio-enfermeria-en-geriatricos', permanent: true },
      // { source: '/llamado-de-enfermeria-como-mejorar-en-geriatrico', destination: '/blog/llamado-de-enfermeria/como-mejorar-servicio-enfermeria-en-geriatricos', permanent: true },
      // { source: '/como-elegir-localizadores-para-restaurante/feed', destination: '/blog/localizadores-para-restaurantes/como-elegir-localizadores-para-restaurantes', permanent: true },
      // { source: '/dispensador-de-turnos', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/llamado-', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/calificador-de-servicio-al-cliente-opinamaster/encuesta-virtual-opinamaster', destination: '/encuesta-virtual-opinamaster', permanent: true },
      // { source: '/calificador-de-servicio-al-cliente-opinamaster/encuestas-de-satisfaccion', destination: '/encuesta-virtual-opinamaster', permanent: true },
      // { source: '/gestor-de-turnos', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/llamador-de-pacientes', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/blog/page/3', destination: '/blog', permanent: true },
      // { source: '/gestion-de-colas-y-turnos', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/por-que-usar-localizadores-de-clientes', destination: '/blog/localizadores-para-restaurantes/por-que-usar-localizadores-para-restaurantes', permanent: true },
      // { source: '/turneros-una-solucion-para-el-llamado-de-clientes', destination: '/gestor-de-turnos-digital-o-manual', permanent: true },
      // { source: '/calificador-de-servicio', destination: '/calificador-de-servicio-al-cliente-opinamaster', permanent: true },
      // { source: '/despachador-de-tickets', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/despachador-para-tickets', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/localizadores-para-restaurantes-de-autoservicio-en-colombia-6-puntos-clave-que-debes-saber-antes', destination: '/blog/localizadores-para-restaurantes/autoservicio-colombia-6-claves', permanent: true },
      // { source: '/llamadores-de-enfermera-en-el-sector-salud', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/rollos-numericos', destination: '/blog/rollos-de-fichos-para-turnos/todo-lo-que-necesitas-saber-numeros-guia-completa', permanent: true },
      // { source: '/crear-un-plan-de-manejo-de-turnos-para-tu-equipo', destination: '/blog/sistema-de-turnos/pantalla-de-turnos-plan-eficaz-equipo', permanent: true },
      // { source: '/8-cosas-que-no-pueden-faltar-en-un-restaurante-autoservicio-2', destination: '/blog/localizadores-para-restaurantes/autoservicio-restaurante-8-infaltables', permanent: true },
      // { source: '/pagos', destination: '/contacto', permanent: true },
      // { source: '/calificador-de-servicio/encuestas-de-satisfaccion', destination: '/calificador-de-servicio-al-cliente-opinamaster', permanent: true },
      // { source: '/turnero//1000', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/blog-tecnologiaplus', destination: '/blog', permanent: true },
      // { source: '/mejorar-la-atencion-al-cliente-en-autoservicio', destination: '/blog/localizadores-para-restaurantes/localizadores-clientes-autoservicio', permanent: true },
      // { source: '/como-mejorar-la-atencion-en-los-gimnasios', destination: '/blog/llamadores-de-meseros/mejorar-atencion-gimnasios-llamador-entrenadores', permanent: true },
      // { source: '/mejj-la-atencion-en-los-gimnasios-a-traves-del-llamador-de-entrenadores', destination: '/blog/llamadores-de-meseros/mejorar-atencion-gimnasios-llamador-entrenadores', permanent: true },
      // { source: '/localizadores-', destination: '/localizadores-para-restaurantes', permanent: true },
      // { source: '/mejorar-la-satisfaccion-del-cliente', destination: '/blog/calificador-servicio-al-cliente/como-mejorar-la-satisfaccion-del-cliente', permanent: true },
      // { source: '/como-medir-la-calidad-del-servicio-al-cliente', destination: '/blog/calificador-servicio-al-cliente/evaluar-calidad-servicio-cliente', permanent: true },
      // { source: '/exito-del-papel-termico-premium', destination: '/blog/rollos-de-papel-termico/secreto-del-exito-en-gestion-de-turnos', permanent: true },
      // { source: '/integrar-un-dispensador-a-tu-sistema-de-gestion', destination: '/blog/dispensador-de-tickets/integrar-dispensador-turnos-sistema-gestion', permanent: true },
      // { source: '/integrar-un-dispensador-de-turnos-sistema-de-gestion', destination: '/blog/dispensador-de-tickets/integrar-dispensador-turnos-sistema-gestion', permanent: true },
      // { source: '/localizadores-de-clientes', destination: '/localizadores-para-restaurantes', permanent: true },
      // { source: '/beneficios-de-invertir-en-un-sistema-de-llamado-de-pacientes', destination: '/blog/llamado-de-enfermeria/beneficios-invertir-en-sistemas-de-llamador-de-pacientes', permanent: true },
      // { source: '/llamador-de-pacientes-beneficios-de-invertir-en-estos-sistemas', destination: '/blog/llamado-de-enfermeria/beneficios-invertir-en-sistemas-de-llamador-de-pacientes', permanent: true },
      // { source: '/calificador-de-servicio-la-herramienta-clave-para-la-retroalimentacion-del-cliente', destination: '/blog/calificador-servicio-al-cliente/herramienta-retroalimentacion-cliente', permanent: true },
      // { source: '/localizadores-de-', destination: '/localizadores-para-restaurantes', permanent: true },
      // { source: '/como-elegir-la-mejor-opcion-de-localizadores-para-tu-restaurante', destination: '/blog/localizadores-para-restaurantes/como-elegir-localizadores-para-restaurantes', permanent: true },
      // { source: '/ventajas-del-software-de-turnos', destination: '/blog/sistema-de-turnos/5-ventajas-software-turnos', permanent: true },
      // { source: '/elegir-un-sistema-de-llamada-inalambrico-para-tu-farmacia', destination: '/blog/sistema-de-turnos/mejor-sistema-turnos-inalambrico-drogueria', permanent: true },
      // { source: '/clave-para-la-retroalimentacion-del-cliente', destination: '/blog/calificador-servicio-al-cliente/herramienta-retroalimentacion-cliente', permanent: true },
      // { source: '/medicion-de-servicio-al-cliente', destination: '/blog/calificador-servicio-al-cliente/evaluar-calidad-servicio-cliente', permanent: true },
      // { source: '/tecnologia-para-restaurantes-autoservicio-avisadores-de-clientes', destination: '/blog/localizadores-para-restaurantes/avisadores-clientes-restaurante-autoservicio', permanent: true },
      // { source: '/como-mejorar-la-atencion-en-hogares-del-adulto-mayor', destination: '/blog/llamado-de-enfermeria/como-mejorar-servicio-enfermeria-en-geriatricos', permanent: true },
      // { source: '/blog-tecnologiapnus', destination: '/', permanent: true },
      // { source: '/como-mejorar-un-restaurante', destination: '/blog/llamadores-de-meseros/como-mejorar-administracion-restaurantes', permanent: true },
      // { source: '/calificador-de-servicio-al-cliente', destination: '/calificador-de-servicio-al-cliente-opinamaster', permanent: true },
      // { source: '/llamadores-', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/blog-tecnologiaplus/page/3', destination: '/blog', permanent: true },
      // { source: '/como-garantizar-la-calidad-de-la-atencion-al-cliente', destination: '/blog/llamadores-de-meseros/como-mejorar-administracion-restaurantes', permanent: true },
      // { source: '/author/angelica', destination: '/', permanent: true },
      // { source: '/blog-tecnologiapnus/page/2', destination: '/blog', permanent: true },
      // { source: '/blog/page/2', destination: '/blog', permanent: true },
      // { source: '/blog/page/2', destination: '/blog', permanent: true },
      // { source: '/turnero-digiturno-el-caos-en-las-salas-de-espera-y-la-necesidad-de-orden', destination: '/blog/turnero/orden-en-salas-de-espera-digiturno', permanent: true },
      // { source: '/category/servicio-de-enfermeria', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/category/llamadores', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/category/rollos-termicos', destination: '/rollos-de-papel-termico', permanent: true },
      // { source: '/componentes-computadora', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/blog-tecnologiaplus/page/2', destination: '/blog', permanent: true },
      // { source: '/como-mejorar-la-atencion-al-cliente-en-un-restaurante', destination: '/blog/llamadores-de-meseros/como-mejorar-servicio-restaurante', permanent: true },
      // { source: '/el-exito-del-negocio-es-la-satisfaccion-del-cliente', destination: '/blog/llamadores-de-meseros/reducir-tiempo-de-espera-mejora-satisfaccion-del-cliente', permanent: true },
      // { source: '/7-estrategias-para-mejorar-la-satisfaccion-del-cliente-en-tu-restaurante', destination: '/blog/llamadores-de-meseros/llamadores-meseros-esenciales-elevar-nivel-restaurante', permanent: true },
      // { source: '/rollos-de-turnos', destination: '/rollos-de-fichos-para-turnos', permanent: true },
      // { source: '/productosistema-de-llamado-inalambrico', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/control_para_llamar_meseros', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/producto/pantalla-receptora-llamados', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/llamador-sencillo-negro-e4', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/producto/llamador-cordon-de-cuello-e3', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/blog-tecnologiaplus/page/2', destination: '/blog', permanent: true },
      // { source: '/producto/dispensador-turnos-tipo-caracol', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/producto/qr-para-ver-turno-en-celular', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/software-para-turnos//1000', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/pantalla-de-modulo-y-turno', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/digiturno-sencillo-blanco', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/digiturno-modulo-turno', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/turnero-con-niveles-m4', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/dispensador-de-turnos', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/producto/reloj_receptor_para_meseros', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/pantallas-para-turnos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/llamador-multitecla-negro', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/pantallas-para-turnos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/pantallas-para-turnos', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/rollos-de-turnos', destination: '/rollos-de-fichos-para-turnos', permanent: true },
      // { source: '/llamadores-de-enfermeras', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/llamado-enfermeras', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/producto/localizadores-circulares', destination: '/localizadores-para-restaurantes', permanent: true },
      // { source: '/producto/pantalla-8-llamados', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/llamadores-de-meseros', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/pantallas-para-turnos', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/turnero', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/producto/llamador-blanco-e2', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/producto/advanced-copia', destination: '/', permanent: true },
      // { source: '/producto/software-de-turnos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/digiturno', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/que-no-puede-faltar-en-un-restaurante-autoservicio', destination: '/blog/localizadores-para-restaurantes/autoservicio-restaurante-8-infaltables', permanent: true },
      // { source: '/producto/localizadores-para-restaurantes-rec', destination: '/localizadores-para-restaurantes', permanent: true },
      // { source: '/blog-tecnologiaplus/page/3', destination: '/blog', permanent: true },
      // { source: '/sensor-para-lavamanos', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/blog-tecnologiaplus/page/4', destination: '/blog', permanent: true },
      // { source: '/blog-tecnologiaplus/page/3', destination: '/blog', permanent: true },
      // { source: '/blog-tecnologiaplus/page/3', destination: '/blog', permanent: true },
      // { source: '/blog-tecnologiaplus/page/4', destination: '/blog', permanent: true },
      // { source: '/componentes-computadoraRedacci', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/rollos-termicos', destination: '/rollos-de-papel-termico', permanent: true },
      // { source: '/categoria-producto/general/page/3', destination: '/blog', permanent: true },
      // { source: '/equipos-para-pos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/producto/software-', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/robot-aspiradora', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/mejorar-servicio-restaurante', destination: '/blog/llamadores-de-meseros/como-mejorar-servicio-restaurante', permanent: true },
      // { source: '/como-organizar-las-filas', destination: '/blog/sistema-de-turnos/organizar-filas-turnero-digital', permanent: true },
      // { source: '/gestion-de-turnos', destination: '/blog/sistema-de-turnos/organizar-filas-turnero-digital', permanent: true },
      // { source: '/blog-turnero-turnoexpress', destination: '/blog/turnero', permanent: true },
      // { source: '/llamadores-de-personal', destination: '/llamadores-de-meseros', permanent: true },
      // { source: '/blog-tecnologia-plus/page/5', destination: '/blog', permanent: true },
      // { source: '/blog-localizadores-para-restaurantes', destination: '/blog/localizadores-para-restaurantes', permanent: true },
      // { source: '/blog-tecnologia-plus/page/4', destination: '/blog', permanent: true },
      // { source: '/blog-dispensador-de-tickets', destination: '/blog/dispensador-de-tickets', permanent: true },
      // { source: '/blog-llamadores-de-meseros', destination: '/blog/llamadores-de-meseros', permanent: true },
      // { source: '/como-elegir-localizadores-para-restaurante', destination: '/blog/localizadores-para-restaurantes/como-elegir-localizadores-para-restaurantes', permanent: true },
      // { source: '/como-mejorar-la-gestion-de-filas', destination: '/blog/sistema-de-turnos/mejorar-gestion-filas', permanent: true },
      // { source: '/localizadores-de-clientes-secreto-espera-agradable', destination: '/blog/localizadores-para-restaurantes/secreto-espera-agradable', permanent: true },
      // { source: '/por-que-usar-localizadores-para-restaurantes', destination: '/blog/localizadores-para-restaurantes/por-que-usar-localizadores-para-restaurantes', permanent: true },
      // { source: '/blog/calificador-servicio-al-cliente-opinamaster', destination: '/blog/calificador-servicio-al-cliente', permanent: true },
      // { source: '/localizadores-de-clientes-para-restaurantes-autoservicio', destination: '/blog/localizadores-para-restaurantes/localizadores-clientes-autoservicio', permanent: true },
      // { source: '/blog-sistema-de-turnos-turnomaster', destination: '/blog/sistema-de-turnos', permanent: true },
      // { source: '/5-ventajas-del-software-de-turnos', destination: '/blog/sistema-de-turnos/5-ventajas-software-turnos', permanent: true },
      // { source: '/blog-llamado-de-enfermeria-cuidamaster', destination: '/blog/llamado-de-enfermeria', permanent: true },
      // { source: '/blog-rollos-de-papel-termico', destination: '/blog/rollos-de-papel-termico', permanent: true },
      // { source: '/calificador-de-servicios/encuestas-de-satisfaccion', destination: '/encuesta-virtual-opinamaster', permanent: true },
      // { source: '/gestor-de-turnos-digital-o-manual', destination: '/blog/turnero/gestor-turnos-clientes-digitales-manuales', permanent: true },
      // { source: '/por-que-usar-calificadores-de-servicio', destination: '/blog/calificador-servicio-al-cliente/por-que-usar-calificadores-de-servicio', permanent: true },
      // { source: '/timbres-de-mesa-para-tu-restaurante', destination: '/blog/llamadores-de-meseros/implementar-timbres-de-mesa-para-restaurante', permanent: true },
      // { source: '/casos-de-exito-de-turneros-en-colombia', destination: '/blog/sistema-de-turnos/turneros-digitales-casos-exito-colombia', permanent: true },
      // { source: '/despachador-de-tickets-en-colombia-cuanto-invertir', destination: '/blog/dispensador-de-tickets/calcular-inversion-despachador-tickets-colombia', permanent: true },
      // { source: '/avisadores-de-clientes-tecnologia-para-restaurantes-autoservicio', destination: '/blog/localizadores-para-restaurantes/avisadores-clientes-restaurante-autoservicio', permanent: true },
      // { source: '/sistema-de-turnos-inalambrico-para-tu-drogueria', destination: '/blog/sistema-de-turnos/mejor-sistema-turnos-inalambrico-drogueria', permanent: true },
      // { source: '/por-que-implementar-un-sistema-de-turnos', destination: '/blog/sistema-de-turnos/importancia-sistema-turnos-negocios-beneficios', permanent: true },
      // { source: '/rollos-de-numeros-para-turnos-guia-completa', destination: '/blog/rollos-de-fichos-para-turnos/todo-lo-que-necesitas-saber-numeros-guia-completa', permanent: true },
      // { source: '/aumenta-las-propinas-con-llamadores-de-meseros', destination: '/blog/llamadores-de-meseros/aumenta-propinas-llamadores-de-meseros-en-restaurantes', permanent: true },
      // { source: '/blog-rollos-de-fichos-para-turnos', destination: '/blog/rollos-de-fichos-para-turnos', permanent: true },
      // { source: '/llamador-de-meseros-mejora-la-satisfaccion-del-cliente', destination: '/blog/llamadores-de-meseros/reducir-tiempo-de-espera-mejora-satisfaccion-del-cliente', permanent: true },
      // { source: '/por-que-usar-sistema-de-llamado-de-enfermeria', destination: '/blog/llamado-de-enfermeria/por-que-usar-sistema-llamado-de-enfermeria', permanent: true },
      // { source: '/llamadores-de-meseros-transforma-la-atencion-al-cliente', destination: '/blog/llamadores-de-meseros/transforma-atencion-cliente-llamadores-de-meseros', permanent: true },
      // { source: '/blog-calificador-de-servicio-al-cliente-opinamaster', destination: '/blog/calificador-servicio-al-cliente', permanent: true },
      // { source: '/llamadores-de-meseros-como-reducir-los-tiempos-de-espera', destination: '/blog/llamadores-de-meseros/como-reducir-tiempos-espera-restaurante', permanent: true },
      // { source: '/deberias-tener-un-dispensador-de-turnos-en-tu-negocio', destination: '/blog/dispensador-de-tickets/deberias-tener-dispensador-turnos-negocio', permanent: true },
      // { source: '/blog-llamado-de-enfermeria-cuidamaster-como-mejorar-servicio-enfermeria-en-geriatricos', destination: '/blog/llamado-de-enfermeria/como-mejorar-servicio-enfermeria-en-geriatricos', permanent: true },
      // { source: '/localizador-para-restaurantes-como-escoger-el-ideal-en-bogota', destination: '/blog/localizadores-para-restaurantes/escoger-localizador-ideal-restaurante-bogota', permanent: true },
      // { source: '/despachador-de-tickets-mejora-la-atencion-en-tu-negocio', destination: '/blog/dispensador-de-tickets/mejora-la-atencion-en-tu-negocio-con-un-despachador-de-tickets', permanent: true },
      // { source: '/blog/dispensador-de-tickets/despachador-de-tickets-mejora-la-atencion-en-tu-negocio', destination: '/blog/dispensador-de-tickets/mejora-la-atencion-en-tu-negocio-con-un-despachador-de-tickets', permanent: true },
      // { source: '/8-cosas-que-no-pueden-faltar-en-un-restaurante-autoservicio', destination: '/blog/localizadores-para-restaurantes/autoservicio-restaurante-8-infaltables', permanent: true },
      // { source: '/rollos-de-papel-termico-el-secreto-del-exito-gestionando-turnos', destination: '/blog/rollos-de-papel-termico/secreto-del-exito-en-gestion-de-turnos', permanent: true },
      // { source: '/timbre-de-llamado-de-enfermeria-mejora-la-experiencia-del-paciente', destination: '/blog/llamado-de-enfermeria/mejora-experiencia-paciente-con-timbre-llamado-enfermeria', permanent: true },
      // { source: '/integra-un-dispensador-de-turnos-con-tu-sistema-de-gestion', destination: '/blog/dispensador-de-tickets/integrar-dispensador-turnos-sistema-gestion', permanent: true },
      // { source: '/localizadores-para-restaurantes-de-autoservicio-en-colombia-6-puntos-claves', destination: '/blog/localizadores-para-restaurantes/autoservicio-colombia-6-claves', permanent: true },
      // { source: '/que-es-un-sistema-de-espera-inteligente-y-como-funciona', destination: '/blog/sistema-de-turnos/sistema-espera-inteligente-como-funciona', permanent: true },
      // { source: '/por-que-los-llamadores-de-meseros-son-claves-para-tu-restaurante', destination: '/blog/llamadores-de-meseros/llamadores-meseros-esenciales-elevar-nivel-restaurante', permanent: true },
      // { source: '/sistema-de-turnos-como-reducir-tiempo-de-espera-de-tus-clientes', destination: '/blog/sistema-de-turnos/reducir-tiempo-espera-gestion-turnos', permanent: true },
      // { source: '/calificadores-de-servicio-la-herramienta-clave-para-la-retroalimentacion-del-cliente', destination: '/blog/calificador-servicio-al-cliente/herramienta-retroalimentacion-cliente', permanent: true },
      // { source: '/llamadores-de-mesa-la-tecnologia-que-revoluciona-la-atecion-al-cliente', destination: '/blog/llamadores-de-meseros/llamadores-mesa-tecnologia-revoluciona-atencion-al-cliente', permanent: true },
      // { source: '/calificador-de-servicio-como-evaluar-la-calidad-del-servicio-al-cliente', destination: '/blog/calificador-servicio-al-cliente/evaluar-calidad-servicio-cliente', permanent: true },
      // { source: '/llamador-de-pacientes-conoce-los-beneficios-de-invertir-en-estos-sistemas', destination: '/blog/llamado-de-enfermeria/beneficios-invertir-en-sistemas-de-llamador-de-pacientes', permanent: true },
      // { source: '/los-aspectos-que-debe-tener-en-cuenta-al-comprar-rollos-de-turnos', destination: '/blog/rollos-de-fichos-para-turnos/aspectos-clave-comprar-rollos-turnos', permanent: true },
      // { source: '/mejora-la-atencion-en-los-gimnasios-a-traves-del-llamador-de-entrenadores', destination: '/blog/llamadores-de-meseros/mejorar-atencion-gimnasios-llamador-entrenadores', permanent: true },
      // { source: '/como-ahorrar-dinero-y-cuidar-el-medio-ambiente-con-rollos-de-papel-termico', destination: '/blog/rollos-de-papel-termico/como-ahorrar-dinero-medio-ambiente', permanent: true },
      // { source: '/que-es-el-papel-de-transferencia-termica-y-como-usarlo-en-tu-negocio', destination: '/blog/rollos-de-papel-termico/que-es-papel-transferencia-termica-como-usarlo', permanent: true },
      // { source: '/turnero-digital', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/turnero', destination: '/turnero-turnoexpress', permanent: true },
      // { source: '/llamado-de-enfermeria', destination: '/llamado-de-enfermeria-cuidamaster', permanent: true },
      // { source: '/rollos-de-turno', destination: '/rollos-de-fichos-para-turnos', permanent: true },
      // { source: '/dispensador-de-tiquetes', destination: '/dispensador-de-tickets', permanent: true },
      // { source: '/software-para-turnos', destination: '/sistema-de-turnos-turnomaster', permanent: true },
      // { source: '/rollos-termicos', destination: '/rollos-de-papel-termico', permanent: true },
      // { source: '/blog/turnero-turnoexpress/sistema-espera-inteligente-como-funciona', destination: '/blog/sistema-de-turnos/sistema-espera-inteligente-como-funciona', permanent: true },
    ];
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'react-icons',
      'lodash',
    ],
  },
  // Configuración del compilador SWC para optimizar para navegadores modernos
  compiler: {
    // Remover consoles en producción para optimizar el bundle
    removeConsole: process.env.NODE_ENV === 'production',
    // Minify CSS
    styledComponents: true,
  },
  // Enable source maps in production
  productionBrowserSourceMaps: false,
  // Configuración de caché
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hora
    pagesBufferLength: 5,
  },
  // Headers de seguridad actualizados
  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tecnologiaplus.com'
          }
        ],
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=(), serial=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https://*.cloudinary.com https://*.googleapis.com https://*.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://ssl.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://*.tawk.to https://embed.tawk.to; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com data:; font-src 'self' data: https://fonts.gstatic.com https://*.gstatic.com http://fonts.gstatic.com http://*.gstatic.com; img-src 'self' data: blob: https: https://www.google-analytics.com https://www.googletagmanager.com https://*.cloudinary.com https://*.google.com https://*.googleadservices.com; connect-src 'self' https://* wss://*; frame-src 'self' https://www.googletagmanager.com https://*.tawk.to https://tawk.to https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com; base-uri 'self'; form-action 'self'; worker-src 'self' blob:; object-src 'none'; media-src 'self' https://*.cloudinary.com"
          }
        ]
      }
    ];
  },
};

// Export wrapped config (adds bundle analyzer if enabled)
module.exports = withBundleAnalyzer(nextConfig); 