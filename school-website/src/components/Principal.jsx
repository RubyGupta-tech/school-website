import "./Principal.css";

function Principal() {
  return (
    <section className="principal-section">
      <div className="container">
        <div className="principal-content">
          <div className="principal-image">
            <img src="/school-logo.png" alt="Kid's Campus Zone School" style={{ objectFit: 'contain', background: '#fff8f0' }} />
            <div className="image-overlay"></div>
          </div>
          <div className="principal-text">
            <span className="subtitle">Our Leadership</span>
            <h2>Message from Our Leaders</h2>
            <div className="divider"></div>
            <p>
              "हमारा मानना है कि हर बच्चा खास है। हम एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करते हैं
              जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें।"
            </p>
            <p className="principal-name">Ghulam Sarwar</p>
            <p className="principal-title">Director, Kid's Campus Zone School</p>
            <hr style={{ margin: '1rem 0', borderColor: 'rgba(0,0,0,0.1)' }} />
            <p className="principal-name">Zubeda Khatoon</p>
            <p className="principal-title">Principal, Kid's Campus Zone School</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;
