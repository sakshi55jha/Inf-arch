import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Coffee, Users, Lightbulb, ArrowRight, X } from 'lucide-react';

const lifeImages = [
  { src: '/images/life/21.jpg', title: 'Creative Studio Brainstorming', category: 'Studio Life' },
  { src: '/images/life/22.jpg', title: 'Collaborative Design Review', category: 'Design Sprints' },
  { src: '/images/life/23.jpg', title: 'Team Milestones & Celebrations', category: 'Culture' },
  { src: '/images/life/24.jpg', title: 'On-Site Architectural Audits', category: 'Site Visits' },
  { src: '/images/life/25.jpg', title: 'Material Palette Curation', category: 'Craftsmanship' },
  { src: '/images/life/26.jpg', title: 'Studio Workshops & Mentorship', category: 'Growth' },
  { src: '/images/life/27.jpg', title: 'Team Outing & Retreats', category: 'Culture' },
  { src: '/images/life/28.jpg', title: 'BIM Tech Huddles', category: 'Innovation' },
  { src: '/images/life/29.jpg', title: 'Festive Celebrations @ INF', category: 'Celebrations' },
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: 'Design Without Hierarchies',
    description: 'Fresh architectural ideas are welcomed from everyone, whether senior project lead or design intern.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Equilibrium',
    description: 'We believe genuine creativity requires rested minds. Flexible hybrid setups and lively studio coffee breaks.',
  },
  {
    icon: Sparkles,
    title: 'Obsession With Craft',
    description: 'We foster an environment where micro-details, structural finesse, and sensory textures are celebrated daily.',
  },
  {
    icon: Users,
    title: 'Global Exposure',
    description: 'Collaborate with international architects across the USA, Caribbean, and Middle East on multi-million dollar developments.',
  },
];

export default function LifeAtInf() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/life/21.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">INSIDE INCHES & FEET</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            LIFE @ INF: OUR PEOPLE, PASSION & CULTURE
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Step inside our creative sanctuary in Koramangala, Bengaluru. Behind every award-winning blueprint is a vibrant collective of dreamers, architects, and detail obsessives.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span className="section-tagline">THE INF DNA</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>WHAT DRIVES OUR STUDIO</h2>
            <p>Our studio culture is built around curiosity, mutual respect, and continuous experimentation.</p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
            {cultureValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    background: '#11151e',
                    textAlign: 'center',
                    padding: '2rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'rgba(197, 155, 39, 0.1)',
                      border: '1px solid rgba(197, 155, 39, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                    }}
                  >
                    <Icon size={24} color="#c59b27" />
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Photo Gallery Grid */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="section-tagline">MOMENTS & MEMORIES</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>STUDIO PHOTO GALLERY</h2>
            <p>Snapshots from our design studio, team celebrations, and collaborative breakthroughs.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {lifeImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(img)}
                className="luxury-card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '280px',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 12, 16, 0.9) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                  }}
                >
                  <span className="badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '0.3rem' }}>
                    {img.category}
                  </span>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Careers CTA */}
          <div
            className="luxury-card"
            style={{
              marginTop: '4.5rem',
              background: 'linear-gradient(135deg, #131722 0%, #0c0f16 100%)',
              borderColor: 'rgba(197, 155, 39, 0.3)',
              textAlign: 'center',
              padding: '3.5rem 2rem',
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '2.4rem', marginBottom: '0.85rem' }}>
              WANT TO SHAPE THE FUTURE OF ARCHITECTURE WITH US?
            </h3>
            <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 2rem', fontSize: '1rem' }}>
              We are expanding our teams in Revit BIM modeling, 3D parametric visualization, and interior architecture.
            </p>
            <Link to="/careers" className="btn-primary" style={{ fontSize: '1.2rem', padding: '0.75rem 2rem' }}>
              Explore Open Roles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain' }}
            />
            <div style={{ padding: '1.25rem 1.75rem', background: '#0e1118', borderTop: '1px solid var(--border-dark)' }}>
              <span className="badge-gold">{selectedImg.category}</span>
              <h4 style={{ color: '#fff', fontSize: '1.3rem', marginTop: '0.4rem' }}>{selectedImg.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
