import React, { useState } from 'react';
import { Home, Compass, Coffee, Box, Layers, Globe, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    icon: Compass,
    title: 'Excellence in Design - Interior Architecture',
    summary: 'Blending aesthetics with functional ergonomics for residences, penthouses, and commercial headquarters.',
    details: 'Our interior architecture practice goes beyond cosmetic styling. We sculpt spatial volumes, lighting hierarchies, acoustic isolation, and bespoke cabinetry that elevate daily rituals. Every blueprint harmonizes structural balance and tactile luxury.',
    deliverables: ['Spatial Zoning & Layouts', 'Custom Millwork & Joinery', 'Mood Boards & Finish Schedules', 'Lighting & Ceiling Electrical Plans'],
  },
  {
    id: '02',
    icon: Home,
    title: 'Luxury House Plans Tailored for Modern Living',
    summary: 'Custom villa and residential architectural drawings optimized for climate, plot orientation, and natural illumination.',
    details: 'We engineer turnkey house plans tailored to your exact plot geometry, Vastu / solar orientation, and structural requirements. Our designs balance expansive glass facades with private family sanctuaries and seamless indoor-outdoor courtyards.',
    deliverables: ['Architectural Floor Plans', '3D Photorealistic Elevations', 'Structural Engineering Sets', 'Plumbing & Drainage Schematic'],
  },
  {
    id: '03',
    icon: Coffee,
    title: 'Cafe Interior Designers with a Difference',
    summary: 'High-energy hospitality concepts engineered for customer footfall, atmospheric brand identity, and operational ergonomics.',
    details: 'A successful food and beverage establishment demands swift barista workflows, atmospheric intimacy, durable commercial finishes, and memorable Instagrammable focal points. We design cafes, bistros, and lounges that patrons fall in love with.',
    deliverables: ['Barista & Kitchen Workflow Optimization', 'Acoustic & Ambient Lighting Schemes', 'Bespoke Seating & Banquette Layouts', 'Brand Material Identity Palette'],
  },
  {
    id: '04',
    icon: Box,
    title: 'Building Information Modeling (BIM): A Smarter Future',
    summary: 'Revit LOD 300-400 modeling, clash resolution, and coordinated MEP models eliminating on-site contractor rework.',
    details: 'BIM transforms conceptual sketches into intelligent, parametric virtual twins. We coordinate architectural, structural, and MEP trades to detect and resolve geometric collisions before ground breaking, slashing construction change orders by up to 40%.',
    deliverables: ['Autodesk Revit LOD 300/350/400 Models', 'Navisworks Clash Detection Reports', 'Quantity Takeoffs & Material Schedules', 'As-Built Documentation'],
  },
  {
    id: '05',
    icon: Layers,
    title: 'Light Gauge Steel Framing (LGSF) Design',
    summary: 'Rapid, sustainable, high-precision steel framing structural drafting for US residential and modular developments.',
    details: 'Light Gauge Steel Framing offers lightning-fast erection, seismic resilience, and supreme dimensional accuracy. Our team delivers fabrication-ready panel drawings, truss engineering, and CNC machine code compatibility for modular builders.',
    deliverables: ['LGSF Wall & Floor Panel Drawings', 'Roof Truss Geometry & Details', 'Structural Connection Calculations', 'BIM Framing Coordination'],
  },
  {
    id: '06',
    icon: Globe,
    title: 'Remote Architectural Team for USA & Middle East',
    summary: 'Dedicated extension of your design office delivering overnight CAD drafting, rendering, and permit documentation.',
    details: 'Based in Bangalore, our English-speaking registered architects and drafting technicians operate as an agile remote partner for US, Canadian, UAE, and European architecture practices. We operate in your time zone with impeccable code compliance.',
    deliverables: ['US Building Code (IBC/IRC) Drafting', 'Permit Submission Drawing Sets', '3ds Max & Unreal Engine Renderings', 'Real-time Slack / Teams Collaboration'],
  },
];

export default function ServicesSection({ onOpenConsultModal }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-py" style={{ backgroundColor: '#0d1017' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <span className="section-tagline">OUR CORE CAPABILITIES</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            OFFERING AN ARRAY OF SERVICES IN ARCHITECTURE & INTERIOR DESIGN
          </h2>
          <p>
            Whether conceptualizing a private luxury sanctuary or coordinating complex multi-trade BIM models, our multidimensional expertise ensures precision from blueprint to completion.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="services-split-grid"
        >
          {/* Service Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {services.map((svc, idx) => {
              const isActive = activeTab === idx;
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: isActive ? 'rgba(197, 155, 39, 0.12)' : 'rgba(19, 23, 32, 0.7)',
                    border: `1px solid ${isActive ? 'var(--accent-gold)' : 'var(--border-dark)'}`,
                    borderRadius: '10px',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(197, 155, 39, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-dark)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        color: isActive ? 'var(--accent-gold)' : '#64748b',
                        fontWeight: 600,
                        width: '32px',
                      }}
                    >
                      {svc.id}
                    </div>
                    <div>
                      <h4
                        style={{
                          color: isActive ? '#fff' : '#cbd5e1',
                          fontSize: '1.2rem',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {svc.title}
                      </h4>
                      <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                        {svc.summary.slice(0, 65)}...
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    color={isActive ? 'var(--accent-gold)' : '#64748b'}
                    style={{
                      transform: isActive ? 'rotate(-90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Service Detailed View Card */}
          <div
            className="luxury-card"
            style={{
              background: '#131722',
              borderColor: 'rgba(197, 155, 39, 0.3)',
              padding: '2.5rem',
              position: 'sticky',
              top: '100px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  background: 'rgba(197, 155, 39, 0.15)',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {React.createElement(services[activeTab].icon, {
                  size: 28,
                  color: '#c59b27',
                })}
              </div>
              <div>
                <span className="badge-gold">SERVICE {services[activeTab].id}</span>
                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '0.3rem' }}>
                  {services[activeTab].title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1.75rem', color: '#cbd5e1' }}>
              {services[activeTab].details}
            </p>

            <h5 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.85rem', letterSpacing: '0.05em' }}>
              KEY DELIVERABLES & PHASES
            </h5>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2.25rem',
              }}
            >
              {services[activeTab].deliverables.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '0.65rem 0.9rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                  }}
                >
                  <CheckCircle size={16} color="#c59b27" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenConsultModal}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Inquire About {services[activeTab].title.split('-')[0]}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
