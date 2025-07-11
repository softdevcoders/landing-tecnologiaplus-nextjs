import { getPosts } from '@/request/server/posts/get-posts';
import BlogMain from '@/sections/blog/components/blog-main';

const BlogView = ({ page }) => {
  const { posts, pagination } = getPosts({ page });
  
  return (
    <BlogMain posts={posts} pagination={pagination} />
  )
}

export default BlogView;