import { useState, useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for inquiries
    setInquiries([
      { id: 1, student_name: "Rahul Sharma", parent_name: "Vijay Sharma", class_applied: "Nursery", contact: "9876543210", status: "Pending" },
      { id: 2, student_name: "Ananya Jha", parent_name: "Suman Jha", class_applied: "Class 1", contact: "9988776655", status: "Approved" }
    ]);
    setLoading(false);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="admin-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-header card">
        <h1>प्रशासक पोर्टल (Admin Portal)</h1>
        <p>स्कूल के संचालन और प्रवेश पूछताछ का प्रबंधन करें। (Manage school operations and admission inquiries.)</p>
      </div>

      <div className="dashboard-grid">
        {/* Statistics Summary */}
        <div className="stats-row">
          <div className="stat-card card">
            <h3>कुल छात्र (Total Students)</h3>
            <p className="amount">170</p>
          </div>
          <div className="stat-card card">
            <h3>कुल शिक्षक (Total Teachers)</h3>
            <p className="amount">6</p>
          </div>
          <div className="stat-card card">
            <h3>नए आवेदन (New Apps)</h3>
            <p className="amount">{inquiries.filter(i => i.status === 'Pending').length}</p>
          </div>
        </div>


        {/* Admission Inquiries */}
        <section className="inquiries-section card">
          <h2>📩 प्रवेश पूछताछ (Admission Inquiries)</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>छात्र (Student)</th>
                <th>अभिभावक (Parent)</th>
                <th>कक्षा (Class)</th>
                <th>संपर्क (Contact)</th>
                <th>स्थिति (Status)</th>
                <th>कार्रवाई (Action)</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map(inq => (
                <tr key={inq.id}>
                  <td>{inq.student_name}</td>
                  <td>{inq.parent_name}</td>
                  <td>{inq.class_applied}</td>
                  <td>{inq.contact}</td>
                  <td>
                    <span className={`badge ${inq.status.toLowerCase()}`}>
                      {inq.status === 'Pending' ? 'लंबित' : 'सफल'} ({inq.status})
                    </span>
                  </td>
                  <td>
                    <select 
                      value={inq.status} 
                      onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Notice Board Management */}
        <section className="admin-notices card">
          <h2>📢 नोटिस बोर्ड प्रबंधन (Notice Management)</h2>
          <div className="notice-form">
            <input type="text" placeholder="Title (शीर्षक)" className="form-input" />
            <textarea placeholder="Content (विवरण)" rows="3" className="form-input"></textarea>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
               <input type="checkbox" id="isHoliday" /> 
               <label htmlFor="isHoliday">इसे अवकाश के रूप में चिह्नित करें (Mark as Holiday)</label>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '10px' }}>नोटिस पोस्ट करें (Post Notice)</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
