// src/components/auth/LoginForm.jsx
import React from 'react';
import InputField from '../ui/InputField';
import useAuthForm from '../../hooks/useAuthForm';

/* ── SVG Icons ──────────────────────────────────────────────────────── */
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

/* ── Component ──────────────────────────────────────────────────────── */
const LoginForm = ({ onSwitch, direction }) => {
  const {
    values, errors, loading, success,
    handleChange, handleBlur, handleSubmit,
  } = useAuthForm('login');

  const onSubmit = handleSubmit(async (data) => {
    // TODO: Replace with real API call
    console.log('Login data:', data);
  });

  if (success) {
    return (
      <div className={`animated-form ${direction}`} style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: 72, height: 72,
          background: 'linear-gradient(135deg, #c62828, #ef5350)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: '0 8px 32px rgba(198,40,40,0.35)',
          animation: 'formAppear 0.4s ease both',
        }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gray-900)', marginBottom: '0.4rem' }}>
          Welcome back!
        </h3>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
          You have successfully logged in to BloodLink.
        </p>
      </div>
    );
  }

  return (
    <div className={`animated-form ${direction}`}>
      {/* Step indicator */}
      <div className="step-indicator">
        <div className="step-dot active" />
        <div className="step-dot" />
      </div>

      {/* Header */}
      <div className="form-header">
        <h2>Welcome back 👋</h2>
        <p>Sign in to continue saving lives with BloodLink</p>
      </div>

      {/* Welcome strip */}
      <div className="welcome-strip">
        <HeartIcon />
        <span>Every donation saves up to <strong>3 lives</strong>. Login to make a difference.</span>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} noValidate>
        <InputField
          id="login-email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          icon={<MailIcon />}
          autoComplete="email"
        />

        <InputField
          id="login-password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          icon={<LockIcon />}
          autoComplete="current-password"
        />

        {/* Forgot password */}
        <div style={{ textAlign: 'right', marginTop: '-0.4rem', marginBottom: '1rem' }}>
          <button
            type="button"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.82rem', color: 'var(--red-600)', fontWeight: 500,
              padding: 0,
            }}
          >
            Forgot password?
          </button>
        </div>

        <button
          id="login-submit-btn"
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading ? (
            <><span className="spinner" />Signing In…</>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Switch to Register */}
      <p className="form-switch">
        New to BloodLink?{' '}
        <button id="go-to-register-btn" type="button" onClick={onSwitch}>
          Create an account
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
