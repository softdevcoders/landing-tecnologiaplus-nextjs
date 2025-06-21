import Link from 'next/link';
import styles from './error.module.scss';
import Header from '@/components/header/Header';

export default function ErrorSection() {
  return (
    <>
      <Header headerAlt={true} />
      <div className={styles.container}>
        <h1>Error 500 - Ha ocurrido un error en el servidor</h1>
        <p>Lo sentimos, ha ocurrido un error en el servidor. Por favor, intenta nuevamente más tarde.</p>
        <Link href="/" className={styles.button}>
          Volver a la página de inicio
        </Link>
      </div>
    </>
  );
} 