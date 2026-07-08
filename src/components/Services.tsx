import './Services.css';

const services = [
  {
    icon: '🏠',
    title: 'Residential Construction',
    description: 'Custom homes, multi-family dwellings, and community developments built with quality and sustainability in mind.',
  },
  {
    icon: '🏢',
    title: 'Commercial Projects',
    description: 'Office spaces, retail centers, and industrial facilities designed for productivity and lasting value.',
  },
  {
    icon: '🔨',
    title: 'Renovations',
    description: 'Modern transformations of existing structures, from kitchen remodels to full property overhauls.',
  },
  {
    icon: '📋',
    title: 'Project Management',
    description: 'End-to-end oversight ensuring timelines, budgets, and quality standards are met.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive construction solutions tailored to your vision.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
