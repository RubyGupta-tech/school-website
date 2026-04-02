import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    studentClass: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Inquiry submitted:", form);
    setTimeout(() => {
      setLoading(false);
      alert("Inquiry Sent Successfully! We will contact you on WhatsApp soon.");
    }, 1500);
  };

  return (
    <div className="container section" style={{ marginTop: '100px' }}>

      {/* Contact Info Cards */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', justifyContent: 'center' }}>
        <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>📍</span>
          <h4>Address</h4>
          <p>Dhengura, Hazaribag,<br />Jharkhand - 825301</p>
        </div>
        <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>📞</span>
          <h4>Phone</h4>
          <p>+91 9065611819<br />+91 9693347953</p>
        </div>
        <div className="card" style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>📧</span>
          <h4>Email</h4>
          <p style={{ wordBreak: 'break-all' }}>kidscampuszoneschool2019hzb@gmail.com</p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="contact-card card">
        <h2>Admission Inquiry</h2>
        <p>Fill out the form below and we'll get back to you on WhatsApp or email.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Parent / Guardian Full Name"
              required
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="WhatsApp Number"
              required
              className="form-control"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
              required
              value={form.studentClass}
              onChange={(e) => setForm({ ...form, studentClass: e.target.value })}
            >
              <option value="">Select Class Seeking Admission</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message / Query"
              rows="4"
              className="form-control"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
