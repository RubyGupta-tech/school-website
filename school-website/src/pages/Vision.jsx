import React from 'react';

const Vision = () => {
  return (
    <div className="container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="page-header">
        <h1>हमारा उद्देश्य | Vision & Mission</h1>
        <p className="subtitle">Defining Our Purpose and Future</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Vision Header */}
        <div className="card" style={{ padding: '50px', borderTop: '8px solid #1ABC9C' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👁️</div>
          <h2>हमारा उद्देश्य <br/><span style={{fontSize: '1.2rem', color: '#777'}}>Our Vision</span></h2>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>
            "हमारा मानना है कि हर बच्चा खास है। हमारा लक्ष्य एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करना है 
             जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें।"
          </p>
        </div>

        {/* Mission Header */}
        <div className="card" style={{ padding: '50px', borderTop: '8px solid var(--accent-color)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
          <h2>हमारा मिशन <br/><span style={{fontSize: '1.2rem', color: '#777'}}>Our Mission</span></h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', textAlign: 'left' }}>
            Kid's Campus Zone School एक आधुनिक और बाल-केंद्रित (child-centered) शिक्षा प्रणाली प्रदान करने का प्रयास करता है:
          </p>
          <ul style={{ textAlign: 'left', marginTop: '20px', lineHeight: '2' }}>
            <li>Nursery से प्राथमिक कक्षाओं तक <strong>Activity-Based Learning</strong>.</li>
            <li>बच्चों के सर्वांगीण विकास (Overall Development) पर ध्यान।</li>
            <li>सुरक्षित, स्वच्छ और सकारात्मक (positive) माहौल सुनिश्चित करना।</li>
            <li>हर बच्चे की व्यक्तिगत प्रगति (personal progress) की निगरानी।</li>
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <div className="card" style={{ marginTop: '40px', background: 'var(--primary-color)', color: 'white', padding: '60px' }}>
        <h2 style={{ color: 'var(--secondary-color)' }}>हमारे मूल मूल्य <span style={{fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)'}}>| Core Values</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
          <div>
            <h3 style={{ color: 'var(--secondary-color)' }}>अनुशासन</h3>
            <p style={{ opacity: '0.8', fontStyle: 'italic', color: '#fff' }}>Discipline and focus in every action.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--secondary-color)' }}>आधुनिक शिक्षा</h3>
            <p style={{ opacity: '0.8', fontStyle: 'italic', color: '#fff' }}>Modern education strategies.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--secondary-color)' }}>नैतिक मूल्य</h3>
            <p style={{ opacity: '0.8', fontStyle: 'italic', color: '#fff' }}>Moral uprightness and empathy.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--secondary-color)' }}>सुरक्षा</h3>
            <p style={{ opacity: '0.8', fontStyle: 'italic', color: '#fff' }}>A secure and nurturing environment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
