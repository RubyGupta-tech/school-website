import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function PortalLogin() {
  const navigate = useNavigate();
  const [role, setRole] = useState("teacher"); // Default role
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Professional Logic: In a real app, this calls /api/auth/login
    // For demo, we use hardcoded credentials
    if (role === 'admin' && formData.username === 'admin') {
      navigate("/admin-dashboard");
    } else if (role === 'teacher' && formData.username === 'teacher') {
      navigate("/teacher-dashboard");
    } else {
      alert("अवैध क्रेडेंशियल! (Invalid Credentials!)\n\nTry:\nAdmin -> admin/admin\nTeacher -> teacher/teacher");
    }
  };

  return (
    <div className="login-page container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="login-card card">
        <div className="login-header">
          <div className="login-icon">🔑</div>
          <h1>स्टाफ लॉगिन (Staff Login)</h1>
          <p>प्रशासनिक और शैक्षणिक प्रबंधन पोर्टल (Admin & Teacher Hub)</p>
        </div>

        <div className="role-selector" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button 
            className={`btn ${role === 'teacher' ? 'btn-primary' : 'btn-outline'} small flex-1`}
            onClick={() => setRole('teacher')}
          >शिक्षक (Teacher)</button>
          <button 
            className={`btn ${role === 'admin' ? 'btn-primary' : 'btn-outline'} small flex-1`}
            onClick={() => setRole('admin')}
          >प्रशासक (Admin)</button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>उपयोगकर्ता नाम (Username) *</label>
            <input 
              type="text" 
              required 
              placeholder="Username दर्ज करें"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>पासवर्ड (Password) *</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary full-width" style={{ marginTop: '10px' }}>
            लॉगिन करें (Sign In)
          </button>
        </form>

        <div className="login-footer">
          <p>क्या आप छात्र या अभिभावक हैं? (Are you a Student/Parent?)</p>
          <Link to="/fee-portal" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>छात्र पोर्टल यहाँ है (Student Portal Here)</Link>
        </div>
      </div>
    </div>
  );
}

export default PortalLogin;
