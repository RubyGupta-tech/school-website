import React from 'react';

const Principal = () => {
  return (
    <div className="container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="page-header">
        <h1>From The Principal's Desk</h1>
        <p className="subtitle" style={{ color: '#8B0000', fontWeight: '600' }}>Leading with Heart and Mind</p>
      </div>

      <div className="card" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '50px', padding: '50px', textAlign: 'left' }}>
        <div>
          {/* Placeholder image until client provides actual picture */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
            alt="Principal Zubeda Khatoon" 
            style={{ width: '100%', borderRadius: '20px', border: '8px solid #f8f9fa' }} 
          />
          <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <h2 style={{ margin: '0', color: 'var(--primary-color)' }}>Mrs. Zubeda Khatoon</h2>
            <p style={{ color: 'var(--accent-color)', fontWeight: '700' }}>Principal</p>
            <p style={{ color: '#888' }}>Kid's Campus Zone School</p>
          </div>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--primary-color)', fontWeight: '800', fontSize: '1.5rem', marginBottom: '20px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px', display: 'inline-block' }}>
            शैक्षिक स्तर और अनुशासन (Education & Discipline)
          </h3>
          
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            प्रिंसिपल जुबेदा खातून जी के नेतृत्व में स्कूल का शैक्षिक स्तर और अनुशासन बेहद सराहनीय है। बच्चों के सर्वांगीण विकास (Overall Development) पर उनका विशेष ध्यान रहता है।
          </p>

          <p>
            हम एक ऐसा सुरक्षित और मनोरंजक वातावरण प्रदान करते हैं जहाँ बच्चे खेल-खेल में आधुनिक शिक्षा, अनुशासन और नैतिक मूल्यों को सीख सकें। हमारा लक्ष्य हर बच्चे को एक मजबूत आधार प्रदान करना है जिससे वह सफलता की ऊंचाइयों को छू सके।
          </p>

          <blockquote style={{ borderLeft: '5px solid var(--accent-color)', padding: '20px', background: '#fef3c7', margin: '30px 0', fontSize: '1.1rem' }}>
            "बच्चों के सर्वांगीण विकास के लिए शिक्षा, संस्कार और सुरक्षा सबसे महत्वपूर्ण हैं।"
          </blockquote>

          <p>
            हम अपने सभी अभिभावकों का इस डिजिटल मंच पर स्वागत करते हैं। आइए मिलकर बच्चों के भविष्य को संवारें और उन्हें एक नई दिशा दें।
          </p>

          <p style={{ marginTop: '30px' }}>
            धन्यवाद,<br/>
            <b>Zubeda Khatoon (जुबेदा खातून)</b><br/>
            Principal, Kid's Campus Zone School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principal;
