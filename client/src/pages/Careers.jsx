import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, Award, Heart, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const openJobs = [
  {
    title: 'Senior Architect',
    type: 'Full-time',
    location: 'Bengaluru (Hybrid)',
    experience: '5-8 Years',
    description: 'Lead luxury residential and commercial architecture projects. Coordinate multidisciplinary consultant teams and interface directly with high-net-worth clients.',
  },
  {
    title: 'BIM Specialist / Revit Modeler',
    type: 'Full-time',
    location: 'Bengaluru / Remote',
    experience: '3-5 Years',
    description: 'Author LOD 350-400 parametric models in Autodesk Revit, run Navisworks clash detection tests, and coordinate structural LGSF framing sets for US developers.',
  },
  {
    title: 'Interior Designer - Luxury Residential',
    type: 'Full-time',
    location: 'Bengaluru Studio',
    experience: '3-6 Years',
    description: 'Curate high-end residential interior architectures, custom millwork, lighting concepts, and sensory material mood boards.',
  },
  {
    title: '3D Visualizer & Rendering Artist',
    type: 'Full-time',
    location: 'Bengaluru / Remote',
    experience: '2-5 Years',
    description: 'Transform 2D/3D CAD models into photorealistic 4K architectural renderings and immersive walkthrough animations using 3ds Max, V-Ray, and Unreal Engine.',
  },
];

export default function Careers({ onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Senior Architect',
    experienceYears: '3-5 years',
    portfolioUrl: '',
    resumeLink: '',
    coverNote: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.createApplication(formData);
      setSubmitted(true);
      if (onShowToast) onShowToast('Application submitted successfully! Our talent team will review your profile.', 'success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: 'Senior Architect',
        experienceYears: '3-5 years',
        portfolioUrl: '',
        resumeLink: '',
        coverNote: '',
      });
    } catch (err) {
      if (onShowToast) onShowToast(err.message || 'Submission failed', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/life/22.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">JOIN INCHES & FEET</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            BUILD EXTRAORDINARY ARCHITECTURE WITH US
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            We are always seeking passionate architects, BIM technologists, and interior artists who dream in geometry and execute with surgical precision.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="section-tagline">CURRENT OPENINGS</span>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>FEATURED CAREER OPPORTUNITIES</h2>
            <p>Work on high-profile developments across Bangalore, Charlotte NC, The Bahamas, and Dubai.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem', maxWidth: '980px', margin: '0 auto 5rem' }}>
            {openJobs.map((job, idx) => (
              <div
                key={idx}
                className="luxury-card"
                style={{
                  background: '#11151e',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.4rem' }}>
                    {job.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.84rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {job.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {job.type}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Briefcase size={14} /> Exp: {job.experience}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '650px', margin: 0 }}>
                    {job.description}
                  </p>
                </div>

                <a
                  href="#application-form"
                  onClick={() => setFormData((prev) => ({ ...prev, position: job.title }))}
                  className="btn-outline-gold"
                  style={{ fontSize: '1.05rem', padding: '0.6rem 1.4rem' }}
                >
                  Apply For Role
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div
            id="application-form"
            className="luxury-card"
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              background: '#0d1017',
              borderColor: 'var(--accent-gold)',
              padding: '3rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>DIRECT TALENT PORTAL</span>
              <h2 style={{ color: '#fff', fontSize: '2.4rem' }}>SUBMIT YOUR APPLICATION</h2>
              <p style={{ fontSize: '0.92rem' }}>Fill in your credentials and portfolio link to be considered for current or upcoming design roles.</p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <CheckCircle2 size={54} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>APPLICATION RECEIVED</h3>
                <p style={{ color: '#94a3b8' }}>
                  Thank you! Our studio team will review your portfolio and reach out if your experience aligns with our project requirements.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ marginTop: '1.5rem' }}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Desired Position *</label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="form-select"
                    >
                      <option value="Senior Architect">Senior Architect</option>
                      <option value="Junior Architectural Designer">Junior Architectural Designer</option>
                      <option value="BIM Specialist / Revit Modeler">BIM Specialist / Revit Modeler</option>
                      <option value="Interior Designer">Interior Designer</option>
                      <option value="3D Visualizer & Rendering Artist">3D Visualizer & Rendering Artist</option>
                      <option value="Project Coordinator">Project Coordinator</option>
                      <option value="Other">Other / Spontaneous Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Years of Experience</label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="form-select"
                    >
                      <option value="0-1 year">0-1 year (Entry / Graduate)</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8+ years">8+ years</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Portfolio URL / Behance / Drive *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://behance.net/yourprofile or Google Drive link"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Resume / LinkedIn URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile or Resume PDF link"
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Cover Note / Why Inches & Feet?</label>
                  <textarea
                    placeholder="Briefly describe your design software proficiency (Revit, Rhino, SketchUp, Lumion), your key architectural passions, and why you'd like to join us..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="form-textarea"
                    style={{ minHeight: '90px' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '1.25rem' }}
                >
                  {submitting ? 'Submitting Application...' : 'Submit Application to INF'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
