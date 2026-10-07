import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { api } from '../services/api';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Architecture Design',
    projectLocation: '',
    budget: 'Flexible',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createInquiry(formData);
      setSubmitted(true);
      if (onShowToast) onShowToast('Consultation request submitted! We will reach out shortly.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Architecture Design',
        projectLocation: '',
        budget: 'Flexible',
        message: '',
      });
    } catch (err) {
      if (onShowToast) onShowToast(err.message || 'Submission failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'linear-gradient(rgba(10, 12, 16, 0.88), rgba(10, 12, 16, 0.96)), url(/images/8.jpg) center/cover no-repeat',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tagline">GET IN TOUCH</span>
          <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
            CONNECT WITH OUR DESIGN ARCHITECTS
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Visit our design studio in Koramangala Bengaluru, or schedule a virtual consultation for your residential, commercial, or BIM project anywhere in the world.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="section-py" style={{ backgroundColor: '#0a0c10' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1.3fr',
              gap: '3.5rem',
              alignItems: 'start',
            }}
            className="contact-split-grid"
          >
            {/* Studio Info Column */}
            <div>
              <span className="section-tagline">OUR HUBS</span>
              <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>STUDIO LOCATION & CONTACT</h2>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.7' }}>
                Whether you are starting from a raw plot of land or seeking Revit BIM coordination for a multi-family project, our team is ready to assist.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(197, 155, 39, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} color="#c59b27" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.3rem' }}>Bengaluru Design Studio</h4>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
                      Inchesnfeet Design Development LLP, 2nd Floor, Green Glen Layout, 38, 4th Block, Koramangala, Bengaluru, Karnataka 560034
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(197, 155, 39, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} color="#c59b27" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.3rem' }}>Direct Email</h4>
                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0 }}>
                      vipan@inchesnfeet.com<br />
                      shana@inchesnfeet.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(197, 155, 39, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} color="#c59b27" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.3rem' }}>Studio Hours</h4>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
                      Monday – Saturday: 9:30 AM – 7:00 PM IST<br />
                      US Liaison Hours: 9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Maps Embed */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-dark)',
                  height: '240px',
                }}
              >
                <iframe
                  title="Inches & Feet Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.665672322301!2d77.6254714152579!3d12.929208019318187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1445b2064653%3A0xc3f17d3b9e4a39f6!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Direct Consultation Request Form */}
            <div
              className="luxury-card"
              style={{
                background: '#11151e',
                borderColor: 'var(--accent-gold)',
                padding: '3rem',
              }}
            >
              <h3 style={{ color: '#fff', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                SEND US A PROJECT INQUIRY
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '2rem' }}>
                Fill in the details of your project and our principal architect will respond with schematic recommendations.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="#10b981" style={{ margin: '0 auto 1.25rem' }} />
                  <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>INQUIRY SENT SUCCESSFULLY</h3>
                  <p style={{ color: '#94a3b8' }}>
                    Thank you for reaching out to Inches & Feet. Our team will review your project parameters and get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ marginTop: '1.5rem' }}>
                    Send Another Message
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
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Service Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-select"
                      >
                        <option value="Architecture Design">Architecture Design</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Building Information Modeling (BIM)">BIM & Revit Drafting</option>
                        <option value="Luxury House Plans">Luxury House Plans</option>
                        <option value="Cafe & Commercial Space">Cafe & Commercial Space</option>
                        <option value="Turnkey Construction">Turnkey Construction</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Project Location</label>
                      <input
                        type="text"
                        placeholder="City / Country"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Target Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="form-select"
                      >
                        <option value="Flexible">Flexible / Open to suggestions</option>
                        <option value="₹15 - 30 Lakhs">₹15 - 30 Lakhs ($20k - $40k)</option>
                        <option value="₹30 - 60 Lakhs">₹30 - 60 Lakhs ($40k - $80k)</option>
                        <option value="₹60 Lakhs - 1.5 Cr">₹60 Lakhs - 1.5 Cr ($80k - $200k)</option>
                        <option value="₹1.5 Cr+">₹1.5 Cr+ ($200k+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label">Message & Project Scope *</label>
                    <textarea
                      required
                      placeholder="Share your land dimension, architectural preference, timeline, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                      style={{ minHeight: '110px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ width: '100%', fontSize: '1.25rem' }}
                  >
                    {loading ? 'Submitting...' : 'Send Inquiry To Architects'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .contact-split-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
