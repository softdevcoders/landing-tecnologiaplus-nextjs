'use client';

import ErrorSection from '@/sections/error';

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
    <ErrorSection />
  );
} 