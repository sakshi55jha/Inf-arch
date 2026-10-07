import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { api } from '../services/api';

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const res = await api.getTestimonials();
      setTestimonials(res.data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    }
  };

  if (testimonials.length === 0) return null;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-py" style={{ backgroundColor: '#07090d', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <span className="section-tagline">CLIENT TESTIMONIALS</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            TRUSTED BY DISCERNING HOMEOWNERS & DEVELOPERS
          </h2>
          <p>
            Read what our clients say about our design integrity, BIM precision, and bespoke project execution.
          </p>
        </div>

        <div
          className="luxury-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: '#0d1017',
            borderColor: 'rgba(197, 155, 39, 0.3)',
            padding: '3rem',
            position: 'relative',
          }}
        >
          <Quote
            size={48}
            color="rgba(197, 155, 39, 0.2)"
            style={{ position: 'absolute', top: '2rem', right: '2.5rem' }}
          />

          {/* Stars */}
          <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
            {[...Array(t.rating || 5)].map((_, i) => (
              <Star key={i} size={20} fill="#c59b27" color="#c59b27" />
            ))}
          </div>

          <p
            style={{
              fontSize: '1.25rem',
              color: '#f8fafc',
              lineHeight: '1.8',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            "{t.content}"
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={t.avatar || '/images/Men.png'}
                alt={t.author}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-gold)',
                  background: '#1a1f2c',
                }}
              />
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.2rem' }}>
                  {t.author}
                </h4>
                <div style={{ fontSize: '0.85rem', color: '#c59b27', fontWeight: 600 }}>
                  {t.role} • {t.location}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  Project: {t.projectType}
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={prev}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
