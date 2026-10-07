import React from 'react';
import { Award, Building, Globe, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    icon: Building,
    number: '500+',
    label: 'COMPLETED PROJECTS',
    description: 'Villas, townhomes, commercial hubs & cafes crafted globally.',
  },
  {
    icon: Award,
    number: '12+',
    label: 'YEARS OF EXCELLENCE',
    description: 'Pioneering contemporary architectural language and BIM tools.',
  },
  {
    icon: Globe,
    number: '6+',
    label: 'GLOBAL JURISDICTIONS',
    description: 'Active design footprints in USA, Bahamas, India, UAE, Saudi Arabia, Norway.',
  },
  {
    icon: CheckCircle2,
    number: '100%',
    label: 'PRECISION SATISFACTION',
    description: 'Zero on-site rework through parametric Revit clash coordination.',
  },
];

export default function StatsSection() {
  return (
    <section
      style={{
        backgroundColor: '#07090d',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '4.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(197, 155, 39, 0.1)',
                    border: '1px solid rgba(197, 155, 39, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={28} color="#c59b27" />
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.6rem',
                    color: '#ffffff',
                    fontWeight: 600,
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.number}
                </div>

                <div
                  style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.label}
                </div>

                <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '240px', margin: '0 auto' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
