import './About.css';

const stats = [
  { number: '250+', label: 'Projects Completed' },
  { number: '25+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80" 
              alt="Apex Builders Team" 
            />
          </div>
          
          <div className="about-content">
            <h2 className="section-title about-title">Crafting Excellence Since 1995</h2>
            <p className="about-text">
              At Apex Builders, we believe great construction is born from the fusion of skilled craftsmanship, innovative thinking, and unwavering commitment to client satisfaction. Every project we undertake is a testament to our dedication to quality.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
