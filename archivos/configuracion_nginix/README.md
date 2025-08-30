# 🔐 Protección de Staging con Autenticación Básica

## 📋 Resumen
- URL: `https://development.tecnologiaplus.com`
- Protección: Autenticación básica (usuario y contraseña)
- Archivos importantes:
  - `development-nginx.conf` - Configuración de nginx
  - `generar-credenciales.sh` - Script para crear usuario

## 🛠️ Configuración Inicial (Solo una vez)

1. **Instalar herramienta de contraseñas**
```bash
# En Ubuntu/Debian
sudo apt-get install apache2-utils

# En CentOS/RHEL
sudo yum install httpd-tools
```

2. **Crear script de credenciales**
```bash
# Crear directorio si no existe
sudo mkdir -p /etc/nginx/scripts/

# Crear el archivo del script
sudo nano /etc/nginx/scripts/generar-credenciales.sh
```

3. **Copiar este contenido en el archivo** (con nano):
```bash
#!/bin/bash

# Script para generar credenciales de autenticación básica
# Uso: ./generar-credenciales.sh

echo "🔐 Generador de Credenciales para Staging"
echo "========================================"

# Verificar si htpasswd está instalado
if ! command -v htpasswd &> /dev/null; then
    echo "❌ Error: htpasswd no está instalado"
    echo "En Ubuntu/Debian: sudo apt-get install apache2-utils"
    echo "En CentOS/RHEL: sudo yum install httpd-tools"
    exit 1
fi

# Crear credenciales
PASSWD_FILE="/etc/nginx/.htpasswd"

echo "📝 Creando credenciales..."
echo "Ingresa la contraseña cuando se te solicite"
echo ""

# Crear usuario staging
htpasswd -c $PASSWD_FILE staging_user

echo ""
echo "✅ Credenciales creadas en: $PASSWD_FILE"
echo ""
echo "👥 CREDENCIALES PARA TU EQUIPO:"
echo "================================"
echo ""
echo "🔹 Usuario: staging_user"
echo "   Contraseña: [la que escribiste]"
echo ""
echo "Para acceder a: https://development.tecnologiaplus.com"
```

4. **Dar permisos y ejecutar**
```bash
# Dar permisos de ejecución
sudo chmod +x /etc/nginx/scripts/generar-credenciales.sh

# Ejecutar el script
sudo /etc/nginx/scripts/generar-credenciales.sh
```

## 👥 Cómo se ve para el equipo

Cuando alguien visita el staging, verá:

```
┌─────────────────────────────────┐
│ Authentication Required         │
├─────────────────────────────────┤
│ Staging - Acceso Restringido   │
│                                │
│ Username: [staging_user     ]  │
│ Password: [••••••••••]         │
│                                │
│   [Cancel]    [Sign In]        │
└─────────────────────────────────┘
```

## 🔄 Cambiar contraseña
```bash
sudo htpasswd /etc/nginx/.htpasswd staging_user
```

## 💡 Tips
- El navegador recordará las credenciales
- No necesitas volver a escribirlas cada vez
- Funciona en todos los navegadores
- 100% protección contra indexación de Google

## 🔄 Reiniciar nginx
```bash
# Después de toda la configuración, reiniciar nginx
sudo systemctl restart nginx
# o
sudo service nginx restart
``` 


```
# pull-frontend-image-and-run-container:
  #   name: Deploy Frontend Container
  #   runs-on: self-hosted
  #   needs: [retrieve-environment-variable, build-push-docker-image]
  #   environment: ${{ needs.retrieve-environment-variable.outputs.environment_name }}
  #   steps:      
  #     - name: Pull Docker Image
  #       run: |
  #         echo ${{ env.SHH_USER_PASSWORD }} | sudo -S docker pull ${{ env.DOCKER_IMAGE }}:${{ env.DOCKER_IMAGE_VERSION }}
      
  #     - name: Stop Current Running Container
  #       run: |
  #         echo ${{ env.SHH_USER_PASSWORD }} | sudo -S docker rm -f ${{ env.DOCKER_CONTAINER_NAME }} || true
      
  #     - name: Run Docker Container
  #       run: |
  #         echo ${{ env.SHH_USER_PASSWORD }} | sudo -S docker run -d \
  #           --restart unless-stopped \
  #           -p ${{ env.DOCKER_HOST_PORT }}:${{ env.DOCKER_CONTAINER_PORT }} \
  #           -e GMAIL_USER=${{ env.GMAIL_USER }} \
  #           -e GMAIL_RECIPIENTS=${{ env.GMAIL_RECIPIENTS }} \
  #           -e GMAIL_APP_PASSWORD='${{ env.GMAIL_APP_PASSWORD }}' \
  #           -e SHOULD_ROBOTS_INDEX='${{ env.SHOULD_ROBOTS_INDEX }}' \
  #           -e NEXT_PUBLIC_BASE_URL=${{ env.NEXT_PUBLIC_BASE_URL }} \
  #           -e NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${{ env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }} \
  #           -e NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=${{ env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID }} \
  #           --name ${{ env.DOCKER_CONTAINER_NAME }} \
  #           ${{ env.DOCKER_IMAGE }}:${{ env.DOCKER_IMAGE_VERSION }}
            
  #     - name: Prune Docker Images unused
  #       run: |
  #         echo ${{ env.SHH_USER_PASSWORD }} | sudo -S docker image prune -f
  ```