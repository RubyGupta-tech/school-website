import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function PortalLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin"); // Default to admin as user is trying that
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userRole = role.toLowerCase();
    const usernameInput = formData.username.trim().toLowerCase();

    // Professional Demo Logic
    if (userRole === 'admin' && usernameInput === 'admin') {
      navigate("/admin-dashboard");
    } else if (userRole === 'teacher' && usernameInput === 'teacher') {
      navigate("/teacher-dashboard");
    } else {
      alert("Invalid Credentials!\n\nPlease ensure you have selected the correct role buttons (Admin/Teacher) and entered 'admin' or 'teacher' as the username.");
    }
  };

  const quickLogin = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ username: selectedRole, password: selectedRole });
    // Small delay to allow state update before navigation if we were doing auto-submit
  }

  return (
    <div className="login-page container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="login-card card" style={{ borderTop: `8px solid ${role === 'admin' ? '#B21E24' : '#2ecc71'}` }}>
        <div className="login-header">
          <div className="login-icon">{role === 'admin' ? '🛡️' : '👨‍🏫'}</div>
          <h1>{role === 'admin' ? 'प्रशासक लॉगिन' : 'शिक्षक लॉगिन'}</h1>
          <p>{role === 'admin' ? 'Admin Portal Access' : 'Teacher Hub Access'}</p>
        </div>

        <div className="role-selector" style={{ display: 'flex', gap: '15px', marginBottom: '25px', padding: '5px', background: '#f8f9fa', borderRadius: '12px' }}>
          <button 
            className={`btn ${role === 'admin' ? 'btn-primary' : 'btn-outline'} flex-1`}
            style={{ padding: '12px', fontWeight: 'bold' }}
            onClick={() => setRole('admin')}
          >ADMIN (प्रशासक)</button>
          <button 
            className={`btn ${role === 'teacher' ? 'btn-primary' : 'btn-outline'} flex-1`}
            style={{ padding: '12px', fontWeight: 'bold' }}
            onClick={() => setRole('teacher')}
          >TEACHER (शिक्षक)</button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>उपयोगकर्ता नाम (Username) *</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #eee' }}
              placeholder={`${role} username दर्ज करें`}
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '25px' }}>
            <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>पासवर्ड (Password) *</label>
            <input 
              type="password" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #eee' }}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary full-width" style={{ padding: '15px', borderRadius: '10px', fontSize: '1.1rem' }}>
            लॉगिन करें (Sign In as {role.toUpperCase()})
          </button>
        </form>

        <div style={{ marginTop: '30px', padding: '15px', background: '#fff9e6', borderRadius: '10px', border: '1px dashed #ffd700' }}>
          <p style={{ fontSize: '0.85rem', marginBottom: '10px', fontWeight: 'bold', color: '#856404' }}>🚀 Quick Demo Login:</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => quickLogin('admin')} className="btn btn-outline small flex-1" style={{ fontSize: '0.75rem', background: 'white' }}>Auto-Fill Admin</button>
            <button onClick={() => quickLogin('teacher')} className="btn btn-outline small flex-1" style={{ fontSize: '0.75rem', background: 'white' }}>Auto-Fill Teacher</button>
          </div>
        </div>

        <div className="login-footer">
          <Link to="/fee-portal" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Looking for Student Portal? Click here</Link>
        </div>
      </div>
    </div>
  );
}

export default PortalLogin;
