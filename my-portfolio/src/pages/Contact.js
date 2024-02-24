import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'; // Assuming your CSS file is correctly linked

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const serviceID = 'rajapradhanportfolio'; // Replace with your EmailJS service ID
  const templateID = 'portfoliotemplate'; // Replace with your EmailJS template ID
  const publicKey = 'Yj_tx3NJNpNhEP--y'; // Replace with your EmailJS user ID

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, event.target, publicKey)
      .then((result) => {
          console.log(result.text);
          // Handle success: you can clear the form or show a success message
          setFormData({
            from_name: '',
            email: '',
            subject: '',
            message: '',
          });
      }, (error) => {
          console.log(error.text);
          // Handle errors here, such as showing an error message
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Me!</h1>
        <p>👋 I'm always looking to further my opportunities.</p>
        <p>Get in touch with me to see what lies ahead for our opportunities.</p>
        <p><a href="mailto:rajapradhanportfolio@gmail.com">rajapradhanportfolio@gmail.com</a></p>
      </div>
      <div className="divider"></div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Full name*"
            value={formData.from_name}
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
            placeholder="Your message*"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;