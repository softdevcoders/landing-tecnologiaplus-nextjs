"use client";
import { useState } from "react";
import BlogCard from "../Cards/Blog/BlogCard";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Pagination.module.scss";

const Pagination = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = posts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.container}>
      {/* Contenedor de las tarjetas */}
      <div className={styles.grid}>
        {selectedItems.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className={styles.pagination}>
        {/* Flecha izquierda */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`${styles.arrow} ${
            currentPage === 1 ? styles.hidden : ""
          }`}
        >
          <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
        </button>

        {/* Números de página */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`${styles.button} ${
              currentPage === i + 1 ? styles.active : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Flecha derecha */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`${styles.arrow} ${
            currentPage === totalPages ? styles.hidden : ""
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
