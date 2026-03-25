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

    // MSG91 API Integration Placeholder
    // In a real scenario, you would call your backend endpoint
    // that securely uses the MSG91 AUTH_KEY.
    console.log("Sending data to Msg91:", form);
    
    setTimeout(() => {
      setLoading(false);
      alert("Inquiry Sent Successfully! We will contact you on WhatsApp soon.");
    }, 1500);
  };

  return (
    <div className="container section" style={{ marginTop: '100px' }}>
      <div className="contact-card card">
        <h2>Admission Inquiry (Powered by Msg91)</h2>
        <p>Please fill out the form below to receive admission details on WhatsApp.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="WhatsApp Number" 
              required
              className="form-control"
              value={form.whatsapp}
              onChange={(e) => setForm({...form, whatsapp: e.target.value})}
            />
          </div>

          <div className="form-group">
            <select 
              className="form-control"
              required
              value={form.studentClass}
              onChange={(e) => setForm({...form, studentClass: e.target.value})}
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <textarea 
              placeholder="Your Message / Query"
              rows="4"
              className="form-control"
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
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
