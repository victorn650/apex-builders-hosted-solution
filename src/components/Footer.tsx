import './Footer.css';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Residential Construction',
  'Commercial Projects',
  'Renovations',
  'Project Management',
];

const social = [
  { name: 'Facebook', icon: 'f' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'Instagram', icon: 'ig' },
  { name: 'Twitter', icon: 'x' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">APEX</span>
              <span className="logo-accent"></span>
            </div>
            <p className="footer-tagline">Building Tomorrow's Landmarks Today</p>
            <p className="footer-description">
              Award-winning construction company delivering excellence across residential, commercial, and renovation projects.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              {social.map((item, index) => (
                <a key={index} href="#" className="social-link" aria-label={item.name}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Apex Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
