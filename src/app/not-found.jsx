import NotFoundSection from '@/sections/not-found';

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
   <NotFoundSection />
  );
} 