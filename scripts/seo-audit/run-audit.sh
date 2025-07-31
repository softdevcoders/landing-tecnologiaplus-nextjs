#!/bin/bash

# Script de auditoría SEO para Tecnología Plus
# Uso: ./run-audit.sh [test|full|report]

set -e

# Colores para la consola
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensaje de error
error() {
    echo -e "${RED}❌ Error: $1${NC}" >&2
    exit 1
}

# Función para mostrar mensaje de éxito
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar mensaje informativo
info() {
    echo -e "${BLUE}ℹ️ $1${NC}"
}

# Función para mostrar mensaje de advertencia
warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

# Verificar que Node.js esté instalado
check_nodejs() {
    if ! command -v node &> /dev/null; then
        error "Node.js no está instalado. Por favor, instala Node.js para continuar."
    fi
    
    NODE_VERSION=$(node --version)
    success "Node.js encontrado: $NODE_VERSION"
}

# Verificar que los scripts existan
check_scripts() {
    local scripts=("seo-audit.js" "test-quick.js" "generate-report.js")
    
    for script in "${scripts[@]}"; do
        if [[ ! -f "$script" ]]; then
            error "No se encontró el script: $script"
        fi
    done
}

# Función para mostrar ayuda
show_help() {
    echo "🔍 AUDITORÍA SEO - TECNOLOGIAPLUS.COM"
    echo "====================================="
    echo ""
    echo "Uso: $0 [test|full|report]"
    echo ""
    echo "Opciones:"
    echo "  test   - Ejecutar prueba rápida (5 URLs clave)"
    echo "  full   - Ejecutar auditoría completa (118 URLs) + reporte"
    echo "  report - Generar solo el reporte en Markdown"
    echo ""
    echo "Ejemplos:"
    echo "  $0 test"
    echo "  $0 full"
    echo "  $0 report"
    echo ""
    echo "Descripción:"
    echo "  Este script verifica que las paginaciones del blog estén desindexadas"
    echo "  y que el resto del sitio esté correctamente indexado para SEO."
}

# Función principal
main() {
    # Verificar argumentos
    if [[ $# -eq 0 ]]; then
        show_help
        exit 1
    fi
    
    # Verificar dependencias
    check_nodejs
    check_scripts
    
    case "$1" in
        "test")
            info "Ejecutando prueba rápida..."
            node test-quick.js
            success "Prueba rápida completada"
            ;;
            
        "full")
            info "Ejecutando auditoría completa..."
            echo "Esto puede tomar varios minutos..."
            echo ""
            node seo-audit.js
            
            echo ""
            info "Generando reporte en Markdown..."
            node generate-report.js
            
            success "Auditoría completada"
            ;;
            
        "report")
            info "Generando reporte en Markdown..."
            node generate-report.js
            success "Reporte generado"
            ;;
            
        "help"|"-h"|"--help")
            show_help
            ;;
            
        *)
            error "Opción inválida: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Ejecutar función principal
main "$@" 