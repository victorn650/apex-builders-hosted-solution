import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Apex Builders transformed our vision into reality. Their professionalism and attention to detail were exceptional from start to finish.",
    author: 'Sarah Mitchell',
    company: 'CEO of Mitchell Realty',
  },
  {
    quote: "Working with Apex Builders was a dream come true. They delivered our project on time and exceeded our expectations in every way.",
    author: 'Robert Chen',
    company: 'Property Developer',
  },
  {
    quote: "The team's expertise and dedication made our renovation process seamless. We couldn't be happier with the results.",
    author: 'Emily Johnson',
    company: 'Homeowner',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
            ←
          </button>
          
          <div className="testimonial-content">
            <span className="quote-mark">"</span>
            <blockquote className="testimonial-quote">
              {testimonials[current].quote}
            </blockquote>
            <cite className="testimonial-author">
              — {testimonials[current].author}, {testimonials[current].company}
            </cite>
          </div>
          
          <button className="carousel-btn next" onClick={next} aria-label="Next">
            →
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
