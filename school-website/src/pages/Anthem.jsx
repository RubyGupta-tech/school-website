import React from 'react';

const Anthem = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>हमारा गान | School Anthem</h1>
        <p className="subtitle" style={{ color: '#8B0000', fontWeight: '600' }}>The Spirit of Kid's Campus Zone School</p>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px', background: '#fffdf5', border: '2px solid #eee' }}>
        <div style={{ fontSize: '3rem', marginBottom: '30px', textAlign: 'center' }}>🎶</div>
        
        <div className="anthem-lyrics" style={{ fontSize: '1.5rem', lineHeight: '2.2', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>
          <p style={{ marginBottom: '20px' }}>
            नए कदम, ऊँची उड़ान।<br/>
            जहाँ बचपन सँवरता है और भविष्य बनता है।
          </p>
          
          <p style={{ color: 'var(--primary-color)', background: '#f0f4f8', padding: '20px', borderRadius: '15px', margin: '30px 0' }}>
            खेल-खेल में शिक्षा, संस्कार और सुरक्षा।<br/>
            आपका विश्वास, हमारा प्रयास: बच्चों का सर्वांगीण विकास।
          </p>

          <p>
            सीखने का आनंद, बढ़ने का उत्साह।
          </p>
        </div>
        
        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #ddd', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '1rem', fontStyle: 'italic' }}>— Kid's Campus Zone School</p>
        </div>
      </div>
    </div>
  );
};

export default Anthem;
