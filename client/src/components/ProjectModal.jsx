import React from 'react';
import { X, MapPin, Maximize2, Layers, Calendar, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onConsultClick }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="luxury-card"
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#0e1118',
          border: '1px solid rgba(197, 155, 39, 0.4)',
          padding: '0',
          position: 'relative',
          borderRadius: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative', height: '420px', overflow: 'hidden', background: '#000' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0e1118 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '2rem',
              right: '2rem',
            }}
          >
            <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {project.category}
            </span>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', margin: 0 }}>
              {project.title}
            </h2>
          </div>
        </div>

        <div style={{ padding: '2rem 2.5rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-dark)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={20} color="#c59b27" />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Location</div>
                <div style={{ fontWeight: 600, color: '#f8fafc' }}>{project.location || 'Global'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Maximize2 size={20} color="#c59b27" />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Floor Area</div>
                <div style={{ fontWeight: 600, color: '#f8fafc' }}>{project.area || 'Bespoke Scale'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Layers size={20} color="#c59b27" />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Discipline</div>
                <div style={{ fontWeight: 600, color: '#f8fafc' }}>BIM, LGSF & Architecture</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Calendar size={20} color="#c59b27" />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Timeline</div>
                <div style={{ fontWeight: 600, color: '#f8fafc' }}>{project.year || '2023-2024'}</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#fff', marginBottom: '0.75rem' }}>DESIGN OVERVIEW</h4>
            <p style={{ lineHeight: '1.8', fontSize: '1rem', color: '#94a3b8' }}>
              {project.description ||
                `An architectural showcase exemplifying Inches & Feet's signature blend of spatial harmony, structural integrity, and contemporary elegance. Delivered with full coordination across architectural drawings, 3D photorealistic renderings, and BIM clash detection.`}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              background: 'rgba(197, 155, 39, 0.08)',
              border: '1px solid rgba(197, 155, 39, 0.25)',
              padding: '1.25rem 1.75rem',
              borderRadius: '10px',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>
                Inspired by this project?
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
                Let our architects design a personalized plan tailored to your plot and vision.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onConsultClick) onConsultClick();
              }}
              className="btn-primary"
              style={{ fontSize: '1.1rem', padding: '0.6rem 1.4rem' }}
            >
              Consult On This Style
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
