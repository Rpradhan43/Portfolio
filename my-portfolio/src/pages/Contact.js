import React, { useState } from 'react';
import '../App.css'; // Make sure to create a Contact.css file for styles

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send formData to your server
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Me!</h1>
        <p>👋 Im always looking to further my opportunities.</p>
        <p>Get in touch with me to see what lies ahead of our opportunties. </p>
        <p><a href="mailto:rajapradhanportfolio@gmail.com">rajapradhanportfolio@gmail.com</a></p>
      </div>
      <div className="divider"></div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full name*"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Get In Touch!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
