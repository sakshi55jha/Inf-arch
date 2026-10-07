import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';

// Clean SVG Social Icons
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    try {
      const res = await api.subscribeNewsletter(email);
      if (onShowToast) {
        onShowToast(res.message || 'Subscribed successfully!', 'success');
      }
      setEmail('');
    } catch (err) {
      if (onShowToast) {
        onShowToast(err.message || 'Subscription failed', 'error');
      }
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#06080b',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#94a3b8',
        paddingTop: '4.5rem',
        paddingBottom: '2rem',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src="/assets/img/logo/logo.png"
                alt="Inches & Feet Logo"
                style={{ height: '42px', width: 'auto' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  color: '#fff',
                  letterSpacing: '0.06em',
                }}
              >
                INCHES <span style={{ color: 'var(--accent-gold)' }}>&</span> FEET
              </span>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem', color: '#94a3b8' }}>
              Premier architecture and interior design studio shaping transcendent residential villas, boutique hospitality, and global BIM coordination.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.linkedin.com/company/inchesnfeet/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-gold)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/inches.n.feet/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-gold)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/InchesNfeet"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-gold)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              QUICK NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
              <Link to="/about" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                About Inches & Feet
              </Link>
              <Link to="/projects" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                Portfolio & Projects (54)
              </Link>
              <Link to="/services" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                Design Services
              </Link>
              <Link to="/life" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                Life @ INF Studio
              </Link>
              <Link to="/pricing" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                Pricing & Estimator
              </Link>
              <Link to="/careers" style={{ color: '#94a3b8' }} onMouseEnter={(e) => (e.target.style.color = '#c59b27')} onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}>
                Careers (Hiring Architects)
              </Link>
              <Link to="/admin" style={{ color: '#c59b27', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={14} /> Admin Portal
              </Link>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              CORE EXPERTISE
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
              <span>• Interior Architecture Design</span>
              <span>• Luxury Villa House Plans</span>
              <span>• Cafe & Restaurant Interiors</span>
              <span>• Building Information Modeling (BIM)</span>
              <span>• Light Gauge Steel Framing (LGSF)</span>
              <span>• 3D Photorealistic Rendering</span>
              <span>• US Architecture Outsourcing</span>
            </div>
          </div>

          {/* Contact Coordinates & Newsletter */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              STUDIO HEADQUARTERS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={18} color="#c59b27" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>2nd Floor, Green Glen Layout, 38, 4th Block, Koramangala, Bengaluru, Karnataka, 560034</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={16} color="#c59b27" style={{ flexShrink: 0 }} />
                <span>vipan@inchesnfeet.com / shana@inchesnfeet.com</span>
              </div>
            </div>

            <h5 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
              STAY INFORMED
            </h5>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-input"
                style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem' }}
              />
              <button
                type="submit"
                disabled={subscribing}
                className="btn-primary"
                style={{ padding: '0.6rem 1rem', fontSize: '1rem' }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Inches & Feet Design Development LLP. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
            <Link to="/term-condition" style={{ color: '#94a3b8' }}>Terms & Conditions</Link>
            <Link to="/shipping-policy" style={{ color: '#94a3b8' }}>Shipping Policy</Link>
            <Link to="/refund-policy" style={{ color: '#94a3b8' }}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
