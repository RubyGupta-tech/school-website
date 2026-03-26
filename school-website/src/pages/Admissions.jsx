import AdmissionForm from "../components/AdmissionForm";

function Admissions() {
  const steps = [
    { title: "Step 1: Inquiry", desc: "Submit the online inquiry form or visit the school office.", icon: "📝" },
    { title: "Step 2: Interaction", desc: "A brief interaction with the child and parents.", icon: "🤝" },
    { title: "Step 3: Registration", desc: "Purchase and submit the registration form.", icon: "📄" },
    { title: "Step 4: Admission", desc: "Finalize admission by submitting documents and fees.", icon: "🎓" }
  ];

  return (
    <div className="page-admissions container section" style={{ marginTop: '100px' }}>
      <div className="section-header">
        <span className="subtitle">Join Our Community</span>
        <h1>Admissions 2025-26</h1>
        <div className="divider" style={{ margin: '0 auto' }}></div>
      </div>
      
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
        We welcome students from all backgrounds who are eager to learn and grow. Our admissions process is transparent and designed to identify the unique potential in every child.
      </p>

      <div className="admission-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card card">
            <span className="step-icon">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="admission-actions" style={{ textAlign: 'center', marginTop: '50px' }}>
        <a href="#apply-form" className="btn btn-primary" style={{ marginRight: '1rem' }}>
          Apply Online Now
        </a>
        <button className="btn" style={{ border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}>
          Download Prospectus (PDF)
        </button>
      </div>

      <div style={{ marginTop: '80px' }}>
        <AdmissionForm />
      </div>
    </div>
  );
}

export default Admissions;
