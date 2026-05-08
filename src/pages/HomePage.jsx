// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Droplet, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall,
  Quote,
  Info
} from 'lucide-react';
import Navbar from '../components/ui/Navbar';
import '../styles/home.css';

// Using the local assets path
import heroIllustration from '../assets/hero-illustration.png';

const HomePage = () => {
  const navigate = useNavigate();
  const bloodGroups = [
    { type: 'A+', donor: 'A+, AB+', receiver: 'A+, A-, O+, O-' },
    { type: 'A-', donor: 'A+, A-, AB+, AB-', receiver: 'A-, O-' },
    { type: 'B+', donor: 'B+, AB+', receiver: 'B+, B-, O+, O-' },
    { type: 'B-', donor: 'B+, B-, AB+, AB-', receiver: 'B-, O-' },
    { type: 'O+', donor: 'A+, B+, AB+, O+', receiver: 'O+, O-' },
    { type: 'O-', donor: 'All Types', receiver: 'O-' },
    { type: 'AB+', donor: 'AB+', receiver: 'All Types' },
    { type: 'AB-', donor: 'AB+, AB-', receiver: 'A-, B-, AB-, O-' },
  ];

  return (
    <div className="home-wrapper">
      <Navbar />
      
      {/* ─── Hero Section ─── */}
      <section className="hero-home">
        <div className="hero-home-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-home-content"
          >
            <div className="hero-home-badge">
              <Heart size={16} fill="currentColor" />
              <span>Donate Blood, Save Lives</span>
            </div>
            <h1 className="hero-home-title">
              Be a Hero in Someone's <span>Lifeline</span> Today.
            </h1>
            <p className="hero-home-subtitle">
              Your single donation can save up to three lives. Join our community of 
              lifesavers and help us ensure no one faces a blood shortage.
            </p>
            <div className="hero-home-actions">
              <button className="btn-primary" onClick={() => navigate('/register')}>
                Donate Now <ArrowRight size={18} />
              </button>
              <button className="nav-btn-outline" style={{ color: 'var(--gray-700)', borderColor: 'var(--gray-300)' }}>
                Find Blood Donor
              </button>
            </div>
            
            <div className="hero-home-quote" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--gray-500)', display: 'flex', gap: '0.5rem' }}>
              <Quote size={20} className="text-red-500" />
              <p>"The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-home-image"
          >
            <img src={heroIllustration} alt="BloodLink Illustration" />
          </motion.div>
        </div>
      </section>

      {/* ─── Moving Quotes Banner ─── */}
      <div className="quote-banner">
        <div className="quote-track">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className="quote-item"><Droplet fill="white" /> Every Drop Counts</div>
              <div className="quote-item"><Heart fill="white" /> Donate Blood, Save Lives</div>
              <div className="quote-item"><Users fill="white" /> Be Someone’s Lifeline Today</div>
              <div className="quote-item"><ShieldCheck fill="white" /> Safe & Certified Process</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── Why Donate Section ─── */}
      <section className="section-padding" id="about">
        <div className="section-header">
          <span className="section-tag">Impact</span>
          <h2 className="section-title">Why Donate Blood?</h2>
          <p className="section-subtitle">Your contribution helps medical professionals perform life-saving surgeries, treatments, and emergency responses.</p>
        </div>

        <div className="blood-groups-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {[
            { icon: <Heart size={32} />, title: "Save Multiple Lives", desc: "A single donation can save up to 3 people in critical condition." },
            { icon: <ShieldCheck size={32} />, title: "Free Health Checkup", desc: "Get a mini-physical including blood pressure, pulse, and hemoglobin levels." },
            { icon: <Users size={32} />, title: "Community Support", desc: "Be part of a vital network that sustains local hospitals and clinics." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="blood-card"
              style={{ textAlign: 'left' }}
            >
              <div style={{ color: 'var(--red-600)', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--gray-500)', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Blood Groups Section ─── */}
      <section className="section-padding" style={{ background: 'var(--gray-50)' }} id="donate">
        <div className="section-header">
          <span className="section-tag">Information</span>
          <h2 className="section-title">Compatible Blood Groups</h2>
          <p className="section-subtitle">Find out which blood groups you can donate to and receive from.</p>
        </div>

        <div className="blood-groups-grid">
          {bloodGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="blood-card"
            >
              <div className="blood-card-badge">
                <Info size={14} /> <span>Reference</span>
              </div>
              <div className="blood-type">{group.type}</div>
              <div className="blood-info">
                <p><strong>Can Donate To:</strong> {group.donor}</p>
                <p><strong>Can Receive From:</strong> {group.receiver}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How It Works</h2>
        </div>
        
        <div className="blood-groups-grid">
          {[
            { step: "01", title: "Registration", desc: "Sign up and fill out a quick health questionnaire." },
            { step: "02", title: "Screening", desc: "A brief check-up to ensure you are fit to donate." },
            { step: "03", title: "Donation", desc: "The actual process takes only about 10-15 minutes." },
            { step: "04", title: "Refreshment", desc: "Rest for a few minutes and enjoy some healthy snacks." }
          ].map((item, idx) => (
            <div key={idx} style={{ position: 'relative', padding: '1.5rem' }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(198, 40, 40, 0.05)', position: 'absolute', top: 0, left: 0 }}>{item.step}</div>
              <h3 style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--gray-500)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Emergency Support CTA ─── */}
      <section className="section-padding" id="contact">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          style={{ 
            background: 'linear-gradient(135deg, var(--red-700), var(--red-900))',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(198, 40, 40, 0.3)'
          }}
        >
          <PhoneCall size={40} style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Emergency Blood Support</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto' }}>
            Are you in an emergency situation? Our rapid response team and active donors are 
            available 24/7. Call us or click below for immediate assistance.
          </p>
          <div className="hero-home-actions" style={{ justifyContent: 'center' }}>
            <button className="nav-btn-outline" style={{ background: 'white', color: 'var(--red-700)', border: 'none', padding: '1rem 2.5rem' }}>
              Call Now: +1 (800) BLOOD-LINK
            </button>
            <button className="nav-btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1rem 2.5rem' }}>
              Request Emergency Donor
            </button>
          </div>
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="nav-logo footer-logo">
              <div className="nav-logo-icon">
                <Droplet color="white" size={24} />
              </div>
              <span className="nav-logo-text" style={{ color: 'white' }}>
                Blood<span style={{ color: 'var(--red-500)' }}>Link</span>
              </span>
            </div>
            <p className="footer-text">
              Making blood donation accessible, transparent, and efficient for everyone. 
              Join us in our mission to save lives.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="#donate" className="footer-link">Donate Blood</a></li>
              <li><a href="#find" className="footer-link">Find Donor</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-text" style={{ fontSize: '0.85rem' }}>Stay updated with our latest blood camps and health tips.</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '0.75rem', borderRadius: '4px', color: 'white', flex: 1 }}
              />
              <button className="btn-primary" style={{ padding: '0.75rem' }}>Join</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} BloodLink Healthcare. All rights reserved. Made with ❤️ for Humanity.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
