import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (in real app, this would be an API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitStatus === 'success') {
    return (
      <div className="contact-form">
        <div className="card text-center" style={{ padding: '3rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            fontSize: '2rem'
          }}>✓</div>
          <h3 className="mb-2">Message Sent!</h3>
          <p className="mb-3">Thanks for reaching out! We'll get back to you within 24 hours to discuss your project.</p>
          <button 
            className="cta-button"
            onClick={() => setSubmitStatus('idle')}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid grid-2">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div className="grid grid-2">
        <div className="form-group">
          <label htmlFor="company">Company/Organization</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select project type</option>
            <option value="commercial">Commercial</option>
            <option value="music-video">Music Video</option>
            <option value="documentary">Documentary</option>
            <option value="event-coverage">Event Coverage</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-2">
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-30k">$15,000 - $30,000</option>
            <option value="30k-plus">$30,000+</option>
            <option value="discuss">Let's discuss</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="timeline">Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project, vision, goals, and any specific requirements..."
          rows={6}
        />
      </div>
      
      <div className="text-center">
        <button 
          type="submit" 
          className="cta-button"
          disabled={isSubmitting}
          style={{ 
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      {submitStatus === 'error' && (
        <div className="text-center mt-3">
          <p style={{ color: '#EF4444' }}>
            Something went wrong. Please try again or email us directly at hello@austinmediaco.com
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;