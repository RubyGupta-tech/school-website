import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeeDashboard.css";

function FeeDashboard() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <h2>सुरक्षित सर्वर से कनेक्ट हो रहा है...<br/><span style={{fontSize:'1.2rem', color:'#666'}}>(Connecting to Secure Server...)</span></h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const feeData = {
    studentName: studentData?.studentName || "Aryan Gupta",
    admissionNo: "EA/2024/1042",
    class: "Class 4-B",
    totalDue: studentData ? `₹${studentData.amountDue}` : "₹4,500",
    lastPayment: "₹2,500 (Feb 2024)",
    pendingMonths: ["March 2024", "April 2024"]
  };

  const transactions = [
    { id: "TXN9821", date: "Feb 05, 2024", amount: "₹2,500", status: "सफल (Success)", type: "मासिक शुल्क (Monthly Fee)" },
    { id: "TXN7740", date: "Jan 03, 2024", amount: "₹2,500", status: "सफल (Success)", type: "मासिक शुल्क (Monthly Fee)" },
    { id: "TXN2210", date: "Dec 10, 2023", amount: "₹5,000", status: "सफल (Success)", type: "प्रवेश शुल्क (Admission Fee)" }
  ];

  return (
    <div className="fee-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-grid">
        {/* Sidebar / Info */}
        <aside className="dashboard-sidebar card">
          <div className="profile-box">
            <div className="avatar">AG</div>
            <h3>{feeData.studentName}</h3>
            <p className="id-badge">{feeData.admissionNo}</p>
            <p className="class-info">{feeData.class}</p>
          </div>
          <nav className="dashboard-nav">
            <button className="active">📊 अवलोकन (Overview)</button>
            <button>📜 भुगतान इतिहास (History)</button>
            <button>📄 मेरी रसीदें (Receipts)</button>
            <button>⚙️ सेटिंग्स (Settings)</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Stats Row */}
          <div className="stats-row">
            <div className="stat-card card warning">
              <h3>बकाया राशी (Outstanding Due)</h3>
              <p className="amount">{feeData.totalDue}</p>
              <span className="subtitle">{feeData.pendingMonths.length} महीने से लंबित (Pending for {feeData.pendingMonths.length} months)</span>
            </div>
            <div className="stat-card card success">
              <h3>अंतिम भुगतान (Last Paid)</h3>
              <p className="amount">{feeData.lastPayment}</p>
              <span className="subtitle">रसीद (Receipt) #KCS-9921</span>
            </div>
          </div>

          {/* Pending Fees Table */}
          <div className="dashboard-table-container card">
            <div className="table-header">
              <h3>अगला भुगतान (Next Payments)</h3>
              <button className="btn btn-primary btn-sm" onClick={() => setShowPaymentModal(true)}>सभी बकाया चुकाएं (Pay All Dues)</button>
            </div>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>विवरण (Particulars)</th>
                  <th>महीना (Month)</th>
                  <th>राशि (Amount)</th>
                  <th>स्थिति (Status)</th>
                  <th>कार्रवाई (Action)</th>
                </tr>
              </thead>
              <tbody>
                {feeData.pendingMonths.map((month, index) => (
                  <tr key={index}>
                    <td>शिक्षण शुल्क (Tuition Fee)</td>
                    <td>{month}</td>
                    <td>₹2,250</td>
                    <td><span className="badge pending" style={{ background: '#FFF3CD', color: '#856404' }}>लंबित (Pending)</span></td>
                    <td><button className="btn-text" onClick={() => setShowPaymentModal(true)} style={{fontWeight:'bold'}}>अभी भुगतान करें (Pay Now)</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transaction History */}
          <div className="dashboard-table-container card">
            <h3>हाल के लेनदेन (Recent Transactions)</h3>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>लेनदेन आईडी (Trans. ID)</th>
                  <th>तिथि (Date)</th>
                  <th>राशि (Amount)</th>
                  <th>प्रकार (Type)</th>
                  <th>स्थिति (Status)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, idx) => (
                  <tr key={idx}>
                    <td><code>{txn.id}</code></td>
                    <td>{txn.date}</td>
                    <td>{txn.amount}</td>
                    <td>{txn.type}</td>
                    <td><span className="badge success">{txn.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Mock Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-card card animation-pop-in">
            <button className="close-modal" onClick={() => setShowPaymentModal(false)}>&times;</button>
            <div className="payment-header">
              <img src="/school-logo.png" alt="Kid's Campus Zone School" className="mini-logo" />
              <h3>सुरक्षित चेकआउट (Secure Checkout)</h3>
              <p>कुल देय राशि (Total Payable): <b style={{ color: 'var(--primary)' }}>{feeData.totalDue}</b></p>
            </div>
            <div className="payment-methods">
              <h4>भुगतान का तरीका चुनें (Select Payment Method)</h4>
              <div className="method-option"><span>UPI</span> (GPay, PhonePe, Paytm)</div>
              <div className="method-option"><span>Card</span> (Debit / Credit)</div>
              <div className="method-option"><span>Net Banking</span></div>
            </div>
            <div className="security-badges">
              <span>🔒 256-bit SSL</span>
              <span>🛡️ PCI-DSS Compliant</span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => alert("Redirecting to Razorpay...")}>
              सुरक्षित रूप से भुगतान करें (Pay Now Securely)
            </button>
          </div>
        </div>
      )}
      
      {/* Decorative footer sticker */}
      <img src="/kids-sticker.png" alt="Happy Kids Drawing" style={{ width: '100%', maxWidth: '600px', margin: '40px auto 0', display: 'block', opacity: '0.9', mixBlendMode: 'multiply' }} />
    </div>
  );
}

export default FeeDashboard;
