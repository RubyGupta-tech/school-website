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
      alert("कृपया प्रवेश संख्या (Admission No): EA/2024/1042 का उपयोग करें\n\n(Tip: You can also just type '1042' to test)");
    }
  };

  return (
    <div className="login-page container section" style={{ marginTop: '120px' }}>
      <div className="login-card card" style={{ borderBottomColor: 'var(--primary)' }}>
        <div className="login-header">
          <div className="login-icon">💳</div>
          <h1>छात्र शुल्क पोर्टल (Fee Portal)</h1>
          <p>
            ऑनलाइन फीस जमा करने के लिए अपने प्रवेश संख्या से लॉगिन करें।<br />
            <span style={{ fontSize: '0.9rem', color: '#666' }}>(Login with your Admission Number to pay fees online)</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>प्रवेश संख्या (Admission Number) * (Ex: 2024/1042)</label>
            <input 
              type="text" 
              required 
              placeholder="अपना छात्र आईडी दर्ज करें (Enter your Student ID)"
              value={formData.admissionNo}
              onChange={(e) => setFormData({...formData, admissionNo: e.target.value})}
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>पासवर्ड (Password) *</label>
              <Link to="/forgot-password" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>डिफ़ॉल्ट जन्म तिथि है (Default is DOB)</Link>
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
            भुगतान के लिए आगे बढ़ें (Proceed to Payment)
          </button>
        </form>

        <div className="login-footer">
          <p>लॉगिन करने में परेशानी हो रही है? (Trouble logging in?)</p>
          <div className="help-box" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', fontSize: '0.9rem', lineHeight: '1.6' }}>
            ☎️ हेल्पलाइन (Helpline): +91 9065611819, 9693347953<br/>
            📧 ईमेल (Email): kidscampuszoneschool2019hzb@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeePortal;
