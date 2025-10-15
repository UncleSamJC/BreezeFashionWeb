import { colors, typography } from '../../lib/designTokens';

function CustomerMessages() {
  // Placeholder data - will be replaced with real Supabase data
  const messages = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      message: 'I would like to inquire about your custom apparel manufacturing services...',
      date: '2025-10-14',
      status: 'unread',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      message: 'Can you provide a quote for 500 units of custom t-shirts?',
      date: '2025-10-13',
      status: 'read',
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@fashion.com',
      message: 'What are your minimum order quantities for activewear?',
      date: '2025-10-12',
      status: 'read',
    },
  ];

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
            24
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
            Unread
          </div>
          <div
            className="text-4xl font-semibold"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.primary,
            }}
          >
            3
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
            8
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: colors.background.primary }}
      >
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
                  Status
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
              {messages.map((msg, index) => (
                <tr
                  key={msg.id}
                  className="hover:bg-opacity-50 transition-colors"
                  style={{
                    borderBottom: index < messages.length - 1 ? `1px solid ${colors.border.light}` : 'none',
                  }}
                >
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: msg.status === 'unread' ? colors.primary : colors.background.isabelline,
                        color: msg.status === 'unread' ? colors.text.light : colors.text.secondary,
                        fontFamily: typography.fontFamily.body,
                      }}
                    >
                      {msg.status === 'unread' ? 'New' : 'Read'}
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 font-medium"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.primary,
                    }}
                  >
                    {msg.name}
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
                    {msg.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerMessages;
