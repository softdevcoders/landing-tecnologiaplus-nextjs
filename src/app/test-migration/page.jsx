"use client";

import { useState } from 'react';
import ProductGallery from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ProductGallery/ProductGallery';
import ProductGalleryNew from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ProductGallery/ProductGalleryNew';

const TestMigration = () => {
  const [showNew, setShowNew] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #dee2e6'
      }}>
        <h1>🔄 Comparación: Implementación Actual vs Nueva</h1>
        <p>Página: <strong>/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/</strong></p>
        
        {/* Toggle */}
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={() => setShowNew(false)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: !showNew ? '#007bff' : '#6c757d',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            📦 Implementación Actual
          </button>
          <button
            onClick={() => setShowNew(true)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: showNew ? '#28a745' : '#6c757d',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            ✨ Nueva Implementación
          </button>
        </div>
      </div>

      {/* Comparison Info */}
      <div style={{
        padding: '20px',
        backgroundColor: showNew ? '#d4edda' : '#fff3cd',
        border: `1px solid ${showNew ? '#c3e6cb' : '#ffeaa7'}`,
        margin: '20px'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: showNew ? '#155724' : '#856404' }}>
          {showNew ? '✨ Nueva Implementación' : '📦 Implementación Actual'}
        </h3>
        
        {showNew ? (
          <div>
            <p><strong>Características mejoradas:</strong></p>
            <ul style={{ marginBottom: 0 }}>
              <li>🎨 <strong>Selector de colores visual</strong> - Círculos de colores elegantes</li>
              <li>🔍 <strong>Zoom avanzado</strong> - Zoom que sigue el cursor (estilo IKEA)</li>
              <li>📱 <strong>Navegación mejorada</strong> - Embla carousel con touch optimizado</li>
              <li>🎯 <strong>Thumbnails verticales/horizontales</strong> - Responsive automático</li>
              <li>⚡ <strong>Mejor rendimiento</strong> - Optimizaciones de carga y memoria</li>
              <li>♿ <strong>Accesibilidad</strong> - ARIA labels y navegación por teclado</li>
            </ul>
          </div>
        ) : (
          <div>
            <p><strong>Implementación actual:</strong></p>
            <ul style={{ marginBottom: 0 }}>
              <li>🎨 Selector de colores básico con imágenes</li>
              <li>🖼️ Galería simple con navegación</li>
              <li>📱 Responsive básico</li>
              <li>⚙️ Lógica de estado manual</li>
            </ul>
          </div>
        )}
      </div>

      {/* Component Display */}
      <div style={{ minHeight: '800px' }}>
        {showNew ? <ProductGalleryNew /> : <ProductGallery />}
      </div>

      {/* Migration Guide */}
      <div style={{
        padding: '20px',
        backgroundColor: '#e7f3ff',
        border: '1px solid #bee5eb',
        margin: '20px'
      }}>
        <h3 style={{ color: '#0056b3', margin: '0 0 15px 0' }}>
          🚀 Guía de Migración
        </h3>
        <div style={{ color: '#0056b3' }}>
          <p><strong>Para migrar esta página:</strong></p>
          <ol>
            <li>Reemplazar el import del <code>ProductGallery</code> actual</li>
            <li>Estructurar los datos en el formato del nuevo <code>GaleriaVerMas</code></li>
            <li>Mantener el <code>BackButton</code> y <code>TinesPreguntasButton</code></li>
            <li>Ajustar estilos si es necesario</li>
          </ol>
          
          <p><strong>Beneficios inmediatos:</strong></p>
          <ul>
            <li>✅ Selector de colores más elegante y funcional</li>
            <li>✅ Zoom avanzado que mejora la experiencia del usuario</li>
            <li>✅ Mejor rendimiento en móviles</li>
            <li>✅ Código más mantenible y reutilizable</li>
            <li>✅ Consistencia con otros productos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestMigration; 