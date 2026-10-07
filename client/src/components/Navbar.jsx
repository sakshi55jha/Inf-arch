import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenConsultModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Life@INF', path: '/life' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        style={{
          backgroundColor: '#05070a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.8rem',
          padding: '0.45rem 1.5rem',
          color: '#94a3b8',
        }}
      >
        <div
          className="container-wide"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={13} color="#c59b27" />
              <span>Bengaluru • Charlotte NC • Nassau Bahamas • Dubai</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={13} color="#c59b27" />
              <span>vipan@inchesnfeet.com</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/admin"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#c59b27',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'rgba(197, 155, 39, 0.12)',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
              }}
            >
              <ShieldCheck size={13} />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(10, 12, 16, 0.94)' : 'rgba(10, 12, 16, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(197, 155, 39, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div
          className="container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            paddingBottom: '0.85rem',
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <img
              src="/assets/img/logo/logo.png"
              alt="Inches & Feet Logo"
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                INCHES <span style={{ color: 'var(--accent-gold)' }}>&</span> FEET
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Architecture & Interior Design
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="d-desktop-only"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--accent-gold)' : '#e2e8f0',
                    fontWeight: isActive ? 600 : 400,
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-gold)')}
                  onMouseLeave={(e) => (e.target.style.color = isActive ? 'var(--accent-gold)' : '#e2e8f0')}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'var(--accent-gold)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenConsultModal}
              className="btn-primary"
              style={{
                fontSize: '1.15rem',
                padding: '0.55rem 1.35rem',
              }}
            >
              Book Consultation
              <ArrowRight size={16} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
              className="d-mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#0d1017',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--accent-gold)' : '#fff',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                padding: '0.5rem 0',
              }}
            >
              Admin Dashboard
            </Link>
          </div>
        )}
      </nav>

      {/* Responsive helper styles for mobile menu */}
      <style>{`
        @media (max-width: 1024px) {
          .d-desktop-only {
            display: none !important;
          }
          .d-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
