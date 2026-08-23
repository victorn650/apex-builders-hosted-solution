import { useLanguage } from '../context/LanguageContext';
import './Contact.css';
import { REGEX } from '../utils/regexString';
import ToastMessage from './Toast';
import { useEffect, useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
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
  const [sendStatus, setStatus] = useState<{ type: string, message: string}>({ type: '', message: '' });
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    if (sendStatus.type === "success") {
      setShowToast(true);
      setTimeout(() => dismissToast(), 4000);
    };
  }, [sendStatus]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFormInput = (field: string) => {
    if (field && formData[field]) {
      let errorMsg = ''
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formInvalid = Object.values(formValidation).some((validationObj) => !validationObj.isValid);
    if (!formInvalid) {
      console.log('Submitting form..');
      try {
        const response = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

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
    }
  };

  const dismissToast = () => {
    setShowToast(false);
    setStatus({ type: '', message: ''});
  }

  return (
    <>
      {showToast &&
        <ToastMessage
          type={sendStatus.type} 
          message={sendStatus.message} 
          onDismiss={() => dismissToast()} />
      }
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="section-title">{t('contact.title')}</h2>
              <p className="section-subtitle">{t('contact.subtitle')}</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="bot_honeypot" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.fullName')}</label>
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
                    <label htmlFor="email">{t('contact.email')}</label>
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
                    <label htmlFor="phone">{t('contact.phone')}</label>
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
                    <label htmlFor="projectType">{t('contact.projectType')}</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      onBlur={() => validateFormInput('projectType')}
                      required
                    >
                      <option value="">{t('contact.selectProject')}</option>
                      <option value="residential">{t('contact.project.residential')}</option>
                      <option value="commercial">{t('contact.project.commercial')}</option>
                      <option value="renovation">{t('contact.project.renovation')}</option>
                      <option value="other">{t('contact.project.other')}</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
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
                    {t('contact.send')}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <h2 className="contact-heading">{t('contact.heading')}</h2>
              <p className="contact-intro">
                {t('contact.intro')}
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>{t('contact.phoneNum')}</span>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>{t('contact.emailAddr')}</span>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>{t('contact.address')}</span>
                </div>
              </div>
              
              <div className="contact-hours">
                <h4>{t('contact.hoursTitle')}</h4>
                <p>{t('contact.hours')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
