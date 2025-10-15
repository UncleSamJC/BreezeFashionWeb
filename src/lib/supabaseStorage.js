import { supabase } from './supabase';

/**
 * Upload an image to the blog_posts_imgs bucket (public)
 * @param {File} file - The image file to upload
 * @returns {Promise<{url: string, path: string}>} - The public URL and storage path
 */
export async function uploadBlogImage(file) {
  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const fileExt = file.name.split('.').pop();
    const fileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog_posts_imgs')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('blog_posts_imgs')
      .getPublicUrl(filePath);

    return {
      url: publicUrl,
      path: filePath
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
}

/**
 * Upload a markdown file to the blog_posts_md_files bucket
 * @param {string} content - The markdown content to upload
 * @param {string} fileName - The name for the file (should include .md extension)
 * @returns {Promise<{path: string}>} - The storage path
 */
export async function uploadBlogMarkdown(content, fileName) {
  try {
    // Ensure filename ends with .md
    const finalFileName = fileName.endsWith('.md') ? fileName : `${fileName}.md`;

    // Generate unique filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${finalFileName}`;

    // Convert string content to Blob
    const blob = new Blob([content], { type: 'text/markdown' });

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog_posts_md_files')
      .upload(uniqueFileName, blob, {
        cacheControl: '3600',
        upsert: false,
        contentType: 'text/markdown'
      });

    if (error) {
      throw error;
    }

    return {
      path: uniqueFileName
    };
  } catch (error) {
    console.error('Error uploading markdown:', error);
    throw new Error(`Failed to upload markdown file: ${error.message}`);
  }
}

/**
 * Delete an image from blog_posts_imgs bucket
 * @param {string} path - The storage path to delete
 * @returns {Promise<void>}
 */
export async function deleteBlogImage(path) {
  try {
    const { error } = await supabase.storage
      .from('blog_posts_imgs')
      .remove([path]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error(`Failed to delete image: ${error.message}`);
  }
}

/**
 * Delete a markdown file from blog_posts_md_files bucket
 * @param {string} path - The storage path to delete
 * @returns {Promise<void>}
 */
export async function deleteBlogMarkdown(path) {
  try {
    const { error } = await supabase.storage
      .from('blog_posts_md_files')
      .remove([path]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting markdown:', error);
    throw new Error(`Failed to delete markdown file: ${error.message}`);
  }
}

/**
 * List all markdown files in the blog_posts_md_files bucket
 * @returns {Promise<Array<{name: string, updated_at: string}>>} - Array of file objects
 */
export async function listAllBlogPosts() {
  try {
    const { data, error } = await supabase.storage
      .from('blog_posts_md_files')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (error) {
      throw error;
    }

    // Filter out any folders and only return .md files
    return data.filter(file => file.name.endsWith('.md'));
  } catch (error) {
    console.error('Error listing blog posts:', error);
    throw new Error(`Failed to list blog posts: ${error.message}`);
  }
}

/**
 * Get the content of a specific markdown file
 * @param {string} fileName - The name of the file to retrieve
 * @returns {Promise<string>} - The markdown content as text
 */
export async function getBlogPostContent(fileName) {
  try {
    const { data, error } = await supabase.storage
      .from('blog_posts_md_files')
      .download(fileName);

    if (error) {
      throw error;
    }

    // Convert blob to text
    const text = await data.text();
    return text;
  } catch (error) {
    console.error('Error downloading blog post:', error);
    throw new Error(`Failed to download blog post: ${error.message}`);
  }
}
