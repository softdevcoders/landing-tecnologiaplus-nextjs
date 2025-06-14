'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './pagination.module.scss';

const Pagination = ({ totalPages, currentPage }) => {
  const [isMobile, setIsMobile] = useState(false);
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getVisiblePages = () => {
    let pages = [];
    const maxVisiblePages = isMobile ? 3 : 7;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // En móvil, asegurarnos de que la página actual siempre esté visible
    if (isMobile) {
      // Si estamos cerca del inicio
      if (currentPage <= 2) {
        pages = [1, 2, 3];
      }
      // Si estamos cerca del final
      else if (currentPage >= totalPages - 1) {
        pages = [totalPages - 2, totalPages - 1, totalPages];
      }
      // Si estamos en medio
      else {
        pages = [currentPage - 1, currentPage, currentPage + 1];
      }

      return pages;
    }

    // Lógica para desktop
    pages.push(1);

    let start = Math.max(2, currentPage - Math.floor((maxVisiblePages - 3) / 2));
    let end = Math.min(totalPages - 1, start + maxVisiblePages - 3);

    // Ajustar start si end está muy cerca de totalPages
    start = Math.max(2, end - (maxVisiblePages - 3));

    // Agregar elipsis si es necesario
    if (start > 2) {
      pages.push('...');
    }

    // Agregar páginas del medio
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Agregar elipsis si es necesario
    if (end < totalPages - 1) {
      pages.push('...');
    }

    // Siempre mostrar la última página
    if (totalPages !== 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      {showPrevious && (
        <Link
          href={`?page=${currentPage - 1}`}
          className={`${styles.paginationButton} ${styles.navigationButton}`}
        >
          Anterior
        </Link>
      )}

      <div className={styles.pageNumbers}>
        {getVisiblePages().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>
          ) : (
            <Link
              key={page}
              href={`?page=${page}`}
              className={`${styles.paginationButton} ${+currentPage === page ? styles.active : ''}`}
            >
              {page}
            </Link>
          )
        ))}
      </div>

      {showNext && (
        <Link
          href={`?page=${currentPage + 1}`}
          className={`${styles.paginationButton} ${styles.navigationButton}`}
        >
          Siguiente
        </Link>
      )}
    </div>
  );
};

export default Pagination; 