import { colors, typography, borderRadius, transitions } from '../../lib/designTokens';

function FileDownloadGrid({ downloads }) {
  // Group downloads by year and month
  const groupedDownloads = downloads.reduce((acc, download) => {
    const date = new Date(download.date);
    const key = `${date.getFullYear()}年${date.getMonth() + 1}月`;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(download);

    return acc;
  }, {});

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  <div className="col-span-1">版本</div>
                  <div className="col-span-4">名称</div>
                  <div className="col-span-2">大小</div>
                  <div className="col-span-2">类型</div>
                  <div className="col-span-2">日期</div>
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
                        日期:
                      </span>
                      <span style={{ color: colors.text.secondary, fontSize: typography.fontSize.sm }}>
                        {new Date(file.date).toLocaleDateString('zh-CN')}
                      </span>
                    </div>

                    {/* Download Button */}
                    <div className="col-span-1 flex justify-start md:justify-end mt-2 md:mt-0">
                      <button
                        onClick={() => handleDownload(file.url, file.filename)}
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
                        下载
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FileDownloadGrid;
