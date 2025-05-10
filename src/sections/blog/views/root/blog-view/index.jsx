import { getPosts } from '@/request/server/posts/get-posts';
import BlogMain from '@/sections/blog/components/blog-main';

const BlogView = ({ category, page }) => {
  const { posts, pagination } = getPosts({ category, page });
  
  return (
    <BlogMain posts={posts} pagination={pagination} />
  )
}

export default BlogView;