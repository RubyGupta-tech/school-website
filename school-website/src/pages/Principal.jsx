import React from 'react';

const Principal = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>From The Principal's Desk</h1>
        <p className="subtitle">Leading with Heart and Mind</p>
      </div>

      <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '50px', padding: '50px', textAlign: 'left' }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
            alt="Principal" 
            style={{ width: '100%', borderRadius: '20px' }} 
          />
          <div style={{ marginTop: '25px' }}>
            <h2 style={{ margin: '0', color: 'var(--primary-color)' }}>Sr. Maria Joseph</h2>
            <p style={{ color: 'var(--accent-color)', fontWeight: '700' }}>M.A., M.Ed., Ph.D.</p>
            <p style={{ color: '#888' }}>Principal, Elite Academy</p>
          </div>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3>Welcome to the 2024-25 Academic Session</h3>
          <p>Dear Parents, Students, and Well-wishers,</p>
          <p>It is my distinct honor to welcome you to the digital home of Elite Academy. As we embark on another year of academic and personal discovery, I am reminded of the immense responsibility we hold in shaping the stewards of tomorrow.</p>
          
          <p>At Elite Academy, we don't just teach subjects; we nurture souls. Our focus remains on creating a safe, inclusive, and challenging environment where every student feels seen and heard. In the age of Rapid Technology, we ensure our students are 'Digital Citizens' who use tools with wisdom and empathy.</p>

          <p>Our commitment to holistic development means that while we celebrate our 100% board results, we take equal pride in our athletes, our artists, and our community volunteers. We believe that true education is what remains after one has forgotten what one has learned in school.</p>

          <p>I invite you to explore our website and learn more about the vibrant life at Elite Academy. Let us work together to make this year a journey of transformation.</p>

          <p style={{ marginTop: '30px' }}>
            Blessings,<br/>
            <b>Sr. Maria Joseph</b><br/>
            Principal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principal;
