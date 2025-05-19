import posts from "@/data/blogs";
import { sortByDate } from "@/lib/sort-by-date";

const filterAndPaginatePosts = ({ posts, page, pageSize, categoryFilter, exclude }) => {
  let filteredPosts = posts;

  if (categoryFilter) {
    filteredPosts = posts.filter(post =>
      post.categories.includes(categoryFilter)
    );
  }

  if (exclude.length > 0) {
    filteredPosts = filteredPosts.filter(post =>
      !exclude.includes(post.id)
    );
  }
  
  filteredPosts = sortByDate(filteredPosts);
  
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const paginatedPosts = filteredPosts.slice((page - 1) * pageSize, page * pageSize);

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      pageSize,
    },
  };
};

export const getPosts = ({ category, page = 1, pageSize = 9, allPosts = false, exclude = [] }) => {
  if (allPosts) {
    return posts;
  }

  return filterAndPaginatePosts({ posts, page, pageSize, categoryFilter: category, exclude });
}