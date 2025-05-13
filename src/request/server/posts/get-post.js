import posts from "@/data/blogs";

export const getPost = ({ blogPostSlug }) => {
  return posts.find((post) => post.slug === blogPostSlug);
}