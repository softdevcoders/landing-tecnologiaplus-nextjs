import posts from "@/data/blogs";
import { sortByDate } from "@/lib/sort-by-date";

const filterAndPaginatePosts = ({ posts, page, pageSize, categoryFilter }) => {
  let filteredPosts = posts;

  if (categoryFilter) {
    filteredPosts = posts.filter(post =>
      post.categories.includes(categoryFilter)
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

export const getPosts = ({ category, page, pageSize = 8 }) => {
  return filterAndPaginatePosts({ posts, page, pageSize, categoryFilter: category });
}