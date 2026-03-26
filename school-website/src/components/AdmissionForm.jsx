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
      alert("Server is offline. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="admission-success card">
        <div className="success-icon">🎉</div>
        <h2>Registration Successful!</h2>
        <p>Your application ID is <b>EAH-2025-{(Math.random()*10000).toFixed(0)}</b>.</p>
        <p>Please check your WhatsApp (<b>{formData.whatsapp}</b>) for the acknowledgement slip and further instructions.</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Finish</button>
      </div>
    );
  }

  return (
    <section className="admission-form-section" id="apply-form">
      <div className="form-card card">
        <div className="form-header">
          <div className="form-header-top">
            <div className="step-indicator">Step {step} of 3</div>
            <div className="header-links">
              <Link to="/instructions" className="instructions-link">📜 Instructions</Link>
              <Link to="/login" className="login-link">🔐 Login</Link>
            </div>
          </div>
          <h2>New Registration Form</h2>
          
          <div className="registration-note">
            <b>Note:</b> Before you fill in this Registration Form, kindly read the Instructions on Top-Right. 
            All the entries must be in <b>CAPITAL LETTERS</b>. 
            DOB once entered in this form will not be editable later.
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>👶 Section 1: Student Information</h3>
                <div className="form-divider"></div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name (Capital) *</label>
                  <input type="text" required placeholder="FIRST NAME" value={formData.studentFirstName} onChange={(e) => setFormData({...formData, studentFirstName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Last Name (Capital) *</label>
                  <input type="text" required placeholder="LAST NAME" value={formData.studentLastName} onChange={(e) => setFormData({...formData, studentLastName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Gender *</label>
                  <select required value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="">Select</option>
                    <option value="Male">Boy</option>
                    <option value="Female">Girl</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Class Seeking Admission *</label>
                  <select required value={formData.admissionClass} onChange={(e) => setFormData({...formData, admissionClass: e.target.value})}>
                    <option value="">Select Class</option>
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
                  <label>Category under which you are applying : (you may apply under ONE Category only) *</label>
                  <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Religion *</label>
                  <input type="text" placeholder="Ex: CHRISTIANITY / HINDUISM" value={formData.religion} onChange={(e) => setFormData({...formData, religion: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Blood Group</label>
                  <select value={formData.bloodGroup} onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}>
                    <option value="">Select</option>
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
                <button type="button" className="btn btn-primary" onClick={nextStep}>Next: Family Details →</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>👨‍👩‍👧 Section 2: Parent / Guardian Information</h3>
                <div className="form-divider"></div>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Father's Name (Capital) *</label>
                  <input type="text" required value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Father's Occupation *</label>
                  <input type="text" required value={formData.fatherOcc} onChange={(e) => setFormData({...formData, fatherOcc: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Father's Mobile (WhatsApp) *</label>
                  <input type="tel" required value={formData.fatherMobile} onChange={(e) => setFormData({...formData, fatherMobile: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Mother's Name (Capital) *</label>
                  <input type="text" required value={formData.motherName} onChange={(e) => setFormData({...formData, motherName: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>Mother's Mobile</label>
                  <input type="tel" value={formData.motherMobile} onChange={(e) => setFormData({...formData, motherMobile: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Annual Family Income</label>
                  <input type="text" value={formData.fatherIncome} onChange={(e) => setFormData({...formData, fatherIncome: e.target.value})} />
                </div>
              </div>
              <div className="form-nav">
                <button type="button" className="btn" onClick={prevStep}>← Back</button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>Next: Address Details →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step-content animation-fade-in">
              <div className="form-group full">
                <h3>🏠 Section 3: Contact & Address</h3>
                <div className="form-divider"></div>
              </div>
              <div className="form-grid">
                <div className="form-group full">
                  <label>Residential Address (Capital Letters) *</label>
                  <textarea rows="3" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value.toUpperCase()})}></textarea>
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value.toUpperCase()})} />
                </div>
                <div className="form-group">
                  <label>PIN Code *</label>
                  <input type="text" required value={formData.pin} onChange={(e) => setFormData({...formData, pin: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>WhatsApp Number (Primary) *</label>
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
                    <label htmlFor="decl1">I hereby declare that the date of birth given above is correct and I shall not ask for its alteration at any time in future. *</label>
                  </div>
                  <div className="declaration-item">
                    <input 
                      type="checkbox" 
                      required 
                      id="decl2"
                      checked={formData.declaration2}
                      onChange={(e) => setFormData({...formData, declaration2: e.target.checked})}
                    />
                    <label htmlFor="decl2">I also accept the Management’s decision regarding admission or dismissal as final. *</label>
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
                      <label htmlFor="not-robot">I'm not a robot</label>
                    </div>
                    <div className="captcha-right">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                      <span>reCAPTCHA</span>
                      <small>Privacy - Terms</small>
                    </div>
                  </div>
                </div>

              <div className="form-nav">
                <button type="button" className="btn" onClick={prevStep} disabled={loading}>← Back</button>
                <button type="submit" className="btn btn-primary submit-admission" disabled={loading}>
                  {loading ? "Processing..." : "🚀 Finalize & Submit Application"}
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
