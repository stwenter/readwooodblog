import { Link, routes } from '@redwoodjs/router'
import BlogPostCell from 'src/components/BlogPostCell'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
const BlogPostPage = ({id}) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
