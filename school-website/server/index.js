const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// --- Mock Database (In-Memory) ---
let admissions = [];
let students = [
  { id: "1042", name: "Aryan Gupta", class: "4-B", due: 4500 }
];

// --- ROUTES ---

// 1. Health Check
app.get('/', (req, res) => {
  res.send('Elite Academy API is running... 🏫');
});

// 2. Admission Inquiry (Submit Form)
app.post('/api/admissions/submit', (req, res) => {
  const inquiry = req.body;
  inquiry.id = `ADM-${Date.now()}`;
  inquiry.status = "Pending Review";
  
  admissions.push(inquiry);
  
  console.log("New Inquiry Received:", inquiry.studentName);
  
  // In a real app, you would use Msg91 API here to send a confirmation
  res.status(201).json({
    message: "Application submitted successfully!",
    applicationId: inquiry.id
  });
});

// 3. Fee Check (For Portal)
app.get('/api/fees/:admissionNo', (req, res) => {
  const student = students.find(s => s.id === req.params.admissionNo);
  
  if (student) {
    res.json({
      success: true,
      studentName: student.name,
      amountDue: student.due,
      currency: "INR"
    });
  } else {
    res.status(404).json({ success: false, message: "Student not found" });
  }
});

// 4. Mock Payment Initiation
app.post('/api/payments/create-order', (req, res) => {
  const { amount, admissionNo } = req.body;
  
  // This would typically call Razorpay/Stripe API
  const orderId = `order_${Math.random().toString(36).substring(7)}`;
  
  res.json({
    orderId,
    amount,
    currency: "INR",
    status: "Created"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Elite Academy Server running at: http://localhost:${PORT}`);
  console.log(`📍 Endpoint available: POST /api/admissions/submit`);
  console.log(`📍 Endpoint available: GET  /api/fees/:admissionNo\n`);
});
