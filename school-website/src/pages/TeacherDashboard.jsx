import { useState, useEffect } from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("attendance");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStudents([
      { id: 1, admission_no: "KCS/2024/1042", full_name: "Aryan Gupta", class_name: "4-B", attendance_pct: 92 },
      { id: 2, admission_no: "KCS/2024/1045", full_name: "Sana Khan", class_name: "4-B", attendance_pct: 68 }, // Low attendance
      { id: 3, admission_no: "KCS/2024/1048", full_name: "Rohan Singh", class_name: "4-B", attendance_pct: 85 },
      { id: 4, admission_no: "KCS/2024/1050", full_name: "Meera Bai", class_name: "4-B", attendance_pct: 70 } // Low attendance
    ]);
    setLoading(false);
  }, []);

  const handleResultChange = (studentId, marks) => {
    setResults(prev => ({ ...prev, [studentId]: marks }));
  };

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="teacher-dashboard container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="dashboard-layout">
        
        {/* Tab Sidebar */}
        <aside className="teacher-sidebar card">
          <div className="teacher-info">
            <div className="teacher-avatar">👨‍🏫</div>
            <h3>शिक्षक पोर्टल (Teacher Hub)</h3>
            <p>कक्षा अध्यापक: 4-B</p>
          </div>
          <nav className="teacher-nav">
             <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>📅 उपस्थिति (Attendance)</button>
             <button className={activeTab === 'homework' ? 'active' : ''} onClick={() => setActiveTab('homework')}>📝 होमवर्क (Homework)</button>
             <button className={activeTab === 'results' ? 'active' : ''} onClick={() => setActiveTab('results')}>📊 परीक्षा फल (Results)</button>
             <button className={activeTab === 'insights' ? 'active' : ''} onClick={() => setActiveTab('insights')}>🚩 छात्र विश्लेषण (Insights)</button>
             <button className={activeTab === 'feed' ? 'active' : ''} onClick={() => setActiveTab('feed')}>💬 क्लास फीड (Class Feed)</button>
          </nav>
        </aside>

        {/* Main Workspace */}
        <main className="teacher-main">
          
          {/* ATTENDANCE TAB */}
          {activeTab === 'attendance' && (
            <section className="card animation-fade-in">
              <h2>📅 दैनिक उपस्थिति (Daily Attendance)</h2>
              <p className="subtitle">आज की तारीख: {new Date().toLocaleDateString('hi-IN')}</p>
              <table className="teacher-table">
                <thead>
                  <tr><th>छात्र (Student)</th><th>उपस्थिति (Attendance)</th></tr>
                </thead>
                <tbody>
                  {students.map(s => (
                    <tr key={s.id}>
                      <td>{s.full_name} <br/><small>{s.admission_no}</small></td>
                      <td>
                        <div className="attendance-options">
                          <button className={`status-btn p ${attendance[s.id] === 'P' ? 'active' : ''}`} onClick={() => setAttendance({...attendance, [s.id]: 'P'})}>P</button>
                          <button className={`status-btn a ${attendance[s.id] === 'A' ? 'active' : ''}`} onClick={() => setAttendance({...attendance, [s.id]: 'A'})}>A</button>
                          <button className={`status-btn l ${attendance[s.id] === 'L' ? 'active' : ''}`} onClick={() => setAttendance({...attendance, [s.id]: 'L'})}>L</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary full-width" style={{ marginTop: '20px' }}>उपस्थिति दर्ज करें (Save Attendance)</button>
            </section>
          )}

          {/* HOMEWORK TAB */}
          {activeTab === 'homework' && (
            <section className="card animation-fade-in">
              <h2>📝 नया होमवर्क पोस्ट करें (Post Homework)</h2>
              <form className="homework-form">
                <select className="form-input" required>
                  <option value="">विषय चुनें (Select Subject)</option>
                  <option>Maths</option><option>English</option><option>Hindi</option>
                </select>
                <textarea className="form-input" rows="4" placeholder="होमवर्क का विवरण (Homework Details)..." required></textarea>
                <input type="date" className="form-input" required />
                <button className="btn btn-secondary full-width">होमवर्क साझा करें (Post Homework)</button>
              </form>
            </section>
          )}

          {/* RESULTS TAB */}
          {activeTab === 'results' && (
            <section className="card animation-fade-in">
              <h2>📊 अंक प्रविष्टि (Result Entry)</h2>
              <p className="subtitle">परीक्षा का नाम: Unit Test - 1</p>
              <table className="teacher-table">
                <thead>
                  <tr><th>छात्र (Student)</th><th>अंक प्राप्त (Marks / 50)</th><th>ग्रेड (Grade)</th></tr>
                </thead>
                <tbody>
                  {students.map(s => (
                    <tr key={s.id}>
                      <td>{s.full_name}</td>
                      <td>
                         <input 
                           type="number" 
                           className="marks-input" 
                           placeholder="00" 
                           value={results[s.id] || ''}
                           onChange={(e) => handleResultChange(s.id, e.target.value)}
                         />
                      </td>
                      <td>
                         <span className="grade-badge">
                            {results[s.id] >= 45 ? 'A+' : results[s.id] >= 35 ? 'B' : results[s.id] ? 'C' : '--'}
                         </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary" style={{ marginTop: '20px' }}>अंक सहेजें (Save Results)</button>
            </section>
          )}

          {/* INSIGHTS TAB */}
          {activeTab === 'insights' && (
            <section className="card animation-fade-in">
              <h2>🚩 छात्र ध्यान क्षेत्र (Student Attention Needed)</h2>
              <div className="insights-alert-list">
                 {students.filter(s => s.attendance_pct < 75).map(s => (
                   <div key={s.id} className="insight-card low-attendance">
                      <div className="insight-icon">⚠️</div>
                      <div className="insight-content">
                         <h4>{s.full_name}</h4>
                         <p>कम उपस्थिति (Low Attendance): <b>{s.attendance_pct}%</b></p>
                      </div>
                      <button className="btn btn-outline small">संपर्क करें (Contact Parent)</button>
                   </div>
                 ))}
                 <div className="insight-card info">
                    <div className="insight-icon">ℹ️</div>
                    <div className="insight-content">
                       <h4>अगस्त का पाठ्यक्रम (August Syllabus)</h4>
                       <p>80% पाठ्यक्रम पूरा हो गया है। (80% Syllabus Completed)</p>
                    </div>
                 </div>
              </div>
            </section>
          )}

          {/* CLASS FEED TAB */}
          {activeTab === 'feed' && (
            <section className="card animation-fade-in">
              <h2>💬 क्लास फीड (Class Feed)</h2>
              <p className="subtitle">अभिभावकों के लिए त्वरित संदेश (Quick notices for parents)</p>
              <div className="feed-input">
                 <textarea className="form-input" placeholder="पूरे क्लास के लिए संदेश लिखें... (Message for entire class)"></textarea>
                 <button className="btn btn-secondary">संदेश भेजें (Send Message)</button>
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;

