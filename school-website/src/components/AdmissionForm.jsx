import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdmissionForm.css";

function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    session: "2025-2026",
    admissionClass: "",
    studentFirstName: "",
    studentLastName: "",
    dob: "",
    gender: "",
    category: "",
    religion: "",
    bloodGroup: "",
    aadhaar: "",
    fatherName: "",
    fatherQual: "",
    fatherOcc: "",
    fatherIncome: "",
    fatherMobile: "",
    motherName: "",
    motherQual: "",
    motherOcc: "",
    motherMobile: "",
    email: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "Jharkhand",
    pin: "",
    prevSchool: "",
    prevClass: "",
    declaration1: false,
    declaration2: false,
    isRobotChallenged: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/admissions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        console.log("Success ID:", result.applicationId);
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server is offline. Please ensure the backend is running. (सर्वर ऑफ़लाइन है। कृपया सुनिश्चित करें कि बैकएंड चल रहा है।)");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="admission-success card">
        <div className="success-icon">🎉</div>
        <h2>पंजीकरण सफल! (Registration Successful!)</h2>
        <p>आपका आवेदन आईडी है (Your application ID is) <b>KCS-2025-{(Math.random()*10000).toFixed(0)}</b>.</p>
        <p>कृपया पावती पर्ची और आगे के निर्देशों के लिए अपना व्हाट्सएप (<b>{formData.whatsapp}</b>) जांचें।<br/><span style={{fontSize:'0.9rem'}}>(Please check your WhatsApp for the acknowledgement slip and further instructions.)</span></p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>समाप्त (Finish)</button>
      </div>
    );
  }

  return (
    <section className="admission-form-section" id="apply-form">
      <div className="form-card card">
        <div className="form-header">
          <div className="form-header-top">
            <div className="step-indicator">चरण (Step) {step} / 3</div>
            <div className="header-links">
              <Link to="/instructions" className="instructions-link">📜 निर्देश (Instructions)</Link>
              <Link to="/login" className="login-link">🔐 लॉगिन (Login)</Link>
            </div>
          </div>
          <h2>नया पंजीकरण फॉर्म (New Registration Form)</h2>
          
          <div className="registration-note" style={{ lineHeight: '1.6' }}>
            <b>ध्यान दें (Note):</b> फॉर्म भरने से पहले ऊपर दिए गए निर्देश पढ़ें। <b>(Read the instructions on Top-Right first.)</b><br/>
            सभी प्रविष्टियां <b>बड़े अक्षरों (CAPITAL LETTERS)</b> में होनी चाहिए। जन्म तिथि (DOB) बाद में बदली नहीं जा सकेगी।
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>👶 Section 1: छात्र की जानकारी (Student Information)</h3>
                <div className="form-divider"></div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>प्रथम नाम (First Name) *</label>
                  <input type="text" required placeholder="FIRST NAME" value={formData.studentFirstName} onChange={(e) => setFormData({...formData, studentFirstName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>अंतिम नाम (Last Name) *</label>
                  <input type="text" required placeholder="LAST NAME" value={formData.studentLastName} onChange={(e) => setFormData({...formData, studentLastName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>जन्म तिथि (Date of Birth) *</label>
                  <input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>लिंग (Gender) *</label>
                  <select required value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="">चुनें (Select)</option>
                    <option value="Male">लड़का (Boy)</option>
                    <option value="Female">लड़की (Girl)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>प्रवेश के लिए कक्षा (Class Seeking Admission) *</label>
                  <select required value={formData.admissionClass} onChange={(e) => setFormData({...formData, admissionClass: e.target.value})}>
                    <option value="">कक्षा चुनें (Select Class)</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>श्रेणी (Category) *</label>
                  <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    <option value="">श्रेणी चुनें (Select Category)</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>धर्म (Religion) *</label>
                  <input type="text" placeholder="Ex: HINDUISM / ISLAM" value={formData.religion} onChange={(e) => setFormData({...formData, religion: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>रक्त समूह (Blood Group)</label>
                  <select value={formData.bloodGroup} onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}>
                    <option value="">चुनें (Select)</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
              <div className="form-nav">
                <button type="button" className="btn btn-primary" onClick={nextStep}>अगला: परिवार का विवरण (Next: Family Details) →</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>👨‍👩‍👧 Section 2: माता-पिता / अभिभावक की जानकारी (Parent / Guardian Info)</h3>
                <div className="form-divider"></div>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>पिता का नाम (Father's Name) *</label>
                  <input type="text" required value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>पिता का व्यवसाय (Father's Occupation) *</label>
                  <input type="text" required value={formData.fatherOcc} onChange={(e) => setFormData({...formData, fatherOcc: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>पिता का मोबाइल (Father's Mobile) *</label>
                  <input type="tel" required value={formData.fatherMobile} onChange={(e) => setFormData({...formData, fatherMobile: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>माता का नाम (Mother's Name) *</label>
                  <input type="text" required value={formData.motherName} onChange={(e) => setFormData({...formData, motherName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>माता का मोबाइल (Mother's Mobile)</label>
                  <input type="tel" value={formData.motherMobile} onChange={(e) => setFormData({...formData, motherMobile: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>वार्षिक पारिवारिक आय (Annual Family Income)</label>
                  <input type="text" value={formData.fatherIncome} onChange={(e) => setFormData({...formData, fatherIncome: e.target.value})} />
                </div>
              </div>
              <div className="form-nav">
                <button type="button" className="btn" onClick={prevStep}>← पीछे (Back)</button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>अगला: पता विवरण (Next: Address Details) →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>🏠 Section 3: संपर्क और पता (Contact & Address)</h3>
                <div className="form-divider"></div>
              </div>
              <div className="form-grid">
                <div className="form-group full">
                  <label>आवासीय पता (Residential Address) *</label>
                  <textarea rows="3" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value.toUpperCase()})}></textarea>
                </div>
                <div className="form-group">
                  <label>शहर (City) *</label>
                  <input type="text" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>पिन कोड (PIN Code) *</label>
                  <input type="text" required value={formData.pin} onChange={(e) => setFormData({...formData, pin: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>ईमेल (Email Address)</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>व्हाट्सएप नंबर (WhatsApp Number) *</label>
                  <input type="tel" required value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
                </div>
              </div>
                <div className="form-group full declaration-group">
                  <div className="declaration-item">
                    <input 
                      type="checkbox" 
                      required 
                      id="decl1"
                      checked={formData.declaration1}
                      onChange={(e) => setFormData({...formData, declaration1: e.target.checked})}
                    />
                    <label htmlFor="decl1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                      मैं घोषणा करता/करती हूँ कि दी गई जन्म तिथि सही है और भविष्य में इसे बदलने का अनुरोध नहीं करूँगा/करूँगी।<br/>
                      (I hereby declare that the date of birth given above is correct and I shall not ask for its alteration at any time in future.) *
                    </label>
                  </div>
                  <div className="declaration-item" style={{ marginTop: '10px' }}>
                    <input 
                      type="checkbox" 
                      required 
                      id="decl2"
                      checked={formData.declaration2}
                      onChange={(e) => setFormData({...formData, declaration2: e.target.checked})}
                    />
                    <label htmlFor="decl2" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                      मैं प्रवेश या निष्कासन के संबंध में प्रबंधन के निर्णय को अंतिम मानता/मानती हूँ।<br/>
                      (I also accept the Management’s decision regarding admission or dismissal as final.) *
                    </label>
                  </div>
                </div>

                <div className="form-group full captcha-container">
                  <div className="captcha-box">
                    <div className="captcha-left">
                      <input 
                        type="checkbox" 
                        required 
                        id="not-robot"
                        checked={formData.isRobotChallenged}
                        onChange={(e) => setFormData({...formData, isRobotChallenged: e.target.checked})}
                      />
                      <label htmlFor="not-robot">मैं रोबोट नहीं हूँ (I'm not a robot)</label>
                    </div>
                    <div className="captcha-right">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                      <span>reCAPTCHA</span>
                      <small>Privacy - Terms</small>
                    </div>
                  </div>
                </div>

              <div className="form-nav">
                <button type="button" className="btn" onClick={prevStep} disabled={loading}>← पीछे (Back)</button>
                <button type="submit" className="btn btn-primary submit-admission" disabled={loading}>
                  {loading ? "Processing..." : "🚀 आवेदन जमा करें (Finalize & Submit)"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default AdmissionForm;
