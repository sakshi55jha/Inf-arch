import React from 'react';
import { Check, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import CostEstimator from '../components/CostEstimator';

const plans = [
  {
    name: 'Essential Blueprint',
    price: 'From ₹45 / sq.ft',
    usd: '~$0.55 / sq.ft',
    description: 'Perfect for land owners and builders requiring municipal approval drawings and clean schematic sets.',
    features: [
      'Site Layout & Orientation Analysis',
      '2D Architectural Floor Plans',
      'Exterior 3D Conceptual Elevations (2 views)',
      'Basic Structural Framing Grid',
      'Local Municipality Permit Set',
      'Up to 2 Major Revision Iterations',
    ],
    popular: false,
  },
  {
    name: 'Signature Premium',
    price: 'From ₹95 / sq.ft',
    usd: '~$1.15 / sq.ft',
    description: 'Our most sought-after plan for luxury residential homes, villas, and boutique cafe interiors.',
    features: [
      'Everything in Essential Blueprint',
      'Photorealistic 4K 3D Walkthrough Renders',
      'Comprehensive Interior Layouts & Lighting Schemes',
      'Revit LOD 300 BIM Structural Model',
      'Custom Millwork & Cabinetry Joinery Sets',
      'Full Bill of Quantities (BOQ) & Material Specs',
      'Up to 4 Major Revision Iterations',
    ],
    popular: true,
  },
  {
    name: 'Turnkey Bespoke',
    price: 'From ₹165 / sq.ft',
    usd: '~$2.00 / sq.ft',
    description: 'Full-spectrum end-to-end design, LOD 400 BIM clash coordination, and on-site engineering supervision.',
    features: [
      'Everything in Signature Premium',
      'LOD 400 MEP & Structural Clash Detection',
      'Light Gauge Steel Framing (LGSF) Panels',
      'Italian Marble & Imported Material Sourcing',
      'Weekly On-Site Supervision & Contractor Audits',
      'Virtual VR Interactive Spatial Tour',
      'Unlimited Revisions during Schematic Phase',
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: 'How are payment milestones structured?',
    a: 'We work on transparent, milestone-driven disbursements: 20% upon signing and initial brief, 30% upon approval of schematic 3D concepts, 30% upon delivery of detailed BIM/construction drawings, and 20% upon final handover.',
  },
  {
    q: 'Do you work with international clients in the US or Middle East?',
    a: 'Yes! A significant portion of our portfolio consists of projects in North Carolina, Florida, Michigan, The Bahamas, and the UAE. We accept wire transfers, operate across multiple time zones, and draft in accordance with US IBC/IRC building codes.',
  },
  {
    q: 'Can I customize the scope of work?',
    a: 'Absolutely. Use our live interactive estimator below to toggle specific disciplines like 3D Rendering, BIM Modeling, or Interior joinery according to your project requirements.',
  },
];

export default function Pricing({ onOpenConsultModal, onShowToast }) {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/5.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">TRANSPARENT VALUE</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            ARCHITECTURAL DESIGN PACKAGES & PRICING
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            No hidden fees. Transparent, per-square-foot pricing tailored to your scale, timeline, and design aspirations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2.5rem',
              marginBottom: '5rem',
            }}
          >
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className="luxury-card"
                style={{
                  background: plan.popular ? 'linear-gradient(180deg, #161b26 0%, #10141d 100%)' : '#11151e',
                  borderColor: plan.popular ? 'var(--accent-gold)' : 'var(--border-dark)',
                  boxShadow: plan.popular ? '0 12px 35px rgba(197, 155, 39, 0.18)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  padding: '2.5rem 2rem',
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent-gold)',
                      color: '#000',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '0.25rem 1rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Recommended Choice
                  </div>
                )}

                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.3rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#94a3b8', minHeight: '44px', marginBottom: '1.5rem' }}>
                    {plan.description}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.8rem',
                        color: plan.popular ? 'var(--accent-gold)' : '#fff',
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                      International: {plan.usd}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                      Scope Inclusions:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {plan.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                          <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultModal}
                  className={plan.popular ? 'btn-primary' : 'btn-outline'}
                  style={{ width: '100%', fontSize: '1.15rem' }}
                >
                  Choose {plan.name.split(' ')[0]}
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Interactive Cost Estimator */}
          <CostEstimator onShowToast={onShowToast} />

          {/* Pricing FAQs */}
          <div style={{ marginTop: '5rem', maxWidth: '820px', margin: '5rem auto 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-tagline">QUESTIONS & CLARIFICATIONS</span>
              <h2 style={{ color: '#fff' }}>FREQUENTLY ASKED QUESTIONS</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((f, i) => (
                <div key={i} className="luxury-card" style={{ background: '#11151e' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <HelpCircle size={18} color="var(--accent-gold)" />
                    {f.q}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#94a3b8', lineHeight: '1.7', margin: 0 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
