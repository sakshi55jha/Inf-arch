import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';

const propertyTypes = [
  { name: 'Luxury Villa / Bungalow', rate: 120, icon: '🏡' },
  { name: 'Apartment / Condominium', rate: 85, icon: '🏢' },
  { name: 'Commercial Office', rate: 95, icon: '💼' },
  { name: 'Cafe / Restaurant', rate: 110, icon: '☕' },
  { name: 'Retail & Hospitality', rate: 130, icon: '✨' },
];

const availableScopes = [
  'Architectural Drawings & Elevations',
  '3D Photorealistic Renderings & Walkthrough',
  'Building Information Modeling (BIM & Revit)',
  'Interior Architecture & Material Palette',
  'Structural & MEP Engineering Sets',
];

const tiers = [
  {
    name: 'Essential Blueprint',
    multiplier: 1.0,
    tagline: 'Ideal for permit approvals and standard residential construction sets.',
  },
  {
    name: 'Signature Premium',
    multiplier: 1.4,
    tagline: 'Full architectural detailing, interior millwork, and 3D visualization.',
    popular: true,
  },
  {
    name: 'Turnkey Bespoke',
    multiplier: 1.9,
    tagline: 'End-to-end design management, clash-free BIM LOD 400 & material curation.',
  },
];

export default function CostEstimator({ onShowToast }) {
  const [projectType, setProjectType] = useState(propertyTypes[0].name);
  const [areaSqFt, setAreaSqFt] = useState(2800);
  const [selectedScopes, setSelectedScopes] = useState([
    'Architectural Drawings & Elevations',
    '3D Photorealistic Renderings & Walkthrough',
    'Interior Architecture & Material Palette',
  ]);
  const [selectedTier, setSelectedTier] = useState('Signature Premium');

  // Contact modal / form states for quote locking
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Live calculation
  const estimate = useMemo(() => {
    const selectedProp = propertyTypes.find((p) => p.name === projectType) || propertyTypes[0];
    const selectedTierObj = tiers.find((t) => t.name === selectedTier) || tiers[1];

    const baseRate = selectedProp.rate;
    const tierMult = selectedTierObj.multiplier;
    const scopeMult = 1.0 + Math.max(0, selectedScopes.length - 1) * 0.22;

    const total = areaSqFt * baseRate * tierMult * scopeMult;
    const min = Math.round((total * 0.9) / 1000) * 1000;
    const max = Math.round((total * 1.15) / 1000) * 1000;

    return { min, max };
  }, [projectType, areaSqFt, selectedScopes, selectedTier]);

  const toggleScope = (scope) => {
    if (selectedScopes.includes(scope)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== scope));
      }
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const handleLockQuote = async (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) {
      if (onShowToast) onShowToast('Please provide your name, email, and phone to receive the formal quote.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await api.requestQuotation({
        clientName,
        clientEmail,
        clientPhone,
        projectType,
        areaSqFt: Number(areaSqFt),
        scope: selectedScopes,
        packageTier: selectedTier,
        notes: `Calculated range: ₹${estimate.min.toLocaleString()} - ₹${estimate.max.toLocaleString()}`,
      });
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Detailed formal quotation sent to our senior estimating architects!', 'success');
      }
    } catch (err) {
      if (onShowToast) onShowToast(err.message || 'Quotation request failed', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-py" style={{ backgroundColor: '#0d1017' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <span className="section-tagline">TRANSPARENT ARCHITECTURAL PRICING</span>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
            REAL-TIME PROJECT COST & DESIGN ESTIMATOR
          </h2>
          <p>
            Configure your project parameters below to calculate an immediate baseline architectural fee estimate and receive an itemized proposal.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="estimator-grid"
        >
          {/* Controls Column */}
          <div className="luxury-card" style={{ background: '#11151e' }}>
            {/* Step 1: Property Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ marginBottom: '0.85rem', display: 'block' }}>
                1. Select Property Type
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {propertyTypes.map((pt) => {
                  const isSelected = projectType === pt.name;
                  return (
                    <button
                      key={pt.name}
                      type="button"
                      onClick={() => setProjectType(pt.name)}
                      style={{
                        padding: '0.85rem 0.75rem',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(197, 155, 39, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-dark)'}`,
                        color: isSelected ? '#fff' : '#94a3b8',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{pt.icon}</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, lineHeight: '1.3' }}>
                        {pt.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Built-Up Area */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}
              >
                <label className="form-label">2. Built-Up Area (Square Feet)</label>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    color: 'var(--accent-gold)',
                  }}
                >
                  {Number(areaSqFt).toLocaleString()} SQ.FT
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="15000"
                step="100"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-gold)',
                  cursor: 'pointer',
                  marginBottom: '0.5rem',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#64748b',
                }}
              >
                <span>600 sq.ft (Compact)</span>
                <span>5,000 sq.ft (Mid-Scale)</span>
                <span>15,000 sq.ft (Estate/Commercial)</span>
              </div>
            </div>

            {/* Step 3: Scope of Services */}
            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label" style={{ marginBottom: '0.85rem', display: 'block' }}>
                3. Required Disciplines & Deliverables
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {availableScopes.map((scope) => {
                  const isChecked = selectedScopes.includes(scope);
                  return (
                    <div
                      key={scope}
                      onClick={() => toggleScope(scope)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        background: isChecked ? 'rgba(197, 155, 39, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${isChecked ? 'rgba(197, 155, 39, 0.4)' : 'rgba(255, 255, 255, 0.06)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '4px',
                          background: isChecked ? 'var(--accent-gold)' : 'transparent',
                          border: `1px solid ${isChecked ? 'var(--accent-gold)' : '#64748b'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {isChecked && <Check size={14} color="#000" strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '0.9rem', color: isChecked ? '#fff' : '#cbd5e1' }}>
                        {scope}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Tier Selection */}
            <div>
              <label className="form-label" style={{ marginBottom: '0.85rem', display: 'block' }}>
                4. Select Execution Tier
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
                {tiers.map((t) => {
                  const isSelected = selectedTier === t.name;
                  return (
                    <div
                      key={t.name}
                      onClick={() => setSelectedTier(t.name)}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(197, 155, 39, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-dark)'}`,
                        cursor: 'pointer',
                        position: 'relative',
                      }}
                    >
                      {t.popular && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '10px',
                            background: 'var(--accent-gold)',
                            color: '#000',
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '999px',
                            textTransform: 'uppercase',
                          }}
                        >
                          Most Popular
                        </span>
                      )}
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '0.3rem' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' }}>
                        {t.tagline}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Price Output Card */}
          <div
            className="luxury-card"
            style={{
              background: '#0d1017',
              borderColor: 'var(--accent-gold)',
              padding: '2.5rem',
              position: 'sticky',
              top: '100px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Sparkles size={20} color="#c59b27" />
              <span className="badge-gold">ESTIMATED ARCHITECTURAL FEE</span>
            </div>

            <div style={{ margin: '1.25rem 0 1.75rem' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Design Scope Investment
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                  color: '#ffffff',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  margin: '0.4rem 0',
                }}
              >
                ₹{estimate.min.toLocaleString()} - ₹{estimate.max.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
                approx. ${(estimate.min / 85).toFixed(0).toLocaleString()} - ${(estimate.max / 85).toFixed(0).toLocaleString()} USD (for international clients)
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border-dark)',
                paddingTop: '1.25rem',
                marginBottom: '1.75rem',
                fontSize: '0.86rem',
                color: '#cbd5e1',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div><strong>Property:</strong> {projectType}</div>
              <div><strong>Scale:</strong> {Number(areaSqFt).toLocaleString()} sq.ft</div>
              <div><strong>Tier:</strong> {selectedTier}</div>
              <div><strong>Disciplines:</strong> {selectedScopes.length} selected</div>
            </div>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10b981',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={36} color="#10b981" style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ color: '#fff', marginBottom: '0.3rem' }}>QUOTE REQUEST RECORDED</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  A project architect will contact you at {clientEmail} with the complete itemized quotation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLockQuote}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                  Lock in this estimate & receive a formal proposal:
                </div>
                <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 0.85rem' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 0.85rem' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+91 or +1)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 0.85rem' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '1.15rem' }}
                >
                  {submitting ? 'Generating Proposal...' : 'Request Formal Proposal'}
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .estimator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
