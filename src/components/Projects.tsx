import './Projects.css';

const projects = [
  {
    name: 'Harbor View Towers',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    name: 'The Oak Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    name: 'Downtown Office Renovation',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    name: 'Sunset Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  },
  {
    name: 'Metro Shopping Center',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    name: 'Heritage Museum Restoration',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A glimpse into our recent work.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
