import { useLanguage } from '../context/LanguageContext';
import './About.css';

const stats = [
  { number: '250+', labelKey: 'about.stats.projects' },
  { number: '25+', labelKey: 'about.stats.experience' },
  { number: '100%', labelKey: 'about.stats.satisfaction' },
];

export default function About() {
  const { t } = useLanguage();
  
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
            <h2 className="section-title about-title">{t('about.title')}</h2>
            <p className="about-text">
              {t('about.text')}
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{t(stat.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
