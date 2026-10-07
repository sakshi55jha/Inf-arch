import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Compass, Calculator } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import ProjectsGallery from '../components/ProjectsGallery';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CostEstimator from '../components/CostEstimator';

export default function Home({ onOpenConsultModal, onShowToast }) {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroSlider onOpenConsultModal={onOpenConsultModal} />

      {/* Intro Philosophy Section */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="intro-grid"
          >
            <div>
              <span className="section-tagline">VISIONARY LIVING</span>
              <h2 style={{ color: '#fff', marginBottom: '1.5rem', lineHeight: '1.15' }}>
                TRANSFORMING SPACES WITH EXPERT INTERIOR DESIGNERS & ARCHITECTURAL MASTERY
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem', color: '#cbd5e1' }}>
                Designing a space is more than choosing colors or arranging furniture—it is about creating an environment that reflects personality, function, and timeless style. Our multidisciplinary team blends boundless creativity with precision technical engineering.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '2rem', color: '#94a3b8' }}>
                From luxury residential villas in Bangalore and beachfront estates in the Bahamas, to multi-family townhomes in North Carolina and parametric commercial towers in the Middle East, Inches & Feet delivers turnkey excellence.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary">
                  Our Story & Leadership
                  <ArrowRight size={18} />
                </Link>
                <button onClick={onOpenConsultModal} className="btn-outline">
                  Schedule Free Discovery Call
                </button>
              </div>
            </div>

            {/* Visual Card Showcase */}
            <div
              className="luxury-card"
              style={{
                background: '#131722',
                borderColor: 'rgba(197, 155, 39, 0.35)',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                }}
              >
                <img
                  src="/images/1.jpg"
                  alt="Boutique Condos"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'rgba(10, 12, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(197, 155, 39, 0.4)',
                    fontSize: '0.8rem',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  Featured: Boutique Condos | The Bahamas
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#c59b27' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Clash-Free Revit BIM Coordination
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#c59b27' }}>
                    6+
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Global Markets (USA, UAE, India)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .intro-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <ServicesSection onOpenConsultModal={onOpenConsultModal} />

      {/* Featured Projects Gallery Preview */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <span className="section-tagline">PORTFOLIO OF EXCELLENCE</span>
              <h2 style={{ color: '#fff', margin: 0 }}>FEATURED ARCHITECTURAL WORKS</h2>
            </div>
            <Link to="/projects" className="btn-outline-gold">
              View All 54+ Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <ProjectsGallery limit={8} showFilters={true} onOpenConsultModal={onOpenConsultModal} />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us */}
      <WhyChooseUs onOpenConsultModal={onOpenConsultModal} />

      {/* Interactive Cost Estimator */}
      <CostEstimator onShowToast={onShowToast} />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Consultation Banner Call to Action */}
      <section
        style={{
          background: 'linear-gradient(135deg, #131824 0%, #080a0f 100%)',
          borderTop: '1px solid rgba(197, 155, 39, 0.3)',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span className="section-tagline">START YOUR DESIGN JOURNEY</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginBottom: '1.25rem' }}>
            READY TO BRING YOUR ARCHITECTURAL VISION TO LIFE?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '2.5rem' }}>
            Schedule a complimentary concept session with our principal design architects. We will discuss your plot layout, spatial zoning, interior theme, and budget roadmap.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenConsultModal}
              className="btn-primary"
              style={{ fontSize: '1.35rem', padding: '0.85rem 2.25rem' }}
            >
              Book Complimentary Consultation
              <ArrowRight size={20} />
            </button>
            <Link to="/contact" className="btn-outline" style={{ fontSize: '1.35rem', padding: '0.85rem 2.25rem' }}>
              Visit Bangalore Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
