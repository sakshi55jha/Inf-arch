import React from 'react';
import { ShieldCheck, Cpu, Sparkles, Clock, Compass, Eye } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Holistic Spatial Philosophy',
    description: 'We synthesize micro-level interior ergonomics with macro-level architectural volumes, ensuring aesthetic harmony and livability.',
  },
  {
    icon: Cpu,
    title: 'Parametric BIM & LOD 400',
    description: 'Advanced Autodesk Revit and Navisworks workflows that detect structural/MEP collisions before a single brick is laid on-site.',
  },
  {
    icon: Eye,
    title: 'Photorealistic 3D Walkthroughs',
    description: 'Experience your prospective home or commercial space with ray-traced lighting, textured materials, and 360-degree spatial tours.',
  },
  {
    icon: Clock,
    title: 'Turnkey Delivery & Punctuality',
    description: 'Rigorous project management with milestone-based schedules, vetted contractors, and transparent procurement management.',
  },
  {
    icon: ShieldCheck,
    title: 'Global Code & Regulatory Compliance',
    description: 'Full adherence to IBC/IRC codes for US clients and local municipality development bylaws across Bangalore and India.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Luxury Finishes',
    description: 'Direct relationships with Italian marble importers, architectural lighting designers, and custom acoustic artisans.',
  },
];

export default function WhyChooseUs({ onOpenConsultModal }) {
  return (
    <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <span className="section-tagline">THE INCHES & FEET ADVANTAGE</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            WHY CHOOSE US FOR YOUR DREAM PROJECT?
          </h2>
          <p>
            Designing a space is more than just choosing finishes—it is about composing environments that elevate human wellbeing, endure generations, and maximize property asset value.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem' }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    background: 'rgba(197, 155, 39, 0.12)',
                    border: '1px solid rgba(197, 155, 39, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} color="#c59b27" />
                </div>

                <div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#94a3b8' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
