import Image from 'next/image';
import style from './blog-hero-section.module.scss';

const BlogHeroSection = () => {
  return (
    <section id="hero" aria-labelledby="heroHeading" className={style.blogHeroSection}>
      <Image
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jlxxsnlercoj0nihz4am_udppso.webp"
        alt="Background Image for Hero"
        width={200}
        height={200}
        priority
        fetchPriority="high"
        loading="eager"
        className={style.blogHeroSection__background}
      />
      <div className={style.blogHeroSection__overlay}>
        <h1 id="heroHeading" className={style.blogHeroSection__title}>
          BLOG
        </h1>
        <p className={style.blogHeroSection__description}>
          Descubre en nuestro blog cómo usamos la tecnología para que nuestros clientes puedan ofrecer un mejor servicio.
        </p>
        <p className={style.blogHeroSection__subDescription}>
          ¡Innovación para un mejor servicio!
        </p>
      </div>
    </section>
  );
}

export default BlogHeroSection;