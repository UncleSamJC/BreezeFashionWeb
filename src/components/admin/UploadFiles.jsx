import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { colors, typography } from '../../lib/designTokens';

function UploadFiles() {
  const [file, setFile] = useState(null);
  const [version, setVersion] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  // Load uploaded files on mount
  useEffect(() => {
    loadUploadedFiles();
  }, []);

  // Load files from Supabase
  const loadUploadedFiles = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('product_pdfs')
        .list('', {
          limit: 10,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' },
        });

      if (error) {
        console.error('Error loading files:', error);
        return;
      }

      // Filter out folders, only show PDF files
      const pdfFiles = data.filter(file => file.name.endsWith('.pdf'));
      setUploadedFiles(pdfFiles);
    } catch (error) {
      console.error('Error in loadUploadedFiles:', error);
    }
  };

  // Validate file
  const validateFile = (file) => {
    // Check file type
    if (file.type !== 'application/pdf') {
      return 'Only PDF files are allowed';
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return 'File size must be less than 5MB';
    }

    return null;
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      addFile(selectedFile);
    }
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      addFile(droppedFile);
    }
  };

  // Add file to upload queue
  const addFile = (newFile) => {
    setError('');

    const validationError = validateFile(newFile);
    if (validationError) {
      setError(`${newFile.name}: ${validationError}`);
    } else {
      setFile(newFile);
      setVersion(''); // Reset version when new file is selected
    }
  };

  // Remove file from queue
  const removeFile = () => {
    setFile(null);
    setVersion('');
  };

  // Upload file to Supabase
  const uploadFile = async () => {
    if (!file) return;

    // Validate version
    if (!version.trim()) {
      setError('Please enter a version number');
      return;
    }

    setIsUploading(true);
    setError('');
    setSuccessMessage('');

    try {
      const timestamp = Date.now();
      const storagePath = `${timestamp}-${file.name}`;

      // Step 1: Upload file to Storage
      const { error: uploadError } = await supabase.storage
        .from('product_pdfs')
        .upload(storagePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      // Step 2: Save metadata to database
      const { error: dbError } = await supabase
        .from('downloadable_pdfs_info')
        .insert({
          storage_path: storagePath,
          display_name: file.name,
          version: version.trim(),
          file_size: file.size,
          file_type: 'PDF',
        });

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      setSuccessMessage('File uploaded successfully!');
      setFile(null);
      setVersion('');
      loadUploadedFiles();

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || 'Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Delete file from Supabase
  const deleteFile = async (fileName) => {
    if (!confirm(`Are you sure you want to delete ${fileName}?`)) return;

    try {
      const { error } = await supabase.storage
        .from('product_pdfs')
        .remove([fileName]);

      if (error) {
        console.error('Delete error:', error);
        setError(`Failed to delete ${fileName}`);
      } else {
        setSuccessMessage(`${fileName} deleted successfully`);
        loadUploadedFiles();
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      setError('Failed to delete file');
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div>
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="p-12 rounded-xl border-2 border-dashed text-center mb-8 transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: isDragging ? colors.background.isabelline : colors.background.primary,
          borderColor: isDragging ? colors.primary : colors.border.medium,
        }}
        onClick={() => document.getElementById('file-input').click()}
      >
        <div className="flex flex-col items-center gap-4">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: colors.primary }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <div>
            <h3
              className="text-xl mb-2"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
              }}
            >
              Upload PDF File
            </h3>
            <p
              className="text-sm mb-4"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              Drag and drop a file here, or click to browse
            </p>
          </div>

          <input
            type="file"
            id="file-input"
            accept=".pdf,application/pdf"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />

          <button
            className="px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: colors.button.primary,
              color: colors.text.light,
              fontFamily: typography.fontFamily.body,
            }}
          >
            Choose File
          </button>

          <p
            className="text-xs"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
          >
            Supported format: PDF only (Max 5MB)
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="p-4 rounded-lg mb-6"
          style={{
            backgroundColor: '#fee',
            color: '#c33',
            fontFamily: typography.fontFamily.body,
          }}
        >
          {error}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div
          className="p-4 rounded-lg mb-6"
          style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            fontFamily: typography.fontFamily.body,
          }}
        >
          ✓ {successMessage}
        </div>
      )}

      {/* File to Upload */}
      {file && (
        <div className="mb-8">
          <h3
            className="text-xl mb-4"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
            }}
          >
            File to Upload
          </h3>

          <div
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: colors.background.primary }}
          >
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: colors.primary }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="flex-1">
                <p
                  className="font-medium"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                  }}
                >
                  {file.name}
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  {formatFileSize(file.size)}
                </p>
              </div>

              {!isUploading && (
                <button
                  onClick={removeFile}
                  className="px-3 py-1 rounded text-sm transition-all duration-300 hover:opacity-80"
                  style={{
                    backgroundColor: colors.background.isabelline,
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.body,
                  }}
                >
                  Remove
                </button>
              )}
            </div>

            {/* Version Input */}
            <div>
              <label
                htmlFor="version"
                className="block mb-2 text-sm font-medium"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.primary,
                }}
              >
                Version *
              </label>
              <input
                type="text"
                id="version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="e.g., v2.5"
                disabled={isUploading}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-primary transition-all"
                style={{
                  fontFamily: typography.fontFamily.body,
                  borderColor: colors.border.medium,
                  backgroundColor: colors.background.isabelline,
                }}
              />
            </div>
          </div>

          <button
            onClick={uploadFile}
            disabled={isUploading || !version.trim()}
            className="px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: colors.button.primary,
              color: colors.text.light,
              fontFamily: typography.fontFamily.body,
            }}
          >
            {isUploading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      )}

      {/* Recently Uploaded Files */}
      <div>
        <h3
          className="text-2xl mb-2"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
          }}
        >
          Recently Uploaded Files ({uploadedFiles.length})
        </h3>
        <p className='mb-6'>
          最多显示10条
        </p>


        {uploadedFiles.length === 0 ? (
          <div
            className="p-8 rounded-lg text-center"
            style={{ backgroundColor: colors.background.primary }}
          >
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              No files uploaded yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedFiles.map((file) => (
              <div
                key={file.name}
                className="p-4 rounded-lg flex items-center gap-4"
                style={{ backgroundColor: colors.background.primary }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.background.isabelline }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.primary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="flex-1 overflow-hidden">
                  <p
                    className="font-medium truncate"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    {file.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                    }}
                  >
                    {formatFileSize(file.metadata?.size || 0)}
                  </p>
                </div>

                <button
                  onClick={() => deleteFile(file.name)}
                  className="px-3 py-1 rounded text-xs transition-all duration-300 hover:opacity-80"
                  style={{
                    backgroundColor: '#fee',
                    color: '#c33',
                    fontFamily: typography.fontFamily.body,
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFiles;
