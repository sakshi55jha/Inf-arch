import React, { useState } from 'react';
import { X, Send, Calendar, CheckCircle } from 'lucide-react';
import { api } from '../services/api';

export default function ConsultationModal({ isOpen, onClose, onSuccess }) {
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
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and project requirements.');
      return;
    }

    setLoading(true);
    try {
      await api.createInquiry(formData);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess('Your consultation request has been booked! An architect will reach out within 24 hours.');
      }
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Architecture Design',
          projectLocation: '',
          budget: 'Flexible',
          message: '',
        });
      }, 2200);
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="luxury-card"
        style={{
          maxWidth: '620px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#11151e',
          border: '1px solid #c59b27',
          padding: '2.5rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: '#94a3b8',
            cursor: 'pointer',
          }}
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ color: '#fff', marginBottom: '0.75rem' }}>CONSULTATION REQUEST RECEIVED</h3>
            <p style={{ color: '#94a3b8' }}>
              Thank you for choosing Inches & Feet. Our principal design architect will review your project specs and contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-tagline">INCHES & FEET STUDIO</span>
              <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem' }}>
                SCHEDULE A CONSULTATION
              </h2>
              <p style={{ fontSize: '0.92rem' }}>
                Collaborate with our award-winning architectural team on residential villas, BIM workflows, or commercial interiors.
              </p>
            </div>

            {error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  marginBottom: '1.25rem',
                  fontSize: '0.9rem',
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
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
                  <label className="form-label">Project Location / City</label>
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    placeholder="e.g. Bangalore, Charlotte NC, Dubai"
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Estimated Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Flexible">Flexible / Discuss in call</option>
                    <option value="₹15 - 30 Lakhs">₹15 - 30 Lakhs ($20k - $40k)</option>
                    <option value="₹30 - 60 Lakhs">₹30 - 60 Lakhs ($40k - $80k)</option>
                    <option value="₹60 Lakhs - 1.5 Cr">₹60 Lakhs - 1.5 Cr ($80k - $200k)</option>
                    <option value="₹1.5 Cr+">₹1.5 Cr+ ($200k+)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details & Vision *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details such as land area, architectural style preference, desired timeline..."
                  className="form-textarea"
                  style={{ minHeight: '90px' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {loading ? 'Submitting...' : 'Book Design Consultation'}
                <Send size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
