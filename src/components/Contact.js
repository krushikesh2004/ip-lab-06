import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Your message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

