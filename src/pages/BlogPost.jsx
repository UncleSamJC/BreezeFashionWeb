import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogContentTemplate from '../components/blogdetails/BlogContentTemplate';
import { getPostBySlug, getRelatedPosts } from '../lib/blogUtils';
import { colors, typography } from '../lib/designTokens';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPostData = async () => {
      try {
        setIsLoading(true);

        // Get post data
        const postData = await getPostBySlug(slug);

        if (!postData) {
          setNotFound(true);
          return;
        }

        setPost(postData);

        // Get related posts
        const related = await getRelatedPosts(slug, 3);
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error loading post:', error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPostData();
  }, [slug]);

  // If post not found, redirect to blog page
  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  // Loading state
  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colors.background.primary }}
      >
        <div className="text-center">
          <div
            className="text-2xl mb-4"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
            }}
          >
            Loading post...
          </div>
        </div>
      </div>
    );
  }

  return <BlogContentTemplate post={post} relatedPosts={relatedPosts} />;
}

export default BlogPost;
