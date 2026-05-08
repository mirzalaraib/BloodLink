// src/components/auth/RegisterForm.jsx
import React from 'react';
import InputField from '../ui/InputField';
import useAuthForm from '../../hooks/useAuthForm';

/* ── SVG Icons ──────────────────────────────────────────────────────── */
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

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

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

/* ── Component ──────────────────────────────────────────────────────── */
const RegisterForm = ({ onSwitch, direction }) => {
  const {
    values, errors, loading, success,
    handleChange, handleBlur, handleSubmit,
  } = useAuthForm('register');

  const onSubmit = handleSubmit(async (data) => {
    // TODO: Replace with real API call
    console.log('Register data:', data);
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
        }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gray-900)', marginBottom: '0.4rem' }}>
          Account Created! 🎉
        </h3>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Welcome to BloodLink, <strong>{values.fullName.split(' ')[0]}</strong>! You are now part of a life-saving community.
        </p>
        <button
          type="button"
          onClick={onSwitch}
          className="btn-primary"
          style={{ maxWidth: 200, margin: '0 auto' }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className={`animated-form ${direction}`}>
      {/* Step indicator */}
      <div className="step-indicator">
        <div className="step-dot" />
        <div className="step-dot active" />
      </div>

      {/* Header */}
      <div className="form-header">
        <h2>Join BloodLink 🩸</h2>
        <p>Create your account and start saving lives today</p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} noValidate>
        <InputField
          id="reg-fullname"
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fullName}
          icon={<UserIcon />}
          autoComplete="name"
        />

        <InputField
          id="reg-email"
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
          id="reg-password"
          name="password"
          label="Password"
          type="password"
          placeholder="Min. 6 characters"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          icon={<LockIcon />}
          autoComplete="new-password"
        />

        <InputField
          id="reg-confirm-password"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Re-enter password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
          icon={<ShieldIcon />}
          autoComplete="new-password"
        />

        {/* Terms */}
        <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
          By registering, you agree to our{' '}
          <span style={{ color: 'var(--red-600)', fontWeight: 500, cursor: 'pointer' }}>Terms of Service</span>
          {' '}and{' '}
          <span style={{ color: 'var(--red-600)', fontWeight: 500, cursor: 'pointer' }}>Privacy Policy</span>.
        </p>

        <button
          id="register-submit-btn"
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading ? (
            <><span className="spinner" />Creating Account…</>
          ) : (
            'Create Account'
          )}
        </button>
      </form>

      {/* Switch to Login */}
      <p className="form-switch">
        Already have an account?{' '}
        <button id="go-to-login-btn" type="button" onClick={onSwitch}>
          Sign in
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
