import matter from 'gray-matter';
import { Buffer } from 'buffer';
import { listAllBlogPosts, getBlogPostContent } from './supabaseStorage';

// Make Buffer available globally for gray-matter
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

/**
 * Get all blog posts from Supabase Storage
 * @returns {Promise<Array>} - Array of blog post objects with metadata and content
 */
export const getAllPosts = async () => {
  try {
    // Get list of all markdown files
    const files = await listAllBlogPosts();

    // Download and parse each file
    const allPosts = await Promise.all(
      files.map(async (file) => {
        try {
          // Download file content
          const content = await getBlogPostContent(file.name);

          // Parse frontmatter
          const { data, content: markdownContent } = matter(content);

          return {
            ...data,
            content: markdownContent,
            fileName: file.name,
            updatedAt: file.updated_at,
          };
        } catch (error) {
          console.error(`Error processing file ${file.name}:`, error);
          return null;
        }
      })
    );

    // Filter out any failed posts and sort by date
    const validPosts = allPosts.filter(post => post !== null);
    return validPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
};

/**
 * Get a single post by slug
 * @param {string} slug - The post slug to find
 * @returns {Promise<Object|null>} - The post object or null if not found
 */
export const getPostBySlug = async (slug) => {
  try {
    const allPosts = await getAllPosts();
    return allPosts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
};

/**
 * Get related posts (random selection, excluding current post)
 * @param {string} currentSlug - The slug of the current post to exclude
 * @param {number} count - Number of related posts to return (default 3)
 * @returns {Promise<Array>} - Array of related post objects
 */
export const getRelatedPosts = async (currentSlug, count = 3) => {
  try {
    const allPosts = await getAllPosts();
    const otherPosts = allPosts.filter(post => post.slug !== currentSlug);

    // Shuffle and return first 'count' posts
    const shuffled = otherPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } catch (error) {
    console.error('Error getting related posts:', error);
    return [];
  }
};
