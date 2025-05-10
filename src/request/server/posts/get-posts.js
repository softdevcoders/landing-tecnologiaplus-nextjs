import posts from "@/data/blogs";
import { sortByDate } from "@/lib/sort-by-date";

const filterAndPaginatePosts = ({ posts, page, pageSize, categoriesFilter }) => {
  let filteredPosts = posts;

  if (categoriesFilter) {
    filteredPosts = posts.filter(post =>
      post.categories.some(category => categoriesFilter.includes(category))
    );
  }

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const paginatedPosts = filteredPosts.slice((page - 1) * pageSize, page * pageSize);

  return {
    posts: sortByDate(paginatedPosts),
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      pageSize,
    },
  };
};

export const getPosts = ({ categories, page, pageSize = 8 }) => {
  return filterAndPaginatePosts({ posts, page, pageSize, categoriesFilter: categories });
}