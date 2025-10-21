"use client";

import { useState, useEffect } from "react";
import Viewer3D from "./3dViewer";

/**
 * Wrapper que asegura que el Viewer3D solo se renderice en el cliente
 * Útil para casos donde hay problemas de hidratación más complejos
 */
const ClientOnly3DViewer = ({ children, fallback = null, ...props }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback || (
      <div style={{ 
        width: '100%', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'rgba(221, 221, 221, 1)',
        borderRadius: '8px'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '16px',
          color: '#666',
          fontSize: '14px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p>Preparando modelo 3D...</p>
        </div>
      </div>
    );
  }

  return <Viewer3D {...props}>{children}</Viewer3D>;
};

export default ClientOnly3DViewer;
