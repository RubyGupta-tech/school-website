-- Kids Campus Zone School Database Schema
-- Run this in your Neon Postgres SQL Console

-- Users Table (Admin, Teachers, Students)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'teacher', 'student')),
    full_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Students Table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    admission_no VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    class_name VARCHAR(20) NOT NULL,
    father_name VARCHAR(100),
    mother_name VARCHAR(100),
    dob DATE,
    contact_no VARCHAR(15),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- Attendance Table
CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    status VARCHAR(1) NOT NULL CHECK (status IN ('P', 'A', 'L')),
    marked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Homework Table
CREATE TABLE IF NOT EXISTS homework (
    id SERIAL PRIMARY KEY,
    class_name VARCHAR(20) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    task TEXT NOT NULL,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Results Table
CREATE TABLE IF NOT EXISTS results (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    exam_name VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    marks DECIMAL(5,2),
    max_marks DECIMAL(5,2),
    grade VARCHAR(2)
);

-- Notices Table
CREATE TABLE IF NOT EXISTS notices (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    is_holiday BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
