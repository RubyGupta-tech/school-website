import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log("Form data:", form);
  };

  return (
    <div className="container section">
      <div className="contact-card card">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="form-control"
              onChange={(e) => setForm({...form, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="form-control"
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <textarea 
              placeholder="Your Message"
              rows="5"
              className="form-control"
              onChange={(e) => setForm({...form, message: e.target.value})}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
