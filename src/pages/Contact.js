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
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown USA</p>
      </div>
    </div>
  );
}

export default Contact;