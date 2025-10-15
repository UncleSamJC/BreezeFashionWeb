import { colors, typography } from '../../lib/designTokens';

function UploadFiles() {
  return (
    <div>
      {/* Upload Area */}
      <div
        className="p-12 rounded-xl border-2 border-dashed text-center mb-8"
        style={{
          backgroundColor: colors.background.primary,
          borderColor: colors.border.medium,
        }}
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
              Upload Files
            </h3>
            <p
              className="text-sm mb-4"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              Drag and drop files here, or click to browse
            </p>
          </div>

          <button
            className="px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: colors.button.primary,
              color: colors.text.light,
              fontFamily: typography.fontFamily.body,
            }}
          >
            Choose Files
          </button>

          <p
            className="text-xs"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
          >
            Supported formats: PDF, JPG, PNG (Max 10MB)
          </p>
        </div>
      </div>

      {/* Recent Uploads */}
      <div>
        <h3
          className="text-2xl mb-6"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
          }}
        >
          Recent Uploads
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
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
                  Document {item}.pdf
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  2.5 MB
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UploadFiles;
