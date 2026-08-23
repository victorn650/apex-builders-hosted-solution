import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const quickLinks = [
  { nameKey: 'nav.home', href: '#home' },
  { nameKey: 'nav.services', href: '#services' },
  { nameKey: 'nav.about', href: '#about' },
  { nameKey: 'nav.projects', href: '#projects' },
  { nameKey: 'nav.contact', href: '#contact' },
];

const services = [
  'services.residential',
  'services.commercial',
  'services.renovations',
  'services.projectMgmt',
];

const social = [
  { name: 'Facebook', icon: 'f' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'Instagram', icon: 'ig' },
  { name: 'Twitter', icon: 'x' },
];

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">APEX</span>
              <span className="logo-accent"></span>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{t(link.nameKey)}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.services')}</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{t(service)}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.followUs')}</h4>
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
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
