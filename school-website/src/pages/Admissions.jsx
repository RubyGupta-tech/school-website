import AdmissionForm from "../components/AdmissionForm";

function Admissions() {
  const steps = [
    { title: "चरण 1: पूछताछ (Step 1: Inquiry)", desc: "ऑनलाइन पूछताछ फॉर्म जमा करें या स्कूल कार्यालय आएं। (Submit the online inquiry form or visit the school office.)", icon: "📝" },
    { title: "चरण 2: बातचीत (Step 2: Interaction)", desc: "बच्चे और माता-पिता के साथ एक संक्षिप्त बातचीत। (A brief interaction with the child and parents.)", icon: "🤝" },
    { title: "चरण 3: पंजीकरण (Step 3: Registration)", desc: "पंजीकरण फॉर्म खरीदें और जमा करें। (Purchase and submit the registration form.)", icon: "📄" },
    { title: "चरण 4: प्रवेश (Step 4: Admission)", desc: "दस्तावेज और फीस जमा करके प्रवेश पक्का करें। (Finalize admission by submitting documents and fees.)", icon: "🎓" }
  ];

  return (
    <div className="page-admissions container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="section-header">
        <span className="subtitle">हमारे समुदाय से जुड़ें (Join Our Community)</span>
        <h1>प्रवेश (Admissions) 2025-26</h1>
        <div className="divider" style={{ margin: '0 auto' }}></div>
      </div>
      
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
        हम उन सभी छात्रों का स्वागत करते हैं जो सीखने और बढ़ने के इच्छुक हैं। हमारी प्रवेश प्रक्रिया पारदर्शी है। <br/>
        <span style={{ fontSize: '0.9rem', color: '#666' }}>(We welcome students from all backgrounds who are eager to learn and grow. Our admissions process is transparent and designed to identify the unique potential in every child.)</span>
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
          अभी ऑनलाइन आवेदन करें (Apply Online Now)
        </a>
        <button className="btn" style={{ border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}>
          विवरणिका डाउनलोड करें (Download Prospectus - PDF)
        </button>
      </div>

      <div style={{ marginTop: '80px' }}>
        <AdmissionForm />
      </div>
    </div>
  );
}

export default Admissions;
