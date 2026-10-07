import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, Users, FileText, CheckCircle, Trash2, Plus, RefreshCw, ExternalLink, Calendar, MapPin, Calculator, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export default function AdminDashboard({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [stats, setStats] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // New project form state
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    location: '',
    category: 'Residential',
    image: '/images/1.jpg',
    description: '',
    area: '3,500 sq.ft',
    year: '2024',
  });

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [statsRes, inqRes, quoteRes, appRes, projRes] = await Promise.all([
        api.getStats(),
        api.getInquiries(),
        api.getQuotations(),
        api.getApplications(),
        api.getProjects(),
      ]);

      setStats(statsRes.stats);
      setInquiries(inqRes.data || []);
      setQuotations(quoteRes.data || []);
      setApplications(appRes.data || []);
      setProjects(projRes.data || []);
    } catch (err) {
      if (onShowToast) onShowToast('Failed to load dashboard data', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateInquiryStatus = async (id, status) => {
    try {
      await api.updateInquiryStatus(id, status);
      setInquiries(inquiries.map((inq) => (inq._id === id ? { ...inq, status } : inq)));
      if (onShowToast) onShowToast(`Inquiry status updated to ${status}`, 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to update status', 'error');
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      await api.deleteInquiry(id);
      setInquiries(inquiries.filter((inq) => inq._id !== id));
      if (onShowToast) onShowToast('Inquiry removed', 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to delete inquiry', 'error');
    }
  };

  const handleUpdateQuotationStatus = async (id, status) => {
    try {
      await api.updateQuotationStatus(id, status);
      setQuotations(quotations.map((q) => (q._id === id ? { ...q, status } : q)));
      if (onShowToast) onShowToast(`Quotation status updated to ${status}`, 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to update status', 'error');
    }
  };

  const handleUpdateApplicationStatus = async (id, status) => {
    try {
      await api.updateApplicationStatus(id, status);
      setApplications(applications.map((app) => (app._id === id ? { ...app, status } : app)));
      if (onShowToast) onShowToast(`Application status updated to ${status}`, 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to update status', 'error');
    }
  };

  const handleDeleteApplication = async (id) => {
    if (!window.confirm('Delete this application?')) return;
    try {
      await api.deleteApplication(id);
      setApplications(applications.filter((app) => app._id !== id));
      if (onShowToast) onShowToast('Application removed', 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to delete application', 'error');
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const res = await api.createProject(newProject);
      setProjects([res.data, ...projects]);
      setShowAddProject(false);
      if (onShowToast) onShowToast('New project created and published to portfolio!', 'success');
      setNewProject({
        title: '',
        location: '',
        category: 'Residential',
        image: '/images/1.jpg',
        description: '',
        area: '3,500 sq.ft',
        year: '2024',
      });
    } catch (err) {
      if (onShowToast) onShowToast(err.message || 'Failed to add project', 'error');
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this project from portfolio?')) return;
    try {
      await api.deleteProject(id);
      setProjects(projects.filter((p) => p._id !== id));
      if (onShowToast) onShowToast('Project removed', 'success');
    } catch (err) {
      if (onShowToast) onShowToast('Failed to delete project', 'error');
    }
  };

  return (
    <div style={{ backgroundColor: '#07090d', minHeight: '100vh', padding: '3.5rem 0 6rem' }}>
      <div className="container-wide">
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)' }}>
              <ShieldCheck size={24} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ADMIN MANAGEMENT SYSTEM
              </span>
            </div>
            <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: '0.25rem 0 0' }}>
              INCHES & FEET STUDIO CONSOLE
            </h1>
          </div>

          <button
            onClick={loadAllData}
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '0.5rem 1.25rem' }}
          >
            <RefreshCw size={16} />
            Refresh Data
          </button>
        </div>

        {/* Live KPI Metric Cards */}
        {stats && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div className="luxury-card" style={{ background: '#11151e', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Total Inquiries</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#fff', lineHeight: 1.1 }}>
                {stats.inquiries}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>Consultations & Contacts</div>
            </div>

            <div className="luxury-card" style={{ background: '#11151e', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Quotations Requested</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#fff', lineHeight: 1.1 }}>
                {stats.quotations}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Live Cost Calculations</div>
            </div>

            <div className="luxury-card" style={{ background: '#11151e', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Job Applications</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#fff', lineHeight: 1.1 }}>
                {stats.applications}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8' }}>Talent Submissions</div>
            </div>

            <div className="luxury-card" style={{ background: '#11151e', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Projects In Catalog</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#fff', lineHeight: 1.1 }}>
                {stats.projects}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#c084fc' }}>Live Architectural Works</div>
            </div>

            <div className="luxury-card" style={{ background: '#11151e', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Subscribers</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#fff', lineHeight: 1.1 }}>
                {stats.subscribers}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#f59e0b' }}>Newsletter Database</div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '2.5rem',
            overflowX: 'auto',
          }}
        >
          {[
            { id: 'inquiries', label: `Consultations (${inquiries.length})`, icon: Mail },
            { id: 'quotations', label: `Quotations (${quotations.length})`, icon: Calculator },
            { id: 'applications', label: `Job Applications (${applications.length})`, icon: Users },
            { id: 'projects', label: `Project Catalog (${projects.length})`, icon: FileText },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--accent-gold)' : '#94a3b8',
                  borderBottom: `3px solid ${isActive ? 'var(--accent-gold)' : 'transparent'}`,
                  padding: '0.75rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: 'none',
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Inquiries */}
        {activeTab === 'inquiries' && (
          <div>
            {inquiries.length === 0 ? (
              <div className="luxury-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <p>No consultation inquiries recorded yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {inquiries.map((inq) => (
                  <div
                    key={inq._id}
                    className="luxury-card"
                    style={{
                      background: '#11151e',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      padding: '1.75rem',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>{inq.name}</h3>
                        <span className="badge-gold">{inq.service}</span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            background: inq.status === 'Completed' ? '#13281c' : '#222834',
                            color: inq.status === 'Completed' ? '#10b981' : '#cbd5e1',
                            fontWeight: 600,
                          }}
                        >
                          Status: {inq.status}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                        <strong>Email:</strong> {inq.email} | <strong>Phone:</strong> {inq.phone || 'N/A'} | <strong>Location:</strong> {inq.projectLocation || 'N/A'} | <strong>Budget:</strong> {inq.budget}
                      </div>
                      <p style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '6px', color: '#e2e8f0', fontSize: '0.92rem', margin: 0 }}>
                        "{inq.message}"
                      </p>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                        Received: {new Date(inq.createdAt).toLocaleString()}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <select
                        value={inq.status}
                        onChange={(e) => handleUpdateInquiryStatus(inq._id, e.target.value)}
                        className="form-select"
                        style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', width: 'auto' }}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                      </select>

                      <button
                        onClick={() => handleDeleteInquiry(inq._id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#f87171',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                        title="Delete Inquiry"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Quotations */}
        {activeTab === 'quotations' && (
          <div>
            {quotations.length === 0 ? (
              <div className="luxury-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <p>No quotation requests submitted yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {quotations.map((q) => (
                  <div
                    key={q._id}
                    className="luxury-card"
                    style={{
                      background: '#11151e',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      padding: '1.75rem',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>{q.clientName}</h3>
                        <span className="badge-gold">{q.projectType}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                          Tier: {q.packageTier}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                        <strong>Email:</strong> {q.clientEmail} | <strong>Phone:</strong> {q.clientPhone} | <strong>Area:</strong> {q.areaSqFt?.toLocaleString()} sq.ft
                      </div>
                      <div
                        style={{
                          background: 'rgba(197, 155, 39, 0.08)',
                          border: '1px solid rgba(197, 155, 39, 0.25)',
                          padding: '0.75rem 1rem',
                          borderRadius: '6px',
                          marginBottom: '0.5rem',
                          color: '#fff',
                        }}
                      >
                        <strong>Estimated Range:</strong> ₹{q.estimatedCostMin?.toLocaleString()} – ₹{q.estimatedCostMax?.toLocaleString()}
                        <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                          Scope: {Array.isArray(q.scope) ? q.scope.join(', ') : q.scope}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Requested: {new Date(q.createdAt).toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <select
                        value={q.status}
                        onChange={(e) => handleUpdateQuotationStatus(q._id, e.target.value)}
                        className="form-select"
                        style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', width: 'auto' }}
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Quote Prepared">Quote Prepared</option>
                        <option value="Sent to Client">Sent to Client</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Career Applications */}
        {activeTab === 'applications' && (
          <div>
            {applications.length === 0 ? (
              <div className="luxury-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <p>No job applications received yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {applications.map((app) => (
                  <div
                    key={app._id}
                    className="luxury-card"
                    style={{
                      background: '#11151e',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      padding: '1.75rem',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>{app.fullName}</h3>
                        <span className="badge-gold">{app.position}</span>
                        <span style={{ fontSize: '0.8rem', color: '#38bdf8' }}>Exp: {app.experienceYears}</span>
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                        <strong>Email:</strong> {app.email} | <strong>Phone:</strong> {app.phone}
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                        {app.portfolioUrl && (
                          <a
                            href={app.portfolioUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              color: 'var(--accent-gold)',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                            }}
                          >
                            <ExternalLink size={14} /> View Portfolio
                          </a>
                        )}
                        {app.resumeLink && (
                          <a
                            href={app.resumeLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              color: '#38bdf8',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                            }}
                          >
                            <ExternalLink size={14} /> Resume / LinkedIn
                          </a>
                        )}
                      </div>

                      {app.coverNote && (
                        <p style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem 1rem', borderRadius: '6px', color: '#cbd5e1', fontSize: '0.88rem', margin: 0 }}>
                          "{app.coverNote}"
                        </p>
                      )}
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                        Submitted: {new Date(app.createdAt).toLocaleString()}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <select
                        value={app.status}
                        onChange={(e) => handleUpdateApplicationStatus(app._id, e.target.value)}
                        className="form-select"
                        style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', width: 'auto' }}
                      >
                        <option value="Submitted">Submitted</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Offered">Offered</option>
                        <option value="Archived">Archived</option>
                      </select>

                      <button
                        onClick={() => handleDeleteApplication(app._id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#f87171',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Project Catalog Management */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', color: '#fff' }}>
                Managing {projects.length} Architectural Portfolio Projects
              </div>
              <button
                onClick={() => setShowAddProject(!showAddProject)}
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '0.5rem 1.25rem' }}
              >
                <Plus size={18} />
                {showAddProject ? 'Cancel' : 'Add New Project'}
              </button>
            </div>

            {/* Add Project Form Drawer */}
            {showAddProject && (
              <form
                onSubmit={handleCreateProject}
                className="luxury-card"
                style={{ background: '#11151e', borderColor: 'var(--accent-gold)', marginBottom: '2.5rem', padding: '2rem' }}
              >
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>PUBLISH NEW ARCHITECTURAL PROJECT</h3>
                <div className="grid-3" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Palm Grove Villa"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Whitefield, Bengaluru"
                      value={newProject.location}
                      onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="form-select"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Hospitality & Cafes">Hospitality & Cafes</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Architecture & BIM">Architecture & BIM</option>
                    </select>
                  </div>
                </div>

                <div className="grid-3" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Image Path *</label>
                    <input
                      type="text"
                      required
                      placeholder="/images/1.jpg or URL"
                      value={newProject.image}
                      onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Floor Area</label>
                    <input
                      type="text"
                      placeholder="e.g. 4,200 sq.ft"
                      value={newProject.area}
                      onChange={(e) => setNewProject({ ...newProject, area: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Completion Year</label>
                    <input
                      type="text"
                      placeholder="2024"
                      value={newProject.year}
                      onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Architectural Overview Description</label>
                  <textarea
                    placeholder="Describe design features, material choices, BIM specifics..."
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="form-textarea"
                    style={{ minHeight: '80px' }}
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Save & Publish Project
                </button>
              </form>
            )}

            {/* Project List */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {projects.map((p) => (
                <div
                  key={p._id}
                  className="luxury-card"
                  style={{
                    background: '#11151e',
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img src={p.image} alt={p.title} style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
                  <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span className="badge-gold" style={{ fontSize: '0.7rem' }}>{p.category}</span>
                      <h4 style={{ color: '#fff', fontSize: '1.15rem', margin: '0.4rem 0 0.2rem' }}>{p.title}</h4>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{p.location}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <button
                        onClick={() => handleDeleteProject(p._id)}
                        style={{ color: '#f87171', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
