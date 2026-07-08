import { useState } from 'react';
import './Contact.css';
import { REGEX } from '../utils/regexString';

export default function Contact() {
  const [formData, setFormData] = useState<{ [key: string]: string}>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [formValidation, setFormValidation] = useState({
    name: { error: '', isValid: false },
    email: { error: '', isValid: false },
    phone: { error: '', isValid: false },
    projectType: { error: '', isValid: false },
    message: { error: '', isValid: false },
  });
  const [loading ,setLoading] = useState<boolean>(false);
  const [,setStatus] = useState<{ type: string, message: string}>({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFormInput = (field: string) => {
    if (field && formData[field]) {
      let errorMsg = ''
      // validate that the form data that was input by the user is valid and does not
      // contain prohibited characters. Data must not contain any invalid characters if it is
      // to be sent to email function
      switch (field) {
        case 'name':
          if (!REGEX.NAME.test(formData.name)) {
            errorMsg = "Name is invalid. Only alphabetic characters and \' and - characters allowed";
          }
          break;
        case 'email':
          if (!REGEX.EMAIL.test(formData.email)) {
            errorMsg = 'Email entered is invalid';
          }
          break;
        case 'phone':
          if (!REGEX.PHONE.test(formData.phone)) {
            errorMsg = 'Phone Number entered is invalid'
          }
          break;
        case 'projectType':
          if (!REGEX.PROJECTTYPE.test(formData.projectType)) {
            errorMsg = 'Project Type selected is invalid'
          }
          break;
        case 'message':
          if (!REGEX.MESSAGE.test(formData.message)) {
            errorMsg = 'Message entered is invalid'
          }
          break;
        default:
          console.log('unknown form field');
      }
      setFormValidation((prev) => ({
          ...prev,
          [field]: { error: errorMsg, isValid: errorMsg === '' }
        }));
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all form fields before submitting data to the
    // send email function
    const formInvalid = Object.values(formValidation).some((validationObj) => !validationObj.isValid);
    if (!formInvalid) {
      console.log('Submitting form..');
      try {
        // Sends data to the Cloudflare Pages Function endpoint
        const response = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log('submit quote form result:', result);

        if (response.ok) {
          setStatus({ type: 'success', message: 'Quote request submitted successfully!' });
          setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        } else {
          setStatus({ type: 'error', message: result.error || 'Submission failed.' });
        }
      } catch (err) {
        setStatus({ type: 'error', message: 'Network error. Please try again later.' });
      } finally {
        setLoading(false);
      }
      alert('Thank you for your message! We will get back to you soon.');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Fill out the form below and we'll be in touch.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Honeypot field to trick spam bots - hidden from real users */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input type="text" name="bot_honeypot" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => validateFormInput('name')}
                    required
                  />
                  {(formValidation.name.error.length > 0) &&
                    <div className="input-err">{formValidation.name.error}</div>
                  }
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => validateFormInput('email')}
                    required
                  />
                  {(formValidation.email.error.length > 0) &&
                    <div className="input-err">{formValidation.email.error}</div>
                  }
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => validateFormInput('phone')}
                  />
                  {(formValidation.phone.error.length > 0) &&
                    <div className="input-err">{formValidation.phone.error}</div>
                  }
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={() => validateFormInput('projectType')}
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => validateFormInput('message')}
                  required
                ></textarea>
                {(formValidation.message.error.length > 0) &&
                    <div className="input-err">{formValidation.message.error}</div>
                }
              </div>
              
              <button
                type="submit"
                className={`btn submit-btn ${loading ? 'btn-primary-dimmed' : 'btn-primary'}`}
                disabled={loading}>
                  Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <h2 className="contact-heading">Let's Build Something Great</h2>
            <p className="contact-intro">
              Ready to start your project? Get in touch for a free consultation.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(555) 123-4567</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@apexbuilders.com</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>1250 Construction Ave, Suite 400<br />Denver, CO 80202</span>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Office Hours</h4>
              <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
