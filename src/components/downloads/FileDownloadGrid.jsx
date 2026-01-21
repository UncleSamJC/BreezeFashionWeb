import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { colors, typography, borderRadius, transitions } from '../../lib/designTokens';
import { supabase } from '../../lib/supabase';

// 设置 PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function FileDownloadGrid({ downloads }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  // PDF 预览相关 state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState(null);

  // Group downloads by year and month
  const groupedDownloads = downloads.reduce((acc, download) => {
    const date = new Date(download.date);
    const key = `${date.toLocaleString('en-US', { month: 'long' })}, ${date.getFullYear()}`;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(download);

    return acc;
  }, {});

  const handleDownloadClick = (file) => {
    setSelectedFile(file);
    setIsModalOpen(true);
    setEmail('');
    setSubmitStatus(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setEmail('');
    setAgreeToEmails(false);
    setSubmitStatus(null);
  };

  // PDF 预览处理函数
  const handlePreviewClick = (file) => {
    setPreviewFile(file);
    setIsPreviewOpen(true);
    setPageNumber(1);
    setPdfLoading(true);
    setPdfError(null);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewFile(null);
    setNumPages(null);
    setPageNumber(1);
    setPdfError(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfLoading(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setPdfError('Failed to load PDF');
    setPdfLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Save email to subscribers table
      const { data: subscriberData, error: subscriberError } = await supabase
        .from('email_subscribers')
        .upsert(
          {
            email: email,
            source: `pdf_${selectedFile.name}`,
          },
          {
            onConflict: 'email',
            ignoreDuplicates: false,
          }
        )
        .select()
        .single();

      if (subscriberError && subscriberError.code !== '23505') {
        throw subscriberError;
      }

      // 2. Log the download
      await supabase.from('pdf_download_logs').insert({
        email: email,
        pdf_name: selectedFile.name,
        pdf_category: 'general',
        pdf_version: selectedFile.version,
        pdf_size: selectedFile.size,
        download_type: 'full',
        email_sent: false,
      });

      // 3. Trigger browser download
      const link = document.createElement('a');
      link.href = selectedFile.url;
      link.download = selectedFile.filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitStatus('success');

      // Close modal after 2 seconds
      setTimeout(() => {
        handleCloseModal();
      }, 2000);

    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Empty State */}
          {downloads.length === 0 && (
            <div
              className="text-center py-16 px-6 rounded-xl"
              style={{ backgroundColor: colors.background.isabelline }}
            >
              <svg
                className="w-16 h-16 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: colors.text.secondary }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3
                className="text-2xl mb-2"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.primary,
                }}
              >
                No files available to download
              </h3>
              <p
                className="text-base"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
                }}
              >
                Please check back later for new resources.
              </p>
            </div>
          )}

          {Object.entries(groupedDownloads).map(([period, files]) => (
            <div key={period} className="mb-16">
              {/* Period Title */}
              <h2
                className="text-2xl md:text-3xl lg:text-4xl mb-8"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.primary,
                  lineHeight: typography.lineHeight.tight,
                  letterSpacing: typography.letterSpacing.tight,
                }}
              >
                {period}
              </h2>

              {/* Files Table */}
              <div
                className="overflow-hidden"
                style={{
                  backgroundColor: colors.background.isabelline,
                  borderRadius: borderRadius.md,
                }}
              >
                {/* Table Header */}
                <div
                  className="hidden md:grid grid-cols-12 gap-4 px-6 py-4"
                  style={{
                    backgroundColor: colors.background.whiteChocolate,
                    fontFamily: typography.fontFamily.body,
                    fontWeight: typography.fontWeight.semibold,
                    color: colors.text.primary,
                  }}
                >
                  <div className="col-span-1">Version</div>
                  <div className="col-span-4">File Name</div>
                  <div className="col-span-2">Siz</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Upload Date</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Table Rows */}
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 items-center transition-all duration-300 hover:bg-opacity-50"
                    style={{
                      borderBottom: index < files.length - 1 ? `1px solid ${colors.border.light}` : 'none',
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                      backgroundColor: 'transparent',
                    }}
                  >
                    {/* Version */}
                    <div className="col-span-1 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        Version:
                      </span>
                      <span style={{ fontWeight: typography.fontWeight.medium, color: colors.text.secondary }}>
                        {file.version}
                      </span>
                    </div>

                    {/* Name - Clickable for Preview */}
                    <div className="col-span-1 md:col-span-4 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        File Name:
                      </span>
                      <button
                        onClick={() => handlePreviewClick(file)}
                        className="break-words text-left underline cursor-pointer"
                        style={{ color: colors.text.secondary }}
                      >
                        {file.name}
                      </button>
                    </div>

                    {/* Size */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        Size:
                      </span>
                      <span style={{ color: colors.text.secondary }}>
                        {file.size}
                      </span>
                    </div>

                    {/* Type */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        Type:
                      </span>
                      <span style={{ color: colors.text.secondary }}>
                        {file.type}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        Upload At:
                      </span>
                      <span style={{ color: colors.text.secondary, fontSize: typography.fontSize.sm }}>
                        {new Date(file.date).toLocaleDateString('zh-CN')}
                      </span>
                    </div>

                    {/* Download Button */}
                    <div className="col-span-1 flex justify-start md:justify-end mt-2 md:mt-0">
                      <button
                        onClick={() => handleDownloadClick(file)}
                        className="px-6 py-2 rounded-lg font-medium hover:scale-105"
                        style={{
                          backgroundColor: colors.button.primary,
                          color: colors.text.light,
                          fontFamily: typography.fontFamily.body,
                          transition: `all ${transitions.normal}`,
                          borderRadius: borderRadius.sm,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = colors.button.hover.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = colors.button.primary;
                        }}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Input Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-md rounded-2xl shadow-2xl"
            style={{
              backgroundColor: colors.background.primary,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="px-6 py-5 border-b flex items-center justify-between"
              style={{ borderColor: colors.border.light }}
            >
              <div>
                <h3
                  className="text-xl md:text-2xl"
                  style={{
                    fontFamily: typography.fontFamily.heading,
                    color: colors.text.primary,
                  }}
                >
                  Download Request
                </h3>
                {selectedFile && (
                  <p
                    className="text-sm mt-1"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                    }}
                  >
                    {selectedFile.name}
                  </p>
                )}
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-lg hover:bg-opacity-10 transition-all"
                style={{
                  color: colors.text.secondary,
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              {/* Info Message */}
              <div
                className="mb-6 p-4 rounded-lg flex gap-3"
                style={{ backgroundColor: colors.background.isabelline }}
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.primary }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p
                    className="font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                      fontSize: typography.fontSize.base,
                    }}
                  >
                    Provide your email, and we will send the file to you shortly.
                  </p>

                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      borderColor: colors.border.light,
                      backgroundColor: colors.background.primary,
                    }}
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToEmails"
                    checked={agreeToEmails}
                    onChange={(e) => setAgreeToEmails(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
                    style={{ accentColor: colors.primary }}
                  />
                  <label
                    htmlFor="agreeToEmails"
                    className="text-sm cursor-pointer"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                      lineHeight: '1.5',
                    }}
                  >
                    I agree to receive product updates and marketing emails.
                    You can unsubscribe at any time.{' '}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: colors.primary, textDecoration: 'underline' }}
                    >
                      View our Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{
                      backgroundColor: '#d4edda',
                      color: '#155724',
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontFamily: typography.fontFamily.body }}>
                      Success! Check your email inbox shortly.
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div
                    className="p-4 rounded-lg flex items-center gap-3"
                    style={{
                      backgroundColor: '#f8d7da',
                      color: '#721c24',
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span style={{ fontFamily: typography.fontFamily.body }}>
                      Oops! Something went wrong. Please try again.
                    </span>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !agreeToEmails}
                    className="flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: colors.button.primary,
                      color: colors.text.light,
                      fontFamily: typography.fontFamily.body,
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send to Email'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
                    style={{
                      backgroundColor: colors.background.isabelline,
                      color: colors.text.primary,
                      fontFamily: typography.fontFamily.body,
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* PDF Preview Modal */}
      {isPreviewOpen && previewFile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={handleClosePreview}
        >
          <div
            className="w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col"
            style={{
              backgroundColor: colors.background.primary,
              maxHeight: '90vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
              style={{ borderColor: colors.border.light }}
            >
              <div>
                <h3
                  className="text-xl md:text-2xl"
                  style={{
                    fontFamily: typography.fontFamily.heading,
                    color: colors.text.primary,
                  }}
                >
                  PDF Preview
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  {previewFile.name}
                </p>
              </div>
              <button
                onClick={handleClosePreview}
                className="p-2 rounded-lg hover:bg-opacity-10 transition-all"
                style={{ color: colors.text.secondary }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Content */}
            <div
              className="flex-1 overflow-auto p-4 flex justify-center"
              style={{ backgroundColor: colors.background.isabelline }}
            >
              {pdfLoading && (
                <div className="flex items-center justify-center py-20">
                  <div
                    className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent"
                    style={{ borderColor: colors.primary, borderTopColor: 'transparent' }}
                  />
                </div>
              )}

              {pdfError && (
                <div className="flex flex-col items-center justify-center py-20">
                  <svg
                    className="w-16 h-16 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.text.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p style={{ color: colors.text.secondary, fontFamily: typography.fontFamily.body }}>
                    {pdfError}
                  </p>
                </div>
              )}

              <Document
                file={previewFile.url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading=""
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-lg"
                  width={Math.min(800, window.innerWidth - 80)}
                />
              </Document>
            </div>

            {/* Page Navigation */}
            {numPages && (
              <div
                className="px-6 py-4 border-t flex items-center justify-center gap-4 flex-shrink-0"
                style={{ borderColor: colors.border.light }}
              >
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: colors.background.whiteChocolate,
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.body,
                    border: `1px solid ${colors.border.light}`,
                  }}
                >
                  ← Previous
                </button>
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                  }}
                >
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: colors.background.whiteChocolate,
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.body,
                    border: `1px solid ${colors.border.light}`,
                  }}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FileDownloadGrid;
