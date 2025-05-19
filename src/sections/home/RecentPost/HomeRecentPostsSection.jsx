import Link from "next/link";
import style from "./HomeRecentPostsSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { routes } from "@/config/routes";
import { getPosts } from "@/request/server/posts/get-posts";
import CardHome from "@/sections/blog/components/card-home";

function HomeRecentPostsSection() {
  const { posts } = getPosts({ page: 1, pageSize: 3 });
  
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Publicaciones recientes</h2>
      <div className={style.products__container}>
        {posts.map((post, index) => (
          <CardHome key={index} post={post} />
        ))}
      </div>
      <Link
        href={routes.blog.url}
        className={style.btn__go_to_blog}
      >
        Visita nuestro blog
        <IoIosArrowForward className={style.icon__btn} />
      </Link>
    </section>
  );
}

export default HomeRecentPostsSection;
