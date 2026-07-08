import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Building Tomorrow's Landmarks Today</h1>
        <p className="hero-subtitle">
          Award-winning construction company delivering excellence across residential, commercial, and renovation projects.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary hero-cta">
            Get a Quote
          </a>
          <a href="#projects" className="hero-secondary">
            View Our Work
            <span className="underline"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
