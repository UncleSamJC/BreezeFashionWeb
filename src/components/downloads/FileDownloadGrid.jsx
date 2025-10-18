import { useState } from 'react';
import { colors, typography, borderRadius, transitions } from '../../lib/designTokens';
import { supabase } from '../../lib/supabase';

function FileDownloadGrid({ downloads }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

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
    setSubmitStatus(null);
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
                        版本:
                      </span>
                      <span style={{ fontWeight: typography.fontWeight.medium }}>
                        {file.version}
                      </span>
                    </div>

                    {/* Name */}
                    <div className="col-span-1 md:col-span-4 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        名称:
                      </span>
                      <span className="break-words">{file.name}</span>
                    </div>

                    {/* Size */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                      <span
                        className="md:hidden font-semibold"
                        style={{ color: colors.text.secondary }}
                      >
                        大小:
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
                        类型:
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
                        上传日期:
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
                        View
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
                    className="font-medium mb-1"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                      fontSize: typography.fontSize.base,
                    }}
                  >
                    Provide your email, and we will send the file to you shortly.
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                    }}
                  >
                    We'll also keep you updated with our latest resources.
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
                    disabled={isSubmitting}
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
    </div>
  );
}

export default FileDownloadGrid;
