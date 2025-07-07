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