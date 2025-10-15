import { useState } from 'react';
import { colors, typography } from '../../lib/designTokens';

function SendEmail() {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Send email:', formData);
    // TODO: Implement email sending functionality
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${colors.border.light}`,
    fontFamily: typography.fontFamily.body,
    fontSize: '1rem',
    backgroundColor: colors.background.primary,
    transition: 'all 0.3s',
  };

  return (
    <div className="max-w-3xl">
      <div
        className="p-8 rounded-xl"
        style={{ backgroundColor: colors.background.primary }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* To Field */}
          <div>
            <label
              htmlFor="to"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              To
            </label>
            <input
              type="email"
              id="to"
              name="to"
              required
              value={formData.to}
              onChange={handleChange}
              style={inputStyle}
              className="focus:outline-none focus:border-primary"
              placeholder="recipient@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              className="focus:outline-none focus:border-primary"
              placeholder="Email subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.primary,
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="12"
              value={formData.message}
              onChange={handleChange}
              style={inputStyle}
              className="focus:outline-none focus:border-primary resize-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: colors.button.primary,
                color: colors.text.light,
                fontFamily: typography.fontFamily.body,
              }}
            >
              Send Email
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: colors.background.isabelline,
                color: colors.text.primary,
                fontFamily: typography.fontFamily.body,
              }}
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>

      {/* Recent Emails */}
      <div className="mt-8">
        <h3
          className="text-2xl mb-6"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
          }}
        >
          Recent Emails
        </h3>

        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-4 rounded-lg"
              style={{ backgroundColor: colors.background.primary }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4
                  className="font-medium"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                  }}
                >
                  Sample Email Subject {item}
                </h4>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.secondary,
                  }}
                >
                  2025-10-{15 - item}
                </span>
              </div>
              <p
                className="text-sm"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
                }}
              >
                To: customer{item}@example.com
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
