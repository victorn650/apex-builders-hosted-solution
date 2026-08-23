import { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">APEX</span>
          <span className="logo-accent"></span>
        </a>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('nav.projects')}</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
        </ul>

        <div className="navbar-right">
          <a href="#contact" className="navbar-cta btn" onClick={() => setMenuOpen(false)}>
            {t('hero.cta')}
          </a>
          <div className="lang-toggle">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="English"
            >
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-label="Spanish"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
