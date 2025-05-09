import posts from "@/data/blogs";
import { sortByDate } from "@/lib/sort-by-date";

export const getPosts = () => {
  return sortByDate(posts);
}