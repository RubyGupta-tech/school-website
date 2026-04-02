import React from 'react';

const Founder = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Our Director</h1>
        <p className="subtitle" style={{ color: '#8B0000', fontWeight: '600' }}>The Visionary Behind Kid's Campus Zone School</p>
      </div>

      <div className="card" style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '50px', padding: '50px', textAlign: 'left' }}>
        <div className="founder-image-container">
          {/* Placeholder image until client provides actual picture */}
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80" 
            alt="Ghulam Sarwar" 
            style={{ width: '100%', borderRadius: '20px', border: '10px solid #f8f9fa' }} 
          />
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary-color)' }}>Mr. Ghulam Sarwar</h2>
            <p style={{ fontStyle: 'italic', color: '#666' }}>Director, Kid's Campus Zone School</p>
          </div>
        </div>

        <div className="founder-message" style={{ lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--primary-color)', fontWeight: '800', fontSize: '1.5rem', marginBottom: '20px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', display: 'inline-block' }}>
            कुशल मार्गदर्शन और प्रगति (Guidance & Progress)
          </h3>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            सरवर सर के कुशल मार्गदर्शन में स्कूल निरंतर प्रगति कर रहा है। उनका विजन बच्चों को गुणवत्तापूर्ण और आधुनिक शिक्षा के साथ-साथ एक मजबूत आधार प्रदान करना है।
          </p>
          
          <p>
            हमारा मानना है कि हर बच्चा खास है। हम एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करते हैं जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें।
          </p>

          <blockquote style={{ borderLeft: '5px solid var(--accent-color)', padding: '20px', background: '#fef3c7', margin: '30px 0', fontSize: '1.1rem' }}>
            "नए कदम, ऊँची उड़ान। जहाँ बचपन सँवरता है और भविष्य बनता है।"
          </blockquote>

          <p>
            खेल-खेल में शिक्षा, संस्कार और सुरक्षा।
            आपका विश्वास, हमारा प्रयास: बच्चों का सर्वांगीण विकास।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
