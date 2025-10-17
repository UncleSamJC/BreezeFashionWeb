import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { colors, typography } from '../../lib/designTokens';

function CustomerMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [stats, setStats] = useState({
    total: 0,
    unreplied: 0,
    thisWeek: 0,
  });

  const ITEMS_PER_PAGE = 15;

  // Load messages from Supabase
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setIsLoading(true);

      // Fetch all messages, sorted by newest first
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading messages:', error);
        return;
      }

      setMessages(data || []);
      calculateStats(data || []);

    } catch (error) {
      console.error('Error in loadMessages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate stats from messages
  const calculateStats = (messagesData) => {
    const total = messagesData.length;

    // Count messages from this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const thisWeek = messagesData.filter(msg =>
      new Date(msg.created_at) > oneWeekAgo
    ).length;

    // email_sent=false means unreplied
    const unreplied = messagesData.filter(msg => !msg.email_sent).length;

    setStats({
      total,
      unreplied,
      thisWeek,
    });
  };

  // Toggle read/unread status
  const toggleReadStatus = async (messageId, currentStatus) => {
    try {
      // Update in database
      const { error } = await supabase
        .from('contact_messages')
        .update({ email_sent: !currentStatus })
        .eq('id', messageId);

      if (error) {
        console.error('Error updating status:', error);
        return;
      }

      // Update local state
      const updatedMessages = messages.map(msg =>
        msg.id === messageId ? { ...msg, email_sent: !currentStatus } : msg
      );
      setMessages(updatedMessages);
      calculateStats(updatedMessages);

    } catch (error) {
      console.error('Error in toggleReadStatus:', error);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Pagination calculations
  const totalPages = Math.ceil(messages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMessages = messages.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Reply Status Toggle Component
  const ReplyStatusToggle = ({ isReplied, onToggle }) => {
    return (
      <button
        onClick={onToggle}
        className="relative inline-flex items-center h-8 w-16 rounded-full transition-all duration-300 focus:outline-none"
        style={{
          backgroundColor: isReplied ? '#10b981' : '#92400e', // green for replied, brown for unreplied
        }}
      >
        {/* Sliding circle */}
        <span
          className="inline-block h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300"
          style={{
            transform: isReplied ? 'translateX(36px)' : 'translateX(4px)',
          }}
        />
      </button>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div
          className="text-xl"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
          }}
        >
          Loading messages...
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className="p-6 rounded-xl"
          style={{ backgroundColor: colors.background.primary }}
        >
          <div
            className="text-sm mb-2"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
          >
            Total Messages
          </div>
          <div
            className="text-4xl font-semibold"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
            }}
          >
            {stats.total}
          </div>
        </div>

        <div
          className="p-6 rounded-xl"
          style={{ backgroundColor: colors.background.primary }}
        >
          <div
            className="text-sm mb-2"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
          >
            Unreplied
          </div>
          <div
            className="text-4xl font-semibold"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.primary,
            }}
          >
            {stats.unreplied}
          </div>
        </div>

        <div
          className="p-6 rounded-xl"
          style={{ backgroundColor: colors.background.primary }}
        >
          <div
            className="text-sm mb-2"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
          >
            This Week
          </div>
          <div
            className="text-4xl font-semibold"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
            }}
          >
            {stats.thisWeek}
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: colors.background.primary }}
      >
        {messages.length === 0 ? (
          <div className="p-12 text-center">
            <div
              className="text-lg"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              No messages yet.
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                style={{
                  backgroundColor: colors.background.isabelline,
                  borderBottom: `1px solid ${colors.border.light}`,
                }}
              >
                <tr>
                  <th
                    className="px-6 py-4 text-left text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Reply Status
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Name
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Email
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Message
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentMessages.map((msg, index) => (
                  <tr
                    key={msg.id}
                    className="hover:bg-opacity-50 transition-colors"
                    style={{
                      borderBottom: index < currentMessages.length - 1 ? `1px solid ${colors.border.light}` : 'none',
                    }}
                  >
                    <td className="px-6 py-4">
                      <ReplyStatusToggle
                        isReplied={msg.email_sent}
                        onToggle={() => toggleReadStatus(msg.id, msg.email_sent)}
                      />
                    </td>
                    <td
                      className="px-6 py-4 font-medium"
                      style={{
                        fontFamily: typography.fontFamily.body,
                        color: colors.text.primary,
                      }}
                    >
                      {msg.first_name} {msg.last_name}
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{
                        fontFamily: typography.fontFamily.body,
                        color: colors.text.secondary,
                      }}
                    >
                      {msg.email}
                    </td>
                    <td
                      className="px-6 py-4 max-w-md truncate"
                      style={{
                        fontFamily: typography.fontFamily.body,
                        color: colors.text.secondary,
                      }}
                    >
                      {msg.message}
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      style={{
                        fontFamily: typography.fontFamily.body,
                        color: colors.text.secondary,
                      }}
                    >
                      {formatDate(msg.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            className="px-6 py-4 flex items-center justify-between border-t"
            style={{ borderColor: colors.border.light }}
          >
            {/* Left: Page info */}
            <div
              className="text-sm"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
              }}
            >
              Showing {startIndex + 1} to {Math.min(endIndex, messages.length)} of {messages.length} messages
            </div>

            {/* Right: Pagination controls */}
            <div className="flex items-center gap-2">
              {/* Previous button */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-80"
                style={{
                  backgroundColor: colors.background.isabelline,
                  color: colors.text.primary,
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first, last, current, and adjacent pages
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: page === currentPage ? colors.primary : colors.background.isabelline,
                          color: page === currentPage ? colors.text.light : colors.text.primary,
                          fontFamily: typography.fontFamily.body,
                        }}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span
                        key={page}
                        className="px-2"
                        style={{
                          color: colors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                        }}
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Next button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-80"
                style={{
                  backgroundColor: colors.background.isabelline,
                  color: colors.text.primary,
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerMessages;
