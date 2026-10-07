import React, { useState, useEffect } from 'react';
import { Search, MapPin, ExternalLink, Filter, Sparkles } from 'lucide-react';
import { api } from '../services/api';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Residential', 'Hospitality & Cafes', 'Commercial', 'Architecture & BIM'];

export default function ProjectsGallery({ limit, showFilters = true, onOpenConsultModal }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayCount, setDisplayCount] = useState(limit || 12);

  useEffect(() => {
    loadProjects();
  }, [selectedCategory, searchQuery]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await api.getProjects({
        category: selectedCategory,
        search: searchQuery,
      });
      setProjects(data.data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const displayedProjects = limit ? projects.slice(0, limit) : projects.slice(0, displayCount);

  return (
    <div>
      {showFilters && (
        <div style={{ marginBottom: '2.5rem' }}>
          {/* Search & Category Pills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              alignItems: 'center',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                maxWidth: '480px',
                width: '100%',
              }}
            >
              <Search
                size={18}
                color="#94a3b8"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, city, or country..."
                className="form-input"
                style={{
                  paddingLeft: '2.75rem',
                  borderRadius: '999px',
                  background: 'rgba(19, 23, 32, 0.8)',
                  border: '1px solid var(--border-dark)',
                }}
              />
            </div>

            {/* Category Filter Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                justifyContent: 'center',
              }}
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      padding: '0.45rem 1.25rem',
                      borderRadius: '999px',
                      background: isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#0a0c10' : '#cbd5e1',
                      border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.1)'}`,
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Grid of Projects */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94a3b8' }}>
          <Sparkles size={32} color="#c59b27" style={{ margin: '0 auto 1rem', animation: 'spin 2s linear infinite' }} />
          <div>Loading architectural showcase...</div>
        </div>
      ) : displayedProjects.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94a3b8' }}>
          <h3>No projects matching your search</h3>
          <p>Try clearing filters or searching for terms like "Bangalore", "Bahamas", "USA", or "Villa".</p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {displayedProjects.map((project) => (
            <div
              key={project._id}
              onClick={() => setSelectedProject(project)}
              className="luxury-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Project Image Frame */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                  background: '#090b0e',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                  }}
                >
                  <span className="badge-gold">{project.category}</span>
                </div>
              </div>

              {/* Project Meta Info */}
              <div style={{ padding: '1.4rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4
                    style={{
                      color: '#ffffff',
                      fontSize: '1.4rem',
                      marginBottom: '0.4rem',
                      lineHeight: '1.2',
                    }}
                  >
                    {project.title}
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.84rem',
                      color: '#94a3b8',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <MapPin size={14} color="#c59b27" />
                    <span>{project.location || 'Global Site'}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.82rem',
                    color: '#c59b27',
                    fontWeight: 600,
                  }}
                >
                  <span>EXPLORE PROJECT</span>
                  <ExternalLink size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button if not limited */}
      {!limit && displayedProjects.length < projects.length && (
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={() => setDisplayCount((prev) => prev + 12)}
            className="btn-outline-gold"
          >
            Load More Projects ({projects.length - displayedProjects.length} remaining)
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsultClick={onOpenConsultModal}
        />
      )}
    </div>
  );
}
