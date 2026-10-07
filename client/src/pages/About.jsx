import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, Compass, Eye, Shield, Target } from 'lucide-react';
import StatsSection from '../components/StatsSection';

const journeyTimeline = [
  {
    year: '2020',
    title: 'Founding of Inches & Feet Design Development',
    description: 'Inches N Feet was co-founded by Vipan and Shana with a focused vision to bridge the gap between creative interior aesthetics and precision BIM architectural engineering.',
  },
  {
    year: '2021',
    title: 'Expansion into Bespoke Real Estate & Luxury Villas',
    description: 'Scaled residential design operations across Bangalore, Kerala, and South India, delivering bespoke luxury bungalows and contemporary villa estates.',
  },
  {
    year: '2022',
    title: 'Middle East Large-Scale Commercial Footprint',
    description: 'Ventured into major Middle Eastern commercial landmarks including Sumou Towers in Jeddah, Avenue Mall in Riyadh, and Grove Plot commercial developments in Abu Dhabi.',
  },
  {
    year: '2023',
    title: 'Modular & High-Precision Workspace Systems',
    description: 'Pioneered prefabricated bathroom pods, modular tech workspaces, and Light Gauge Steel Framing (LGSF) engineering sets for international clients.',
  },
  {
    year: '2024 - 2026',
    title: 'Global Remote Architectural Hub with DPR Constructions USA',
    description: 'Partnered with prominent US developers including DPR Constructions, executing multi-family townhomes in North Carolina, holiday homes in The Bahamas, and BIM models in Michigan.',
  },
];

const founders = [
  {
    name: 'Vipan Kumar',
    role: 'Co-Founder & Principal Architect',
    image: '/images/Men.png',
    bio: 'Pioneering structural integrity, BIM parametric modeling, and international coordination. Leads large-scale architectural projects across the US and Middle East.',
  },
  {
    name: 'Shana Vipan',
    role: 'Co-Founder & Design Director',
    image: '/images/Women.png',
    bio: 'Directs interior architecture, sensory palettes, and luxury residential transformations. Brings a keen eye for bespoke joinery, lighting psychology, and material elegance.',
  },
];

export default function About({ onOpenConsultModal }) {
  return (
    <div>
      {/* Page Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.85), rgba(10, 12, 16, 0.95)), url(/images/10.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">ABOUT INCHES & FEET</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            WHERE VISIONARY DESIGN MEETS TECHNICAL PERFECTION
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            We are an international architectural and interior design development firm headquartered in Bangalore, crafting iconic living spaces and digital construction sets across the globe.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="about-split-grid"
          >
            <div>
              <span className="section-tagline">OUR ETHOS</span>
              <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>
                CRAFTING SPACES THAT INSPIRE GENERATIONS
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.25rem' }}>
                At Inches & Feet, every square inch matters, and every square foot tells a story. We believe great architecture is not an indulgence—it is an essential catalyst for how human beings live, collaborate, and thrive.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#94a3b8', marginBottom: '2rem' }}>
                By integrating state-of-the-art Autodesk Revit Building Information Modeling (BIM) with bespoke interior artisanal craftsmanship, we eliminate on-site ambiguity and deliver turnkey execution with zero compromise on quality.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Eye size={24} color="#c59b27" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Vision</h4>
                    <p style={{ fontSize: '0.85rem' }}>To become the global benchmark in digitally-integrated architecture and transcendent living spaces.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Target size={24} color="#c59b27" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Mission</h4>
                    <p style={{ fontSize: '0.85rem' }}>Deliver clash-free construction sets and timeless interior aesthetics that honor client individuality.</p>
                  </div>
                </div>
              </div>

              <button onClick={onOpenConsultModal} className="btn-primary">
                Book a Consultation With Our Team
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Collage of real work */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src="/images/3.jpg"
                  alt="Morad's Estate South Carolina"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '-25px',
                  background: '#131722',
                  border: '1px solid var(--accent-gold)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  maxWidth: '260px',
                }}
                className="d-desktop-only"
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#c59b27', lineHeight: 1 }}>
                  500+
                </div>
                <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>
                  Signature Projects Designed & Delivered
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .about-split-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Journey Timeline */}
      <section className="section-py" style={{ backgroundColor: '#0d1017' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tagline">OUR EVOLUTION</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>OUR JOURNEY & MILESTONES</h2>
            <p>From a boutique design studio to an international BIM and luxury architecture firm.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {journeyTimeline.map((item, idx) => (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  background: '#11151e',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 600,
                    textAlign: 'center',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingRight: '1rem',
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="section-tagline">EXECUTIVE LEADERSHIP</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>MEET OUR FOUNDERS</h2>
            <p>Guided by decades of combined experience in architecture, structural BIM, and luxury interiors.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '880px', margin: '0 auto' }}>
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  textAlign: 'center',
                  background: '#11151e',
                  borderColor: 'rgba(197, 155, 39, 0.3)',
                  padding: '2.5rem 2rem',
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.5rem',
                    border: '3px solid var(--accent-gold)',
                    background: '#1a1f2c',
                  }}
                />
                <h3 style={{ color: '#fff', fontSize: '1.7rem', marginBottom: '0.3rem' }}>
                  {founder.name}
                </h3>
                <div style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {founder.role}
                </div>
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7' }}>
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
