import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const testimonials = [
  {
    quoteKey: 'testimonials.quote1',
    author: 'Sarah Mitchell',
    company: 'CEO of Mitchell Realty',
  },
  {
    quoteKey: 'testimonials.quote2',
    author: 'Robert Chen',
    company: 'Property Developer',
  },
  {
    quoteKey: 'testimonials.quote3',
    author: 'Emily Johnson',
    company: 'Homeowner',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label={t('testimonials.prev')}>
            ←
          </button>
          
          <div className="testimonial-content">
            <span className="quote-mark">"</span>
            <blockquote className="testimonial-quote">
              {t(testimonials[current].quoteKey)}
            </blockquote>
            <cite className="testimonial-author">
              — {testimonials[current].author}, {testimonials[current].company}
            </cite>
          </div>
          
          <button className="carousel-btn next" onClick={next} aria-label={t('testimonials.next')}>
            →
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={t('testimonials.goToSlide')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
