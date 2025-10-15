import { colors, typography } from '../../lib/designTokens';

function Sidebar({ activeMenu, setActiveMenu, currentUser, onLogout }) {
  const menuItems = [
    {
      id: 'customer-messages',
      label: 'Customer Messages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      id: 'upload-files',
      label: 'Upload Files',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      id: 'send-email',
      label: 'Send Email',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'post-blog',
      label: 'Post Blog',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className="w-64 min-h-screen border-r flex flex-col"
      style={{
        backgroundColor: colors.secondary,
        borderColor: colors.border.medium,
      }}
    >
      {/* Logo/Brand */}
      <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67aedea7a758264cf622b051_Group-1.svg"
            alt="Breeze Fashion"
            className="h-10 w-10"
          />
          <div>
            <h2
              className="text-xl font-semibold"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.light,
              }}
            >
              Breeze Fashion
            </h2>
            <p
              className="text-xs"
              style={{
                fontFamily: typography.fontFamily.body,
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Admin Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.primary }}
          >
            <span
              className="text-lg font-semibold"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.light,
              }}
            >
              {currentUser?.email?.[0].toUpperCase() || 'A'}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p
              className="text-sm font-medium truncate"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.light,
              }}
            >
              Admin
            </p>
            <p
              className="text-xs truncate"
              style={{
                fontFamily: typography.fontFamily.body,
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {currentUser?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: activeMenu === item.id ? colors.primary : 'transparent',
                color: activeMenu === item.id ? colors.text.light : 'rgba(255,255,255,0.7)',
                fontFamily: typography.fontFamily.body,
                fontWeight: activeMenu === item.id ? typography.fontWeight.medium : typography.fontWeight.normal,
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:opacity-80"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: typography.fontFamily.body,
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
