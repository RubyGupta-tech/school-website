import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login feature will be available after ERP synchronization!");
  };

  return (
    <div className="login-page container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="login-card card">
        <div className="login-header">
          <div className="login-icon">🏫</div>
          <h1>Registration Login</h1>
          <p>Elite Academy Parent Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email ID / Application No. *</label>
            <input 
              type="text" 
              required 
              placeholder="Enter Application ID"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Password *</label>
              <Link to="/forgot-password" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>Forgot?</Link>
            </div>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary full-width">Sign In</button>
        </form>

        <div className="login-footer">
          <p>Don't have an application account?</p>
          <Link to="/admissions" className="btn btn-outline small">Register New Student</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
