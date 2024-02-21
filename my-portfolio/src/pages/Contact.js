import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="container contact">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch to discuss a project, please reach out!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
