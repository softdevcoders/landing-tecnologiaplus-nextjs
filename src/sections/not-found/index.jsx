import Link from 'next/link';
import styles from './not-found.module.scss';
import Header from '@/components/header/Header';

export default function NotFoundSection() {
  return (
    <>
      <Header headerAlt={true} />
      <div className={styles.container}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link href="/" className={styles.button}>
          Volver a la página de inicio
        </Link>
      </div>
    </>
  );
} 