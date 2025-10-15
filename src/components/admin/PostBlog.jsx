import { useState } from "react";
import matter from "gray-matter";
import { colors, typography } from "../../lib/designTokens";
import { uploadBlogImage, uploadBlogMarkdown } from "../../lib/supabaseStorage";

function PostBlog() {
  const [mdFile, setMdFile] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("general");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // Handle MD file selection
  const handleMdFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.name.endsWith(".md")) {
        setError("Please select a valid .md file");
        return;
      }
      setMdFile(file);
      setError("");
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!file.name.endsWith(".md")) {
        setError("Please drop a valid .md file");
        return;
      }
      setMdFile(file);
      setError("");
    }
  };

  // Handle featured image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image type
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file");
        return;
      }

      // Validate image size (max 1MB)
      const maxSize = 1 * 1024 * 1024; // 1MB in bytes
      if (file.size > maxSize) {
        setError(
          "Image size must be less than 1MB. Please compress your image and try again."
        );
        setFeaturedImage(null);
        setImagePreview(null);
        e.target.value = ""; // Clear the file input
        return;
      }

      setFeaturedImage(file);
      setError("");

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!mdFile) {
      setError("Please select a markdown file to upload");
      return;
    }

    setIsUploading(true);
    setError("");
    setUploadStatus("Starting upload...");

    try {
      let featuredImageUrl = "";

      // Step 1: Upload featured image if provided
      if (featuredImage) {
        setUploadStatus("Uploading featured image...");
        const { url } = await uploadBlogImage(featuredImage);
        featuredImageUrl = url;
        setUploadStatus("Featured image uploaded successfully");
      }

      // Step 2: Read and parse MD file
      setUploadStatus("Reading markdown file...");
      const mdContent = await readFileAsText(mdFile);

      // Parse frontmatter
      const { data: frontmatter, content } = matter(mdContent);

      // Step 3: Update featuredImage and category in frontmatter
      if (featuredImageUrl) {
        frontmatter.featuredImage = featuredImageUrl;
      }
      frontmatter.category = category;

      // Step 4: Reconstruct markdown with updated frontmatter
      const updatedMd = matter.stringify(content, frontmatter);

      // Step 5: Upload markdown file to Supabase
      setUploadStatus("Uploading markdown file...");
      const { path } = await uploadBlogMarkdown(updatedMd, mdFile.name);

      // Success
      setUploadStatus(`✓ Blog post uploaded successfully! (${path})`);

      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload blog post");
      setUploadStatus("");
    } finally {
      setIsUploading(false);
    }
  };

  // Helper function to read file as text
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsText(file);
    });
  };

  // Reset form
  const resetForm = () => {
    setMdFile(null);
    setFeaturedImage(null);
    setImagePreview(null);
    setCategory("general");
    setUploadStatus("");
    setError("");
    // Reset file inputs
    document.getElementById("md-file-input").value = "";
    document.getElementById("image-file-input").value = "";
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: `1px solid ${colors.border.light}`,
    fontFamily: typography.fontFamily.body,
    fontSize: "1rem",
    backgroundColor: colors.background.primary,
    transition: "all 0.3s",
  };

  return (
    <div className="max-w-4xl">
      <div
        className="p-8 rounded-xl"
        style={{ backgroundColor: colors.background.primary }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Instructions */}
          <div
            className="p-4 rounded-lg mb-6"
            style={{ backgroundColor: colors.background.isabelline }}
          >
            <h3
              className="font-medium mb-2"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Upload Instructions
            </h3>
            <ul
              className="text-sm space-y-1 list-disc list-inside"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              <li>1. Select a category for your blog post</li>
              <li>
                2.Optionally upload a featured image - it will be added to the
                file(16:9 横宽比，小于1M)
              </li>
              <li>
                3.Upload a markdown (.md) file with frontmatter (slug, title,
                date, etc.)
              </li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={inputStyle}
              className="focus:outline-none focus:border-primary"
              disabled={isUploading}
            >
              <option value="general">General</option>
              <option value="Trending">Trending</option>
              <option value="Industry">Industry Insights</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Fashion Trends">Fashion Trends</option>
              <option value="Tips">Tips & Advice</option>
            </select>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label
              htmlFor="image-file-input"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Featured Image (optional)
            </label>
            <input
              type="file"
              id="image-file-input"
              accept="image/*"
              onChange={handleImageChange}
              style={inputStyle}
              className="focus:outline-none focus:border-primary"
              disabled={isUploading}
            />
            {featuredImage && (
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.primary,
                }}
              >
                Selected: {featuredImage.name}
              </p>
            )}

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <p
                  className="text-sm mb-2"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  Preview:
                </p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-lg max-h-64 object-cover"
                />
              </div>
            )}
          </div>

          {/* Markdown File Upload */}
          <div>
            <label
              htmlFor="md-file-input"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Markdown File (.md) *
            </label>

            {/* Drag & Drop Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="relative rounded-lg border-2 border-dashed p-8 text-center transition-all duration-300 cursor-pointer"
              style={{
                borderColor: isDragging ? colors.primary : colors.border.light,
                backgroundColor: isDragging
                  ? colors.background.isabelline
                  : colors.background.primary,
              }}
              onClick={() => document.getElementById("md-file-input").click()}
            >
              <input
                type="file"
                id="md-file-input"
                accept=".md"
                onChange={handleMdFileChange}
                className="hidden"
                disabled={isUploading}
              />

              <div className="space-y-2">
                <svg
                  className="mx-auto h-12 w-12"
                  style={{ color: colors.text.secondary }}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  <p className="text-sm">
                    <span style={{ color: colors.primary, fontWeight: 500 }}>
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs mt-1">Markdown files (.md) only</p>
                </div>
              </div>
            </div>

            {mdFile && (
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.primary,
                }}
              >
                ✓ Selected: {mdFile.name}
              </p>
            )}
          </div>

          {/* Upload Status */}
          {uploadStatus && (
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: colors.background.isabelline,
                color: colors.text.primary,
                fontFamily: typography.fontFamily.body,
              }}
            >
              {uploadStatus}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: "#fee",
                color: "#c33",
                fontFamily: typography.fontFamily.body,
              }}
            >
              Error: {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isUploading || !mdFile}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: colors.button.primary,
                color: colors.text.light,
                fontFamily: typography.fontFamily.body,
              }}
            >
              {isUploading ? "Uploading..." : "Upload Blog Post"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              disabled={isUploading}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80 disabled:opacity-50"
              style={{
                backgroundColor: colors.background.isabelline,
                color: colors.text.primary,
                fontFamily: typography.fontFamily.body,
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default PostBlog;
