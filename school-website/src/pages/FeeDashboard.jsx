import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeeDashboard.css";

function FeeDashboard() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetch("http://localhost:5000/api/fees/1042")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStudentData(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="fee-dashboard container section" style={{ marginTop: 'calc(var(--header-height) + 30px)', textAlign: 'center' }}>
        <div style={{ marginBottom: '30px', animation: 'logoPulse 2s infinite ease-in-out' }}>
          <img src="/school-logo.png" alt="Kid's Campus Zone logo" style={{ width: '150px' }} />
        </div>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>सुरक्षित सर्वर से संपर्क हो रहा है...</h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>(Connecting to Secure Server...)</p>
        <style>{`
          @keyframes logoPulse {
            0% { transform: scale(0.95); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.7; }
          }
        `}</style>
      </div>
    );
  }

  const portalData = {
    studentName: studentData?.studentName || "Aryan Gupta",
    admissionNo: "KCS/2024/1042",
    class: "Class 2-A",
    parents: {
      father: "Mr. Rajesh Gupta",
      mother: "Mrs. Meena Gupta"
    },
    attendance: {
      percentage: "94%",
      totalDays: 145,
      present: 136,
      absent: 9
    },
    fees: {
      totalDue: studentData ? `₹${studentData.amountDue}` : "₹4,500",
      lastPayment: "₹2,250 (Feb 2024)",
      pendingMonths: ["March 2024", "April 2024"]
    },
    homework: [
      { subject: "Hindi", task: "कविता 'नन्हा मुन्ना राही हूँ' याद करें और लिखें।", date: "Apply by 05 April" },
      { subject: "Maths", task: "Solve Pag No. 45 - Addition with Carry over.", date: "Apply by 04 April" },
      { subject: "English", task: "Write 10 lines about 'My School'.", date: "Apply by 06 April" }
    ],
    results: [
      { exam: "Unit Test - II", subject: "Mathematics", marks: "24/25", grade: "A+" },
      { exam: "Unit Test - II", subject: "English", marks: "22/25", grade: "A" },
      { exam: "Unit Test - II", subject: "Science", marks: "25/25", grade: "A+" }
    ],
    notices: [
      { date: "02 April", title: "नए सत्र की शुभकामनाएं!", content: "सभी विद्यार्थियों को नए शैक्षणिक सत्र (2025-26) की हार्दिक शुभकामनाएं।" },
      { date: "01 April", title: "Dress Code Reminder", content: "Please ensure students wear summer uniforms from 1st April." }
    ],
    holidays: [
      { date: "10 April", event: "Id-ul-Fitr (EID)" },
      { date: "14 April", event: "Ambedkar Jayanti" },
      { date: "17 April", event: "Ram Navami" }
    ],
    classMessages: [
      { sender: "Sanjay Kumar (Class Teacher)", message: "Please ensure your child brings a craft kit for tomorrow's activity.", time: "Today, 10:30 AM" },
      { sender: "Sanjay Kumar (Class Teacher)", message: "Note: Mock test for Mathematics scheduled for Monday.", time: "Yesterday" }
    ]
  };


  const transactions = [
    { id: "TXN9821", date: "Feb 05, 2024", amount: "₹2,250", status: "सफल (Success)", type: "मासिक शुल्क (Monthly Fee)" },
    { id: "TXN7740", date: "Jan 03, 2024", amount: "₹2,250", status: "सफल (Success)", type: "मासिक शुल्क (Monthly Fee)" }
  ];

  return (
    <div className="fee-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-grid">
        {/* Sidebar */}
        <aside className="dashboard-sidebar card">
          <div className="profile-box">
            <div className="avatar">{portalData.studentName.charAt(0)}</div>
            <h3>{portalData.studentName}</h3>
            <p className="id-badge">{portalData.admissionNo}</p>
            <p className="class-info">{portalData.class}</p>
            <div className="parent-details" style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
               <p style={{ fontSize: '0.85rem', color: '#666', margin: '2px 0' }}><b>अभिभावक (Parents):</b></p>
               <p style={{ fontSize: '0.8rem', color: '#333', margin: '1px 0' }}>{portalData.parents.father} (Dad)</p>
               <p style={{ fontSize: '0.8rem', color: '#333', margin: '1px 0' }}>{portalData.parents.mother} (Mom)</p>
            </div>
          </div>
          <nav className="dashboard-nav">
            <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>📊 अवलोकन (Overview)</button>
            <button className={activeTab === "academic" ? "active" : ""} onClick={() => setActiveTab("academic")}>📝 होमवर्क और रिजल्ट (Academic)</button>
            <button className={activeTab === "attendance" ? "active" : ""} onClick={() => setActiveTab("attendance")}>📅 उपस्थिति (Attendance)</button>
            <button className={activeTab === "fees" ? "active" : ""} onClick={() => setActiveTab("fees")}>💳 शुल्क पोर्टल (Fee Portal)</button>
            <button className={activeTab === "notices" ? "active" : ""} onClick={() => setActiveTab("notices")}>🔔 नोटिस बोर्ड (Notice Board)</button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="dashboard-main">
          
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="animation-fade-in">
              <div className="stats-row">
                <div className="stat-card card warning">
                  <h3>बकाया शुल्क (Fees Due)</h3>
                  <p className="amount">{portalData.fees.totalDue}</p>
                  <span className="subtitle">भुगतान लंबित (Payment Pending)</span>
                </div>
                <div className="stat-card card info">
                  <h3>उपस्थिति (Attendance)</h3>
                  <p className="amount">{portalData.attendance.percentage}</p>
                  <span className="subtitle">{portalData.attendance.present}/{portalData.attendance.totalDays} दिन (Days)</span>
                </div>
              </div>

              <div className="dashboard-table-container card">
                <h3>👩‍🏫 क्लास टीचर के संदेश (Teacher's Messages)</h3>
                <div className="class-feed">
                   {portalData.classMessages.map((m, i) => (
                     <div key={i} className="feed-item" style={{ background: '#f0f7ff', padding: '12px', borderRadius: '8px', marginBottom: '10px', borderLeft: '4px solid #3498db' }}>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#2c3e50' }}>{m.message}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', fontSize: '0.75rem', color: '#7f8c8d' }}>
                           <span>- {m.sender}</span>
                           <span>{m.time}</span>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="dashboard-table-container card">

            </div>
          )}

          {/* ACADEMIC TAB (Homework & Results) */}
          {activeTab === "academic" && (
            <div className="animation-fade-in">
              <div className="dashboard-table-container card">
                <h3>गृहकार्य (Homework)</h3>
                <div className="homework-list">
                  {portalData.homework.map((hw, i) => (
                    <div key={i} className="homework-card" style={{ borderLeft: '4px solid var(--accent-color)', padding: '15px', background: '#fffcf9', borderRadius: '8px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{hw.subject}</span>
                        <span style={{ fontSize: '0.8rem', color: '#e67e22' }}>{hw.date}</span>
                      </div>
                      <p style={{ marginTop: '8px', fontSize: '0.95rem' }}>{hw.task}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-table-container card">
                <h3>परीक्षा परिणाम (Exam Results)</h3>
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>परीक्षा (Exam)</th>
                      <th>विषय (Subject)</th>
                      <th>अंक (Marks)</th>
                      <th>ग्रेड (Grade)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portalData.results.map((res, i) => (
                      <tr key={i}>
                        <td>{res.exam}</td>
                        <td>{res.subject}</td>
                        <td>{res.marks}</td>
                        <td><b style={{ color: '#27ae60' }}>{res.grade}</b></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ATTENDANCE TAB */}
          {activeTab === "attendance" && (
            <div className="animation-fade-in">
              <div className="dashboard-table-container card" style={{ textAlign: 'center' }}>
                <h3>कुल उपस्थिति (Overall Attendance)</h3>
                <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--primary-color)', margin: '20px 0' }}>{portalData.attendance.percentage}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
                  <div className="stat-pill success"><b>उपस्थित (Present):</b> {portalData.attendance.present} दिन</div>
                  <div className="stat-pill danger"><b>अनुपस्थित (Absent):</b> {portalData.attendance.absent} दिन</div>
                </div>
                <p style={{ color: '#666' }}>नियमित उपस्थिति बेहतर भविष्य की कुंजी है।<br/>(Regular attendance is key to a bright future.)</p>
              </div>
            </div>
          )}

          {/* FEES TAB */}
          {activeTab === "fees" && (
            <div className="animation-fade-in">
              <div className="dashboard-table-container card">
                <div className="table-header">
                  <h3>बकाया शुल्क (Pending Fees)</h3>
                  <button className="btn btn-primary btn-sm" onClick={() => setShowPaymentModal(true)}>सभी भुगतान करें (Pay All)</button>
                </div>
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>महीना (Month)</th>
                      <th>विवरण (Details)</th>
                      <th>राशि (Amount)</th>
                      <th>कार्रवाई (Action)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portalData.fees.pendingMonths.map((month, i) => (
                      <tr key={i}>
                        <td>{month}</td>
                        <td>शिक्षण शुल्क (Tuition Fee)</td>
                        <td>₹2,250</td>
                        <td><button className="btn-text" onClick={() => setShowPaymentModal(true)}>Pay Now</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="dashboard-table-container card">
                <h3>लेनदेन का विवरण (Transactions)</h3>
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn, i) => (
                      <tr key={i}>
                        <td><code>{txn.id}</code></td>
                        <td>{txn.date}</td>
                        <td>{txn.amount}</td>
                        <td><span className="badge success">{txn.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* NOTICES & HOLIDAYS TAB */}
          {activeTab === "notices" && (
            <div className="animation-fade-in">
              <div className="dashboard-table-container card">
                <h3>आधिकारिक नोटिस (Official Notices)</h3>
                <div className="notices-archive">
                  {portalData.notices.map((n, i) => (
                    <div key={i} className="notice-card" style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '15px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#1abc9c', fontWeight: 'bold' }}>{n.date}</span>
                      <h4 style={{ margin: '5px 0' }}>{n.title}</h4>
                      <p style={{ color: '#555', fontSize: '0.9rem' }}>{n.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-table-container card">
                <h3 style={{ color: '#e67e22' }}>आगामी अवकाश (Upcoming Holidays)</h3>
                <div className="holiday-list">
                  {portalData.holidays.map((h, i) => (
                    <div key={i} className="holiday-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #f9f9f9' }}>
                      <span style={{ fontWeight: '600' }}>{h.event}</span>
                      <span style={{ color: '#666' }}>{h.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-card card animation-pop-in">
            <button className="close-modal" onClick={() => setShowPaymentModal(false)}>&times;</button>
            <div className="payment-header">
              <img src="/school-logo.png" alt="Logo" className="mini-logo" />
              <h3>सुरक्षित चेकआउट (Secure Checkout)</h3>
              <p>कुल देय राशि: <b style={{ color: 'var(--primary)' }}>{portalData.fees.totalDue}</b></p>
            </div>
            <div className="payment-methods">
              <div className="method-option"><span>UPI</span> GPay, PhonePe, Paytm</div>
              <div className="method-option"><span>Card</span> Debit / Credit</div>
              <div className="method-option"><span>Net Banking</span></div>
            </div>
            <button className="btn btn-primary full-width" onClick={() => alert("Redirecting to Bank...")}>Pay Now Securely</button>
          </div>
        </div>
      )}

      {/* Decoration */}
      <img src="/kids-sticker.png" alt="Decoration" style={{ width: '100%', maxWidth: '500px', margin: '40px auto 0', display: 'block', opacity: '0.8', mixBlendMode: 'multiply' }} />
    </div>
  );
}

export default FeeDashboard;

