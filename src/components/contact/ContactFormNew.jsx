import { useState } from 'react';
import { colors, typography } from '../../lib/designTokens';
import { supabase } from '../../lib/supabase';

function ContactFormNew() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Step 1: Save message to database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            message: formData.message,
          },
        ])
        .select();

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      // Step 2: Send email notification via Edge Function
      console.log('🚀 Calling Edge Function...');
      const { data: emailResult, error: functionError } = await supabase.functions.invoke(
        'send-contact-email',
        {
          body: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
          },
        }
      );

      console.log('📧 Edge Function response:', { emailResult, functionError });

      if (functionError) {
        console.error('❌ Email sending error:', functionError);
        // Still show success if message was saved, even if email fails
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        // Both database save and email sent successfully
        console.log('✅ Email sent successfully!', emailResult);
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    fontFamily: typography.fontFamily.body,
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s',
  };

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background.isabelline }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="p-8 md:p-12 rounded-3xl"
          style={{ backgroundColor: colors.background.isabelline }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-12"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
              lineHeight: typography.lineHeight.tight,
            }}
          >
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-base"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                    fontWeight: typography.fontWeight.normal,
                  }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  className="focus:outline-none focus:border-primary"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-base"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                    fontWeight: typography.fontWeight.normal,
                  }}
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  className="focus:outline-none focus:border-primary"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-3 text-base"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.primary,
                  fontWeight: typography.fontWeight.normal,
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                className="focus:outline-none focus:border-primary"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-3 text-base"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.primary,
                  fontWeight: typography.fontWeight.normal,
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="8"
                value={formData.message}
                onChange={handleChange}
                style={inputStyle}
                className="focus:outline-none focus:border-primary resize-none"
                placeholder="Writing Message"
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  fontFamily: typography.fontFamily.body,
                }}
              >
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: '#f8d7da',
                  color: '#721c24',
                  fontFamily: typography.fontFamily.body,
                }}
              >
                ✗ {errorMessage || 'Something went wrong. Please try again.'}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: colors.button.primary,
                color: colors.text.light,
                fontFamily: typography.fontFamily.body,
              }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormNew;
