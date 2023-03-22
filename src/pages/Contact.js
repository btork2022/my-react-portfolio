import React from "react";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      {/* Contact form */}
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Contact information */}
      <div className="contact-info">
        <p>Email: bentork2010@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/benjamin-t-54103334/</p>
        <p></p>
      </div>
    </div>
  );
}

export default Contact;