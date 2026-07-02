import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message was captured mock-side!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>

        <div className="social-links">
          {/* NOTE: Replace GitHub, LinkedIn, Telegram, and Email links below */}
          <a href="https://github.com/akaunghtet045-droid" className="social-icon" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://t.me/Snakey0067" className="social-icon" target="_blank" rel="noreferrer">Telegram</a>
          <a href="akaunghtet045@gmail.com" className="social-icon">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;