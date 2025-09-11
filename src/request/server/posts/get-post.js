import { posts } from "@/data/blog";

export const getPost = ({ blogPostSlug }) => {
  return posts.find((post) => post.slug === blogPostSlug);
}