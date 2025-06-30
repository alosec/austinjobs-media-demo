import { useState } from 'react';
import type { Project } from '../data/projects';

interface PortfolioFilterProps {
  projects: Project[];
}

const PortfolioFilter = ({ projects }: PortfolioFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterTypes = [
    { value: 'all', label: 'All Projects' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'music-video', label: 'Music Video' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'short-film', label: 'Short Film' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);
  
  return (
    <div>
      {/* Filter Buttons */}
      <div className="filter-container">
        {filterTypes.map((filter) => (
          <button
            key={filter.value}
            className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-image" />
            <div className="project-info">
              <span className="project-type">{project.type.replace('-', ' ')}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-client">{project.client} • {project.year}</p>
              <p className="project-description">{project.description}</p>
              
              {project.video_url && (
                <div style={{ marginTop: '1rem' }}>
                  <a 
                    href={project.video_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-button"
                    style={{ 
                      display: 'inline-block', 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.9rem' 
                    }}
                  >
                    Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center" style={{ padding: '3rem 0' }}>
          <p>No projects found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilter;