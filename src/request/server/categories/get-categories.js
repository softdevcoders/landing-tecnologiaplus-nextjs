import { categories } from '@/config/categories'
import { routes } from '@/config/routes'

export const getCategories = () => {
  return routes.blog.children
}