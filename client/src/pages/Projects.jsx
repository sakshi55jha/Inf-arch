import React from 'react';
import ProjectsGallery from '../components/ProjectsGallery';

export default function Projects({ onOpenConsultModal }) {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/2.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">OUR ARCHITECTURAL PORTFOLIO</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            54+ CURATED ARCHITECTURAL & INTERIOR PROJECTS
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Explore our diverse body of work spanning residential luxury villas, boutique beachfront condominiums, commercial complexes, and parametric BIM drafting across India, the United States, The Bahamas, and the Middle East.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <ProjectsGallery showFilters={true} onOpenConsultModal={onOpenConsultModal} />
        </div>
      </section>
    </div>
  );
}
