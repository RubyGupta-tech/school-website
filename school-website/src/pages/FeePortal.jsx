import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Reuse login styles

function FeePortal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admissionNo: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Professional Demo Validation
    const inputId = formData.admissionNo.trim().toUpperCase();
    if (inputId === "EA/2024/1042" || inputId === "1042") {
      navigate("/fee-dashboard");
    } else {
      alert("Please use Admission No: EA/2024/1042\n\n(Tip: You can also just type '1042' to test)");
    }
  };

  return (
    <div className="login-page container section" style={{ marginTop: '120px' }}>
      <div className="login-card card" style={{ borderBottomColor: 'var(--primary)' }}>
        <div className="login-header">
          <div className="login-icon">💳</div>
          <h1>Student Fee Portal</h1>
          <p>Login with your Admission Number to pay fees online</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Admission Number * (Ex: 2024/001)</label>
            <input 
              type="text" 
              required 
              placeholder="Enter your Student ID"
              value={formData.admissionNo}
              onChange={(e) => setFormData({...formData, admissionNo: e.target.value})}
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Parent Password *</label>
              <Link to="/forgot-password" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>Default is your DOB</Link>
            </div>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary full-width" style={{ background: 'var(--primary)' }}>
            Proceed to Payment Gateway
          </button>
        </form>

        <div className="login-footer">
          <p>Experiencing trouble logging in?</p>
          <div className="help-box" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', fontSize: '0.85rem' }}>
            ☎️ Helpline: +91 91234 56789<br/>
            📧 Email: contact@eliteacademy.edu.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeePortal;
