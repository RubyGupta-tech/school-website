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
      <div className="fee-dashboard container section" style={{ marginTop: '150px', textAlign: 'center' }}>
        <h2>Connecting to Elite Secure Server...</h2>
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
    { id: "TXN9821", date: "Feb 05, 2024", amount: "₹2,500", status: "Success", type: "Monthly Fee" },
    { id: "TXN7740", date: "Jan 03, 2024", amount: "₹2,500", status: "Success", type: "Monthly Fee" },
    { id: "TXN2210", date: "Dec 10, 2023", amount: "₹5,000", status: "Success", type: "Admission Fee" }
  ];

  return (
    <div className="fee-dashboard container section" style={{ marginTop: '100px' }}>
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
            <button className="active">📊 Overview</button>
            <button>📜 Payment History</button>
            <button>📄 My Receipts</button>
            <button>⚙️ Settings</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Stats Row */}
          <div className="stats-row">
            <div className="stat-card card warning">
              <h3>Outstanding Due</h3>
              <p className="amount">{feeData.totalDue}</p>
              <span className="subtitle">Pending for {feeData.pendingMonths.length} months</span>
            </div>
            <div className="stat-card card success">
              <h3>Last Paid</h3>
              <p className="amount">{feeData.lastPayment}</p>
              <span className="subtitle">Receipt #EA-9921</span>
            </div>
          </div>

          {/* Pending Fees Table */}
          <div className="dashboard-table-container card">
            <div className="table-header">
              <h3>Next Payments</h3>
              <button className="btn btn-primary btn-sm" onClick={() => setShowPaymentModal(true)}>Pay All Dues</button>
            </div>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Month</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {feeData.pendingMonths.map((month, index) => (
                  <tr key={index}>
                    <td>Tuition Fee</td>
                    <td>{month}</td>
                    <td>₹2,250</td>
                    <td><span className="badge pending">Pending</span></td>
                    <td><button className="btn-text" onClick={() => setShowPaymentModal(true)}>Pay Now</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transaction History */}
          <div className="dashboard-table-container card">
            <h3>Recent Transactions</h3>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Trans. ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Status</th>
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
              <img src="/logo.png" alt="School" className="mini-logo" />
              <h3>Secure Checkout</h3>
              <p>Total Payable: <b style={{ color: 'var(--primary)' }}>{feeData.totalDue}</b></p>
            </div>
            <div className="payment-methods">
              <h4>Select Payment Method</h4>
              <div className="method-option"><span>UPI</span> (GPay, PhonePe, Paytm)</div>
              <div className="method-option"><span>Card</span> (Debit / Credit)</div>
              <div className="method-option"><span>Net Banking</span></div>
            </div>
            <div className="security-badges">
              <span>🔒 256-bit SSL</span>
              <span>🛡️ PCI-DSS Compliant</span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => alert("Redirecting to Razorpay...")}>
              Pay Now Securely
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeeDashboard;
