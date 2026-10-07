import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldCheck, Box, Home, Coffee, Cpu, PenTool } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';

const workflowSteps = [
  {
    step: '01',
    title: 'Discovery & Spatial Brief',
    description: 'We analyze your plot survey, orientation, lifestyle requirements, and regulatory bylaws to construct a clear architectural brief.',
  },
  {
    step: '02',
    title: 'Schematic Design & 3D Concepts',
    description: 'We generate 3D massing models, photorealistic elevation renders, and preliminary floor plans for your visual feedback.',
  },
  {
    step: '03',
    title: 'BIM & Multi-Trade Clash Coordination',
    description: 'Our engineers build parametric Revit models, integrating structural and MEP conduits to resolve conflicts before construction.',
  },
  {
    step: '04',
    title: 'Detailed Construction Documentation',
    description: 'Complete sets of permit drawings, structural engineering calculations, joinery drawings, and bill of quantities (BOQ).',
  },
  {
    step: '05',
    title: 'Execution Supervision & Turnkey Delivery',
    description: 'Periodic site audits, vendor material approvals, and quality control checks ensuring exact realization of the blueprint.',
  },
];

export default function Services({ onOpenConsultModal }) {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/4.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">DISCIPLINES & PRACTICES</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            COMPREHENSIVE ARCHITECTURAL & BIM DESIGN SERVICES
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            From high-concept residential architecture to complex LOD 400 BIM modeling, our capabilities encompass every phase of contemporary development.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection onOpenConsultModal={onOpenConsultModal} />

      {/* Process Workflow */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="section-tagline">HOW WE WORK</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>OUR PROVEN 5-PHASE ARCHITECTURAL WORKFLOW</h2>
            <p>A systematic methodology that transforms conceptual dreams into executed physical realities on time and on budget.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="luxury-card"
                style={{
                  background: '#11151e',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '3rem',
                      color: 'var(--accent-gold)',
                      lineHeight: 1,
                      marginBottom: '0.8rem',
                    }}
                  >
                    {ws.step}
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.6rem' }}>
                    {ws.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    {ws.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={onOpenConsultModal} className="btn-primary" style={{ fontSize: '1.25rem', padding: '0.8rem 2rem' }}>
              Initiate Step 1: Book Discovery Session
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
