import { useParams, Navigate } from 'react-router-dom';
import BlogContentTemplate from '../components/blogdetails/BlogContentTemplate';
import { getPostBySlug, getRelatedPosts } from '../lib/blogUtils';

function BlogPost() {
  const { slug } = useParams();

  // Get post data
  const post = getPostBySlug(slug);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(slug, 3);

  return <BlogContentTemplate post={post} relatedPosts={relatedPosts} />;
}

export default BlogPost;
