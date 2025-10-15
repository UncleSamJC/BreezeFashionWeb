import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { colors, typography } from '../../lib/designTokens';
import Sidebar from '../../components/admin/Sidebar';
import CustomerMessages from '../../components/admin/CustomerMessages';
import UploadFiles from '../../components/admin/UploadFiles';
import SendEmail from '../../components/admin/SendEmail';
import PostBlog from '../../components/admin/PostBlog';

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [activeMenu, setActiveMenu] = useState('customer-messages');
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // Not authenticated, redirect to login
        navigate('/admin/login');
        return;
      }

      setCurrentUser(user);
    } catch (error) {
      console.error('Error checking user:', error);
      navigate('/admin/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Render content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
      case 'customer-messages':
        return <CustomerMessages />;
      case 'upload-files':
        return <UploadFiles />;
      case 'send-email':
        return <SendEmail />;
      case 'post-blog':
        return <PostBlog />;
      default:
        return <CustomerMessages />;
    }
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colors.background.isabelline }}
      >
        <div
          className="text-2xl"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: colors.background.isabelline }}
    >
      {/* Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header
          className="sticky top-0 z-10 px-8 py-6 border-b"
          style={{
            backgroundColor: colors.background.primary,
            borderColor: colors.border.light,
          }}
        >
          <div className="flex items-center justify-between">
            <h1
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
              }}
            >
              {activeMenu === 'customer-messages' && 'Customer Messages'}
              {activeMenu === 'upload-files' && 'Upload Files'}
              {activeMenu === 'send-email' && 'Send Email'}
              {activeMenu === 'post-blog' && 'Post Blog'}
            </h1>

            <div className="flex items-center gap-4">
              <span
                className="text-sm hidden md:block"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
                }}
              >
                {currentUser?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
                style={{
                  backgroundColor: colors.button.primary,
                  color: colors.text.light,
                  fontFamily: typography.fontFamily.body,
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
