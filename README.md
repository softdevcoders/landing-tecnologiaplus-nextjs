# Tecnología Plus - Landing Page (Next.js 15)

![Logo Tecnología Plus](public/android-chrome-192x192.png)

## Descripción

Este repositorio contiene el código fuente de la página corporativa de **Tecnología Plus**, empresa colombiana especializada en soluciones tecnológicas como sistemas de turnos, llamadores de meseros y localizadores de clientes. El sitio está desarrollado con **Next.js 15** y **React 19**, implementa componentes Server/Client y está optimizado para SEO y rendimiento.

## Características principales

- **Next.js 15 (App Router)** con Server Components y Routing basado en archivos.
- **React 19** con el nuevo runtime concurrent.
- **SCSS Modules** para un aislamiento total de estilos.
- **Formularios de contacto** con React-Hook-Form y validaciones personalizadas; envío de correos mediante **Nodemailer** (sin backend adicional).
- **Optimización de imágenes** vía **next/Image** y el loader integrado de Next.js.
- **Carouseles y sliders** con **Swiper** y **Embla Carousel**.
- **Sitemap** autogenerado a partir de la configuración de rutas (`sitemap.js`).
- **Integración de Google Tag Manager/Analytics** usando `@next/third-parties`.
- **Botón flotante de WhatsApp** con mensaje contextual y rastreo de eventos.
- **Docker / docker-compose** para entornos de desarrollo y producción.

## Tecnologías y dependencias clave

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| next | 15.x | Framework principal |
| react | 19.x | Biblioteca UI |
| sass | 1.89.x | Pre-procesador de estilos |
| nodemailer | 7.x | Envío de correos |
| swiper | 11.x | Carruseles |
| embla-carousel-react | 8.x | Slider |
| next-cloudinary | 6.x | Imágenes optimizadas |
| react-hook-form | 7.x | Manejo de formularios |
| @hookform/resolvers | 5.x | Validación |
| zod | 3.x | Esquemas (opcional) |

## Requisitos previos

- Node.js 18.17 o superior
- pnpm 8 + (o npm/yarn)

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/tecnologiaplus/landing-tecnologiaplus-nextjs.git
cd landing-tecnologiaplus-nextjs

# Instala dependencias
pnpm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz con las siguientes claves:

```dotenv
# SMTP (Gmail)
GMAIL_USER=tu_correo@gmail.com
GMAIL_APP_PASSWORD=tu_clave_app
GMAIL_RECIPIENTS=ventas@tecnologiaplus.com

# Dominio público usado para generar el sitemap
NEXT_PUBLIC_BASE_URL=https://tecnologiaplus.com
```

### Gestión de nuevas variables de entorno

Cuando necesites **añadir una variable** para la infraestructura de despliegue automatizado, sigue estos pasos según el tipo de variable.

1. **Variable pública (`NEXT_PUBLIC_*`) – solo en build**

   - **Dockerfile**  
     ```Dockerfile
     ARG NEXT_PUBLIC_MI_API_KEY
     RUN echo "NEXT_PUBLIC_MI_API_KEY=$NEXT_PUBLIC_MI_API_KEY" >> .env.production
     ```
   - **GitHub Actions** (`frontend_ci_cd_pipeline.yml`)  
     ```yaml
     env:
       NEXT_PUBLIC_MI_API_KEY: ${{ vars.NEXT_PUBLIC_MI_API_KEY }}
     - name: Build Docker Image
       run: |
         docker build ... \
           --build-arg NEXT_PUBLIC_MI_API_KEY=${{ env.NEXT_PUBLIC_MI_API_KEY }} \
           ...
     ```
   - No es necesario pasar la variable con `-e` en el paso de `docker run`, pues queda incrustada en la imagen.

2. **Variable privada de runtime** (solo servidor)

   - **Dockerfile**: no requiere ningún cambio.
   - **GitHub Actions**  
     Define la variable en **Secrets** y añádela al paso de despliegue:
     ```yaml
     -e VAR_PRIVADA=${{ secrets.VAR_PRIVADA }} \
     ```

3. **Variable usada en build y runtime (no pública)**

   - **Dockerfile** (igual que pública, pero sin prefijo):
     ```Dockerfile
     ARG API_URL
     RUN echo "API_URL=$API_URL" >> .env.production
     ```
   - **GitHub Actions**  
     ```yaml
     env:
       API_URL: ${{ vars.API_URL }}
     - name: Build Docker Image
       run: |
         docker build ... --build-arg API_URL=${{ env.API_URL }} ...
     - name: Run Docker Container
       run: |
         docker run ... -e API_URL=${{ env.API_URL }} ...
     ```

> Todas las variables **sensibles** deben almacenarse en **GitHub Secrets**. Las que no lo sean (puertos, flags, etc.) pueden ir en **Environment Variables** dentro de cada entorno (`production`, `development`).

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en http://localhost:3000 |
| `pnpm build` | Compila la aplicación para producción (TurboPack) |
| `pnpm start` | Ejecuta la versión compilada |
| `pnpm lint` | Corre ESLint |
| `pnpm analyze` | Genera un reporte de tamaño del bundle |
| `pnpm generate-sitemap` | Genera `public/sitemap.xml` a partir de `src/config/routes.js` |

## Estructura del proyecto

```text
src/
│
├── app/              # Rutas y layouts (App Router)
│   ├── (home)/       # Página principal
│   ├── (landings)/   # Landing pages por producto
│   ├── blog/         # Blog corporativo
│   └── contacto/     # Página de contacto
│
├── components/       # Componentes reutilizables (Header, Footer…)
├── sections/         # Secciones independientes del sitio
├── config/           # Configuraciones globales (rutas, eventos, etc.)
├── hooks/            # Custom hooks
├── lib/              # Utilidades compartidas
└── styles/           # Estilos globales y mixins SCSS
```

## Despliegue

El proyecto está listo para desplegarse automatico usando **Github**, **Github Actions**, **Docker**, **Docker Hub**, **Actions Runner** en un **VPS en Hostinger**/
```

### VPS (CI/CD automatizado con Docker + GitHub Actions)

A continuación se muestra un resumen del proceso **real** de despliegue utilizado en producción.

1. **Build & push de la imagen Docker**
   - Un _workflow_ de GitHub Actions (`frontend_ci_cd_pipeline.yml`) se ejecuta en cada push a las ramas `main` o `development`.
   - La acción compila la aplicación con el `Dockerfile`, etiqueta la imagen como `usuario_docker/image:VERSION` y la publica en **Docker Hub**.

2. **Runner auto-alojado en el VPS**
   - En el VPS se creó el usuario `actions-runner` y se instaló un _self-hosted runner_.
   - Cuando la imagen está disponible, el runner ejecuta los pasos de despliegue: detiene el contenedor anterior, ejecuta `docker pull` y lanza la nueva versión con las variables de entorno necesarias (SMTP, dominio, Google Analytics, etc.).

3. **Exposición del servicio con Nginx**
   - Nginx actúa como _reverse-proxy_ y redirecciona el tráfico HTTPS:
     - `tecnologiaplus.com` → `localhost:5500` (producción).
     - `development.tecnologiaplus.com` → `localhost:5600` (staging).
   - Los archivos de los _virtual hosts_ se encuentran en `/etc/nginx/sites-available/*` y se habilitan mediante enlaces simbólicos a `sites-enabled`.

4. **Infraestructura recomendada del servidor (Hostinger VPS Ubuntu 22.04)**

   ```bash
   # Actualizar sistema
   sudo apt update && sudo apt dist-upgrade -y

   # Instalar dependencias básicas
   sudo apt install -y nginx git ufw curl apt-transport-https ca-certificates software-properties-common

   # Habilitar firewall
   sudo ufw allow "Nginx Full" && sudo ufw enable

   # Instalar Docker + docker-compose plugin
   curl -fsSL https://get.docker.com | bash
   sudo usermod -aG docker $USER  # opcional

   # (Opcional) Portainer
   docker volume create portainer_data
   docker run -d -p 9000:9000 --name portainer --restart always \
     -v /var/run/docker.sock:/var/run/docker.sock \
     -v portainer_data:/data portainer/portainer-ce
   ```

5. **Configuración rápida de Nginx para producción**

   ```nginx
   # /etc/nginx/sites-available/tecnologia-plus-frontend-prod
   server {
     listen 80;
     server_name tecnologiaplus.com www.tecnologiaplus.com;

     location / {
       proxy_pass http://localhost:5500;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   # Habilitar y recargar
   sudo ln -s /etc/nginx/sites-available/tecnologia-plus-frontend-prod \
            /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

6. **Gestión de variables de entorno y versiones**

   - Las variables sensibles (SMTP, claves API, credenciales de Docker Hub) se almacenan en **GitHub Secrets**.
   - Valores de infraestructura (puertos, nombres de contenedor, versión de la imagen) se definen como _Environment Variables_ en cada **Environment** de GitHub (`production`, `development`).
   - El job `retrieve-environment-variable` determina el _environment_ adecuado según la rama y expone ese valor al resto del pipeline.

7. **Limpieza automática y monitoreo**

   - Tras desplegar la nueva imagen, el pipeline ejecuta `docker image prune -f` para liberar espacio en disco.
   - Un workflow programado (`server_health_check.yml`) verifica la salud del sitio y envía alertas por email en caso de error.

## Licencia

El código fuente es **propiedad de Tecnología Plus**. Queda prohibida la reproducción total o parcial sin autorización expresa.

---

Hecho con ❤️ por el equipo de Tecnología Plus.
