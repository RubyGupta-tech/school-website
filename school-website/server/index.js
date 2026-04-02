require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'kids-campus-super-secret';

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Neon
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
};

// --- ROUTES ---

// 1. Authentication
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '8h' });
    
    res.json({
      success: true,
      token,
      user: { id: user.id, username: user.username, role: user.role, name: user.full_name }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Database error during login" });
  }
});

// 2. Teacher Routes (Protected)
app.get('/api/teacher/students', authenticateToken, async (req, res) => {
  if (req.user.role !== 'teacher' && req.user.role !== 'admin') {
    return res.status(403).json({ message: "Unauthorized" });
  }
  try {
    const result = await pool.query('SELECT id, admission_no, full_name, class_name FROM students ORDER BY full_name');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/api/teacher/attendance', authenticateToken, async (req, res) => {
  if (req.user.role !== 'teacher' && req.user.role !== 'admin') return res.status(403).send("Forbidden");
  const { studentId, date, status } = req.body;
  try {
    await pool.query('INSERT INTO attendance (student_id, date, status) VALUES ($1, $2, $3)', [studentId, date, status]);
    res.json({ success: true, message: "Attendance marked" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 3. Admin Routes (Protected)
app.get('/api/admin/inquiries', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send("Forbidden");
  try {
    const result = await pool.query('SELECT * FROM admissions_inquiries ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 4. Public Student Inquiry
app.post('/api/admissions/submit', async (req, res) => {
  const { studentName, parentName, className, contactNo } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO admissions_inquiries (student_name, parent_name, class_applied, contact_no) VALUES ($1, $2, $3, $4) RETURNING id',
      [studentName, parentName, className, contactNo]
    );
    res.status(201).json({ success: true, inquiryId: result.rows[0].id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Kids Campus Portal Server running at: http://localhost:${PORT}`);
});

