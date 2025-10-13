import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Make Buffer available globally for gray-matter
window.Buffer = Buffer;

// Import all markdown files
const posts = import.meta.glob('../components/blog/posts/*.md', { as: 'raw', eager: true });

// Parse all posts
export const getAllPosts = () => {
  const allPosts = [];

  for (const path in posts) {
    const { data, content } = matter(posts[path]);
    allPosts.push({
      ...data,
      content,
      path,
    });
  }

  // Sort by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Get a single post by slug
export const getPostBySlug = (slug) => {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
};

// Get related posts (random selection, excluding current post)
export const getRelatedPosts = (currentSlug, count = 3) => {
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);

  // Shuffle and return first 'count' posts
  const shuffled = otherPosts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
