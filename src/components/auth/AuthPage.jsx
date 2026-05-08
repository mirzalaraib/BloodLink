import React, { useState, useCallback } from 'react';
import HeroPanel from './HeroPanel';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Navbar from '../ui/Navbar';

/**
 * AuthPage — root auth container.
 * Manages the login ↔ register transition state.
 */
const AuthPage = ({ initialView = 'login' }) => {
  // 'login' | 'register'
  const [view, setView] = useState(initialView);
  // Track direction for animation class
  const [direction, setDirection] = useState('slide-right');
  const [animating, setAnimating] = useState(false);

  const switchTo = useCallback((target) => {
    if (animating) return;
    setAnimating(true);
    setDirection(target === 'register' ? 'slide-right' : 'slide-left');
    // Short delay so new animation class mounts cleanly
    setTimeout(() => {
      setView(target);
      setAnimating(false);
    }, 60);
  }, [animating]);

  const goToRegister = useCallback(() => switchTo('register'), [switchTo]);
  const goToLogin = useCallback(() => switchTo('login'), [switchTo]);

  return (
    <div className="auth-wrapper">
      <Navbar />
      <main className="auth-page" role="main">
        {/* ── Left: Hero Panel ── */}
        <HeroPanel />

        {/* ── Right: Form Panel ── */}
        <section className="form-panel" aria-label="Authentication">
          <div className="form-container">
            {/* Active Form */}
            {view === 'login' ? (
              <LoginForm
                key="login"
                onSwitch={goToRegister}
                direction={direction}
              />
            ) : (
              <RegisterForm
                key="register"
                onSwitch={goToLogin}
                direction={direction}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuthPage;
