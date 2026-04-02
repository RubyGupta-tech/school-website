import { useState, useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for inquiries & school activity
    setInquiries([
      { id: 1, student_name: "Rahul Sharma", parent_name: "Vijay Sharma", class_applied: "Nursery", contact: "9876543210", status: "Pending", date: "02 April" },
      { id: 2, student_name: "Ananya Jha", parent_name: "Suman Jha", class_applied: "Class 1", contact: "9988776655", status: "Approved", date: "01 April" }
    ]);
    setLoading(false);
  }, []);

  const staffLogs = [
    { name: "Sanjay Kumar", login: "08:45 AM", logout: "02:30 PM", status: "Offline" },
    { name: "Priya Singh", login: "08:50 AM", logout: "---", status: "Online" },
    { name: "Mohit Verma", login: "09:00 AM", logout: "02:45 PM", status: "Offline" },
    { name: "Anjali Dubey", login: "08:30 AM", logout: "---", status: "Online" }
  ];

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="admin-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-grid">
        
        {/* Sidebar Navigation */}
        <aside className="admin-sidebar card">
           <div className="admin-profile">
              <div className="admin-avatar">AD</div>
              <h3>कुलपति पोर्टल (Admin Hub)</h3>
           </div>
           <nav className="admin-nav">
              <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>📊 डैशबोर्ड (Overview)</button>
              <button className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}>👥 स्टाफ ट्रैकिंग (Staff Log)</button>
              <button className={activeTab === 'accounts' ? 'active' : ''} onClick={() => setActiveTab('accounts')}>💰 लेखा विभाग (Accounts)</button>
              <button className={activeTab === 'inquiries' ? 'active' : ''} onClick={() => setActiveTab('inquiries')}>📩 पूछताछ (Inquiries)</button>
              <button className={activeTab === 'notices' ? 'active' : ''} onClick={() => setActiveTab('notices')}>📢 नोटिस (Notices)</button>
           </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animation-fade-in">
               <div className="stats-row">
                  <div className="stat-card card primary">
                    <h3>कुल छात्र (Total Students)</h3>
                    <p className="amount">170</p>
                  </div>
                  <div className="stat-card card secondary">
                    <h3>कुल शिक्षक (Total Teachers)</h3>
                    <p className="amount">6</p>
                  </div>
                  <div className="stat-card card success">
                    <h3>आज की उपस्थिति (Today's Att.)</h3>
                    <p className="amount">92%</p>
                  </div>
               </div>

               <div className="activity-grid">
                  <div className="card">
                     <h3>📝 शैक्षणिक गतिविधि (Academic Pulse)</h3>
                     <p style={{ margin: '10px 0', fontSize: '0.9rem' }}>आज पोस्ट किए गए होमवर्क: <b>12</b></p>
                     <p style={{ fontSize: '0.9rem' }}>आज के सक्रिय शिक्षक: <b>4 / 6</b></p>
                  </div>
                  <div className="card">
                     <h3>💳 वित्तीय स्थिति (Financial Health)</h3>
                     <p style={{ margin: '10px 0', fontSize: '0.9rem' }}>इस महीने संग्रहित शुल्क (Collected): <b style={{ color: '#27ae60' }}>₹1,45,000</b></p>
                     <p style={{ fontSize: '0.9rem' }}>कुल बकाया राशि (Outstanding): <b style={{ color: '#e74c3c' }}>₹42,500</b></p>
                  </div>
               </div>
            </div>
          )}

          {/* STAFF TRACKING TAB */}
          {activeTab === 'staff' && (
            <div className="animation-fade-in card">
               <h2>👥 शिक्षक उपस्थिति ट्रैकिंग (Staff Attendance Log)</h2>
               <table className="admin-table">
                  <thead>
                     <tr>
                        <th>शिक्षक (Teacher)</th>
                        <th>लॉगिन (Login)</th>
                        <th>लॉगआउट (Logout)</th>
                        <th>स्थिति (Status)</th>
                     </tr>
                  </thead>
                  <tbody>
                     {staffLogs.map((log, i) => (
                        <tr key={i}>
                           <td style={{ fontWeight: 'bold' }}>{log.name}</td>
                           <td style={{ color: '#2980b9' }}>{log.login}</td>
                           <td style={{ color: '#7f8c8d' }}>{log.logout}</td>
                           <td>
                              <span className={`status-badge ${log.status.toLowerCase()}`}>
                                 {log.status === 'Online' ? 'सक्रिय (Online)' : 'बाहर (Offline)'}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          )}

          {/* ACCOUNTS TAB */}
          {activeTab === 'accounts' && (
            <div className="animation-fade-in">
               <div className="card">
                  <h2>💰 शुल्क संग्रह विवरण (Fee Collection Analytics)</h2>
                  <div className="chart-placeholder" style={{ height: '150px', background: '#f8f9fa', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0', border: '1px dashed #ddd' }}>
                     [ मासिक संग्रह चार्ट यहाँ होगा - Monthly Collection Chart Placeholder ]
                  </div>
                  <div className="stats-row mini">
                     <div className="stat-card card"><h4>Paid Students</h4><p>135</p></div>
                     <div className="stat-card card"><h4>Unpaid Students</h4><p>35</p></div>
                  </div>
               </div>
            </div>
          )}

          {/* INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div className="animation-fade-in card">
               <h2>📩 नई प्रवेश पूछताछ (Admission Inquiries)</h2>
               <table className="admin-table">
                  <thead>
                    <tr>
                      <th>छात्र (Student)</th>
                      <th>कक्षा (Class)</th>
                      <th>संपर्क (Contact)</th>
                      <th>स्थिति (Status)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map(inq => (
                      <tr key={inq.id}>
                        <td>{inq.student_name}</td>
                        <td>{inq.class_applied}</td>
                        <td>{inq.contact}</td>
                        <td><span className={`badge ${inq.status.toLowerCase()}`}>{inq.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          )}

          {/* NOTICES TAB */}
          {activeTab === 'notices' && (
            <div className="animation-fade-in card">
               <h2>📢 स्कूल नोटिस बोर्ड (School Notice Board)</h2>
               <div className="notice-form">
                  <input type="text" placeholder="शीर्षक (Notice Title)" className="form-input" />
                  <textarea placeholder="विवरण (Details)" rows="4" className="form-input"></textarea>
                  <label className="checkbox-container">
                     <input type="checkbox" /> इसे अवकाश (Holiday) के रूप में चिह्नित करें
                  </label>
                  <button className="btn btn-primary" style={{ marginTop: '10px' }}>नोटिस प्रकाशित करें (Publish Notice)</button>
               </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;

