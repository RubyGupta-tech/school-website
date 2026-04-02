import { useState, useEffect } from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [homework, setHomework] = useState({ subject: "", task: "", dueDate: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now until auth is fully wired
    setStudents([
      { id: 1, admission_no: "KCS/2024/1042", full_name: "Aryan Gupta", class_name: "2-A" },
      { id: 2, admission_no: "KCS/2024/1043", full_name: "Sana Khan", class_name: "2-A" },
      { id: 3, admission_no: "KCS/2024/1044", full_name: "Rohan Singh", class_name: "2-A" }
    ]);
    setLoading(false);
  }, []);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const submitAttendance = () => {
    alert("उपस्थिति सफलतापूर्वक दर्ज की गई! (Attendance submitted successfully!)");
  };

  const submitHomework = (e) => {
    e.preventDefault();
    alert("होमवर्क सफलतापूर्वक पोस्ट किया गया! (Homework posted successfully!)");
    setHomework({ subject: "", task: "", dueDate: "" });
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="teacher-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-header card">
        <h1>शिक्षक पोर्टल (Teacher Portal)</h1>
        <p>नमस्ते, अध्यापक! आज की कक्षा की गतिविधियों का प्रबंधन करें। (Hello, Teacher! Manage today's class activities.)</p>
      </div>

      <div className="dashboard-grid">
        {/* Attendance Section */}
        <section className="attendance-section card">
          <h2>📅 दैनिक उपस्थिति (Daily Attendance)</h2>
          <p className="subtitle">कक्षा: 2-A | दिनांक: {new Date().toLocaleDateString()}</p>
          
          <table className="attendance-table">
            <thead>
              <tr>
                <th>छात्र (Student)</th>
                <th>उपस्थिति (Attendance)</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>
                    <div style={{ fontWeight: 'bold' }}>{s.full_name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{s.admission_no}</div>
                  </td>
                  <td>
                    <div className="attendance-options">
                      <button 
                        className={`status-btn p ${attendance[s.id] === 'P' ? 'active' : ''}`}
                        onClick={() => handleAttendanceChange(s.id, 'P')}
                      >P</button>
                      <button 
                        className={`status-btn a ${attendance[s.id] === 'A' ? 'active' : ''}`}
                        onClick={() => handleAttendanceChange(s.id, 'A')}
                      >A</button>
                      <button 
                        className={`status-btn l ${attendance[s.id] === 'L' ? 'active' : ''}`}
                        onClick={() => handleAttendanceChange(s.id, 'L')}
                      >L</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary full-width" style={{ marginTop: '20px' }} onClick={submitAttendance}>
            उपस्थिति सहेजें (Save Attendance)
          </button>
        </section>

        {/* Homework Section */}
        <section className="homework-section card">
          <h2>📝 नया होमवर्क (Add Homework)</h2>
          <form onSubmit={submitHomework} className="homework-form">
            <div className="form-group">
              <label>विषय (Subject)</label>
              <select 
                value={homework.subject} 
                onChange={e => setHomework({...homework, subject: e.target.value})}
                required
              >
                <option value="">विषय चुनें (Select Subject)</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Maths">Mathematics</option>
                <option value="Science">Science</option>
              </select>
            </div>
            <div className="form-group">
              <label>कार्य (Task Details)</label>
              <textarea 
                rows="4" 
                placeholder="होमवर्क का विवरण यहाँ लिखें... (Write task details here...)"
                value={homework.task}
                onChange={e => setHomework({...homework, task: e.target.value})}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>जमा करने की तिथि (Due Date)</label>
              <input 
                type="date" 
                value={homework.dueDate}
                onChange={e => setHomework({...homework, dueDate: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary full-width">
              होमवर्क पोस्ट करें (Post Homework)
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default TeacherDashboard;
