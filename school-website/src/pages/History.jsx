import React from 'react';

const History = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>हमारा इतिहास (Our History)</h1>
        <p className="subtitle">एक समृद्ध शुरुआत 2019 से (A Legacy Since 2019)</p>
      </div>
      
      <div className="content-card card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center' }} className="history-grid">
          <div>
            <h3>शुरुआत (The Beginning)</h3>
            <p><strong>Kid's Campus Zone School</strong> की स्थापना 2019 में हज़ारीबाग के ढेंगुरा में की गई थी। हमारे निदेशक (Director), <strong>गुलाम सरवर (Ghulam Sarwar)</strong> जी के कुशल मार्गदर्शन में, यह स्कूल बच्चों को एक सुरक्षित और गतिविधि-आधारित (activity-based) शिक्षा प्रदान करने के दृष्टिकोण से शुरू हुआ था।</p>
            <p>Founded in 2019, Kid's Campus Zone School began with a visionary dream to provide excellent, modern, and playful education in Dhengura, Hazaribag. From a modest start, we have grown into a nurturing institution known for our focus on primary education and character development.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="School Education" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h3>विकास और यात्रा (Evolution and Growth)</h3>
          <p>पिछले कुछ वर्षों में, हमने अपनी सुविधाओं का विस्तार किया है। बच्चों के लिए स्मार्ट लर्निंग (Smart Learning), प्ले एरिया (Play Area), और सुरक्षित परिसर का निर्माण कर हमने शिक्षा के उच्च मानक को बनाए रखा है। हमारे स्कूल का उद्देश्य हर बच्चे को व्यक्तिगत ध्यान और सही मार्गदर्शन देना है।</p>
          <div className="timeline" style={{ marginTop: '30px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '30px' }}>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>2019</h4>
              <p>स्कूल की स्थापना - गुलाम सरवर (Ghulam Sarwar) जी द्वारा।<br/><span style={{fontSize:'0.9rem', color:'#666'}}>Foundation stone laid by Director Ghulam Sarwar.</span></p>
            </div>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>2021</h4>
              <p>स्मार्ट क्लास और खेल-कूद सुविधाओं का विस्तार।<br/><span style={{fontSize:'0.9rem', color:'#666'}}>Expansion of Smart Classes and play-based learning facilities.</span></p>
            </div>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>2023</h4>
              <p>नर्सरी से प्राइमरी तक उन्नत शिक्षा प्रणाली का क्रियान्वयन।<br/><span style={{fontSize:'0.9rem', color:'#666'}}>Implementation of an advanced education system for Nursery to Primary levels.</span></p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'var(--primary-color)' }}>2025</h4>
              <p>बच्चों के समग्र विकास (Holistic Development) के लिए निरंतर प्रतिबद्धता।<br/><span style={{fontSize:'0.9rem', color:'#666'}}>Continued commitment to the holistic development of every child.</span></p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .history-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default History;
