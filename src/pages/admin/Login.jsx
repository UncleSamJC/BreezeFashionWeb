import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubPageHero from '../../components/basic/SubPageHero';
import { colors, typography } from '../../lib/designTokens';
import { supabase } from '../../lib/supabase';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      // Successfully logged in
      console.log('Login successful:', data);
      // Navigate to admin dashboard (we'll create this later)
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
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
    <>
      <SubPageHero
        backgroundImage="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2e65c45b0d8c4610607e7_image.png"
        title="Admin Login"
        description="Access the admin dashboard to manage your content and settings"
        showButtons={false}
      />

      <section
        className="py-20 px-6 md:px-12 lg:px-24"
        style={{ backgroundColor: colors.background.isabelline }}
      >
        <div className="max-w-md mx-auto">
          <div
            className="p-8 md:p-12 rounded-3xl"
            style={{ backgroundColor: colors.background.primary }}
          >
            <h2
              className="text-3xl md:text-4xl mb-8 text-center"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
                lineHeight: typography.lineHeight.tight,
              }}
            >
              Sign In
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 text-base"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                    fontWeight: typography.fontWeight.medium,
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
                  autoComplete="email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-3 text-base"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  style={inputStyle}
                  className="focus:outline-none focus:border-primary"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    fontFamily: typography.fontFamily.body,
                  }}
                >
                  ✗ {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: colors.button.primary,
                  color: colors.text.light,
                  fontFamily: typography.fontFamily.body,
                }}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p
                className="text-sm"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
                }}
              >
                Forgot your password or need a new user? Contact your administrator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
