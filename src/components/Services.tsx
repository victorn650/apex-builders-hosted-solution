import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const services = [
  {
    icon: '🏠',
    titleKey: 'services.residential',
    descriptionKey: 'services.residentialDesc',
  },
  {
    icon: '🏢',
    titleKey: 'services.commercial',
    descriptionKey: 'services.commercialDesc',
  },
  {
    icon: '🔨',
    titleKey: 'services.renovations',
    descriptionKey: 'services.renovationsDesc',
  },
  {
    icon: '📋',
    titleKey: 'services.projectMgmt',
    descriptionKey: 'services.projectMgmtDesc',
  },
];

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">
          {t('services.subtitle')}
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{t(service.titleKey)}</h3>
              <p className="service-description">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
