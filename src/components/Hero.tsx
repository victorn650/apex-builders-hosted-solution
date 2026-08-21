import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary hero-cta">
            {t('hero.cta')}
          </a>
          <a href="#projects" className="hero-secondary">
            {t('hero.viewWork')}
            <span className="underline"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
