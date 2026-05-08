// src/components/auth/HeroPanel.jsx
import React from 'react';

/* ─── Blood Drop SVG ─────────────────────────────────────────────────── */
const BloodDrop = ({ size = 160, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}>
    <path
      d="M80 10 C80 10, 20 80, 20 120 C20 155 47 180 80 180 C113 180 140 155 140 120 C140 80 80 10 80 10Z"
      fill="rgba(255,255,255,0.22)"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
    />
    <path
      d="M80 40 C80 40, 45 95, 45 120 C45 143 61 160 80 160 C99 160 115 143 115 120 C115 95 80 40 80 40Z"
      fill="rgba(255,255,255,0.15)"
    />
    {/* shine */}
    <ellipse cx="66" cy="105" rx="8" ry="14" fill="rgba(255,255,255,0.25)" transform="rotate(-20 66 105)" />
  </svg>
);

const BloodDropSmall = ({ size = 48, color = 'rgba(255,255,255,0.3)' }) => (
  <svg width={size} height={size} viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 3 C24 3, 6 24, 6 36 C6 47 14 54 24 54 C34 54 42 47 42 36 C42 24 24 3 24 3Z"
      fill={color}
    />
  </svg>
);

/* ─── Cross/Plus Icon ────────────────────────────────────────────────── */
const MedicalCross = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="2" width="12" height="36" rx="3" fill="rgba(255,255,255,0.25)" />
    <rect x="2" y="14" width="36" height="12" rx="3" fill="rgba(255,255,255,0.25)" />
  </svg>
);

/* ─── Pulse/ECG line ─────────────────────────────────────────────────── */
const PulseLine = () => (
  <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 25 L30 25 L40 8 L50 42 L60 18 L70 32 L80 25 L200 25"
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Logo Icon (shared) ─────────────────────────────────────────────── */
export const LogoIcon = ({ color = 'white', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 1 C14 1, 2 12, 2 21 C2 28.7 7.4 34 14 34 C20.6 34 26 28.7 26 21 C26 12 14 1 14 1Z"
      fill={color}
    />
    {/* shine on drop */}
    <ellipse cx="10" cy="20" rx="3" ry="5" fill="rgba(255,255,255,0.35)" transform="rotate(-15 10 20)" />
  </svg>
);

const QUOTES = [
  { text: 'Donate Blood, Save Lives', icon: '🩸' },
  { text: 'Every Drop Counts', icon: '💧' },
  { text: "Be Someone's Lifeline Today", icon: '❤️' },
  { text: 'One Pint Can Save Three Lives', icon: '✨' },
];

const STATS = [
  { number: '4.5M+', label: 'Donors' },
  { number: '13M+', label: 'Lives Saved' },
  { number: '200+', label: 'Cities' },
];

/* ─── HeroPanel Component ────────────────────────────────────────────── */
const HeroPanel = () => {
  return (
    <div className="hero-panel">
      <div className="hero-overlay" aria-hidden="true" />

      {/* Decorative floating elements */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '12%', right: '8%',
        animation: 'miniFloat 5s ease-in-out infinite',
      }}>
        <BloodDropSmall size={38} color="rgba(255,255,255,0.18)" />
      </div>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '55%', right: '5%',
        animation: 'miniFloat 7s ease-in-out infinite reverse',
      }}>
        <MedicalCross />
      </div>
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '18%', left: '7%',
        animation: 'miniFloat 6s ease-in-out infinite',
        animationDelay: '-2s',
      }}>
        <BloodDropSmall size={28} color="rgba(255,255,255,0.12)" />
      </div>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '30%', left: '6%',
        animation: 'miniFloat 9s ease-in-out infinite reverse',
      }}>
        <BloodDropSmall size={22} color="rgba(255,255,255,0.1)" />
      </div>

      <div className="hero-content">


        {/* Headline */}
        <h1 className="hero-headline">
          Save Lives.<br />One Drop at a Time.
        </h1>

        <p className="hero-subtext">
          Join thousands of heroes who donate blood and create miracles every day.
          Your donation is the greatest gift you can give.
        </p>

        {/* Quotes */}
        <div className="hero-quotes">
          {QUOTES.map((q, i) => (
            <div key={i} className="quote-badge">
              <span className="dot" aria-hidden="true" />
              <span>{q.icon} {q.text}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <div className="stat-divider" aria-hidden="true" />}
              <div className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
