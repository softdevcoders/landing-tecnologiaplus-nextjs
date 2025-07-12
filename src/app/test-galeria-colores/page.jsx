"use client";

import { useState } from 'react';
import ProductWithColors, { ProductWithoutColors, ProductWithGradients } from '@/components/galeria-ver-mas/examples/ProductWithColors';

const TestGaleriaColores = () => {
  const [activeExample, setActiveExample] = useState('withColors');

  const examples = {
    withColors: {
      title: 'Producto con Colores',
      description: 'Ejemplo de producto con múltiples colores que cambian las imágenes',
      component: <ProductWithColors />
    },
    withoutColors: {
      title: 'Producto sin Colores',
      description: 'Ejemplo de compatibilidad hacia atrás sin colores',
      component: <ProductWithoutColors />
    },
    withGradients: {
      title: 'Producto con Gradientes',
      description: 'Ejemplo de producto con colores gradientes',
      component: <ProductWithGradients />
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1>🎨 Prueba de Galería con Selector de Colores</h1>
        <p>Prueba la nueva funcionalidad del componente GaleriaVerMas con selector de colores</p>
      </div>

      {/* Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {Object.entries(examples).map(([key, example]) => (
          <button
            key={key}
            onClick={() => setActiveExample(key)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: activeExample === key ? '#007bff' : '#f8f9fa',
              color: activeExample === key ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {example.title}
          </button>
        ))}
      </div>

      {/* Example Info */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '30px',
        border: '1px solid #e9ecef'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>
          {examples[activeExample].title}
        </h2>
        <p style={{ margin: 0, color: '#666' }}>
          {examples[activeExample].description}
        </p>
      </div>

      {/* Instructions */}
      <div style={{
        backgroundColor: '#e7f3ff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #bee5eb'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#0056b3' }}>
          📋 Instrucciones de Prueba:
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#0056b3' }}>
          <li>Si hay selector de colores, prueba seleccionar diferentes colores</li>
          <li>Observa cómo cambian las imágenes automáticamente</li>
          <li>Prueba el zoom haciendo clic en las imágenes</li>
          <li>Navega entre imágenes usando las flechas o thumbnails</li>
          <li>Verifica que funcione en móviles y desktop</li>
        </ul>
      </div>

      {/* Example Component */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        minHeight: '500px'
      }}>
        {examples[activeExample].component}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3>🚀 Características Implementadas:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {[
            'Selector de colores visual',
            'Cambio dinámico de imágenes',
            'Zoom con seguimiento de cursor',
            'Navegación con thumbnails',
            'Compatibilidad hacia atrás',
            'Soporte para gradientes',
            'Responsive design',
            'Context API para estado global'
          ].map((feature, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '14px',
                border: '1px solid #c3e6cb'
              }}
            >
              ✅ {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestGaleriaColores; 