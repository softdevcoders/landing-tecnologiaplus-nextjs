import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Página no encontrada | Tecnología Plus',
  description: 'Lo sentimos, la página que estás buscando no existe o ha sido movida.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <Link href="/" className={styles.button}>
        Volver a la página de inicio
      </Link>
    </div>
  );
} 