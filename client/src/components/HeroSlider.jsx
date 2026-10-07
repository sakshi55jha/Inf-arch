import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    image: '/assets/img/home/carousel-1.jpg',
    tagline: 'PREMIER ARCHITECTURAL DESIGN',
    title: 'TRANSFORMING SPACES WITH VISIONARY ARCHITECTURE',
    subtitle: 'From bespoke luxury villas to high-rise commercial structures, we blend aesthetic innovation with precision engineering.',
    badge: 'Award-Winning Studio',
  },
  {
    image: '/assets/img/home/carousel-2.png',
    tagline: 'SIGNATURE RESIDENTIAL CONCEPTS',
    title: 'LUXURY HOUSE PLANS TAILORED FOR MODERN LIVING',
    subtitle: 'Custom residential layouts designed around natural sunlight, ventilation, and contemporary lifestyle flow.',
    badge: '100% Customized Plans',
  },
  {
    image: '/assets/img/home/carousel-3.jpg',
    tagline: 'ADVANCED STRUCTURAL MODELING',
    title: 'BUILDING INFORMATION MODELING & REVIT DRAFTING',
    subtitle: 'Clash-free MEP coordination, Revit LOD 350+ modeling, and Light Gauge Steel Framing (LGSF) for US and global developers.',
    badge: 'Zero On-Site Clashes',
  },
  {
    image: '/assets/img/home/carousel-4.jpg',
    tagline: 'COMMERCIAL & HOSPITALITY',
    title: 'CAFE & BOUTIQUE HOSPITALITY INTERIOR ARCHITECTURE',
    subtitle: 'Curating unforgettable sensory environments, high-footfall cafe layouts, and atmospheric acoustic styling.',
    badge: 'High-Footfall Ergonomics',
  },
  {
    image: '/assets/img/home/carousel-5.png',
    tagline: 'GLOBAL OUTSOURCING PARTNER',
    title: 'REMOTE ARCHITECTURAL COLLABORATION FOR USA & MIDDLE EAST',
    subtitle: 'Empowering architectural firms with rapid turnaround CAD drafting, 3D renderings, and turnkey structural sets.',
    badge: 'Global Code Compliant',
  },
];

export default function HeroSlider({ onOpenConsultModal }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      style={{
        position: 'relative',
        height: '85vh',
        minHeight: '620px',
        maxHeight: '920px',
        overflow: 'hidden',
        backgroundColor: '#0a0c10',
      }}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: idx === current ? 'auto' : 'none',
          }}
        >
          {/* Background Image with Parallax Scale */}
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: idx === current ? 'scale(1.03)' : 'scale(1.0)',
              transition: 'transform 7s ease',
            }}
          />

          {/* Dark Architectural Gradients */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(10, 12, 16, 0.92) 0%, rgba(10, 12, 16, 0.65) 55%, rgba(10, 12, 16, 0.3) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 12, 16, 0.95) 0%, transparent 40%)',
            }}
          />

          {/* Slide Content */}
          <div
            className="container"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'rgba(197, 155, 39, 0.15)',
                  border: '1px solid rgba(197, 155, 39, 0.4)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  marginBottom: '1.25rem',
                }}
              >
                <CheckCircle2 size={14} color="#dfb54b" />
                <span
                  style={{
                    color: '#dfb54b',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {slide.badge}
                </span>
              </div>

              <h1
                style={{
                  color: '#ffffff',
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: '#cbd5e1',
                  marginBottom: '2.25rem',
                  lineHeight: '1.6',
                  maxWidth: '680px',
                }}
              >
                {slide.subtitle}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn-primary">
                  Explore 54+ Projects
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="btn-outline">
                  <Calculator size={18} />
                  Calculate Project Cost
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '2rem',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(10, 12, 16, 0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent-gold)';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(10, 12, 16, 0.6)';
          e.currentTarget.style.color = '#fff';
        }}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '2rem',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(10, 12, 16, 0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent-gold)';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(10, 12, 16, 0.6)';
          e.currentTarget.style.color = '#fff';
        }}
        aria-label="Next Slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* Pagination Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 20,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: idx === current ? '36px' : '10px',
              height: '8px',
              borderRadius: '4px',
              background: idx === current ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
