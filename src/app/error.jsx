'use client';

import Link from 'next/link';
import styles from './error.module.scss';
import Header from '@/components/layout/header/Header';

export const metadata = {
  title: 'Error 500 | Tecnología Plus',
  description: 'Lo sentimos, ha ocurrido un error en el servidor.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Error() {
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